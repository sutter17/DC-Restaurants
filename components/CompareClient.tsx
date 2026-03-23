"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Restaurant, MenuItem } from "@/lib/types"

interface Props {
  restaurants: Restaurant[]
}

export default function CompareClient({ restaurants }: Props) {
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [category, setCategory] = useState("")
  const [happyHourMode, setHappyHourMode] = useState(false)

  const toggleRestaurant = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const selected = restaurants.filter((r) => selectedIds.includes(r.id))

  // Collect all categories from selected restaurants
  const availableCategories = useMemo(() => {
    const cats = new Set<string>()
    selected.forEach((r) => {
      const sections = happyHourMode ? (r.happyHour?.sections ?? []) : r.menu
      sections.forEach((s) => s.items.forEach((i) => cats.add(i.category)))
    })
    return [...cats].sort()
  }, [selected, happyHourMode])

  // For each category, collect items per restaurant
  interface CompareRow {
    category: string
    itemName: string
    description?: string
    byRestaurant: Record<string, number | null>
  }

  const rows: CompareRow[] = useMemo(() => {
    if (selected.length === 0) return []

    // Build a map: category -> itemName -> { restaurantId -> price }
    const map: Record<string, Record<string, { description?: string; prices: Record<string, number> }>> = {}

    selected.forEach((r) => {
      const sections = happyHourMode ? (r.happyHour?.sections ?? []) : r.menu
      sections.forEach((s) => {
        s.items.forEach((item) => {
          if (category && item.category !== category) return
          if (!map[item.category]) map[item.category] = {}
          const key = item.name.toLowerCase()
          if (!map[item.category][key]) {
            map[item.category][key] = { description: item.description, prices: {} }
          }
          map[item.category][key].prices[r.id] = item.price
          // Use description from first restaurant that has it
          if (!map[item.category][key].description && item.description) {
            map[item.category][key].description = item.description
          }
        })
      })
    })

    const result: CompareRow[] = []
    Object.entries(map).forEach(([cat, items]) => {
      Object.entries(items).forEach(([, data]) => {
        const byRestaurant: Record<string, number | null> = {}
        selected.forEach((r) => {
          byRestaurant[r.id] = data.prices[r.id] ?? null
        })
        // Only include items that exist in at least 2 selected restaurants
        const presentCount = Object.values(byRestaurant).filter((v) => v !== null).length
        if (presentCount >= 1) {
          // Find the display name: use the actual item name from the first restaurant that has it
          let displayName = ""
          let description = data.description
          selected.forEach((r) => {
            if (displayName) return
            const sections = happyHourMode ? (r.happyHour?.sections ?? []) : r.menu
            sections.forEach((s) => {
              s.items.forEach((item) => {
                if (item.category === cat && data.prices[r.id] === item.price && !displayName) {
                  displayName = item.name
                  if (!description) description = item.description
                }
              })
            })
          })
          result.push({
            category: cat,
            itemName: displayName,
            description,
            byRestaurant,
          })
        }
      })
    })

    return result
  }, [selected, category, happyHourMode])

  // Group rows by category for display
  const grouped = useMemo(() => {
    const g: Record<string, CompareRow[]> = {}
    rows.forEach((row) => {
      if (!g[row.category]) g[row.category] = []
      g[row.category].push(row)
    })
    return g
  }, [rows])

  // Find lowest price in each row (for highlighting)
  const lowestInRow = (row: CompareRow): number | null => {
    const prices = Object.values(row.byRestaurant).filter((v): v is number => v !== null)
    return prices.length > 0 ? Math.min(...prices) : null
  }

  return (
    <div>
      {/* Controls */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6 space-y-5">
        {/* Restaurant selection */}
        <div>
          <div className="text-sm font-semibold text-gray-700 mb-2">
            Select restaurants to compare
          </div>
          <div className="flex flex-wrap gap-2">
            {restaurants.map((r) => {
              const active = selectedIds.includes(r.id)
              return (
                <button
                  key={r.id}
                  onClick={() => toggleRestaurant(r.id)}
                  className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-all ${
                    active
                      ? "bg-orange-500 text-white border-orange-500 shadow-sm"
                      : "bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:text-orange-600"
                  }`}
                >
                  {r.name}
                  <span className="ml-1.5 opacity-60 font-normal text-xs">{r.neighborhood}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Options row */}
        <div className="flex flex-wrap items-center gap-3 border-t border-gray-100 pt-4">
          {/* Happy hour toggle */}
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={happyHourMode}
              onChange={(e) => {
                setHappyHourMode(e.target.checked)
                setCategory("")
              }}
              className="accent-orange-500"
            />
            <span className="font-medium">Happy Hour menus only</span>
          </label>

          {/* Category filter */}
          {selected.length > 0 && (
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white text-gray-700 ml-auto"
            >
              <option value="">All categories</option>
              {availableCategories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* Empty states */}
      {selectedIds.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <div className="text-4xl mb-3">⚖️</div>
          <div className="font-medium text-gray-600 mb-1">Select restaurants above to compare</div>
          <div className="text-sm">Choose 2 or more to see menu items side by side</div>
        </div>
      )}

      {selectedIds.length > 0 && rows.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          No items found{category ? ` in "${category}"` : ""}.
          {happyHourMode && selected.some((r) => !r.happyHour) && (
            <div className="mt-1 text-sm">
              Note: {selected.filter((r) => !r.happyHour).map((r) => r.name).join(", ")} {selected.filter((r) => !r.happyHour).length === 1 ? "has" : "have"} no happy hour menu.
            </div>
          )}
        </div>
      )}

      {/* Comparison table */}
      {selected.length > 0 && rows.length > 0 && (
        <div className="space-y-6">
          {happyHourMode && (
            <div className="flex flex-wrap gap-2 text-sm">
              {selected.map((r) => (
                <span key={r.id} className={`px-2 py-1 rounded-md border text-xs font-medium ${r.happyHour ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-600 border-red-200"}`}>
                  {r.name}: {r.happyHour ? r.happyHour.schedule : "No happy hour"}
                </span>
              ))}
            </div>
          )}

          {Object.entries(grouped).map(([cat, catRows]) => (
            <div key={cat} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              {/* Category header */}
              <div className="bg-gray-50 border-b border-gray-200 px-5 py-3 flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">{cat}</h3>
                <span className="text-xs text-gray-400">{catRows.length} item{catRows.length !== 1 ? "s" : ""}</span>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left px-5 py-2.5 font-medium text-gray-500 w-1/3">Item</th>
                      {selected.map((r) => (
                        <th key={r.id} className="text-left px-4 py-2.5 font-medium text-gray-700 min-w-32">
                          <Link href={`/restaurants/${r.id}`} className="hover:text-orange-600 transition-colors">
                            {r.name}
                          </Link>
                          <div className="text-xs font-normal text-gray-400">{r.neighborhood}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {catRows.map((row, i) => {
                      const lowest = lowestInRow(row)
                      return (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                          <td className="px-5 py-3">
                            <div className="font-medium text-gray-900">{row.itemName}</div>
                            {row.description && (
                              <div className="text-xs text-gray-400 mt-0.5 leading-snug line-clamp-2">{row.description}</div>
                            )}
                          </td>
                          {selected.map((r) => {
                            const price = row.byRestaurant[r.id]
                            const isLowest = price !== null && price === lowest
                            const multiplePresent = Object.values(row.byRestaurant).filter((v) => v !== null).length > 1
                            return (
                              <td key={r.id} className="px-4 py-3">
                                {price !== null ? (
                                  <span
                                    className={`inline-flex items-center gap-1 font-semibold ${
                                      isLowest && multiplePresent
                                        ? "text-green-700 bg-green-50 border border-green-200 rounded-md px-2 py-0.5"
                                        : "text-gray-900"
                                    }`}
                                  >
                                    ${price.toFixed(2)}
                                    {isLowest && multiplePresent && (
                                      <span className="text-xs font-normal text-green-600">best</span>
                                    )}
                                  </span>
                                ) : (
                                  <span className="text-gray-300 text-xs">—</span>
                                )}
                              </td>
                            )
                          })}
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
