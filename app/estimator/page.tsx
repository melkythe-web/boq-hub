export default function EstimatorPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl font-black tracking-tight">
          Smart Estimator
        </h1>

        <p className="text-xl text-gray-500 mt-5">
          Generate fast project cost estimation using BOQ Hub AI engine.
        </p>

        <div className="mt-12 bg-white rounded-[32px] border border-gray-100 shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Building Type"
              className="px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 outline-none"
            />

            <input
              type="number"
              placeholder="Building Area (m²)"
              className="px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 outline-none"
            />

            <input
              type="text"
              placeholder="Project Location"
              className="px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 outline-none"
            />

            <select className="px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 outline-none">
              <option>Standard Quality</option>
              <option>Premium Quality</option>
              <option>Luxury Quality</option>
            </select>
          </div>

          <button className="mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-black text-lg shadow-xl hover:scale-[1.02] transition">
            Generate Estimation
          </button>
        </div>
      </div>
    </main>
  )
}