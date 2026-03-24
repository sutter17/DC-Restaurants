import Link from "next/link"
import { restaurants, getAllNeighborhoods, getAllCuisines } from "@/data/restaurants"
import RestaurantGrid from "@/components/RestaurantGrid"

export default function HomePage() {
  const neighborhoods = getAllNeighborhoods()
  const cuisines = getAllCuisines()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Hero */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">DC Restaurants</h1>
        <p className="text-gray-500 text-lg">
          Browse menus, check prices, find happy hours, and compare restaurants side by side.
        </p>
      </div>

      {/* Quick-action cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <Link
          href="/items"
          className="group flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-orange-300 hover:shadow-sm transition-all"
        >
          <span className="text-2xl">🔍</span>
          <div>
            <div className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
              Find an Item
            </div>
            <div className="text-sm text-gray-500">Search burger, margarita, IPA…</div>
          </div>
        </Link>
        <Link
          href="/happy-hours"
          className="group flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-orange-300 hover:shadow-sm transition-all"
        >
          <span className="text-2xl">🍺</span>
          <div>
            <div className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
              Happy Hours
            </div>
            <div className="text-sm text-gray-500">See all specials &amp; schedules</div>
          </div>
        </Link>
        <Link
          href="/compare"
          className="group flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-orange-300 hover:shadow-sm transition-all"
        >
          <span className="text-2xl">⚖️</span>
          <div>
            <div className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
              Compare Restaurants
            </div>
            <div className="text-sm text-gray-500">Side-by-side menu &amp; price comparison</div>
          </div>
        </Link>
        <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4">
          <span className="text-2xl">📍</span>
          <div>
            <div className="font-semibold text-gray-900">{restaurants.length} Restaurants</div>
            <div className="text-sm text-gray-500">
              Across {neighborhoods.length} DC neighborhoods
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant grid with client-side filtering */}
      <RestaurantGrid
        restaurants={restaurants}
        neighborhoods={neighborhoods}
        cuisines={cuisines}
      />
    </div>
  )
}
