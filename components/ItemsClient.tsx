"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { findItemResults, ItemResult } from "@/data/restaurants"

interface Props {
  allItems: { name: string; count: number }[]
}

// Broad groupings for the browse grid — makes it easy to find things
// without knowing the exact normalizedName
const GROUPS: { label: string; emoji: string; names: string[] }[] = [
  {
    label: "Burgers & Sandwiches",
    emoji: "🍔",
    names: ["Burger", "Veggie Burger", "Turkey Burger", "Cheesesteak", "Chicken Sandwich", "Fried Chicken Sandwich", "Pulled Pork Sandwich", "Sliders"],
  },
  {
    label: "Starters & Snacks",
    emoji: "🍟",
    names: ["Wings", "Nachos", "Loaded Fries", "Soft Pretzel", "Mozzarella Sticks", "Spinach Artichoke Dip", "Crab Dip", "Hummus", "Falafel", "Edamame", "Gyoza", "Takoyaki", "Charcuterie", "Soup", "Salad"],
  },
  {
    label: "Mains",
    emoji: "🍽️",
    names: ["Fish & Chips", "Fish Tacos", "Salmon", "Whole Fish", "Oysters", "Steak", "BBQ Ribs", "Roast Chicken", "Shawarma", "Lamb Chops", "Lamb Kofta", "Ramen", "Pasta", "Risotto", "Mac & Cheese", "Grain Bowl", "Rice Bowl", "Sushi Roll", "Cauliflower", "Burrata"],
  },
  {
    label: "Cocktails",
    emoji: "🍸",
    names: ["Margarita", "Old Fashioned", "Whiskey Sour", "Negroni", "Mule", "Gin & Tonic", "Gimlet", "Paloma", "Spritz", "Sour", "Martini", "Long Island Iced Tea", "Sake Cocktail", "Well Cocktail"],
  },
  {
    label: "Beer",
    emoji: "🍺",
    names: ["Draft Beer", "IPA", "Pale Ale", "Lager", "Light Beer", "Wheat Beer", "Stout", "Hard Seltzer", "Non-Alcoholic Beer"],
  },
  {
    label: "Wine & Sake",
    emoji: "🍷",
    names: ["Red Wine", "White Wine", "Rosé", "Prosecco", "Orange Wine", "Sake", "House Wine"],
  },
  {
    label: "Non-Alcoholic",
    emoji: "🥤",
    names: ["Non-Alcoholic Drink", "Non-Alcoholic Beer"],
  },
]

