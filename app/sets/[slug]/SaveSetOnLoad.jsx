"use client";

import { useEffect } from "react";
import { saveSetLink } from "../../lib/sets";

export default function SaveSetOnLoad({ title, slug }) {
  useEffect(() => {
    saveSetLink(title, slug);
  }, [title, slug]);

  return null;
}
