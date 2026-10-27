import Link from 'next/link'

interface LogoProps {
  className?: string
  iconSize?: number
}

export default function Logo({ className = '', iconSize = 34 }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 text-decoration-none group select-none ${className}`}
      aria-label="CareerCatch Home"
    >
      {/* Exact circular emblem from reference: Blue arc with vibrant Orange spark */}
      <div
        className="rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105"
        style={{ width: iconSize, height: iconSize }}
      >
        <svg width={iconSize} height={iconSize} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main electric blue arc */}
          <path
            d="M16 4C9.37 4 4 9.37 4 16C4 22.63 9.37 28 16 28C21.4 28 25.95 24.45 27.5 19.5"
            stroke="#155EEF"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Vibrant warm orange accent arc */}
          <path
            d="M27.8 13.5C27.2 9.8 24.6 6.8 21.2 5.2"
            stroke="#FF9F1C"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Inner blue dot */}
          <circle cx="15.5" cy="16" r="3.2" fill="#155EEF" />
          {/* Inner orange spark */}
          <circle cx="19.5" cy="12" r="1.8" fill="#FF9F1C" />
        </svg>
      </div>

      {/* Brand Name in Navy */}
      <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-[21px] tracking-tight text-[#101B3C] leading-none">
        CareerCatch
      </span>
    </Link>
  )
}
