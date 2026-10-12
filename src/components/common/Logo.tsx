interface LogoProps {
  className?: string
  iconSize?: number
  showDot?: boolean
}

export default function Logo({ className = '', iconSize = 38, showDot = true }: LogoProps) {
  return (
    <a
      href="/"
      className={`inline-flex items-center gap-2.5 text-decoration-none group select-none ${className}`}
      aria-label="CareerCatch Home"
    >
      {/* Icon Badge */}
      <div
        className="rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105"
        style={{
          width: iconSize,
          height: iconSize,
          background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
          border: '1px solid #BFDBFE',
          boxShadow: '0 1px 2px rgba(37, 99, 235, 0.08)',
        }}
      >
        <svg
          width={Math.round(iconSize * 0.62)}
          height={Math.round(iconSize * 0.62)}
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Catch arc */}
          <path
            d="M20.5 7.8C18.5 5.5 15.5 4 12 4C6.48 4 2 8.48 2 14C2 19.52 6.48 24 12 24C15.5 24 18.5 22.5 20.5 20.2"
            stroke="#2563EB"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Inner focus arc */}
          <path
            d="M17.5 10.5C16.2 9.2 14.2 8.5 12 8.5C8.96 8.5 6.5 10.96 6.5 14C6.5 17.04 8.96 19.5 12 19.5C14.2 19.5 16.2 18.8 17.5 17.5"
            stroke="#3B82F6"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Amber opportunity spark dot */}
          <circle cx="13" cy="14" r="2.8" fill="#F59E0B" />
        </svg>
      </div>

      {/* Brand Name */}
      <span className="font-['Outfit'] font-black text-xl md:text-2xl tracking-tight text-slate-900 leading-none">
        CareerCatch
        {showDot && <span className="text-[#F59E0B]">.</span>}
      </span>
    </a>
  )
}
