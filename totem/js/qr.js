(function (global) {
  function gfExp() {
    var exp = new Array(512);
    var log = new Array(256);
    var x = 1;
    for (var i = 0; i < 255; i++) {
      exp[i] = x;
      log[x] = i;
      x <<= 1;
      if (x & 0x100) x ^= 0x11d;
    }
    for (var i = 255; i < 512; i++) exp[i] = exp[i - 255];
    return { exp: exp, log: log };
  }

  var GF = gfExp();
  var GEN = {};

  function gfMul(a, b) {
    if (a === 0 || b === 0) return 0;
    return GF.exp[GF.log[a] + GF.log[b]];
  }

  function rsGen(n) {
    if (GEN[n]) return GEN[n];
    var g = [1];
    for (var i = 0; i < n; i++) {
      var ng = new Array(g.length + 1).fill(0);
      var alpha = GF.exp[i];
      for (var j = 0; j < g.length; j++) {
        ng[j] ^= g[j];
        ng[j + 1] ^= gfMul(g[j], alpha);
      }
      g = ng;
    }
    GEN[n] = g;
    return g;
  }

  function rsEncode(data, ecLen) {
    var gen = rsGen(ecLen);
    var res = data.concat(new Array(ecLen).fill(0));
    for (var i = 0; i < data.length; i++) {
      var coef = res[i];
      if (!coef) continue;
      for (var j = 0; j < gen.length; j++) res[i + j] ^= gfMul(gen[j], coef);
    }
    return res.slice(data.length);
  }

  var VERSIONS = {
    1: { size: 21, data: 16, ec: 10, blocks: [16], align: [] },
    2: { size: 25, data: 28, ec: 16, blocks: [28], align: [6, 18] },
    3: { size: 29, data: 44, ec: 26, blocks: [44], align: [6, 22] },
    4: { size: 33, data: 64, ec: 18, blocks: [32, 32], align: [6, 26] },
    5: { size: 37, data: 86, ec: 24, blocks: [43, 43], align: [6, 30] },
    6: { size: 41, data: 108, ec: 16, blocks: [27, 27, 27, 27], align: [6, 34] }
  };

  function utf8(text) {
    var out = [];
    var s = String(text || "");
    for (var i = 0; i < s.length; i++) {
      var c = s.charCodeAt(i);
      if (c < 0x80) out.push(c);
      else if (c < 0x800) out.push(0xc0 | (c >> 6), 0x80 | (c & 0x3f));
      else if (c >= 0xd800 && c <= 0xdbff && i + 1 < s.length) {
        var c2 = s.charCodeAt(++i);
        var u = 0x10000 + ((c & 0x3ff) << 10) + (c2 & 0x3ff);
        out.push(0xf0 | (u >> 18), 0x80 | ((u >> 12) & 0x3f), 0x80 | ((u >> 6) & 0x3f), 0x80 | (u & 0x3f));
      } else out.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 0x3f), 0x80 | (c & 0x3f));
    }
    return out;
  }

  function chooseVersion(byteLen) {
    var minBytes = Math.ceil((4 + 8 + byteLen * 8) / 8);
    for (var v = 1; v <= 6; v++) {
      if (VERSIONS[v].data >= minBytes) return v;
    }
    return 6;
  }

  function dataCodewords(bytes, spec) {
    var bits = [];
    function put(val, len) {
      for (var i = len - 1; i >= 0; i--) bits.push((val >>> i) & 1);
    }
    var payload = bytes;
    var maxBits = spec.data * 8;
    if (4 + 8 + payload.length * 8 > maxBits) payload = payload.slice(0, Math.floor((maxBits - 12) / 8));
    put(0b0100, 4);
    put(payload.length, 8);
    for (var i = 0; i < payload.length; i++) put(payload[i], 8);
    var term = Math.min(4, maxBits - bits.length);
    for (var t = 0; t < term; t++) bits.push(0);
    while (bits.length % 8 !== 0) bits.push(0);
    var data = [];
    for (var i = 0; i < bits.length; i += 8) {
      var v = 0;
      for (var b = 0; b < 8; b++) v = (v << 1) | bits[i + b];
      data.push(v);
    }
    var pad = 0;
    while (data.length < spec.data) {
      data.push(pad % 2 === 0 ? 0xec : 0x11);
      pad++;
    }
    return data;
  }

  function interleave(data, spec) {
    var blocks = [];
    var offset = 0;
    for (var i = 0; i < spec.blocks.length; i++) {
      var len = spec.blocks[i];
      var block = data.slice(offset, offset + len);
      offset += len;
      blocks.push({ data: block, ec: rsEncode(block, spec.ec) });
    }
    var out = [];
    var maxData = 0;
    for (var i = 0; i < blocks.length; i++) maxData = Math.max(maxData, blocks[i].data.length);
    for (var i = 0; i < maxData; i++) {
      for (var b = 0; b < blocks.length; b++) {
        if (i < blocks[b].data.length) out.push(blocks[b].data[i]);
      }
    }
    for (var i = 0; i < spec.ec; i++) {
      for (var b = 0; b < blocks.length; b++) out.push(blocks[b].ec[i]);
    }
    return out;
  }

  function bitsFrom(words) {
    var bits = [];
    for (var i = 0; i < words.length; i++) {
      for (var b = 7; b >= 0; b--) bits.push((words[i] >>> b) & 1);
    }
    return bits;
  }

  function maskBit(mask, x, y) {
    if (mask === 0) return ((x + y) & 1) === 0;
    if (mask === 1) return (y & 1) === 0;
    if (mask === 2) return x % 3 === 0;
    if (mask === 3) return (x + y) % 3 === 0;
    if (mask === 4) return (Math.floor(y / 2) + Math.floor(x / 3)) % 2 === 0;
    if (mask === 5) return ((x * y) % 2) + ((x * y) % 3) === 0;
    if (mask === 6) return (((x * y) % 2) + ((x * y) % 3)) % 2 === 0;
    return (((x + y) % 2) + ((x * y) % 3)) % 2 === 0;
  }

  function formatBits(mask) {
    var rem = mask;
    for (var i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
    return ((mask << 10) | rem) ^ 0x5412;
  }

  function bitAt(bits, i) {
    return ((bits >>> i) & 1) === 1;
  }

  function drawFormat(setFunc, size, mask) {
    var bits = formatBits(mask);
    for (var i = 0; i <= 5; i++) setFunc(8, i, bitAt(bits, i));
    setFunc(8, 7, bitAt(bits, 6));
    setFunc(8, 8, bitAt(bits, 7));
    setFunc(7, 8, bitAt(bits, 8));
    for (var i = 9; i < 15; i++) setFunc(14 - i, 8, bitAt(bits, i));
    for (var i = 0; i < 8; i++) setFunc(size - 1 - i, 8, bitAt(bits, i));
    for (var i = 8; i < 15; i++) setFunc(8, size - 15 + i, bitAt(bits, i));
    setFunc(8, size - 8, true);
  }

  function penalty(modules) {
    var size = modules.length;
    var result = 0;
    function countPatterns(runHistory) {
      var n = runHistory[1];
      var core = n > 0 && runHistory[2] === n && runHistory[3] === n * 3 && runHistory[4] === n && runHistory[5] === n;
      var a = core && runHistory[0] >= n * 4 && runHistory[6] >= n ? 1 : 0;
      var b = core && runHistory[6] >= n * 4 && runHistory[0] >= n ? 1 : 0;
      return a + b;
    }
    function addHistory(runLen, runHistory) {
      if (runHistory[0] === 0) runLen += size;
      runHistory.pop();
      runHistory.unshift(runLen);
    }
    function terminate(color, runLen, runHistory) {
      if (color) {
        addHistory(runLen, runHistory);
        runLen = 0;
      }
      addHistory(runLen + size, runHistory);
      return countPatterns(runHistory);
    }
    function scan(read) {
      for (var i = 0; i < size; i++) {
        var color = false;
        var run = 0;
        var history = [0, 0, 0, 0, 0, 0, 0];
        for (var j = 0; j < size; j++) {
          if (read(i, j) === color) {
            run++;
            if (run === 5) result += 3;
            else if (run > 5) result++;
          } else {
            addHistory(run, history);
            if (!color) result += countPatterns(history) * 40;
            color = read(i, j);
            run = 1;
          }
        }
        result += terminate(color, run, history) * 40;
      }
    }
    scan(function (y, x) { return modules[y][x]; });
    scan(function (x, y) { return modules[y][x]; });
    for (var y = 0; y < size - 1; y++) {
      for (var x = 0; x < size - 1; x++) {
        var c = modules[y][x];
        if (c === modules[y][x + 1] && c === modules[y + 1][x] && c === modules[y + 1][x + 1]) result += 3;
      }
    }
    var dark = 0;
    for (var y = 0; y < size; y++) {
      for (var x = 0; x < size; x++) if (modules[y][x]) dark++;
    }
    var total = size * size;
    var k = Math.floor((Math.abs(dark * 20 - total * 10) + total - 1) / total) - 1;
    result += k * 10;
    return result;
  }

  function matrix(text) {
    var bytes = utf8(text);
    var version = chooseVersion(bytes.length);
    var spec = VERSIONS[version];
    var size = spec.size;
    var modules = Array.from({ length: size }, function () { return Array(size).fill(false); });
    var isFunc = Array.from({ length: size }, function () { return Array(size).fill(false); });

    function setFunc(x, y, v) {
      modules[y][x] = !!v;
      isFunc[y][x] = true;
    }

    function finder(ox, oy) {
      for (var dy = -1; dy <= 7; dy++) {
        for (var dx = -1; dx <= 7; dx++) {
          var x = ox + dx;
          var y = oy + dy;
          if (x < 0 || y < 0 || x >= size || y >= size) continue;
          var on = dx >= 0 && dx <= 6 && dy >= 0 && dy <= 6 &&
            (dx === 0 || dx === 6 || dy === 0 || dy === 6 || (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4));
          setFunc(x, y, on);
        }
      }
    }

    finder(0, 0);
    finder(size - 7, 0);
    finder(0, size - 7);

    for (var i = 8; i < size - 8; i++) {
      setFunc(i, 6, i % 2 === 0);
      setFunc(6, i, i % 2 === 0);
    }

    var pos = spec.align;
    for (var yi = 0; yi < pos.length; yi++) {
      for (var xi = 0; xi < pos.length; xi++) {
        var cx = pos[xi];
        var cy = pos[yi];
        if (isFunc[cy][cx]) continue;
        for (var dy = -2; dy <= 2; dy++) {
          for (var dx = -2; dx <= 2; dx++) {
            setFunc(cx + dx, cy + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
          }
        }
      }
    }

    drawFormat(setFunc, size, 0);

    var words = interleave(dataCodewords(bytes, spec), spec);
    var bits = bitsFrom(words);
    var remCount = version === 1 ? 0 : 7;
    for (var r = 0; r < remCount; r++) bits.push(0);

    var bit = 0;
    var upward = true;
    for (var col = size - 1; col > 0; col -= 2) {
      if (col === 6) col--;
      for (var row = 0; row < size; row++) {
        var y = upward ? size - 1 - row : row;
        for (var d = 0; d < 2; d++) {
          var x = col - d;
          if (isFunc[y][x]) continue;
          modules[y][x] = bit < bits.length ? bits[bit] === 1 : false;
          bit++;
        }
      }
      upward = !upward;
    }

    var best = null;
    var bestScore = 1e15;
    for (var mask = 0; mask < 8; mask++) {
      var copy = modules.map(function (row) { return row.slice(); });
      for (var y = 0; y < size; y++) {
        for (var x = 0; x < size; x++) {
          if (!isFunc[y][x] && maskBit(mask, x, y)) copy[y][x] = !copy[y][x];
        }
      }
      drawFormat(function (x, y, v) { copy[y][x] = !!v; }, size, mask);
      var score = penalty(copy);
      if (score < bestScore) {
        bestScore = score;
        best = copy;
      }
    }
    return best;
  }

  function render(canvas, text, opts) {
    opts = opts || {};
    var grid = matrix(text);
    var n = grid.length;
    var quiet = 6;
    var span = n + quiet * 2;
    var dpr = Math.max(1, Math.min(3, global.devicePixelRatio || 1));
    var moduleCss = opts.module || 7;
    var cell = Math.max(4, Math.round(moduleCss * dpr));
    var px = cell * span;
    var cssPx = px / dpr;
    var ctx = canvas.getContext("2d");
    canvas.width = px;
    canvas.height = px;
    canvas.style.imageRendering = "pixelated";
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, px, px);
    ctx.fillStyle = "#000000";
    for (var y = 0; y < n; y++) {
      for (var x = 0; x < n; x++) {
        if (!grid[y][x]) continue;
        ctx.fillRect((x + quiet) * cell, (y + quiet) * cell, cell, cell);
      }
    }
  }

  function renderInto(el, text, opts) {
    if (!el) return;
    if (el.tagName === "CANVAS") {
      render(el, text, opts);
      return;
    }
    var canvas = document.createElement("canvas");
    render(canvas, text, opts);
    el.innerHTML = "";
    el.appendChild(canvas);
  }

  global.TotemQR = { render: render, renderInto: renderInto, matrix: matrix };
})(typeof window !== "undefined" ? window : global);
