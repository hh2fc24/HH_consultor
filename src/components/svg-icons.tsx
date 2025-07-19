// Iconos SVG modernos y profesionales para AutomationShowcase
import React from 'react';

// Iconos para pasos de automatización
export const CaptureIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="6" width="18" height="12" rx="3" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="1" fill={color}/>
    <circle cx="18" cy="8" r="1" fill={color}/>
  </svg>
);

export const AIAnalysisIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M8 12h8M12 8v8" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="2" fill={color}/>
    <circle cx="8" cy="8" r="1" fill={color} opacity="0.6"/>
    <circle cx="16" cy="8" r="1" fill={color} opacity="0.6"/>
    <circle cx="8" cy="16" r="1" fill={color} opacity="0.6"/>
    <circle cx="16" cy="16" r="1" fill={color} opacity="0.6"/>
  </svg>
);

export const SegmentationIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="8" height="8" rx="2" stroke={color} strokeWidth="2" fill="none"/>
    <rect x="13" y="3" width="8" height="8" rx="2" stroke={color} strokeWidth="2" fill="none"/>
    <rect x="3" y="13" width="8" height="8" rx="2" stroke={color} strokeWidth="2" fill="none"/>
    <rect x="13" y="13" width="8" height="8" rx="2" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="7" cy="7" r="1" fill={color}/>
    <circle cx="17" cy="7" r="1" fill={color}/>
    <circle cx="7" cy="17" r="1" fill={color}/>
    <circle cx="17" cy="17" r="1" fill={color}/>
  </svg>
);

export const ResponseIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="1" fill={color}/>
    <circle cx="8" cy="12" r="1" fill={color} opacity="0.6"/>
    <circle cx="16" cy="12" r="1" fill={color} opacity="0.6"/>
  </svg>
);

export const CRMIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="16" rx="3" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M3 8h18" stroke={color} strokeWidth="2"/>
    <circle cx="8" cy="14" r="2" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M12 14h6M12 17h4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="6" cy="6" r="1" fill={color}/>
    <circle cx="9" cy="6" r="1" fill={color} opacity="0.6"/>
    <circle cx="12" cy="6" r="1" fill={color} opacity="0.4"/>
  </svg>
);

export const MakeIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="4" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="8" cy="8" r="2" fill={color}/>
    <circle cx="16" cy="8" r="2" fill={color}/>
    <circle cx="8" cy="16" r="2" fill={color}/>
    <circle cx="16" cy="16" r="2" fill={color}/>
    <path d="M10 8h4M8 10v4M16 10v4M10 16h4" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const ZapierIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14h10l-1 8 10-12H12l1-8z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} fillOpacity="0.1"/>
    <circle cx="12" cy="12" r="2" fill={color}/>
  </svg>
);

export const N8nIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="6" width="20" height="12" rx="3" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="7" cy="12" r="2" fill={color}/>
    <circle cx="12" cy="12" r="2" fill={color}/>
    <circle cx="17" cy="12" r="2" fill={color}/>
    <path d="M9 12h1M13 12h1" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const OpenAIIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="3" fill={color}/>
    <path d="M12 3v6M21 12h-6M12 21v-6M3 12h6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="6" r="1" fill={color}/>
    <circle cx="18" cy="12" r="1" fill={color}/>
    <circle cx="12" cy="18" r="1" fill={color}/>
    <circle cx="6" cy="12" r="1" fill={color}/>
  </svg>
);

export const ChatGPTIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="10" r="2" stroke={color} strokeWidth="1.5" fill="none"/>
    <path d="M8 14h8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ClaudeIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="4" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="1" fill={color}/>
    <path d="M12 6v2M18 12h-2M12 18v-2M6 12h2" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Iconos adicionales con el mismo estilo
export const DocumentIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2v6h6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 13h8M8 17h6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const OCRIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M7 9h2M7 13h4M7 17h3" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="17" cy="9" r="1" fill={color}/>
    <path d="M15 13l4 4M19 13l-4 4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ValidationIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M9 12l2 2 4-4" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ClassificationIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v11z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="14" r="1" fill={color}/>
    <circle cx="12" cy="14" r="1" fill={color}/>
    <circle cx="15" cy="14" r="1" fill={color}/>
  </svg>
);

export const NotificationIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="18" cy="6" r="2" fill={color}/>
  </svg>
);

export const QueryIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M12 1v6M23 12h-6M12 23v-6M1 12h6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="1" fill={color}/>
  </svg>
);

export const UnderstandingIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={color} fillOpacity="0.1"/>
    <circle cx="12" cy="12" r="2" fill={color}/>
  </svg>
);

export const SearchIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="8" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M21 21l-4.35-4.35" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="11" cy="11" r="3" stroke={color} strokeWidth="1.5" fill="none"/>
  </svg>
);

export const InsightIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="5" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="2" fill={color}/>
  </svg>
);

export const EscalationIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="7" r="4" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M12 11V7M10 9l2-2 2 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="18" cy="6" r="2" fill={color}/>
  </svg>
);