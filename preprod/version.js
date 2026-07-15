/* ════════════════════════════════════════════════════════════════════════
   ReRack version constant. SOURCE OF TRUTH = preprod/version.js — bump it for
   every preprod ship. `rerack-build.mjs --promote` copies THIS file over the
   root (prod) version.js, so NEVER hand-edit the root copy — edit
   preprod/version.js and re-promote, then sync the 'ReRack' apa_core row.
   ════════════════════════════════════════════════════════════════════════ */
window.APP_VERSION = '0.17';
