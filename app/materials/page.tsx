const materials = [
  {
    name: 'SikaTop 107',
    brand: 'Sika',
    category: 'Waterproofing',
    price: 'Rp 225.000',
  },
  {
    name: 'Nippon Vinilex',
    brand: 'Nippon Paint',
    category: 'Paint',
    price: 'Rp 385.000',
  },
  {
    name: 'Schneider Socket',
    brand: 'Schneider Electric',
    category: 'Electrical',
    price: 'Rp 145.000',
  },
]

export default function MaterialsPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] px-6 py-14">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-6xl font-black tracking-tight">
            Material Database
          </h1>

          <p className="text-xl text-gray-500 mt-4 max-w-3xl">
            Browse verified construction materials from trusted brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition"
            >
              <div className="h-56 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />

              <div className="p-7">
                <div className="inline-flex px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold mb-5">
                  {item.category}
                </div>

                <h2 className="text-3xl font-black">
                  {item.name}
                </h2>

                <p className="text-gray-500 mt-2 font-medium">
                  {item.brand}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">
                      Estimated Price
                    </p>

                    <h3 className="text-2xl font-black mt-1">
                      {item.price}
                    </h3>
                  </div>

                  <button className="px-5 py-3 rounded-2xl bg-black text-white font-semibold hover:opacity-90 transition">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}