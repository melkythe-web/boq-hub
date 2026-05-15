export default function Page() {
  const projectTypes = [
    'Modern Villa',
    'Minimalist House',
    'Cafe & Restaurant',
    'Warehouse',
    'Boarding House',
    'Resort Project',
  ]

  const puprDatabase = [
    {
      code: 'AHSP-2026-001',
      category: 'Concrete Work',
      work: 'Reinforced Concrete K-250',
      unit: 'm3',
      labor: '0.500 OH',
      material: 'Concrete Ready Mix',
    },
    {
      code: 'AHSP-2026-002',
      category: 'Wall Work',
      work: 'Lightweight Brick Installation',
      unit: 'm2',
      labor: '0.350 OH',
      material: 'AAC Block',
    },
    {
      code: 'AHSP-2026-003',
      category: 'Painting Work',
      work: 'Interior Wall Painting',
      unit: 'm2',
      labor: '0.120 OH',
      material: 'Premium Interior Paint',
    },
  ]

  const materials = [
    {
      name: 'Nippon Vinilex',
      brand: 'Nippon Paint',
      price: 'Rp 385.000',
    },
    {
      name: 'SikaTop 107',
      brand: 'Sika',
      price: 'Rp 225.000',
    },
    {
      name: 'Schneider Socket',
      brand: 'Schneider Electric',
      price: 'Rp 145.000',
    },
  ]

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-black">
      {/* NAVBAR */}
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
            <a href="#">Home</a>
            <a href="#">Materials</a>
            <a href="#">Estimator</a>
            <a href="/suppliers">Suppliers</a>
            <a href="#">Projects</a>
            <a href="/pricing">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="px-5 py-3 rounded-2xl border border-gray-200 bg-white font-semibold text-sm hover:bg-gray-50 transition">
              Login
            </button>

            <button className="px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white text-sm font-semibold shadow-xl hover:scale-[1.03] transition">
              Register
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-sm font-medium text-indigo-700 mb-6">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-600 via-purple-600 to-emerald-500" />
              PUPR-Based Smart Construction Platform
            </div>

            <h2 className="text-6xl font-black leading-tight tracking-tight">
              Build Smarter. Estimate Faster.
            </h2>

            <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-2xl">
              Modern construction platform for project estimation, material databases, supplier management, and smart PUPR-based calculation systems.
            </p>

            {/* SEARCH */}
            <div className="mt-10 bg-white rounded-3xl p-3 border border-gray-200 shadow-lg flex flex-col lg:flex-row gap-3">
              <input
                type="text"
                placeholder="Search materials, brands, suppliers..."
                className="flex-1 px-5 py-4 rounded-2xl bg-gray-50 outline-none"
              />

              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-bold shadow-lg hover:scale-[1.02] transition">
                Search
              </button>
            </div>

            {/* QUICK START */}
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <button className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-xl transition text-left">
                <div className="w-14 h-14 rounded-2xl bg-indigo-100 mb-4" />
                <h3 className="font-bold text-lg">
                  Calculate Cost
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Fast project budget estimation
                </p>
              </button>

              <button className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-xl transition text-left">
                <div className="w-14 h-14 rounded-2xl bg-pink-100 mb-4" />
                <h3 className="font-bold text-lg">
                  Browse Materials
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Explore premium brands
                </p>
              </button>

              <button className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-xl transition text-left">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 mb-4" />
                <h3 className="font-bold text-lg">
                  Find Suppliers
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Trusted suppliers near you
                </p>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <h3 className="text-4xl font-black">12K+</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Materials
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black">500+</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Brands
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black">2.5K+</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Projects
                </p>
              </div>
            </div>
          </div>

          {/* DASHBOARD */}
          <div>
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-[0_25px_80px_rgba(0,0,0,0.08)] p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-black">
                    Bali Villa Project
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Real-time construction monitoring
                  </p>
                </div>

                <div className="px-4 py-2 rounded-xl bg-emerald-100 text-emerald-700 font-semibold text-sm">
                  On Progress
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-indigo-50 rounded-2xl p-5">
                  <p className="text-sm text-gray-500">
                    Budget
                  </p>
                  <h4 className="text-2xl font-black mt-2">
                    Rp 2.8B
                  </h4>
                </div>

                <div className="bg-pink-50 rounded-2xl p-5">
                  <p className="text-sm text-gray-500">
                    Materials
                  </p>
                  <h4 className="text-2xl font-black mt-2">
                    1,254
                  </h4>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-5">
                  <p className="text-sm text-gray-500">
                    Progress
                  </p>
                  <h4 className="text-2xl font-black mt-2">
                    72%
                  </h4>
                </div>
              </div>

              <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-5">
                  <h4 className="text-xl font-black">
                    Popular Materials
                  </h4>

                  <button className="text-sm text-indigo-600 font-semibold">
                    View All
                  </button>
                </div>

                <div className="space-y-4">
                  {materials.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-4 border border-gray-100 flex items-center justify-between hover:shadow-lg transition"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />

                        <div>
                          <h5 className="font-bold">
                            {item.name}
                          </h5>
                          <p className="text-sm text-gray-500">
                            {item.brand}
                          </p>
                        </div>
                      </div>

                      <div className="font-black">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PUPR DATABASE */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-5xl font-black">
              BOQ Hub PUPR 2026 Engine
            </h2>

            <p className="text-xl text-gray-500 mt-4 max-w-3xl">
              Construction calculation engine based on Indonesian PUPR AHSP 2026 standards.
            </p>
          </div>

          <div className="px-5 py-3 rounded-2xl bg-emerald-100 text-emerald-700 font-bold">
            Government Standard
          </div>
        </div>

        <div className="bg-white rounded-[32px] border border-gray-100 shadow-xl overflow-hidden">
          <div className="grid grid-cols-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm">
            <div className="p-5">Code</div>
            <div className="p-5">Category</div>
            <div className="p-5">Work Item</div>
            <div className="p-5">Unit</div>
            <div className="p-5">Labor</div>
            <div className="p-5">Material</div>
          </div>

          {puprDatabase.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-6 border-t border-gray-100 hover:bg-indigo-50 transition text-sm"
            >
              <div className="p-5 font-semibold text-indigo-600">
                {item.code}
              </div>

              <div className="p-5">
                {item.category}
              </div>

              <div className="p-5 font-medium">
                {item.work}
              </div>

              <div className="p-5">
                {item.unit}
              </div>

              <div className="p-5">
                {item.labor}
              </div>

              <div className="p-5">
                {item.material}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-2xl font-black text-indigo-600">
              AHSP Engine
            </h3>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Automatic construction calculations using official PUPR coefficients and work analysis.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-2xl font-black text-pink-600">
              Regional Pricing
            </h3>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Dynamic regional material pricing for Bali, Jakarta, Surabaya, and other Indonesian cities.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-2xl font-black text-emerald-600">
              Smart RAB Generator
            </h3>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Generate professional RAB documents automatically based on PUPR 2026 standards.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT TYPES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-5xl font-black">
              Start From Your Project Type
            </h2>
            <p className="text-xl text-gray-500 mt-4">
              Choose your building category to begin estimation.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectTypes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-left"
            >
              <div className="h-56 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400" />

              <div className="p-6">
                <h3 className="text-2xl font-black">
                  {item}
                </h3>

                <p className="text-gray-500 mt-3 leading-relaxed">
                  Generate smart construction estimation, recommended materials, and project timeline.
                </p>

                <button className="mt-6 px-5 py-3 rounded-2xl bg-black text-white font-semibold">
                  Start Estimation
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ESTIMATOR FLOW */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-[40px] border border-gray-100 shadow-xl p-10">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-black">
              BOQ Hub Smart Estimator
            </h2>

            <p className="text-xl text-gray-500 mt-5 max-w-3xl mx-auto">
              Easy step-by-step calculation for contractors, developers, and property owners.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {[
              'Building Type',
              'Building Size',
              'Project Location',
              'Quality Level',
              'Get Result',
            ].map((step, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-6 border border-indigo-100 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white mx-auto flex items-center justify-center text-2xl font-black mb-5">
                  {index + 1}
                </div>

                <h3 className="font-black text-lg">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOGIN */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-5xl font-black leading-tight">
              Access Your BOQ Hub Workspace
            </h2>

            <p className="text-xl text-gray-500 mt-6 leading-relaxed max-w-xl">
              Save projects, generate RAB calculations, manage suppliers, and collaborate with your construction team.
            </p>
          </div>

          <div className="bg-white rounded-[32px] border border-gray-100 shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="w-24 h-24 mx-auto rounded-[28px] bg-white border border-gray-100 shadow-xl flex items-center justify-center mb-5 overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-emerald-500 shadow-xl" />
              </div>

              <h3 className="text-3xl font-black">
                Welcome to BOQ Hub
              </h3>

              <p className="text-gray-500 mt-2">
                Login to continue your construction workflow
              </p>
            </div>

            <div className="space-y-5">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 outline-none"
              />

              <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-black text-lg shadow-xl hover:scale-[1.02] transition">
                Login
              </button>

              <button className="w-full py-4 rounded-2xl border border-gray-200 bg-white font-semibold hover:bg-gray-50 transition">
                Create Premium Account
              </button>

              <p className="text-center text-sm text-gray-500 pt-2">
                Pricing information will appear after clicking register.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black">
            Professional Construction Ecosystem
          </h2>

          <p className="text-xl text-gray-500 mt-5 max-w-3xl mx-auto">
            Designed to be simple, modern, and easy to use for construction businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            'Material Database',
            'AI Cost Estimator',
            'Supplier Marketplace',
            'Brand Comparison',
            'Project Monitoring',
            'Mobile Friendly',
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 mb-6" />

              <h3 className="text-2xl font-black">
                {feature}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Professional tools designed for modern contractors, developers, and construction teams.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-emerald-500" />
              </div>

              <div>
                <h3 className="text-3xl font-black">
                  BOQ Hub
                </h3>
              </div>
            </div>

            <p className="text-gray-400 mt-3 max-w-md leading-relaxed">
              Smart construction ecosystem for project estimation, material databases, supplier networks, and modern project management.
            </p>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
  <a href="/">Home</a>
  <a href="/materials">Materials</a>
  <a href="/estimator">Estimator</a>
  <a href="/suppliers">Suppliers</a>
  <a href="/projects">Projects</a>
  <a href="/pricing">Pricing</a>
</nav>
        </div>
      </footer>
    </main>
  )
}
