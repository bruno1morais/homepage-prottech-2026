import React from 'react';

export const InfraIcon: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path d="M2 20H22V22H2V20ZM4 16.5V4H6V16.5C6 17.33 5.33 18 4.5 18C3.67 18 3 17.33 3 16.5H4ZM10 16.5V4H12V16.5C12 17.33 11.33 18 10.5 18C9.67 18 9 17.33 9 16.5H10ZM20.5 18C19.67 18 19 17.33 19 16.5H20V4H18V16.5C18 17.33 17.33 18 16.5 18C15.67 18 15 17.33 15 16.5H16V4H14V16.5C14 17.33 14.67 18 15.5 18H20.5Z" fill="url(#grad1)"/>
  </svg>
);