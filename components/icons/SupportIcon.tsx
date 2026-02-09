import React from 'react';

export const SupportIcon: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path d="M12 1C5.93 1 1 5.93 1 12V23L6.96 20.42C8.5 21.36 10.21 21.86 12 21.86C18.07 21.86 23 16.93 23 10.86C23 4.79 18.07 1 12 1ZM13 15.86H11V13.86H13V15.86ZM13 11.86H11V5.86H13V11.86Z" fill="url(#grad1)"/>
  </svg>
);