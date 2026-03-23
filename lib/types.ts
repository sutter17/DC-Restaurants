export interface MenuItem {
  id: string
  name: string
  description?: string
  price: number
  happyHourPrice?: number
  category: string // e.g. "Burger", "Cocktail", "Draft Beer", "Wine", "Appetizer"
  tags?: string[]
  lastUpdated: string // ISO date string
}

export interface MenuSection {
  name: string // e.g. "Starters", "Mains", "Cocktails", "Beer & Wine"
  items: MenuItem[]
}

export interface HappyHour {
  schedule: string // human-readable, e.g. "Mon–Fri 4–7pm"
  days: string[]   // ["Monday","Tuesday","Wednesday","Thursday","Friday"]
  startTime: string // "16:00"
  endTime: string   // "19:00"
  note?: string
  sections: MenuSection[]
}

export interface Restaurant {
  id: string
  name: string
  cuisine: string
  neighborhood: string
  address: string
  phone?: string
  website?: string
  priceRange: "$" | "$$" | "$$$" | "$$$$"
  hours: Record<string, string> // { "Monday": "11am–10pm", ... }
  menu: MenuSection[]
  happyHour?: HappyHour
  lastMenuUpdate: string // ISO date string
}
