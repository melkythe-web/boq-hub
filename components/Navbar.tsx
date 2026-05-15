export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white shadow-lg border border-gray-100 flex items-center justify-center overflow-hidden">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-emerald-500 shadow-lg" />
          </div>

          <div>
            <h1 className="text-2xl font-black tracking-tight">
              BOQ Hub
            </h1>

            <p className="text-xs text-gray-500">
              Modern Construction Intelligence
            </p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="/">Home</a>
          <a href="/materials">Materials</a>
          <a href="/estimator">Estimator</a>
          <a href="/suppliers">Suppliers</a>
          <a href="/pricing">Pricing</a>
        </nav>
      </div>
    </header>
  )
}