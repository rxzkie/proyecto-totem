(function () {
  var ICONS = {
    descubre: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16C0 7.16344 7.16344 0 16 0H24C32.8366 0 40 7.16344 40 16V24C40 32.8366 32.8366 40 24 40H16C7.16344 40 0 32.8366 0 24V16Z" fill="#3B5FC0" fill-opacity="0.1"/><g clip-path="url(#clip_ico_star)"><path d="M19.6031 11.9127C19.6396 11.839 19.696 11.7768 19.7659 11.7334C19.8359 11.69 19.9166 11.667 19.9989 11.667C20.0812 11.667 20.1619 11.69 20.2319 11.7334C20.3018 11.7768 20.3582 11.839 20.3947 11.9127L22.3197 15.8119C22.4465 16.0685 22.6337 16.2906 22.8653 16.4589C23.0968 16.6273 23.3657 16.737 23.6489 16.7786L27.9539 17.4086C28.0355 17.4204 28.1121 17.4548 28.1751 17.5079C28.2382 17.561 28.2851 17.6307 28.3106 17.7091C28.3361 17.7875 28.3391 17.8714 28.3194 17.9514C28.2996 18.0315 28.2579 18.1044 28.1989 18.1619L25.0856 21.1936C24.8802 21.3937 24.7266 21.6406 24.6379 21.9133C24.5492 22.1859 24.5281 22.476 24.5764 22.7586L25.3114 27.0419C25.3258 27.1234 25.317 27.2074 25.286 27.2841C25.255 27.3609 25.203 27.4274 25.136 27.4761C25.069 27.5247 24.9897 27.5536 24.9071 27.5593C24.8245 27.5651 24.742 27.5475 24.6689 27.5086L20.8206 25.4852C20.567 25.3521 20.2849 25.2825 19.9985 25.2825C19.7121 25.2825 19.43 25.3521 19.1764 25.4852L15.3289 27.5086C15.2558 27.5472 15.1734 27.5646 15.0909 27.5588C15.0085 27.5529 14.9293 27.524 14.8625 27.4754C14.7956 27.4268 14.7438 27.3604 14.7128 27.2838C14.6818 27.2071 14.6729 27.1233 14.6872 27.0419L15.4214 22.7594C15.4699 22.4767 15.4489 22.1864 15.3602 21.9136C15.2715 21.6408 15.1177 21.3937 14.9122 21.1936L11.7989 18.1627C11.7394 18.1053 11.6972 18.0322 11.6772 17.952C11.6572 17.8717 11.6601 17.7874 11.6856 17.7087C11.7112 17.63 11.7583 17.5601 11.8216 17.5069C11.885 17.4537 11.962 17.4193 12.0439 17.4077L16.3481 16.7786C16.6316 16.7373 16.9009 16.6278 17.1327 16.4594C17.3645 16.291 17.552 16.0688 17.6789 15.8119L19.6031 11.9127Z" stroke="#3B5FC0" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip_ico_star"><rect width="20" height="20" fill="white" transform="translate(10 10)"/></clipPath></defs></svg>',
    imperdibles: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16C0 7.16344 7.16344 0 16 0H24C32.8366 0 40 7.16344 40 16V24C40 32.8366 32.8366 40 24 40H16C7.16344 40 0 32.8366 0 24V16Z" fill="#3B5FC0" fill-opacity="0.1"/><path d="M25.8333 19.1667C25.8333 22.8486 22.8486 25.8333 19.1667 25.8333C15.4848 25.8333 12.5 22.8486 12.5 19.1667C12.5 15.4848 15.4848 12.5 19.1667 12.5C22.8486 12.5 25.8333 15.4848 25.8333 19.1667Z" stroke="#3B5FC0" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M27.5013 27.4998L23.918 23.9165" stroke="#3B5FC0" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    mapa: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16C0 7.16344 7.16344 0 16 0H24C32.8366 0 40 7.16344 40 16V24C40 32.8366 32.8366 40 24 40H16C7.16344 40 0 32.8366 0 24V16Z" fill="#3B5FC0" fill-opacity="0.1"/><path d="M23.5315 16.4668L22.0282 20.976C21.9464 21.2214 21.8085 21.4445 21.6255 21.6275C21.4426 21.8105 21.2195 21.9483 20.974 22.0301L16.4648 23.5335L17.9682 19.0243C18.05 18.7788 18.1879 18.5557 18.3708 18.3728C18.5538 18.1898 18.7769 18.0519 19.0223 17.9701L23.5315 16.4668Z" stroke="#3B5FC0" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M28.3307 19.9998C28.3307 24.6022 24.5998 28.3332 19.9974 28.3332C15.395 28.3332 11.6641 24.6022 11.6641 19.9998C11.6641 15.3975 15.395 11.6665 19.9974 11.6665C24.5998 11.6665 28.3307 15.3975 28.3307 19.9998Z" stroke="#3B5FC0" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    favoritos: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16C0 7.16344 7.16344 0 16 0H24C32.8366 0 40 7.16344 40 16V24C40 32.8366 32.8366 40 24 40H16C7.16344 40 0 32.8366 0 24V16Z" fill="#3B5FC0" fill-opacity="0.1"/><g clip-path="url(#clip_ico_heart)"><path d="M25.8346 21.6667C27.0763 20.45 28.3346 18.9917 28.3346 17.0833C28.3346 15.8678 27.8517 14.702 26.9922 13.8424C26.1327 12.9829 24.9669 12.5 23.7513 12.5C22.2846 12.5 21.2513 12.9167 20.0013 14.1667C18.7513 12.9167 17.718 12.5 16.2513 12.5C15.0357 12.5 13.8699 12.9829 13.0104 13.8424C12.1509 14.702 11.668 15.8678 11.668 17.0833C11.668 19 12.918 20.4583 14.168 21.6667L20.0013 27.5L25.8346 21.6667Z" stroke="#3B5FC0" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip_ico_heart"><rect width="20" height="20" fill="white" transform="translate(10 10)"/></clipPath></defs></svg>',
    rutas: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16C0 7.16344 7.16344 0 16 0H24C32.8366 0 40 7.16344 40 16V24C40 32.8366 32.8366 40 24 40H16C7.16344 40 0 32.8366 0 24V16Z" fill="#3B5FC0" fill-opacity="0.1"/><path d="M20 15.8335V27.5002" stroke="#3B5FC0" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5013 25C12.2803 25 12.0683 24.9122 11.912 24.7559C11.7558 24.5996 11.668 24.3877 11.668 24.1667V13.3333C11.668 13.1123 11.7558 12.9004 11.912 12.7441C12.0683 12.5878 12.2803 12.5 12.5013 12.5H16.668C17.552 12.5 18.3999 12.8512 19.025 13.4763C19.6501 14.1014 20.0013 14.9493 20.0013 15.8333C20.0013 14.9493 20.3525 14.1014 20.9776 13.4763C21.6027 12.8512 22.4506 12.5 23.3346 12.5H27.5013C27.7223 12.5 27.9343 12.5878 28.0906 12.7441C28.2468 12.9004 28.3346 13.1123 28.3346 13.3333V24.1667C28.3346 24.3877 28.2468 24.5996 28.0906 24.7559C27.9343 24.9122 27.7223 25 27.5013 25H22.5013C21.8383 25 21.2024 25.2634 20.7335 25.7322C20.2647 26.2011 20.0013 26.837 20.0013 27.5C20.0013 26.837 19.7379 26.2011 19.2691 25.7322C18.8002 25.2634 18.1643 25 17.5013 25H12.5013Z" stroke="#3B5FC0" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    ia: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16C0 7.16344 7.16344 0 16 0H24C32.8366 0 40 7.16344 40 16V24C40 32.8366 32.8366 40 24 40H16C7.16344 40 0 32.8366 0 24V16Z" fill="#3B5FC0" fill-opacity="0.1"/><path d="M26.6693 18.3332C26.6693 22.494 22.0534 26.8273 20.5034 28.1657C20.359 28.2743 20.1833 28.333 20.0026 28.333C19.8219 28.333 19.6462 28.2743 19.5018 28.1657C17.9518 26.8273 13.3359 22.494 13.3359 18.3332C13.3359 16.5651 14.0383 14.8694 15.2886 13.6191C16.5388 12.3689 18.2345 11.6665 20.0026 11.6665C21.7707 11.6665 23.4664 12.3689 24.7166 13.6191C25.9669 14.8694 26.6693 16.5651 26.6693 18.3332Z" stroke="#3B5FC0" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M22.5 18.3335C22.5 19.7142 21.3807 20.8335 20 20.8335C18.6193 20.8335 17.5 19.7142 17.5 18.3335C17.5 16.9528 18.6193 15.8335 20 15.8335C21.3807 15.8335 22.5 16.9528 22.5 18.3335Z" stroke="#3B5FC0" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  var state = {
    data: null,
    loopIndex: 0,
    loopTimer: null,
    stepIndex: 0,
    stepTimer: null,
    route: { name: "loop", sectionId: null }
  };

  var els = {};
  var idle;
  var router;

  function $(sel) {
    return document.querySelector(sel);
  }

  function setMode(mode) {
    els.stage.classList.remove("mode-home", "mode-section");
    els.stage.classList.add(mode === "home" ? "mode-home" : "mode-section");
  }

  function showScreen(name) {
    document.querySelectorAll(".screen").forEach(function (node) {
      node.classList.toggle("is-active", node.dataset.screen === name);
    });
  }

  function stopLoop() {
    if (state.loopTimer) {
      clearTimeout(state.loopTimer);
      state.loopTimer = null;
    }
  }

  function stopSteps() {
    if (state.stepTimer) {
      clearTimeout(state.stepTimer);
      clearInterval(state.stepTimer);
      state.stepTimer = null;
    }
  }

  function destroyMap() {
    if (state.placeMarkers) {
      state.placeMarkers.forEach(function (m) {
        if (m && m.setMap) m.setMap(null);
      });
    }
    if (state.userMarker && state.userMarker.setMap) state.userMarker.setMap(null);
    if (state.userHalo && state.userHalo.setMap) state.userHalo.setMap(null);
    state.map = null;
    state.userMarker = null;
    state.userHalo = null;
    state.placeMarkers = [];
    state.placesService = null;
  }

  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function loadGoogleMaps(apiKey) {
    if (window.google && window.google.maps && window.google.maps.places) {
      return Promise.resolve();
    }
    if (window.__totemGmapsPromise) return window.__totemGmapsPromise;
    window.__totemGmapsPromise = new Promise(function (resolve, reject) {
      var cb = "__totemGmapsReady";
      window[cb] = function () {
        resolve();
      };
      var script = document.createElement("script");
      script.async = true;
      script.defer = true;
      script.src = "https://maps.googleapis.com/maps/api/js?key=" + encodeURIComponent(apiKey) + "&libraries=places&callback=" + cb;
      script.onerror = function () {
        window.__totemGmapsPromise = null;
        reject(new Error("gmaps"));
      };
      document.head.appendChild(script);
    });
    return window.__totemGmapsPromise;
  }

  function formatDistance(km) {
    if (km < 1) return Math.round(km * 1000) + " m";
    return Math.round(km) + " km";
  }

  function badgeDistance(km) {
    if (km < 1) {
      return { value: String(Math.round(km * 1000)), unit: "m" };
    }
    return { value: String(Math.round(km)), unit: "km" };
  }

  function MapPinOverlay(map, place, onClick) {
    this.place = place;
    this.onClick = onClick;
    this.div = null;
    this.setMap(map);
  }

  var PLACE_PHOTOS = {
    araucano: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Parque_Araucano%2C_Las_Condes%2C_Santiago_20230421.jpg/960px-Parque_Araucano%2C_Las_Condes%2C_Santiago_20230421.jpg",
    costanera: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Costanera_Center_at_evening_%28cropped%29.jpg/960px-Costanera_Center_at_evening_%28cropped%29.jpg",
    sancristobal: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Cerro_San_Cristobal%2C_Virgen_y_torre_Santa_Mar%C3%ADa%2C_Santiago_-_panoramio.jpg/960px-Cerro_San_Cristobal%2C_Virgen_y_torre_Santa_Mar%C3%ADa%2C_Santiago_-_panoramio.jpg",
    teleferico: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Cabina_de_transporte%2C_Telef%C3%A9rico_de_Santiago_A74130520240121.jpg/960px-Cabina_de_transporte%2C_Telef%C3%A9rico_de_Santiago_A74130520240121.jpg",
    bellavista: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Barrio_Bellavista_-grafiti_en_bar_Amapola%2C_Pio_Nono_175_-fRF2.jpg/960px-Barrio_Bellavista_-grafiti_en_bar_Amapola%2C_Pio_Nono_175_-fRF2.jpg",
    lastarria: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Barrio_Lastarria_Santiago.jpg/960px-Barrio_Lastarria_Santiago.jpg",
    santlucia: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Castillo_Hidalgo%2C_Santiago%2C_Chile_%2839032627945%29_%28cropped%29.jpg/960px-Castillo_Hidalgo%2C_Santiago%2C_Chile_%2839032627945%29_%28cropped%29.jpg",
    plazaarmas: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Catedral_Metropolitana_de_Santiago_I.jpg/960px-Catedral_Metropolitana_de_Santiago_I.jpg",
    moneda: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Palacio_de_la_Moneda._Santiago%2C_Chile_03.jpg/960px-Palacio_de_la_Moneda._Santiago%2C_Chile_03.jpg",
    precolombino: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Interior_del_Museo_Chileno_de_Arte_Precolombino_05.jpg/960px-Interior_del_Museo_Chileno_de_Arte_Precolombino_05.jpg",
    bellasartes: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Museo_Nacional_de_Bellas_Artes%2C_Santiago_20230311.jpg/960px-Museo_Nacional_de_Bellas_Artes%2C_Santiago_20230311.jpg",
    dominicos: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Pueblito_de_los_Dominicos%2C_Santiago_CHI%282%29.jpg/960px-Pueblito_de_los_Dominicos%2C_Santiago_CHI%282%29.jpg",
    isidora: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Avenida_Apoquindo_Barrio_El_Golf_%28Santiago_de_Chile%29.jpg/960px-Avenida_Apoquindo_Barrio_El_Golf_%28Santiago_de_Chile%29.jpg",
    parquearauco: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Parque_Arauco%2C_Las_Condes%2C_Santiago_20230326.jpg/960px-Parque_Arauco%2C_Las_Condes%2C_Santiago_20230326.jpg",
    ohiggins: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/2020_Santiago_ePrix_%28Parque_O%27Higgins_Circuit%29.jpg/960px-2020_Santiago_ePrix_%28Parque_O%27Higgins_Circuit%29.jpg",
    cajon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Embalse_El_Yeso%2C_Caj%C3%B3n_del_Maipo_%2839474827444%29.jpg/960px-Embalse_El_Yeso%2C_Caj%C3%B3n_del_Maipo_%2839474827444%29.jpg",
    bicentenario: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Parque_Bicentenario%2C_Vitacura%2C_Santiago_20200314_02.jpg/960px-Parque_Bicentenario%2C_Vitacura%2C_Santiago_20200314_02.jpg"
  };

  var PLACE_ALIAS = {
    "exp-santiago": "plazaarmas",
    "exp-vitacura": "bicentenario",
    "exp-cajon": "cajon",
    "exp-metro": "sancristobal",
    "ser-aloja": "costanera",
    "ser-agencia": "isidora",
    "ser-guias": "bellavista",
    "ser-trans": "parquearauco",
    "fi-costanera": "costanera",
    "fi-sancristobal": "sancristobal",
    "fi-bicentenario": "bicentenario",
    "fi-moneda": "moneda",
    "fi-dominicos": "dominicos",
    "fi-cajon": "cajon"
  };

  function placePhoto(id) {
    var raw = String(id || "").replace(/^imp-/, "");
    var key = PLACE_ALIAS[raw] || raw;
    return PLACE_PHOTOS[key] || "assets/photos/city-tour.jpg";
  }

  function estimateDuration(km, kind) {
    if (kind === "experiencia") return km > 20 ? "1 día" : "3 horas";
    if (kind === "sernatur") return "1–2 horas";
    if (km < 3) return "1 hora";
    if (km < 10) return "2 horas";
    return "3 horas";
  }

  function estimateCost(kind, tags) {
    var t = (tags || []).join(" ").toLowerCase();
    if (kind === "sernatur") return "pago";
    if (t.indexOf("naturaleza") >= 0 || t.indexOf("familia") >= 0) return "free";
    if (kind === "experiencia") return "pago";
    return "free";
  }

  function buildExploraItems(origin, section) {
    var data = section.explora || {};
    var items = [];
    (section.places || []).forEach(function (place) {
      var km = kmBetween(origin, place);
      if (km > 35 || (place.score || 0) < 8) return;
      var tags = [place.zone || "Santiago"];
      items.push({
        id: "imp-" + place.id,
        name: place.name,
        lat: place.lat,
        lng: place.lng,
        km: km,
        kind: "imperdible",
        kindLabel: "Imperdible",
        meta: place.zone || "",
        text: place.name + " es un lugar icónico cerca del Parque Bicentenario, ideal para conocer Santiago.",
        tags: tags,
        tag: tags[0] || "Santiago",
        duration: estimateDuration(km, "imperdible"),
        cost: estimateCost("imperdible", tags),
        image: placePhoto(place.id)
      });
    });
    (data.experiencias || []).forEach(function (item) {
      if (item.lat == null || item.lng == null) return;
      var km = kmBetween(origin, item);
      var tags = item.tags || [];
      items.push({
        id: item.id || item.title,
        name: item.title,
        lat: item.lat,
        lng: item.lng,
        km: km,
        kind: "experiencia",
        kindLabel: "Itinerario",
        meta: item.meta || "",
        text: item.text || "",
        tags: tags,
        tag: tags[0] || "Itinerario",
        duration: estimateDuration(km, "experiencia"),
        cost: estimateCost("experiencia", tags),
        image: placePhoto(item.id)
      });
    });
    (data.sernatur || []).forEach(function (item) {
      if (item.lat == null || item.lng == null) return;
      var km = kmBetween(origin, item);
      var tags = item.tags || ["SERNATUR"];
      items.push({
        id: item.id || item.title,
        name: item.title,
        lat: item.lat,
        lng: item.lng,
        km: km,
        kind: "sernatur",
        kindLabel: "Servicio",
        meta: item.meta || "",
        text: item.text || "",
        tags: tags,
        tag: "SERNATUR",
        duration: estimateDuration(km, "sernatur"),
        cost: estimateCost("sernatur", tags),
        image: placePhoto(item.id)
      });
    });
    return items.sort(function (a, b) {
      return a.km - b.km;
    });
  }

  function nearbyLandmarks(here, curated) {
    var maxKm = 35;
    return (curated || [])
      .map(function (place) {
        var km = kmBetween(here, place);
        return Object.assign({}, place, {
          km: km,
          zone: "Imperdible · a " + formatDistance(km)
        });
      })
      .filter(function (place) {
        return place.km <= maxKm && (place.score || 0) >= 8;
      })
      .sort(function (a, b) {
        return a.km - b.km;
      })
      .slice(0, 16);
  }

  function kmBetween(a, b) {
    var r = 6371;
    var dLat = (b.lat - a.lat) * Math.PI / 180;
    var dLng = (b.lng - a.lng) * Math.PI / 180;
    var s = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(a.lat * Math.PI / 180) * Math.cos(b.lat * Math.PI / 180) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return 2 * r * Math.asin(Math.min(1, Math.sqrt(s)));
  }

  function renderQR() {
    TotemQR.render(els.qrIos, state.data.qr.ios, { module: 11 });
    TotemQR.render(els.qrAndroid, state.data.qr.android, { module: 11 });
  }

  function renderHomeGrid() {
    els.homeGrid.innerHTML = state.data.sections.map(function (section) {
      var icon = ICONS[section.id] || ICONS.descubre;
      return (
        "<button class=\"home-card\" type=\"button\" data-section=\"" + section.id + "\">" +
          "<span class=\"ico\">" + icon + "</span>" +
          "<span class=\"home-copy\">" +
            "<strong>" + section.label + "</strong>" +
            "<span>" + section.short + "</span>" +
          "</span>" +
        "</button>"
      );
    }).join("");
  }

  function renderLoopSlide() {}

  function goLoopSlide(dir) {
    var total = state.data.loop.slides.length;
    state.loopIndex = (state.loopIndex + dir + total) % total;
    renderLoopSlide();
    scheduleLoop();
  }

  function nextLoopSlide() {
    goLoopSlide(1);
  }

  function scheduleLoop() {
    stopLoop();
    var ms = state.data.loop.slideMs || 9000;
    state.loopTimer = setTimeout(nextLoopSlide, ms);
  }

  function setupHeroVideo() {
    var video = els.heroVideo;
    var hero = els.homeHero;
    if (!video || !hero) return;
    if (!video.dataset.ready) {
      video.dataset.ready = "1";
      var src = (state.data.hero && state.data.hero.video) || "assets/hero.mp4";
      var source = video.querySelector("source");
      if (source && source.getAttribute("src") !== src) source.src = src;
      function ok() {
        hero.classList.add("has-video");
        var play = video.play();
        if (play && play.catch) play.catch(function () {});
      }
      function fail() {
        hero.classList.remove("has-video");
      }
      video.addEventListener("loadeddata", ok);
      video.addEventListener("error", fail);
      if (source) source.addEventListener("error", fail);
      if (video.readyState >= 2) ok();
      else video.load();
      return;
    }
    var again = video.play();
    if (again && again.catch) again.catch(function () {});
  }

  function bindHeroSwipe() {
    var hero = els.homeHero;
    if (!hero || hero.dataset.swipeBound) return;
    hero.dataset.swipeBound = "1";
    var startX = 0;
    var startY = 0;
    var tracking = false;
    hero.addEventListener("pointerdown", function (e) {
      tracking = true;
      startX = e.clientX;
      startY = e.clientY;
      try { hero.setPointerCapture(e.pointerId); } catch (err) {}
    });
    hero.addEventListener("pointerup", function (e) {
      if (!tracking) return;
      tracking = false;
      var dx = e.clientX - startX;
      var dy = e.clientY - startY;
      if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
      idle.bump();
      if (dx < 0) goLoopSlide(1);
      else goLoopSlide(-1);
    });
    hero.addEventListener("pointercancel", function () {
      tracking = false;
    });
  }

  function startLoop(reset) {
    destroyMap();
    stopSectionVideo();
    stopSteps();
    if (reset) state.loopIndex = 0;
    setMode("home");
    showScreen("loop");
    renderHomeGrid();
    renderLoopSlide();
    scheduleLoop();
    setupHeroVideo();
  }

  function renderMenu() {
    setMode("section");
    showScreen("menu");
    stopLoop();
    stopSteps();
    els.menuTitle.textContent = state.data.menu.title;
    els.menuHint.textContent = state.data.menu.hint;
    els.menuGrid.innerHTML = state.data.sections.map(function (section) {
      var icon = ICONS[section.id] || ICONS.descubre;
      return (
        "<button class=\"menu-card\" type=\"button\" data-section=\"" + section.id + "\">" +
          "<span class=\"ico\">" + icon + "</span>" +
          "<span class=\"home-copy\">" +
            "<strong>" + section.label + "</strong>" +
            "<span>" + section.short + "</span>" +
          "</span>" +
        "</button>"
      );
    }).join("");
  }

  function phoneMarkup(stepN) {
    if (stepN === 1) {
      return "<div class=\"phone-bar\"></div><div class=\"phone-block lg\"></div><div class=\"phone-block\"></div><div class=\"phone-row\"><div class=\"phone-chip\"></div><div class=\"phone-chip\"></div></div>";
    }
    if (stepN === 2) {
      return "<div class=\"phone-bar\"></div><div class=\"phone-row\"><div class=\"phone-chip\"></div><div class=\"phone-chip\"></div></div><div class=\"phone-block lg\"></div><div class=\"phone-block\"></div>";
    }
    return "<div class=\"phone-bar\"></div><div class=\"phone-block\"></div><div class=\"phone-block lg\"></div><div class=\"phone-block\"></div><div class=\"phone-chip\"></div>";
  }

  function renderSection(sectionId) {
    var section = state.data.sections.find(function (s) { return s.id === sectionId; });
    if (!section) return;
    setMode("section");
    showScreen("section");
    stopLoop();
    state.stepIndex = 0;
    els.sectionTitle.textContent = section.title;
    els.sectionLead.textContent = section.lead;
    destroyMap();
    if (section.video) {
      paintSectionVideo(section);
      return;
    }
    if (section.id === "mapa") {
      paintMap(section);
      return;
    }
    paintSteps(section);
    runSteps(section);
  }

  function stopSectionVideo() {
    var video = document.getElementById("sectionVideo");
    if (!video) return;
    video.pause();
    video.removeAttribute("src");
    while (video.firstChild) video.removeChild(video.firstChild);
    try { video.load(); } catch (err) {}
  }

  function paintSectionVideo(section) {
    stopSteps();
    stopSectionVideo();
    els.steps.innerHTML = "";
    els.demo.className = "demo-stage demo-video";
    els.demo.innerHTML =
      "<div class=\"section-video-wrap\">" +
        "<video class=\"section-video\" id=\"sectionVideo\" muted loop playsinline autoplay preload=\"auto\">" +
          "<source src=\"" + section.video + "\" type=\"video/mp4\">" +
        "</video>" +
      "</div>";
    var video = document.getElementById("sectionVideo");
    if (!video) return;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    function tryPlay() {
      var play = video.play();
      if (play && play.catch) play.catch(function () {});
    }
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("canplaythrough", tryPlay);
    video.load();
    tryPlay();
  }

  function paintExplora(section) {
    destroyMap();
    stopSteps();
    var data = section.explora || {};
    els.sectionTitle.textContent = "Explora";
    els.sectionLead.textContent = section.lead;
    els.steps.innerHTML = "";
    els.demo.className = "demo-stage demo-explora";
    els.demo.innerHTML = "<div class=\"explora-root\" id=\"exploraRoot\"></div>";
    var root = document.getElementById("exploraRoot");

    function showHub() {
      destroyMap();
      els.sectionTitle.textContent = "Explora";
      els.sectionLead.textContent = section.lead;
      root.innerHTML =
        "<div class=\"explora-hub\">" +
          "<p class=\"explora-kicker\">" + escapeHtml(data.intro || "Categorías, listados y fichas") + "</p>" +
          "<div class=\"explora-cats\" id=\"exploraCats\"></div>" +
        "</div>";
      var cats = document.getElementById("exploraCats");
      cats.innerHTML = (data.categories || []).map(function (cat) {
        return (
          "<button class=\"explora-cat\" type=\"button\" data-cat=\"" + cat.id + "\">" +
            "<strong>" + escapeHtml(cat.title) + "</strong>" +
            "<span>" + escapeHtml(cat.text) + "</span>" +
          "</button>"
        );
      }).join("");
      cats.onclick = function (e) {
        var btn = e.target.closest("[data-cat]");
        if (!btn) return;
        idle.bump();
        openCat(btn.getAttribute("data-cat"));
      };
    }

    function listView(title, lead, items, emptyText) {
      els.sectionTitle.textContent = title;
      els.sectionLead.textContent = lead;
      root.innerHTML =
        "<div class=\"explora-panel\">" +
          "<button class=\"explora-back\" type=\"button\" id=\"exploraBack\">← Categorías</button>" +
          "<div class=\"explora-list\" id=\"exploraList\"></div>" +
        "</div>";
      var list = document.getElementById("exploraList");
      if (!items || !items.length) {
        list.innerHTML = "<p class=\"explora-empty\">" + escapeHtml(emptyText || "Sin contenidos") + "</p>";
      } else {
        list.innerHTML = items.map(function (item) {
          return (
            "<article class=\"explora-card\">" +
              "<strong>" + escapeHtml(item.title) + "</strong>" +
              "<em>" + escapeHtml(item.meta || "") + "</em>" +
              "<p>" + escapeHtml(item.text || "") + "</p>" +
            "</article>"
          );
        }).join("");
      }
      document.getElementById("exploraBack").onclick = function () {
        idle.bump();
        showHub();
      };
    }

    function searchView() {
      els.sectionTitle.textContent = "Buscador y filtros";
      els.sectionLead.textContent = "Busca por interés, zona o tipo de experiencia.";
      var filters = data.filtros || [];
      root.innerHTML =
        "<div class=\"explora-panel\">" +
          "<button class=\"explora-back\" type=\"button\" id=\"exploraBack\">← Categorías</button>" +
          "<div class=\"explora-search\">" +
            "<input class=\"explora-input\" id=\"exploraInput\" type=\"search\" placeholder=\"Buscar destinos, experiencias…\" readonly>" +
            "<div class=\"explora-chips\" id=\"exploraChips\"></div>" +
            "<div class=\"explora-list\" id=\"exploraList\"></div>" +
          "</div>" +
        "</div>";
      var chips = document.getElementById("exploraChips");
      chips.innerHTML = filters.map(function (f) {
        return "<button class=\"explora-chip\" type=\"button\" data-filter=\"" + escapeHtml(f) + "\">" + escapeHtml(f) + "</button>";
      }).join("");
      var results = (data.fichas || []).concat(data.experiencias || []);
      function paintResults(query) {
        var q = String(query || "").toLowerCase();
        var filtered = results.filter(function (item) {
          if (!q) return true;
          return (item.title + " " + (item.meta || "") + " " + (item.text || "")).toLowerCase().indexOf(q) >= 0;
        });
        document.getElementById("exploraList").innerHTML = filtered.map(function (item) {
          return (
            "<article class=\"explora-card\">" +
              "<strong>" + escapeHtml(item.title) + "</strong>" +
              "<em>" + escapeHtml(item.meta || "") + "</em>" +
              "<p>" + escapeHtml(item.text || "") + "</p>" +
            "</article>"
          );
        }).join("") || "<p class=\"explora-empty\">Sin resultados</p>";
      }
      paintResults("");
      chips.onclick = function (e) {
        var chip = e.target.closest("[data-filter]");
        if (!chip) return;
        idle.bump();
        document.querySelectorAll(".explora-chip").forEach(function (c) {
          c.classList.toggle("is-on", c === chip);
        });
        document.getElementById("exploraInput").value = chip.getAttribute("data-filter");
        paintResults(chip.getAttribute("data-filter"));
      };
      document.getElementById("exploraBack").onclick = function () {
        idle.bump();
        showHub();
      };
    }

    function openCat(id) {
      if (id === "imperdibles") {
        paintMap(section);
        return;
      }
      if (id === "experiencias") {
        listView("Experiencias e itinerarios", "Rutas y planes para descubrir Chile.", data.experiencias);
        return;
      }
      if (id === "sernatur") {
        listView(
          "Servicios turísticos registrados en SERNATUR",
          "Servicios turísticos con registro oficial SERNATUR.",
          data.sernatur
        );
        return;
      }
      if (id === "buscador") {
        searchView();
        return;
      }
      if (id === "fichas") {
        listView(
          "Fichas con información detallada",
          "Información clara de cada lugar o experiencia.",
          data.fichas
        );
      }
    }

    showHub();
  }

  function paintMap(section) {
    destroyMap();
    stopSectionVideo();
    stopSteps();
    var apiKey = (state.data.maps && state.data.maps.apiKey) || "";
    var originCfg = (state.data.maps && state.data.maps.origin) || {
      name: "Parque Bicentenario",
      zone: "Vitacura",
      lat: -33.3992,
      lng: -70.6028
    };
    var origin = { lat: originCfg.lat, lng: originCfg.lng };
    var allItems = buildExploraItems(origin, section);
    var activeKind = "imperdible";
    els.sectionTitle.textContent = section.title;
    els.sectionLead.textContent = section.lead;
    els.steps.innerHTML = "";
    els.demo.className = "demo-stage demo-map";
    els.demo.innerHTML =
      "<div class=\"live-wrap\">" +
        "<div class=\"map-filters\" id=\"mapFilters\">" +
          "<button class=\"map-filter is-on\" type=\"button\" data-kind=\"imperdible\">Imperdible</button>" +
          "<button class=\"map-filter\" type=\"button\" data-kind=\"experiencia\">Itinerario</button>" +
          "<button class=\"map-filter\" type=\"button\" data-kind=\"sernatur\">Servicio</button>" +
        "</div>" +
        "<div class=\"chile-map\" id=\"chileMap\"></div>" +
        "<div class=\"place-sheet\" id=\"placeSheet\" hidden>" +
          "<div class=\"place-sheet-handle\" id=\"placeSheetClose\"></div>" +
          "<div class=\"place-sheet-top\">" +
            "<strong id=\"mapPlaceName\">Lugar</strong>" +
          "</div>" +
          "<p class=\"place-sheet-text\" id=\"mapPlaceText\"></p>" +
          "<div class=\"place-sheet-meta\">" +
            "<div class=\"place-sheet-stats\">" +
              "<span id=\"mapPlaceDist\"></span>" +
              "<span id=\"mapPlaceDuration\"></span>" +
              "<span id=\"mapPlaceCost\"></span>" +
            "</div>" +
            "<em class=\"place-sheet-tag\" id=\"mapPlaceTag\"></em>" +
          "</div>" +
          "<div class=\"place-sheet-photo\">" +
            "<img id=\"mapPlaceImage\" alt=\"\" referrerpolicy=\"no-referrer\" decoding=\"async\">" +
          "</div>" +
        "</div>" +
      "</div>";

    if (!apiKey) {
      var sheet = document.getElementById("placeSheet");
      if (sheet) {
        sheet.hidden = false;
        document.getElementById("mapPlaceName").textContent = "Falta API key";
        document.getElementById("mapPlaceText").textContent = "Configura maps.apiKey";
      }
      return;
    }

    loadGoogleMaps(apiKey).then(function () {
      var map = new google.maps.Map(document.getElementById("chileMap"), {
        center: origin,
        zoom: 12,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: { position: google.maps.ControlPosition.RIGHT_TOP },
        gestureHandling: "greedy",
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        clickableIcons: false,
        keyboardShortcuts: false
      });
      state.map = map;
      state.placeMarkers = [];
      map.addListener("click", function () {
        idle.bump();
      });

      MapPinOverlay.prototype = new google.maps.OverlayView();

      MapPinOverlay.prototype.onAdd = function () {
        var place = this.place;
        var div = document.createElement("button");
        div.type = "button";
        if (place.kind === "here") {
          div.className = "here-badge";
          div.title = "Tú aquí";
          div.innerHTML = "<span>Tú aquí</span>";
        } else {
          var badge = badgeDistance(place.km);
          div.className = "dist-badge dist-" + place.kind;
          div.title = place.name + " · " + formatDistance(place.km);
          div.innerHTML =
            "<span class=\"dist-badge-val\">" + escapeHtml(badge.value) + "</span>" +
            "<span class=\"dist-badge-unit\">" + escapeHtml(badge.unit) + "</span>";
        }
        div.addEventListener("click", this.onClick);
        this.div = div;
        this.getPanes().overlayMouseTarget.appendChild(div);
      };

      MapPinOverlay.prototype.draw = function () {
        if (!this.div) return;
        var point = this.getProjection().fromLatLngToDivPixel(
          new google.maps.LatLng(this.place.lat, this.place.lng)
        );
        if (!point) return;
        this.div.style.left = point.x + "px";
        this.div.style.top = point.y + "px";
      };

      MapPinOverlay.prototype.onRemove = function () {
        if (this.div && this.div.parentNode) {
          this.div.parentNode.removeChild(this.div);
        }
        this.div = null;
      };

      function showPlace(place) {
        var sheet = document.getElementById("placeSheet");
        var name = document.getElementById("mapPlaceName");
        var text = document.getElementById("mapPlaceText");
        var dist = document.getElementById("mapPlaceDist");
        var duration = document.getElementById("mapPlaceDuration");
        var cost = document.getElementById("mapPlaceCost");
        var tag = document.getElementById("mapPlaceTag");
        var image = document.getElementById("mapPlaceImage");
        if (!sheet) return;
        if (place.kind === "here") {
          sheet.hidden = true;
          return;
        }
        sheet.hidden = false;
        sheet.classList.add("is-open");
        if (name) name.textContent = place.name || "";
        if (text) text.textContent = place.text || "";
        if (dist) dist.textContent = formatDistance(place.km || 0);
        if (duration) duration.textContent = place.duration || estimateDuration(place.km || 0, place.kind);
        if (cost) cost.textContent = place.cost || "free";
        if (tag) tag.textContent = place.tag || place.kindLabel || "";
        if (image) {
          image.alt = place.name || "";
          image.onerror = function () {
            image.onerror = null;
            image.src = "assets/photos/city-tour.jpg";
          };
          image.src = place.image || placePhoto(place.id);
        }
      }

      function hidePlaceSheet() {
        var sheet = document.getElementById("placeSheet");
        if (!sheet) return;
        sheet.hidden = true;
        sheet.classList.remove("is-open");
      }

      function clearPlaceMarkers() {
        (state.placeMarkers || []).forEach(function (m) { m.setMap(null); });
        state.placeMarkers = [];
      }

      function filteredItems() {
        return allItems.filter(function (item) {
          return item.kind === activeKind;
        });
      }

      function renderPlaces(list) {
        clearPlaceMarkers();
        var bounds = new google.maps.LatLngBounds();
        bounds.extend(origin);
        (list || []).forEach(function (place) {
          var pos = { lat: place.lat, lng: place.lng };
          bounds.extend(pos);
          var overlay = new MapPinOverlay(map, place, function () {
            idle.bump();
            document.querySelectorAll(".dist-badge").forEach(function (el) {
              el.classList.remove("is-on");
            });
            if (overlay.div) overlay.div.classList.add("is-on");
            showPlace(place);
            map.panTo(pos);
            if (map.getZoom() < 13) map.setZoom(13);
          });
          state.placeMarkers.push(overlay);
        });
        if (list && list.length) {
          map.fitBounds(bounds, 80);
          if (map.getZoom() > 13) map.setZoom(13);
        }
      }

      function paintHere() {
        if (state.userMarker && state.userMarker.setMap) state.userMarker.setMap(null);
        if (state.userHalo && state.userHalo.setMap) state.userHalo.setMap(null);
        state.userHalo = null;
        state.userMarker = new MapPinOverlay(map, {
          kind: "here",
          lat: origin.lat,
          lng: origin.lng,
          name: "Tú aquí"
        }, function () {
          idle.bump();
          showPlace({
            kind: "here",
            name: "Tú aquí",
            km: 0
          });
          map.panTo(origin);
          map.setZoom(14);
        });
      }

      function refresh() {
        var list = filteredItems();
        hidePlaceSheet();
        renderPlaces(list);
        paintHere();
      }

      document.getElementById("mapFilters").onclick = function (e) {
        var btn = e.target.closest("[data-kind]");
        if (!btn) return;
        idle.bump();
        activeKind = btn.getAttribute("data-kind");
        document.querySelectorAll(".map-filter").forEach(function (el) {
          el.classList.toggle("is-on", el === btn);
        });
        refresh();
      };

      var sheetClose = document.getElementById("placeSheetClose");
      if (sheetClose) {
        sheetClose.onclick = function () {
          idle.bump();
          hidePlaceSheet();
        };
      }

      setTimeout(refresh, 250);
    }).catch(function () {
      var sheet = document.getElementById("placeSheet");
      if (sheet) {
        sheet.hidden = false;
        sheet.classList.add("is-open");
      }
      var name = document.getElementById("mapPlaceName");
      var text = document.getElementById("mapPlaceText");
      if (name) name.textContent = "Sin conexión al mapa";
      if (text) text.textContent = "Revisa internet y la API de Google Maps";
    });
  }

  function paintSteps(section) {
    els.demo.className = "demo-stage";
    els.steps.innerHTML = section.steps.map(function (step, i) {
      var cls = "step";
      if (i < state.stepIndex) cls += " is-done";
      if (i === state.stepIndex) cls += " is-current";
      return (
        "<article class=\"" + cls + "\">" +
          "<div class=\"step-n\">" + step.n + "</div>" +
          "<div><h3>" + step.title + "</h3><p>" + step.text + "</p></div>" +
        "</article>"
      );
    }).join("");
    var current = section.steps[state.stepIndex];
    els.demo.innerHTML =
      "<div class=\"phone\"><div class=\"phone-screen\">" + phoneMarkup(current.n) + "</div></div>" +
      "<div class=\"phone-caption\">Paso " + current.n + " · " + current.title + "</div>";
  }

  function runSteps(section) {
    stopSteps();
    state.stepTimer = setTimeout(function () {
      state.stepIndex = (state.stepIndex + 1) % section.steps.length;
      paintSteps(section);
      runSteps(section);
    }, 4200);
  }

  function onRoute(route) {
    state.route = route;
    if (route.name === "loop") startLoop(true);
    else if (route.name === "menu") renderMenu();
    else if (route.name === "section") renderSection(route.sectionId);
  }

  function fitStage() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (w > h) {
      var s = Math.min(w / 1080, h / 1920);
      els.stage.style.width = "1080px";
      els.stage.style.height = "1920px";
      els.stage.style.position = "fixed";
      els.stage.style.left = "50%";
      els.stage.style.top = "50%";
      els.stage.style.transform = "translate(-50%, -50%) scale(" + s + ")";
      return;
    }
    els.stage.style.width = "100vw";
    els.stage.style.height = "100vh";
    els.stage.style.position = "relative";
    els.stage.style.left = "0";
    els.stage.style.top = "0";
    els.stage.style.transform = "none";
  }

  function bind() {
    fitStage();
    window.addEventListener("resize", function () {
      fitStage();
      if (state.map && window.google && window.google.maps) {
        window.google.maps.event.trigger(state.map, "resize");
      }
    });

    els.stage.addEventListener("pointerdown", function () {
      idle.bump();
    }, { passive: true });

    els.btnHome.addEventListener("click", function () {
      idle.bump();
      router.go("loop");
    });

    els.btnMenu.addEventListener("click", function () {
      idle.bump();
      router.go("menu");
    });

    if (els.homeHint) {
      els.homeHint.addEventListener("click", function () {
        idle.bump();
        var first = state.data.sections && state.data.sections[0];
        if (first) router.go("section", first.id);
        else router.go("menu");
      });
    }

    els.homeGrid.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-section]");
      if (!btn) return;
      idle.bump();
      router.go("section", btn.getAttribute("data-section"));
    });

    els.menuGrid.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-section]");
      if (!btn) return;
      idle.bump();
      router.go("section", btn.getAttribute("data-section"));
    });


    bindHeroSwipe();

    document.addEventListener("contextmenu", function (e) { e.preventDefault(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "F11" || e.key === "Escape" || (e.altKey && e.key === "F4")) {
        e.preventDefault();
      }
      if (state.route.name === "loop") {
        if (e.key === "ArrowLeft") {
          idle.bump();
          goLoopSlide(-1);
          return;
        }
        if (e.key === "ArrowRight") {
          idle.bump();
          goLoopSlide(1);
          return;
        }
      }
      idle.bump();
    });
  }

  function boot(data) {
    state.data = data;
    els.ctaText.textContent = data.cta;
    renderQR();
    idle = createIdle(data.idleMs || 60000, function () {
      if (state.route.name !== "loop") router.go("loop");
      else idle.bump();
    });
    router = createRouter(onRoute);
    bind();
    router.go("loop");
    idle.start();
  }

  function cacheEls() {
    els.stage = $("#stage");
    els.btnHome = $("#btnHome");
    els.btnMenu = $("#btnMenu");
    els.loopScreen = $("#screenLoop");
    els.homeHero = $("#homeHero");
    els.heroVideo = $("#heroVideo");
    els.homeGrid = $("#homeGrid");
    els.homeHint = $("#homeHint");
    els.menuTitle = $("#menuTitle");
    els.menuHint = $("#menuHint");
    els.menuGrid = $("#menuGrid");
    els.sectionTitle = $("#sectionTitle");
    els.sectionLead = $("#sectionLead");
    els.steps = $("#steps");
    els.demo = $("#demoStage");
    els.qrIos = $("#qrIos");
    els.qrAndroid = $("#qrAndroid");
    els.ctaText = $("#ctaText");
  }

  cacheEls();
  boot(window.TOTEM_CONTENT);
})();
