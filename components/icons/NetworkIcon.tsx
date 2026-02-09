import React from 'react';

export const NetworkIcon: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path d="M20 12V6H4V12H2V6C2 4.9 2.9 4 4 4H20C21.1 4 22 4.9 22 6V12H20ZM20 18H4V16H2V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V16H20V18ZM14 12.5H10V14.5H14V12.5ZM21 12.5H17V14.5H21V12.5ZM7 12.5H3V14.5H7V12.5Z" fill="url(#grad1)"/>
  </svg>
);