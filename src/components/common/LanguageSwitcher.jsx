"use client";

import React, { useEffect, useCallback, useRef } from "react";

const SUPPORTED_LANGUAGES = [
  { code: "fr", label: "Français", icon: "/images/flag-fr.svg" },
  { code: "en", label: "English", icon: "/images/flag-uk.svg" },
  { code: "ar", label: "العربية", icon: "/images/flag-sa.svg" }
];

export default function LanguageSwitcher() {
  const observerRef = useRef(null);

  const hideGoogleBanner = useCallback(() => {
    try {
      const bannerIframe = document.querySelector("iframe.goog-te-banner-frame");
      if (bannerIframe && bannerIframe.style.display !== "none") {
        bannerIframe.style.setProperty("display", "none", "important");
      }
      const tt = document.getElementById("goog-gt-tt");
      if (tt) tt.style.setProperty("display", "none", "important");
      const skip = document.querySelector(".skiptranslate");
      if (skip) skip.style.setProperty("display", "none", "important");
      document.body.style.setProperty("top", "0px", "important");
      document.documentElement.style.setProperty("margin-top", "0px", "important");
    } catch (e) {
      // ignore
    }
  }, []);

  // Inject Google Translate script once and create a hidden translate element
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!(window).googleTranslateElementInit) {
      (window).googleTranslateElementInit = function () {
        if (!(window).google || !(window).google.translate) return;
        new (window).google.translate.TranslateElement(
          {
            pageLanguage: "fr",
            includedLanguages: SUPPORTED_LANGUAGES.map(l => l.code).join(","),
            autoDisplay: false,
          },
          "google_translate_element"
        );
        // Hide any banner after init
        hideGoogleBanner();
      };
    }

    // Avoid duplicating the script
    const existing = document.getElementById("google-translate-script");
    if (!existing) {
      const s = document.createElement("script");
      s.id = "google-translate-script";
      s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      s.async = true;
      document.body.appendChild(s);
    }

    // Observe DOM changes to hide banner when Google injects it
    hideGoogleBanner();
    observerRef.current = new MutationObserver(() => hideGoogleBanner());
    observerRef.current.observe(document.documentElement, {
      childList: true,
      subtree: true
    });

    window.addEventListener("load", hideGoogleBanner);

    return () => {
      try { observerRef.current?.disconnect(); } catch {}
      window.removeEventListener("load", hideGoogleBanner);
    };
  }, [hideGoogleBanner]);

  const setCookie = (name, value) => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    const cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    document.cookie = cookie;
    const host = window.location.hostname;
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;domain=.${host}`;
  };

  const translateTo = useCallback((langCode) => {
    const pair = `/fr/${langCode}`;
    setCookie("googtrans", pair);

    const combo = document.querySelector(".goog-te-combo");
    if (combo) {
      combo.value = langCode;
      combo.dispatchEvent(new Event("change"));
      // Attempt to hide banner repeatedly for a short time after change
      hideGoogleBanner();
      const t = setInterval(hideGoogleBanner, 300);
      setTimeout(() => clearInterval(t), 3000);
    } else {
      // Reload will trigger init + hide
      window.location.reload();
    }
  }, [hideGoogleBanner]);

  return (
    <div className="flex items-center gap-1">
      <div id="google_translate_element" className="hidden" />
      {SUPPORTED_LANGUAGES.map(({ code, label, icon }) => (
        <button
          key={code}
          onClick={() => translateTo(code)}
          title={label}
          aria-label={label}
          className="rounded-md p-1 hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-colors"
        >
          <img src={icon} alt={label} className="w-5 h-3.5 rounded-sm object-cover" />
        </button>
      ))}
    </div>
  );
} 