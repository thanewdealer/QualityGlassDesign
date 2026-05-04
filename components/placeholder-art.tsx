interface PlaceholderArtProps {
  label?: string;
  variant?: 'glass-panel' | 'glass-door' | 'mirror' | 'sliding';
}

export function PlaceholderArt({
  label = 'Photo',
  variant = 'glass-panel',
}: PlaceholderArtProps) {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-bone-dim via-bone to-bone-deep">
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 400 500"
      >
        <defs>
          <linearGradient id="placeholderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b08d57" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#placeholderGrad)" />

        {variant === 'glass-panel' && (
          <>
            <rect
              x="80"
              y="60"
              width="240"
              height="380"
              fill="none"
              stroke="#b08d57"
              strokeWidth="1"
              opacity="0.5"
            />
            <line x1="200" y1="60" x2="200" y2="440" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.2" />
            <circle cx="290" cy="250" r="3" fill="#b08d57" opacity="0.6" />
          </>
        )}

        {variant === 'glass-door' && (
          <>
            <rect x="120" y="50" width="160" height="400" fill="none" stroke="#b08d57" strokeWidth="1" opacity="0.5" />
            <rect x="265" y="240" width="8" height="40" fill="#b08d57" opacity="0.6" />
          </>
        )}

        {variant === 'mirror' && (
          <>
            <rect x="60" y="80" width="280" height="340" fill="none" stroke="#b08d57" strokeWidth="1" opacity="0.5" />
            <rect x="68" y="88" width="264" height="324" fill="none" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.15" />
          </>
        )}

        {variant === 'sliding' && (
          <>
            <rect x="40" y="80" width="160" height="340" fill="none" stroke="#b08d57" strokeWidth="1" opacity="0.5" />
            <rect x="200" y="80" width="160" height="340" fill="none" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.3" />
            <line x1="40" y1="70" x2="360" y2="70" stroke="#b08d57" strokeWidth="2" opacity="0.6" />
          </>
        )}
      </svg>

      <div className="absolute inset-0 flex items-end justify-start p-6 pointer-events-none">
        <div className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-ink/30">
          {label}
        </div>
      </div>
    </div>
  );
}