export default function ItemsClient({ allItems }: Props) {
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState<string | null>(null)
  const [hhOnly, setHhOnly] = useState(false)

  const allNames = useMemo(() => new Set(allItems.map((i) => i.name)), [allItems])

  // Filtered item list for the search suggestions
  const filtered = useMemo(() => {
    if (!search.trim()) return []
    const q = search.toLowerCase()
    return allItems.filter((i) => i.name.toLowerCase().includes(q)).slice(0, 12)
  }, [search, allItems])

  // Results for the selected item
  const results: ItemResult[] = useMemo(() => {
    if (!selected) return []
    const all = findItemResults(selected)
    if (hhOnly) return all.filter((r) => r.isHappyHour)
    return all
  }, [selected, hhOnly])

  // Deduplicate results: for each restaurant, show regular price + HH price together
  const byRestaurant = useMemo(() => {
    const map: Record<string, { regular: ItemResult[]; hh: ItemResult[] }> = {}
    results.forEach((r) => {
      if (!map[r.restaurantId]) map[r.restaurantId] = { regular: [], hh: [] }
      if (r.isHappyHour) map[r.restaurantId].hh.push(r)
      else map[r.restaurantId].regular.push(r)
    })
    // Sort by lowest price (regular if available, else HH)
    return Object.values(map).sort((a, b) => {
      const aPrice = a.regular[0]?.price ?? a.hh[0]?.price ?? 999
      const bPrice = b.regular[0]?.price ?? b.hh[0]?.price ?? 999
      return aPrice - bPrice
    })
  }, [results])

  const lowestPrice = byRestaurant.length > 0
    ? Math.min(...byRestaurant.map(g => g.regular[0]?.price ?? g.hh[0]?.price ?? 999))
    : null

  function selectItem(name: string) {
    setSelected(name)
    setSearch("")
  }

  return (
    <div className="space-y-6">
      {/* Search bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search: burger, margarita, IPA, wings, ramen…"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setSelected(null) }}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white shadow-sm"
          autoFocus
        />
        {filtered.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-20 overflow-hidden">
            {filtered.map((item) => (
              <button
                key={item.name}
                onClick={() => selectItem(item.name)}
                className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-orange-50 text-left transition-colors"
              >
                <span className="font-medium text-gray-900">{item.name}</span>
                <span className="text-xs text-gray-400">{item.count} restaurant{item.count !== 1 ? "s" : ""}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results panel */}
      {selected && (
        <div>
          <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-gray-900">{selected}</h2>
              <span className="text-sm text-gray-400">— {byRestaurant.length} restaurant{byRestaurant.length !== 1 ? "s" : ""}</span>
            </div>
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={hhOnly}
                onChange={(e) => setHhOnly(e.target.checked)}
                className="accent-orange-500"
              />
              Happy hour only
            </label>
          </div>

          {byRestaurant.length === 0 ? (
            <div className="text-center py-10 text-gray-400 bg-white border border-gray-200 rounded-xl">
              No {hhOnly ? "happy hour " : ""}results for &ldquo;{selected}&rdquo;
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {byRestaurant.map(({ regular, hh }) => {
                const rep = regular[0] ?? hh[0]
                const regularPrice = regular[0]?.price
                const hhPrice = hh[0]?.price
                const isLowest = (regularPrice ?? hhPrice) === lowestPrice
                return (
                  <Link
                    key={rep.restaurantId}
                    href={`/restaurants/${rep.restaurantId}`}
                    className={`group bg-white border rounded-xl p-4 hover:shadow-md transition-all flex flex-col gap-2 ${isLowest ? "border-green-300 ring-1 ring-green-200" : "border-gray-200 hover:border-orange-300"}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {rep.restaurantName}
                          {isLowest && (
                            <span className="ml-2 text-xs font-medium text-green-600 bg-green-50 border border-green-200 rounded px-1.5 py-0.5">
                              best price
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">{rep.neighborhood} · {rep.priceRange}</div>
                      </div>
                    </div>

                    {/* Menu item names */}
                    <div className="text-sm text-gray-500 italic">
                      {[...regular.map(r => r.menuItemName), ...hh.map(r => r.menuItemName)]
                        .filter((v, i, a) => a.indexOf(v) === i)
                        .join(", ")}
                    </div>

                    {/* Prices */}
                    <div className="flex flex-wrap items-center gap-3 mt-1">
                      {regularPrice !== undefined && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-xl font-bold text-gray-900">${regularPrice.toFixed(2)}</span>
                          <span className="text-xs text-gray-400">regular</span>
                        </div>
                      )}
                      {hhPrice !== undefined && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-xl font-bold text-green-700">${hhPrice.toFixed(2)}</span>
                          <span className="text-xs bg-green-50 text-green-700 border border-green-200 rounded px-1.5 py-0.5 font-medium">
                            🍺 HH · {hh[0].happyHourSchedule}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Description from first result */}
                    {rep.description && (
                      <p className="text-xs text-gray-400 leading-snug">{rep.description}</p>
                    )}
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      )}

      {/* Browse grid — shown when nothing is selected */}
      {!selected && !search && (
        <div className="space-y-6">
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Browse by type</div>
          {GROUPS.map((group) => {
            const available = group.names.filter((n) => allNames.has(n))
            if (available.length === 0) return null
            return (
              <div key={group.label}>
                <div className="flex items-center gap-2 mb-2">
                  <span>{group.emoji}</span>
                  <span className="text-sm font-semibold text-gray-700">{group.label}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {available.map((name) => {
                    const count = allItems.find((i) => i.name === name)?.count ?? 0
                    return (
                      <button
                        key={name}
                        onClick={() => selectItem(name)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-orange-300 hover:text-orange-600 hover:bg-orange-50 transition-all"
                      >
                        {name}
                        <span className="text-xs text-gray-400">{count}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
