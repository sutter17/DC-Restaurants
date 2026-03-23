"use client"

import { useState } from "react"
import Link from "next/link"
import { Restaurant } from "@/lib/types"

interface Props {
  restaurants: Restaurant[]
  neighborhoods: string[]
  cuisines: string[]
}

export default function RestaurantGrid({ restaurants, neighborhoods, cuisines }: Props) {
  const [search, setSearch] = useState("")
  const [neighborhood, setNeighborhood] = useState("")
  const [cuisine, setCuisine] = useState("")
  const [happyHourOnly, setHappyHourOnly] = useState(false)

  const filtered = restaurants.filter((r) => {
    if (search && !r.name.toLowerCase().includes(search.toLowerCase())) return false
    if (neighborhood && r.neighborhood !== neighborhood) return false
    if (cuisine && r.cuisine !== cuisine) return false
    if (happyHourOnly && !r.happyHour) return false
    return true
  })

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search restaurants…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
        />
        <select
          value={neighborhood}
          onChange={(e) => setNeighborhood(e.target.value)}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white text-gray-700"
        >
          <option value="">All neighborhoods</option>
          {neighborhoods.map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
        <select
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white text-gray-700"
        >
          <option value="">All cuisines</option>
          {cuisines.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none px-3 py-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-50">
          <input
            type="checkbox"
            checked={happyHourOnly}
            onChange={(e) => setHappyHourOnly(e.target.checked)}
            className="accent-orange-500"
          />
          Happy Hour only
        </label>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          No restaurants match your filters.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((r) => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </div>
      )}
    </div>
  )
}

function RestaurantCard({ restaurant: r }: { restaurant: Restaurant }) {
  return (
    <Link
      href={`/restaurants/${r.id}`}
      className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-orange-300 hover:shadow-md transition-all flex flex-col gap-3"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
            {r.name}
          </h2>
          <div className="text-sm text-gray-500 mt-0.5">{r.cuisine}</div>
        </div>
        <span className="text-sm font-medium text-gray-400 shrink-0">{r.priceRange}</span>
      </div>

      <div className="flex items-center gap-1.5 text-sm text-gray-500">
        <span>📍</span>
        <span>{r.neighborhood}</span>
      </div>

      {r.happyHour && (
        <div className="flex items-center gap-1.5 text-sm">
          <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 border border-green-200 rounded-md px-2 py-0.5 font-medium">
            🍺 HH: {r.happyHour.schedule}
          </span>
        </div>
      )}

      <div className="mt-auto pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
        <span>{r.menu.length} menu sections</span>
        <span>Updated {new Date(r.lastMenuUpdate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
      </div>
    </Link>
  )
}
