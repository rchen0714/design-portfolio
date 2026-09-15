"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export const PORTFOLIO_EMAIL = "rc071404@bu.edu";

type EmailCopyButtonProps = {
  variant: "footer" | "about";
  className?: string;
};

export default function EmailCopyButton({ variant, className }: EmailCopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_EMAIL);
      setCopied(true);
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, []);

  const rootClass = [
    "email-copy-button",
    `email-copy-button--${variant}`,
    copied ? "email-copy-button--copied" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={rootClass}
      onClick={handleCopy}
      aria-label={`Copy email address ${PORTFOLIO_EMAIL}`}
    >
      <span className="email-copy-button__label">
        <span className="email-copy-button__email">{PORTFOLIO_EMAIL}</span>
        <span className="email-copy-button__suffix" aria-live="polite">
          {"| "}
          {copied ? "copied" : "copy"}
        </span>
      </span>
    </button>
  );
}
