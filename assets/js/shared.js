// Care Toolkit - shared JS
// Handles UK GDPR cookie consent and gates AdSense/Analytics behind consent.

(function () {
  'use strict';

  const CONSENT_KEY = 'caretoolkit_consent_v1';
  const stored = localStorage.getItem(CONSENT_KEY);

  function loadAdsAndAnalytics() {
    // ============================================================
    // GOOGLE ANALYTICS 4 - replace G-XXXXXXXXXX with your real ID
    // ============================================================
    /*
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(gaScript);
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX', { anonymize_ip: true });
    */

    // ============================================================
    // GOOGLE ADSENSE - replace ca-pub-XXXXXXXXXXXXXXXX with your real publisher ID
    // Add this AFTER you've been approved by AdSense.
    // ============================================================
    /*
    const adScript = document.createElement('script');
    adScript.async = true;
    adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX';
    adScript.crossOrigin = 'anonymous';
    document.head.appendChild(adScript);
    */
  }

  function showBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.classList.add('show');
  }

  function hideBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.classList.remove('show');
  }

  function setConsent(value) {
    localStorage.setItem(CONSENT_KEY, value);
    hideBanner();
    if (value === 'accepted') loadAdsAndAnalytics();
  }

  // On page load: decide what to do
  document.addEventListener('DOMContentLoaded', function () {
    if (stored === 'accepted') {
      loadAdsAndAnalytics();
    } else if (stored === 'rejected') {
      // user has rejected - do nothing
    } else {
      // no choice yet - show the banner
      showBanner();
    }

    // Wire up the buttons
    const acceptBtn = document.getElementById('cookie-accept');
    const rejectBtn = document.getElementById('cookie-reject');
    if (acceptBtn) acceptBtn.addEventListener('click', () => setConsent('accepted'));
    if (rejectBtn) rejectBtn.addEventListener('click', () => setConsent('rejected'));
  });
})();
