/* ════════════════════════════════════════════════════════════════════════
   ReRack — PROD version constant. FROZEN between promotes: bump ONLY at
   promote time (rerack-build.mjs --promote copies preprod/version.js
   here), then sync the 'ReRack' apa_core row. Day-to-day work bumps
   preprod/version.js instead — prod pages poll the 'ReRack' row and a
   mismatched bump here strands open tabs on "Updating…".
   ════════════════════════════════════════════════════════════════════════ */
window.APP_VERSION = '0.1';
