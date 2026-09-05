import React, { useState, useEffect, useMemo } from "react";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  fallbackIcon?: React.ReactNode;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = "",
  className = "",
  fallbackText,
  fallbackIcon,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  // Normalize image source to always use absolute root path for public assets
  const normalizedSrc = useMemo(() => {
    if (!src) return "";
    let clean = src.trim();
    if (clean.startsWith("./")) {
      clean = clean.slice(2);
    }
    if (
      !clean.startsWith("/") &&
      !clean.startsWith("http://") &&
      !clean.startsWith("https://") &&
      !clean.startsWith("data:")
    ) {
      clean = `/${clean}`;
    }
    return clean;
  }, [src]);

  // Reset error state when source changes
  useEffect(() => {
    setHasError(false);
    setRetryCount(0);
  }, [normalizedSrc]);

  if (hasError || !src) {
    if (fallbackText) {
      return (
        <div
          className={`flex items-center justify-center font-mono font-bold select-none text-white bg-white/10 ${className}`}
          title={alt}
        >
          {fallbackText}
        </div>
      );
    }
    if (fallbackIcon) {
      return (
        <div
          className={`flex items-center justify-center bg-white/5 text-slate-400 select-none ${className}`}
          title={alt}
        >
          {fallbackIcon}
        </div>
      );
    }
    // Default fallback: stylish dark card with subtle glow and label
    return (
      <div
        className={`flex items-center justify-center bg-[#121216] border border-white/10 text-slate-400 text-xs font-mono select-none ${className}`}
        title={alt}
      >
        <span className="opacity-60">{alt || "DevClub"}</span>
      </div>
    );
  }

  return (
    <img
      src={normalizedSrc}
      alt={alt}
      className={className}
      decoding="async"
      onError={() => {
        if (retryCount < 1) {
          // Retry once in case of transient network glitch
          setRetryCount((prev) => prev + 1);
        } else {
          console.warn(`[SafeImage] Failed to load image: ${src}`);
          setHasError(true);
        }
      }}
      {...rest}
    />
  );
};

