import Link from "next/link"
import { restaurants } from "@/data/restaurants"

export const metadata = {
  title: "Happy Hours – DC Restaurants",
  description: "All DC restaurant happy hour schedules and specials in one place",
}

const DAY_ORDER = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

export default function HappyHoursPage() {
  const withHH = restaurants.filter((r) => r.happyHour)
  const withoutHH = restaurants.filter((r) => !r.happyHour)

  // Build a day -> restaurants map
  const byDay: Record<string, typeof withHH> = {}
  DAY_ORDER.forEach((day) => {
    byDay[day] = withHH.filter((r) => r.happyHour!.days.includes(day))
  })

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Happy Hours</h1>
        <p className="text-gray-500 text-sm">
          All happy hour schedules and specials across tracked DC restaurants.
        </p>
      </div>

      {/* Day-by-day overview */}
      <section className="mb-10">
        <h2 className="text-base font-semibold text-gray-700 mb-3">By Day of Week</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {DAY_ORDER.map((day) => (
            <div
              key={day}
              className="bg-white border border-gray-200 rounded-xl p-4"
            >
              <div className="font-semibold text-gray-900 mb-2">{day}</div>
              {byDay[day].length === 0 ? (
                <div className="text-sm text-gray-400">No happy hours</div>
              ) : (
                <ul className="space-y-1.5">
                  {byDay[day].map((r) => (
                    <li key={r.id} className="flex items-start gap-2 text-sm">
                      <span className="text-green-500 mt-0.5 shrink-0">●</span>
                      <div>
                        <Link
                          href={`/restaurants/${r.id}`}
                          className="font-medium text-gray-800 hover:text-orange-600 transition-colors"
                        >
                          {r.name}
                        </Link>
                        <div className="text-xs text-gray-500">
                          {r.happyHour!.startTime.replace(":", ":")} – {formatTime(r.happyHour!.endTime)}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Per-restaurant cards */}
      <section>
        <h2 className="text-base font-semibold text-gray-700 mb-3">All Happy Hour Menus</h2>
        <div className="space-y-5">
          {withHH.map((r) => (
            <div
              key={r.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              {/* Header */}
              <div className="border-b border-gray-100 px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <Link
                    href={`/restaurants/${r.id}`}
                    className="font-bold text-gray-900 hover:text-orange-600 transition-colors"
                  >
                    {r.name}
                  </Link>
                  <div className="text-sm text-gray-500 mt-0.5">
                    {r.neighborhood} · {r.cuisine}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-1.5">
                    🍺 {r.happyHour!.schedule}
                  </span>
                </div>
              </div>

              {/* HH note */}
              {r.happyHour!.note && (
                <div className="px-5 py-2 bg-amber-50 border-b border-amber-100 text-xs text-amber-700">
                  ⚠️ {r.happyHour!.note}
                </div>
              )}

              {/* Items grid */}
              <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {r.happyHour!.sections.map((section) => (
                  <div key={section.name}>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">{section.name}</h4>
                    <div className="space-y-1.5">
                      {section.items.map((item) => (
                        <div key={item.id} className="flex items-start justify-between gap-3 text-sm">
                          <div className="flex-1 min-w-0">
                            <span className="font-medium text-gray-800">{item.name}</span>
                            {item.description && (
                              <span className="text-gray-500 ml-1">— {item.description}</span>
                            )}
                          </div>
                          <span className="font-semibold text-green-700 shrink-0">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer link */}
              <div className="border-t border-gray-100 px-5 py-3 flex items-center justify-between text-xs text-gray-400">
                <span>
                  Updated{" "}
                  {new Date(r.lastMenuUpdate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <div className="flex gap-3">
                  <Link
                    href={`/compare?restaurants=${r.id}`}
                    className="text-orange-500 hover:text-orange-700 font-medium"
                  >
                    Compare →
                  </Link>
                  <Link
                    href={`/restaurants/${r.id}`}
                    className="text-orange-500 hover:text-orange-700 font-medium"
                  >
                    Full menu →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {withoutHH.length > 0 && (
        <section className="mt-8">
          <h2 className="text-sm font-semibold text-gray-500 mb-2">No Happy Hour Listed</h2>
          <div className="flex flex-wrap gap-2">
            {withoutHH.map((r) => (
              <Link
                key={r.id}
                href={`/restaurants/${r.id}`}
                className="text-sm text-gray-500 bg-white border border-gray-200 rounded-lg px-3 py-1.5 hover:text-orange-600 hover:border-orange-200 transition-colors"
              >
                {r.name}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function formatTime(time: string): string {
  const [h, m] = time.split(":").map(Number)
  const period = h >= 12 ? "pm" : "am"
  const hour = h > 12 ? h - 12 : h === 0 ? 12 : h
  return m === 0 ? `${hour}${period}` : `${hour}:${m.toString().padStart(2, "0")}${period}`
}
