import { getAllNormalizedNames } from "@/data/restaurants"
import ItemsClient from "@/components/ItemsClient"

export const metadata = {
  title: "Find an Item – DC Restaurants",
  description: "Search by what you want to eat or drink, see every DC restaurant that serves it",
}

export default function ItemsPage() {
  const allItems = getAllNormalizedNames()
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Find an Item</h1>
        <p className="text-gray-500 text-sm">
          Search by what you actually want — burger, margarita, IPA, wings — and see every place that serves it with prices.
        </p>
      </div>
      <ItemsClient allItems={allItems} />
    </div>
  )
}
