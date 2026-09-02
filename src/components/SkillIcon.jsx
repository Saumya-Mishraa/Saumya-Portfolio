// Simplified, recognizable single-color technology marks. Drawn as original line/shape
// icons (not traced logo assets) so they read clearly against the dark palette.
const icons = {
  react: (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="3.4" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.6">
        <ellipse cx="24" cy="24" rx="18" ry="7.2" />
        <ellipse cx="24" cy="24" rx="18" ry="7.2" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="18" ry="7.2" transform="rotate(120 24 24)" />
      </g>
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="6" y="6" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M20 18v11.4c0 2.4-1.1 3.2-2.8 3.2-1.5 0-2.6-.6-3.4-1.6M33.6 17.8c-.9-.7-2-1.2-3.4-1.2-2 0-3.3 1-3.3 2.5 0 1.7 1.4 2.3 3.6 3.1 2.9 1 4.6 2 4.6 4.6 0 2.7-2.2 4.3-5.2 4.3-2.2 0-3.9-.8-5-2.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  html5: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M9 6h30l-2.7 30L24 40l-12.3-4L9 6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M24 12v22M15 12h18l-.6 6H24m8.5 0-.9 10L24 33.2m-8-11 .9 10L24 33.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  css3: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M9 6h30l-2.7 30L24 40l-12.3-4L9 6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M33 12H15l.5 5.5H32l-.9 10L24 30.5l-7.6-2.6-.5-5.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M24 5 41 15v18L24 43 7 33V15L24 5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M18 22c0-3 2.4-5 6-5s6 2 6 5-2.4 4-6 5-6 2-6 5 2.4 5 6 5 6-2 6-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  express: (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M6 32c6-14 14-20 20-20 3.5 0 5.5 2 5.5 5 0 6-6 10-14 10-4 0-6-2-6-2M20 25c4 4 9 9 15 9 4 0 7-2 7-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M24 6c6 6 9 13 9 20 0 6-4 10-9 12-5-2-9-6-9-12 0-7 3-14 9-20z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M24 16v26" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="16" cy="14" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="34" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="32" cy="24" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 17v14M16 20c0 4 4 4 13 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M24 5c-10.5 0-19 8.5-19 19 0 8.4 5.4 15.4 13 17.9.9.2 1.3-.4 1.3-.9v-3.4c-5.3 1.1-6.4-2.3-6.4-2.3-.9-2.2-2.1-2.8-2.1-2.8-1.7-1.2.1-1.1.1-1.1 1.9.1 2.9 2 2.9 2 1.7 2.9 4.4 2 5.5 1.6.2-1.3.7-2 1.2-2.5-4.2-.5-8.6-2.1-8.6-9.5 0-2.1.7-3.8 2-5.1-.2-.5-.9-2.5.2-5.2 0 0 1.6-.5 5.2 2 1.5-.4 3.1-.6 4.7-.6s3.2.2 4.7.6c3.6-2.5 5.2-2 5.2-2 1 2.7.4 4.7.2 5.2 1.2 1.3 2 3 2 5.1 0 7.4-4.4 9-8.6 9.5.7.6 1.3 1.8 1.3 3.6v5.4c0 .5.4 1.1 1.3.9 7.6-2.5 13-9.5 13-17.9 0-10.5-8.5-19-19-19z"
        fill="currentColor"
      />
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M19 6h6v12h-6a6 6 0 1 1 0-12z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M25 6h6a6 6 0 1 1 0 12h-6z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M25 18h5a6 6 0 1 1 -6 6z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M19 18h6v12h-6a6 6 0 1 1 0-12z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="22" cy="36" r="5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M14 24c1.5-6 5-9 10-9 6 0 7.5 4.5 11 4.5 3 0 5-1.5 6.5-4.5-1.5 6-5 9-10 9-6 0-7.5-4.5-11-4.5-3 0-5 1.5-6.5 4.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M6 33c1.5-6 5-9 10-9 6 0 7.5 4.5 11 4.5 3 0 5-1.5 6.5-4.5-1.5 6-5 9-10 9-6 0-7.5-4.5-11-4.5-3 0-5 1.5-6.5 4.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  responsive: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="5" y="10" width="27" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13 32h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="30" y="18" width="13" height="21" rx="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M35.5 34.5h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  restapi: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M17 12 7 24l10 12M31 12l10 12-10 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="2.6" fill="currentColor" />
    </svg>
  ),
  jwt: (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="15" cy="24" r="7.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M22 24h19M34 24v6M40 24v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  mongoose: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="7" y="9" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="27" y="9" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="17" y="29" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14 19v4a4 4 0 0 0 4 4h2M34 19v4a4 4 0 0 1-4 4h-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  mysql: (
    <svg viewBox="0 0 48 48" fill="none">
      <ellipse cx="24" cy="12" rx="15" ry="5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 12v12c0 2.8 6.7 5 15 5s15-2.2 15-5V12" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 24v12c0 2.8 6.7 5 15 5s15-2.2 15-5V24" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  postman: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M6 24 42 8 27 42l-5-14-14-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M22 28 42 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  vite: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M27 4 10 28h11l-4 16 21-26H27l6-14z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  npm: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="6" y="6" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14 14h20v20h-6V20h-4v14h-6V14z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  vscode: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="6" y="8" width="36" height="32" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M18 18l-6 6 6 6M30 18l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  vercel: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M24 8 42 38H6L24 8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  render: (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M14 32a8 8 0 0 1 1.2-15.9 10 10 0 0 1 19.3-2.6A7.5 7.5 0 0 1 34 32H14z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M24 24v12M19 29l5-5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  githubpages: (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 24h36M24 6c4.5 5 7 11 7 18s-2.5 13-7 18c-4.5-5-7-11-7-18s2.5-13 7-18z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="6" y="6" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13 16h10M18 16v16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M28 30c0 2 1.6 3 4 3s4-1 4-3c0-4-8-2-8-6 0-2 1.8-3 4-3s3.6.8 4 2.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.6" />
      <path d="M17 15v18M17 15l15 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31 15v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M24 6l3.6 10.4L38 20l-10.4 3.6L24 34l-3.6-10.4L10 20l10.4-3.6L24 6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M38 30l1.8 5.2L45 37l-5.2 1.8L38 44l-1.8-5.2L31 37l5.2-1.8L38 30z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function SkillIcon({ name, className }) {
  return (
    <span className={className} aria-hidden="true">
      {icons[name] || null}
    </span>
  );
}
