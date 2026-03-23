import { notFound } from "next/navigation"
import Link from "next/link"
import { getRestaurantById, restaurants } from "@/data/restaurants"
import { MenuSection, MenuItem } from "@/lib/types"

export function generateStaticParams() {
  return restaurants.map((r) => ({ id: r.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const r = getRestaurantById(id)
  if (!r) return {}
  return { title: `${r.name} – DC Restaurants`, description: `Menu and happy hour info for ${r.name} in ${r.neighborhood}` }
}

export default async function RestaurantPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const r = getRestaurantById(id)
  if (!r) notFound()

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-5 flex items-center gap-1.5">
        <Link href="/" className="hover:text-orange-600 transition-colors">Restaurants</Link>
        <span>/</span>
        <span className="text-gray-900">{r.name}</span>
      </nav>

      {/* Header */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{r.name}</h1>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="text-sm text-gray-500">{r.cuisine}</span>
              <span className="text-gray-300">·</span>
              <span className="text-sm text-gray-500">{r.neighborhood}</span>
              <span className="text-gray-300">·</span>
              <span className="text-sm font-medium text-gray-500">{r.priceRange}</span>
            </div>
            <div className="text-sm text-gray-500 mt-1">{r.address}</div>
            {r.phone && <div className="text-sm text-gray-500 mt-0.5">{r.phone}</div>}
          </div>
          <div className="flex gap-2 shrink-0">
            <Link
              href={`/compare?restaurants=${r.id}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium bg-orange-50 text-orange-700 border border-orange-200 rounded-lg px-3 py-1.5 hover:bg-orange-100 transition-colors"
            >
              ⚖️ Compare
            </Link>
          </div>
        </div>

        {/* Hours */}
        <div className="mt-5 border-t border-gray-100 pt-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Hours</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-1">
            {days.map((day) => (
              <div key={day} className="flex items-center gap-2 text-sm">
                <span className="text-gray-400 w-8 shrink-0">{day.slice(0, 3)}</span>
                <span className={r.hours[day] === "Closed" ? "text-red-500" : "text-gray-700"}>
                  {r.hours[day] ?? "—"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Menu updated notice */}
        <div className="mt-3 text-xs text-gray-400">
          Menu last updated:{" "}
          {new Date(r.lastMenuUpdate).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
      </div>

      {/* Happy Hour */}
      {r.happyHour && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">🍺</span>
            <h2 className="text-lg font-bold text-green-800">Happy Hour</h2>
            <span className="ml-auto text-sm font-semibold text-green-700 bg-green-100 border border-green-200 rounded-md px-2 py-0.5">
              {r.happyHour.schedule}
            </span>
          </div>
          {r.happyHour.note && (
            <p className="text-sm text-green-700 mb-4">{r.happyHour.note}</p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {r.happyHour.sections.map((section) => (
              <div key={section.name}>
                <h3 className="font-semibold text-green-800 mb-2">{section.name}</h3>
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <MenuItemRow key={item.id} item={item} highlight />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Full Menu */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Full Menu</h2>
        <div className="space-y-6">
          {r.menu.map((section) => (
            <MenuSectionBlock key={section.name} section={section} />
          ))}
        </div>
      </div>
    </div>
  )
}

function MenuSectionBlock({ section }: { section: MenuSection }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-200 px-5 py-3">
        <h3 className="font-semibold text-gray-800">{section.name}</h3>
      </div>
      <div className="divide-y divide-gray-100">
        {section.items.map((item) => (
          <MenuItemRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

function MenuItemRow({ item, highlight = false }: { item: MenuItem; highlight?: boolean }) {
  return (
    <div className={`flex items-start justify-between gap-4 px-5 py-3 ${highlight ? "" : ""}`}>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-medium text-gray-900 text-sm">{item.name}</span>
          {item.tags?.includes("vegetarian") && (
            <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 rounded px-1.5 py-0.5">🌿 Veg</span>
          )}
          {item.tags?.includes("vegan") && (
            <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 rounded px-1.5 py-0.5">🌱 Vegan</span>
          )}
        </div>
        {item.description && (
          <p className="text-sm text-gray-500 mt-0.5 leading-snug">{item.description}</p>
        )}
        <p className="text-xs text-gray-400 mt-1">
          Updated {new Date(item.lastUpdated).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
        </p>
      </div>
      <div className="shrink-0 font-semibold text-gray-900 text-sm">
        ${item.price.toFixed(2)}
      </div>
    </div>
  )
}
