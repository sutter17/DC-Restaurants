import { restaurants } from "@/data/restaurants"
import CompareClient from "@/components/CompareClient"

export const metadata = {
  title: "Compare Restaurants – DC Restaurants",
  description: "Compare menus and prices across DC restaurants side by side",
}

export default function ComparePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Compare Restaurants</h1>
        <p className="text-gray-500 text-sm">
          Select restaurants and a menu category to compare items and prices side by side.
        </p>
      </div>
      <CompareClient restaurants={restaurants} />
    </div>
  )
}
