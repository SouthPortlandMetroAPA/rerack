/* ════════════════════════════════════════════════════════════════════════
   ReRack — single global version constant.
   Deploy workflow (same as PaperTrail):
     1. Edit window.APP_VERSION here.
     2. Push; deploy-finisher bumps apa_core.apps for the right env row:
        - preprod pages (under /preprod/) poll 'ReRack-preprod'
        - prod pages poll 'ReRack'
     3. promote.sh Apps/ReRack/site syncs prod at promote time.
   ════════════════════════════════════════════════════════════════════════ */
window.APP_VERSION = '0.1';
