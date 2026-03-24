"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import Link from "next/link"
import { searchMenuItems, findItemResults, ItemResult, getAllNormalizedNames } from "@/data/restaurants"

interface Props {
  allItems: { name: string; count: number }[]
  neighborhoods: string[]
}

const GROUPS: { label: string; emoji: string; names: string[] }[] = [
  {
    label: "Burgers & Sandwiches",
    emoji: "🍔",
    names: ["Burger", "Veggie Burger", "Turkey Burger", "Cheesesteak", "Chicken Sandwich", "Fried Chicken Sandwich", "Pulled Pork Sandwich", "Sliders"],
  },
  {
    label: "Starters & Snacks",
    emoji: "🍟",
    names: ["Wings", "Fried Chicken", "Nachos", "Loaded Fries", "Soft Pretzel", "Mozzarella Sticks", "Spinach Artichoke Dip", "Crab Dip", "Hummus", "Falafel", "Edamame", "Gyoza", "Takoyaki", "Charcuterie", "Soup", "Salad", "Oysters", "Burrata"],
  },
  {
    label: "Mains",
    emoji: "🍽️",
    names: ["Fish & Chips", "Fish Tacos", "Salmon", "Whole Fish", "Steak", "BBQ Ribs", "Roast Chicken", "Shawarma", "Lamb Chops", "Lamb Kofta", "Ramen", "Pasta", "Risotto", "Mac & Cheese", "Grain Bowl", "Rice Bowl", "Sushi Roll", "Cauliflower"],
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
]

export default function ItemsClient({ allItems, neighborhoods }: Props) {
  const [query, setQuery] = useState("")
  const [neighborhood, setNeighborhood] = useState("")
  const [hhOnly, setHhOnly] = useState(false)
  const [detail, setDetail] = useState<ItemResult | null>(null)
  const detailRef = useRef<HTMLDivElement>(null)

  const allNames = useMemo(() => new Set(allItems.map((i) => i.name)), [allItems])

  // Full-text search results (when query is free-text)
  const searchResults: ItemResult[] = useMemo(() => {
    if (!query.trim()) return []
    return searchMenuItems(query)
  }, [query])

  // Apply neighborhood + HH filters
  const filteredResults = useMemo(() => {
    let r = searchResults
    if (neighborhood) r = r.filter((i) => i.neighborhood === neighborhood)
    if (hhOnly) r = r.filter((i) => i.isHappyHour)
    return r
  }, [searchResults, neighborhood, hhOnly])

  const lowestPrice = filteredResults.length > 0
    ? Math.min(...filteredResults.map((r) => r.price))
    : null

  // Close detail panel when clicking outside
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (detailRef.current && !detailRef.current.contains(e.target as Node)) {
        setDetail(null)
      }
    }
    if (detail) document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [detail])

  function handleBrowseClick(normalizedName: string) {
    setQuery(normalizedName)
  }

  return (
    <div className="space-y-6">
      {/* Search + filters row */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="chicken tacos, old fashioned, IPA, wings…"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setDetail(null) }}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white shadow-sm"
            autoFocus
          />
          {query && (
            <button
              onClick={() => { setQuery(""); setDetail(null) }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 text-xl leading-none"
              aria-label="Clear"
            >
              ×
            </button>
          )}
        </div>
        <select
          value={neighborhood}
          onChange={(e) => setNeighborhood(e.target.value)}
          className="border border-gray-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white text-gray-700"
        >
          <option value="">All neighborhoods</option>
          {neighborhoods.map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none px-4 py-3 border border-gray-200 rounded-xl bg-white hover:bg-gray-50">
          <input
            type="checkbox"
            checked={hhOnly}
            onChange={(e) => setHhOnly(e.target.checked)}
            className="accent-orange-500"
          />
          Happy hour only
        </label>
      </div>

      {/* Search results */}
      {query.trim() && (
        <div>
          {filteredResults.length === 0 ? (
            <div className="text-center py-12 text-gray-400 bg-white border border-gray-200 rounded-xl">
              <div className="text-3xl mb-2">🤷</div>
              <div className="font-medium text-gray-600">No results for &ldquo;{query}&rdquo;</div>
              <div className="text-sm mt-1">Try different words or browse by category below</div>
            </div>
          ) : (
            <>
              <div className="text-sm text-gray-500 mb-3">
                {filteredResults.length} result{filteredResults.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
                {neighborhood && <span> in {neighborhood}</span>}
              </div>

              {/* Results table */}
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <th className="text-left px-5 py-3 font-semibold text-gray-600">Restaurant</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-600">Item</th>
                      <th className="text-right px-5 py-3 font-semibold text-gray-600">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filteredResults.map((result, i) => {
                      const isLowest = result.price === lowestPrice
                      const isActive = detail === result
                      return (
                        <>
                          <tr
                            key={result.restaurantId + result.menuItemName + i}
                            className={`hover:bg-gray-50 transition-colors ${isActive ? "bg-orange-50" : ""}`}
                          >
                            <td className="px-5 py-3">
                              <Link
                                href={`/restaurants/${result.restaurantId}`}
                                className="font-medium text-gray-900 hover:text-orange-600 transition-colors"
                              >
                                {result.restaurantName}
                              </Link>
                              <div className="text-xs text-gray-400 mt-0.5">{result.neighborhood}</div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="font-medium text-gray-800">{result.menuItemName}</div>
                              <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                                {result.isHappyHour && (
                                  <span className="text-xs bg-green-50 text-green-700 border border-green-200 rounded px-1.5 py-0.5 font-medium">
                                    🍺 HH · {result.happyHourSchedule}
                                  </span>
                                )}
                                <span className="text-xs text-gray-400">{result.menuSection}</span>
                              </div>
                            </td>
                            <td className="px-5 py-3 text-right">
                              <button
                                onClick={() => setDetail(isActive ? null : result)}
                                title="Click to see details"
                                className={`inline-flex items-center gap-1.5 font-bold rounded-lg px-2.5 py-1 transition-all ${
                                  isLowest
                                    ? "text-green-700 bg-green-50 border border-green-200 hover:bg-green-100"
                                    : "text-gray-900 hover:bg-gray-100 border border-transparent hover:border-gray-200"
                                } ${isActive ? "ring-2 ring-orange-400" : ""}`}
                              >
                                ${result.price.toFixed(2)}
                                {isLowest && <span className="text-xs font-normal text-green-600">best</span>}
                                <span className="text-gray-400 text-xs">ⓘ</span>
                              </button>
                            </td>
                          </tr>
                          {/* Inline detail panel */}
                          {isActive && (
                            <tr key={`detail-${i}`} className="bg-orange-50">
                              <td colSpan={3} className="px-5 py-4">
                                <div ref={detailRef} className="flex flex-col gap-1.5 text-sm">
                                  <div className="font-semibold text-gray-900 text-base">{result.menuItemName}</div>
                                  {result.description && (
                                    <div className="text-gray-700 leading-snug">{result.description}</div>
                                  )}
                                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-gray-500">
                                    <span>
                                      <span className="font-medium text-gray-700">Section:</span> {result.menuSection}
                                    </span>
                                    <span>
                                      <span className="font-medium text-gray-700">Price:</span> ${result.price.toFixed(2)}
                                    </span>
                                    {result.isHappyHour && result.happyHourSchedule && (
                                      <span className="text-green-700 font-medium">
                                        Happy Hour: {result.happyHourSchedule}
                                      </span>
                                    )}
                                    <span>
                                      <span className="font-medium text-gray-700">Updated:</span>{" "}
                                      {new Date(result.lastUpdated).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                                    </span>
                                  </div>
                                  <div className="mt-1">
                                    <Link
                                      href={`/restaurants/${result.restaurantId}`}
                                      className="text-xs text-orange-600 hover:underline font-medium"
                                    >
                                      View full menu at {result.restaurantName} →
                                    </Link>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      )}

      {/* Browse grid — shown when no query */}
      {!query.trim() && (
        <div className="space-y-6">
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Or browse by type</div>
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
                        onClick={() => handleBrowseClick(name)}
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
