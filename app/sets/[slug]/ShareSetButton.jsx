"use client";

import { useState } from "react";

export default function ShareSetButton({ title }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch (err) {
        // user cancelled the share sheet — not an error, do nothing
      }
      return;
    }

    // Fallback: copy the link to the clipboard
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // clipboard unavailable — last resort, select-able prompt
      window.prompt("Copy this link:", url);
    }
  }

  return (
    <button type="button" className="share-set-button" onClick={handleShare}>
      {copied ? "Link Copied ✓" : "Share Set"}
    </button>
  );
}
