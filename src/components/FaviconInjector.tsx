'use client';

import { useEffect } from 'react';

const FaviconInjector = () => {
  useEffect(() => {
    const existingLink = document.querySelector("link[rel~='icon']");
    const link: HTMLLinkElement = existingLink
      ? (existingLink as HTMLLinkElement)
      : document.createElement('link');

    link.rel = 'icon';
    link.href = '/favicon.ico';
    link.type = 'image/x-icon';

    if (!existingLink) {
      document.head.appendChild(link);
    }
  }, []);

  return null;
};

export default FaviconInjector;