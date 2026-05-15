const suppliers = [
  {
    name: 'Bali Concrete Supply',
    location: 'Denpasar',
    category: 'Concrete',
  },
  {
    name: 'Sinar Bangunan',
    location: 'Badung',
    category: 'Building Materials',
  },
  {
    name: 'Mega Electrical',
    location: 'Surabaya',
    category: 'Electrical',
  },
]

export default function SuppliersPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-black tracking-tight">
          Supplier Directory
        </h1>

        <p className="text-xl text-gray-500 mt-5">
          Find trusted construction suppliers across Indonesia.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {suppliers.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-8 hover:shadow-2xl transition"
            >
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 mb-6" />

              <div className="inline-flex px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold mb-5">
                {item.category}
              </div>

              <h2 className="text-3xl font-black">
                {item.name}
              </h2>

              <p className="text-gray-500 mt-3 text-lg">
                {item.location}
              </p>

              <button className="mt-8 px-6 py-4 rounded-2xl bg-black text-white font-semibold hover:opacity-90 transition">
                Contact Supplier
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}