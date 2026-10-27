import Link from 'next/link'
import Logo from '@/components/common/Logo'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F0F6FF] flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-6">
        <Logo />
      </div>
      <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-xl max-w-md w-full">
        <span className="text-6xl font-black text-[#155EEF] font-display">404</span>
        <h1 className="text-2xl font-bold text-[#101B3C] mt-4 mb-2 font-display">Page Not Found</h1>
        <p className="text-sm text-slate-600 mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#155EEF] text-white font-semibold text-sm hover:bg-[#124BBF] transition-colors shadow-sm"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
