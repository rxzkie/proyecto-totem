@echo off
setlocal EnableExtensions
cd /d "%~dp0"

set "HTML=%~dp0index.html"
set "PROFILE=%LOCALAPPDATA%\ChileTravelTotem"
set "CHROME1=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
set "CHROME2=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
set "EDGE1=%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"
set "EDGE2=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"

if not exist "%PROFILE%" mkdir "%PROFILE%"

for /f "delims=" %%A in ('powershell -NoProfile -Command "[uri]::new((Resolve-Path -LiteralPath $env:HTML).Path).AbsoluteUri"') do set "URL=%%A"

if exist "%CHROME1%" (
  start "" "%CHROME1%" --kiosk "%URL%" --user-data-dir="%PROFILE%" --no-first-run --no-default-browser-check --disable-translate --disable-infobars --disable-session-crashed-bubble --disable-features=TranslateUI --autoplay-policy=no-user-gesture-required --overscroll-history-navigation=0 --disable-pinch --force-device-scale-factor=1 --check-for-update-interval=31536000 --disable-component-update --hide-scrollbars
  exit /b 0
)

if exist "%CHROME2%" (
  start "" "%CHROME2%" --kiosk "%URL%" --user-data-dir="%PROFILE%" --no-first-run --no-default-browser-check --disable-translate --disable-infobars --disable-session-crashed-bubble --disable-features=TranslateUI --autoplay-policy=no-user-gesture-required --overscroll-history-navigation=0 --disable-pinch --force-device-scale-factor=1 --check-for-update-interval=31536000 --disable-component-update --hide-scrollbars
  exit /b 0
)

if exist "%EDGE1%" (
  start "" "%EDGE1%" --kiosk "%URL%" --edge-kiosk-type=fullscreen --user-data-dir="%PROFILE%" --no-first-run --no-default-browser-check --disable-features=TranslateUI --autoplay-policy=no-user-gesture-required --force-device-scale-factor=1 --hide-scrollbars
  exit /b 0
)

if exist "%EDGE2%" (
  start "" "%EDGE2%" --kiosk "%URL%" --edge-kiosk-type=fullscreen --user-data-dir="%PROFILE%" --no-first-run --no-default-browser-check --disable-features=TranslateUI --autoplay-policy=no-user-gesture-required --force-device-scale-factor=1 --hide-scrollbars
  exit /b 0
)

echo ERROR: no hay Chrome ni Edge.
pause
exit /b 1
