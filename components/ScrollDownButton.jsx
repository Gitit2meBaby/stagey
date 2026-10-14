"use client";

import React from "react";

function ScrollDownButton() {
  const jump = () => {
    // Measure a real 100dvh so it matches the dynamic viewport on mobile
    const probe = document.createElement("div");
    probe.style.cssText =
      "position:fixed;top:0;left:0;width:0;height:100dvh;visibility:hidden;pointer-events:none;";
    document.body.appendChild(probe);
    const distance = probe.offsetHeight || window.innerHeight;
    document.body.removeChild(probe);

    window.scrollBy({ top: distance * 0.8, left: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={jump}
      aria-label="Scroll down one screen"
      style={{
        position: "fixed",
        right: "14px",
        bottom: "calc(18px + env(safe-area-inset-bottom))",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        border: "1px solid var(--line, #ddd9cd)",
        background: "var(--panel, #ffffff)",
        color: "var(--ink, #161616)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        cursor: "pointer",
        zIndex: 1000,
        opacity: 0.9,
        touchAction: "manipulation",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
}

export default ScrollDownButton;
