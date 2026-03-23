import { Restaurant } from "@/lib/types"

export const restaurants: Restaurant[] = [
  {
    id: "capitol-hill-kitchen",
    name: "Capitol Hill Kitchen",
    cuisine: "American Gastropub",
    neighborhood: "Capitol Hill",
    address: "318 Pennsylvania Ave SE, Washington, DC 20003",
    phone: "(202) 555-0141",
    website: "https://example.com",
    priceRange: "$$",
    hours: {
      Monday: "11am–11pm",
      Tuesday: "11am–11pm",
      Wednesday: "11am–11pm",
      Thursday: "11am–12am",
      Friday: "11am–1am",
      Saturday: "10am–1am",
      Sunday: "10am–10pm",
    },
    lastMenuUpdate: "2026-03-01",
    menu: [
      {
        name: "Starters",
        items: [
          { id: "chk-s1", name: "Chesapeake Crab Dip", description: "Warm blue crab dip with Old Bay, served with grilled bread", price: 16, category: "Appetizer", lastUpdated: "2026-03-01" },
          { id: "chk-s2", name: "Buffalo Wings (12)", description: "Crispy wings, choice of sauce, celery & blue cheese", price: 18, category: "Wings", lastUpdated: "2026-03-01" },
          { id: "chk-s3", name: "Loaded Fries", description: "Thick-cut fries, cheddar, bacon, scallions, sour cream", price: 12, category: "Appetizer", lastUpdated: "2026-03-01" },
          { id: "chk-s4", name: "Spinach Artichoke Dip", description: "Classic dip with tortilla chips", price: 13, category: "Appetizer", lastUpdated: "2026-03-01" },
        ],
      },
      {
        name: "Burgers & Sandwiches",
        items: [
          { id: "chk-b1", name: "Capitol Smash Burger", description: "Double smash patty, American cheese, house sauce, brioche bun", price: 17, category: "Burger", lastUpdated: "2026-03-01" },
          { id: "chk-b2", name: "Mushroom Swiss Burger", description: "8oz beef, sautéed mushrooms, Swiss cheese, garlic aioli", price: 18, category: "Burger", lastUpdated: "2026-03-01" },
          { id: "chk-b3", name: "Veggie Burger", description: "Black bean patty, avocado, lettuce, tomato, chipotle mayo", price: 16, category: "Burger", tags: ["vegetarian"], lastUpdated: "2026-03-01" },
          { id: "chk-b4", name: "Philly Cheesesteak", description: "Shaved ribeye, peppers, onions, Cheez Whiz or provolone on hoagie", price: 19, category: "Sandwich", lastUpdated: "2026-03-01" },
          { id: "chk-b5", name: "Grilled Chicken Club", description: "Grilled chicken, bacon, avocado, swiss, on sourdough", price: 16, category: "Sandwich", lastUpdated: "2026-03-01" },
        ],
      },
      {
        name: "Mains",
        items: [
          { id: "chk-m1", name: "Fish & Chips", description: "Beer-battered cod, hand-cut fries, house tartar sauce, malt vinegar slaw", price: 22, category: "Seafood", lastUpdated: "2026-03-01" },
          { id: "chk-m2", name: "BBQ Ribs Half Rack", description: "Slow-smoked pork ribs, house BBQ sauce, coleslaw, cornbread", price: 28, category: "Mains", lastUpdated: "2026-03-01" },
          { id: "chk-m3", name: "Mac & Cheese", description: "Four-cheese blend, breadcrumb topping, add pulled pork +$4", price: 18, category: "Mains", tags: ["vegetarian"], lastUpdated: "2026-03-01" },
        ],
      },
      {
        name: "Cocktails",
        items: [
          { id: "chk-c1", name: "DC Mule", description: "Bourbon, ginger beer, lime, mint, bitters", price: 14, category: "Cocktail", lastUpdated: "2026-03-01" },
          { id: "chk-c2", name: "Hill Margarita", description: "Tequila blanco, Cointreau, fresh lime, salted rim", price: 13, category: "Cocktail", lastUpdated: "2026-03-01" },
          { id: "chk-c3", name: "Whiskey Sour", description: "Bourbon, lemon juice, simple syrup, egg white", price: 13, category: "Cocktail", lastUpdated: "2026-03-01" },
          { id: "chk-c4", name: "Old Fashioned", description: "Rye, Angostura bitters, demerara, orange peel", price: 15, category: "Cocktail", lastUpdated: "2026-03-01" },
        ],
      },
      {
        name: "Beer",
        items: [
          { id: "chk-dr1", name: "DC Brau On the Wings of Armageddon", description: "IPA – DC Brau Brewing Co.", price: 9, category: "Draft Beer", lastUpdated: "2026-03-01" },
          { id: "chk-dr2", name: "Atlas Brewing Raised by Wolves", description: "Pale Ale – Atlas Brew Works", price: 8, category: "Draft Beer", lastUpdated: "2026-03-01" },
          { id: "chk-dr3", name: "Bud Light", description: "16oz can", price: 6, category: "Canned Beer", lastUpdated: "2026-03-01" },
          { id: "chk-dr4", name: "Miller Lite", description: "16oz can", price: 6, category: "Canned Beer", lastUpdated: "2026-03-01" },
        ],
      },
      {
        name: "Wine",
        items: [
          { id: "chk-w1", name: "House Red (Cabernet)", description: "Glass", price: 10, category: "Wine", lastUpdated: "2026-03-01" },
          { id: "chk-w2", name: "House White (Chardonnay)", description: "Glass", price: 10, category: "Wine", lastUpdated: "2026-03-01" },
          { id: "chk-w3", name: "Prosecco", description: "Glass", price: 11, category: "Wine", lastUpdated: "2026-03-01" },
        ],
      },
    ],
    happyHour: {
      schedule: "Mon–Fri 4–7pm",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      startTime: "16:00",
      endTime: "19:00",
      note: "Dine-in only. Cannot be combined with other offers.",
      sections: [
        {
          name: "Happy Hour Drinks",
          items: [
            { id: "chk-hh1", name: "Draft Beer", description: "All draft beers", price: 5, category: "Draft Beer", lastUpdated: "2026-03-01" },
            { id: "chk-hh2", name: "House Wine", description: "Red or white, by the glass", price: 6, category: "Wine", lastUpdated: "2026-03-01" },
            { id: "chk-hh3", name: "Well Cocktails", description: "Gin, vodka, rum, tequila, whiskey", price: 7, category: "Cocktail", lastUpdated: "2026-03-01" },
            { id: "chk-hh4", name: "DC Mule", description: "Bourbon, ginger beer, lime", price: 9, category: "Cocktail", lastUpdated: "2026-03-01" },
          ],
        },
        {
          name: "Happy Hour Bites",
          items: [
            { id: "chk-hh5", name: "Buffalo Wings (6)", description: "Choice of sauce", price: 8, category: "Wings", lastUpdated: "2026-03-01" },
            { id: "chk-hh6", name: "Loaded Fries", description: "Cheddar, bacon, scallions", price: 7, category: "Appetizer", lastUpdated: "2026-03-01" },
            { id: "chk-hh7", name: "Mini Smash Sliders (3)", description: "American cheese, pickles, house sauce", price: 9, category: "Burger", lastUpdated: "2026-03-01" },
          ],
        },
      ],
    },
  },
  {
    id: "dupont-social",
    name: "Dupont Social",
    cuisine: "Mediterranean",
    neighborhood: "Dupont Circle",
    address: "1825 18th St NW, Washington, DC 20009",
    phone: "(202) 555-0182",
    priceRange: "$$$",
    hours: {
      Monday: "Closed",
      Tuesday: "5pm–11pm",
      Wednesday: "5pm–11pm",
      Thursday: "5pm–12am",
      Friday: "5pm–1am",
      Saturday: "11am–1am",
      Sunday: "11am–10pm",
    },
    lastMenuUpdate: "2026-02-20",
    menu: [
      {
        name: "Mezze & Starters",
        items: [
          { id: "ds-s1", name: "Hummus & Pita", description: "House-made hummus, olive oil, za'atar, warm pita bread", price: 13, category: "Appetizer", tags: ["vegetarian", "vegan"], lastUpdated: "2026-02-20" },
          { id: "ds-s2", name: "Burrata", description: "Fresh burrata, heirloom tomato, basil oil, flaky salt", price: 17, category: "Appetizer", tags: ["vegetarian"], lastUpdated: "2026-02-20" },
          { id: "ds-s3", name: "Lamb Kofta (4)", description: "Grilled spiced lamb, tzatziki, pomegranate molasses", price: 18, category: "Appetizer", lastUpdated: "2026-02-20" },
          { id: "ds-s4", name: "Falafel Plate", description: "Crispy falafel, tabbouleh, tahini sauce", price: 15, category: "Appetizer", tags: ["vegetarian", "vegan"], lastUpdated: "2026-02-20" },
        ],
      },
      {
        name: "Mains",
        items: [
          { id: "ds-m1", name: "Grilled Branzino", description: "Whole roasted sea bass, lemon-herb butter, roasted vegetables", price: 36, category: "Seafood", lastUpdated: "2026-02-20" },
          { id: "ds-m2", name: "Lamb Chops", description: "Two double-cut chops, pomegranate reduction, roasted fingerlings", price: 42, category: "Mains", lastUpdated: "2026-02-20" },
          { id: "ds-m3", name: "Mushroom Risotto", description: "Wild mushroom, parmigiano, truffle oil, chives", price: 28, category: "Mains", tags: ["vegetarian"], lastUpdated: "2026-02-20" },
          { id: "ds-m4", name: "Chicken Shawarma Plate", description: "Marinated rotisserie chicken, garlic sauce, pickled turnips, rice pilaf", price: 29, category: "Mains", lastUpdated: "2026-02-20" },
        ],
      },
      {
        name: "Cocktails",
        items: [
          { id: "ds-c1", name: "Mediterrano Spritz", description: "Aperol, prosecco, blood orange, rosemary", price: 16, category: "Cocktail", lastUpdated: "2026-02-20" },
          { id: "ds-c2", name: "Arak Sour", description: "Arak, lemon, honey syrup, cucumber", price: 15, category: "Cocktail", lastUpdated: "2026-02-20" },
          { id: "ds-c3", name: "Old Fashioned", description: "Bourbon, cardamom bitters, demerara, expressed orange", price: 16, category: "Cocktail", lastUpdated: "2026-02-20" },
          { id: "ds-c4", name: "Margarita", description: "Mezcal, lime, agave, tajin rim", price: 15, category: "Cocktail", lastUpdated: "2026-02-20" },
          { id: "ds-c5", name: "Negroni", description: "Gin, Campari, sweet vermouth", price: 15, category: "Cocktail", lastUpdated: "2026-02-20" },
        ],
      },
      {
        name: "Wine",
        items: [
          { id: "ds-w1", name: "Albariño (Spain)", description: "Glass – crisp, citrus, mineral", price: 14, category: "Wine", lastUpdated: "2026-02-20" },
          { id: "ds-w2", name: "Rosé (Provence)", description: "Glass – dry, strawberry, herbs", price: 14, category: "Wine", lastUpdated: "2026-02-20" },
          { id: "ds-w3", name: "Malbec (Argentina)", description: "Glass – full-bodied, dark fruit, smoky", price: 14, category: "Wine", lastUpdated: "2026-02-20" },
          { id: "ds-w4", name: "Chianti Classico (Italy)", description: "Glass – cherry, earthy, medium body", price: 15, category: "Wine", lastUpdated: "2026-02-20" },
        ],
      },
      {
        name: "Beer",
        items: [
          { id: "ds-dr1", name: "Stella Artois", description: "Draft pint", price: 8, category: "Draft Beer", lastUpdated: "2026-02-20" },
          { id: "ds-dr2", name: "Modelo Especial", description: "Draft pint", price: 8, category: "Draft Beer", lastUpdated: "2026-02-20" },
          { id: "ds-dr3", name: "Non-Alcoholic Beer", description: "Heineken 0.0, bottle", price: 6, category: "Canned Beer", lastUpdated: "2026-02-20" },
        ],
      },
    ],
    happyHour: {
      schedule: "Tue–Fri 5–8pm",
      days: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      startTime: "17:00",
      endTime: "20:00",
      note: "Bar and patio seating only.",
      sections: [
        {
          name: "Happy Hour Drinks",
          items: [
            { id: "ds-hh1", name: "Draft Beer", description: "All draft beers", price: 5, category: "Draft Beer", lastUpdated: "2026-02-20" },
            { id: "ds-hh2", name: "House Wine", description: "Red, white, or rosé by the glass", price: 8, category: "Wine", lastUpdated: "2026-02-20" },
            { id: "ds-hh3", name: "Mediterrano Spritz", description: "Aperol, prosecco, blood orange", price: 10, category: "Cocktail", lastUpdated: "2026-02-20" },
            { id: "ds-hh4", name: "Well Cocktails", description: "Classic cocktails with house spirits", price: 9, category: "Cocktail", lastUpdated: "2026-02-20" },
          ],
        },
        {
          name: "Happy Hour Mezze",
          items: [
            { id: "ds-hh5", name: "Hummus & Pita", description: "House-made hummus", price: 7, category: "Appetizer", lastUpdated: "2026-02-20" },
            { id: "ds-hh6", name: "Falafel Bites (4)", description: "Crispy falafel, tahini", price: 8, category: "Appetizer", lastUpdated: "2026-02-20" },
            { id: "ds-hh7", name: "Lamb Kofta (2)", description: "Grilled spiced lamb, tzatziki", price: 10, category: "Appetizer", lastUpdated: "2026-02-20" },
          ],
        },
      ],
    },
  },
  {
    id: "georgetown-tap",
    name: "Georgetown Tap",
    cuisine: "Bar & Grill",
    neighborhood: "Georgetown",
    address: "3251 Prospect St NW, Washington, DC 20007",
    phone: "(202) 555-0193",
    priceRange: "$$",
    hours: {
      Monday: "12pm–12am",
      Tuesday: "12pm–12am",
      Wednesday: "12pm–12am",
      Thursday: "12pm–1am",
      Friday: "12pm–2am",
      Saturday: "11am–2am",
      Sunday: "11am–11pm",
    },
    lastMenuUpdate: "2026-03-10",
    menu: [
      {
        name: "Starters",
        items: [
          { id: "gt-s1", name: "Nachos", description: "Tortilla chips, pico, jalapeños, cheddar, sour cream, guac", price: 15, category: "Appetizer", tags: ["vegetarian"], lastUpdated: "2026-03-10" },
          { id: "gt-s2", name: "Wings (10)", description: "Choice of buffalo, BBQ, Old Bay, or honey garlic", price: 17, category: "Wings", lastUpdated: "2026-03-10" },
          { id: "gt-s3", name: "Mozzarella Sticks (6)", description: "Crispy fried, marinara dipping sauce", price: 11, category: "Appetizer", tags: ["vegetarian"], lastUpdated: "2026-03-10" },
          { id: "gt-s4", name: "Pretzel Bites", description: "Warm soft pretzel bites, beer cheese dip", price: 10, category: "Appetizer", tags: ["vegetarian"], lastUpdated: "2026-03-10" },
        ],
      },
      {
        name: "Burgers & Sandwiches",
        items: [
          { id: "gt-b1", name: "Classic Cheeseburger", description: "8oz beef, cheddar, lettuce, tomato, onion, pickles, thousand island", price: 15, category: "Burger", lastUpdated: "2026-03-10" },
          { id: "gt-b2", name: "Bacon Avocado Burger", description: "8oz beef, thick-cut bacon, avocado, swiss, garlic aioli", price: 18, category: "Burger", lastUpdated: "2026-03-10" },
          { id: "gt-b3", name: "Turkey Burger", description: "Ground turkey, feta, roasted red pepper, tzatziki", price: 16, category: "Burger", lastUpdated: "2026-03-10" },
          { id: "gt-b4", name: "BBQ Pulled Pork Sandwich", description: "Slow-cooked pork shoulder, house BBQ, coleslaw on brioche", price: 16, category: "Sandwich", lastUpdated: "2026-03-10" },
          { id: "gt-b5", name: "Crispy Chicken Sandwich", description: "Buttermilk fried chicken, pickles, spicy mayo, brioche", price: 17, category: "Sandwich", lastUpdated: "2026-03-10" },
        ],
      },
      {
        name: "Mains",
        items: [
          { id: "gt-m1", name: "Fish Tacos (3)", description: "Beer-battered cod, mango slaw, chipotle crema", price: 18, category: "Seafood", lastUpdated: "2026-03-10" },
          { id: "gt-m2", name: "Steak Tips", description: "Marinated 8oz sirloin tips, mashed potatoes, green beans", price: 26, category: "Mains", lastUpdated: "2026-03-10" },
          { id: "gt-m3", name: "Veggie Bowl", description: "Farro, roasted vegetables, chickpeas, lemon tahini", price: 17, category: "Mains", tags: ["vegetarian", "vegan"], lastUpdated: "2026-03-10" },
        ],
      },
      {
        name: "Cocktails",
        items: [
          { id: "gt-c1", name: "Margarita", description: "Silver tequila, triple sec, fresh lime, salted rim", price: 12, category: "Cocktail", lastUpdated: "2026-03-10" },
          { id: "gt-c2", name: "Long Island Iced Tea", description: "Vodka, gin, rum, tequila, triple sec, cola", price: 13, category: "Cocktail", lastUpdated: "2026-03-10" },
          { id: "gt-c3", name: "Whiskey Sour", description: "Bourbon, lemon juice, simple syrup", price: 12, category: "Cocktail", lastUpdated: "2026-03-10" },
          { id: "gt-c4", name: "Gin & Tonic", description: "House gin, fever-tree tonic, lime, cucumber", price: 11, category: "Cocktail", lastUpdated: "2026-03-10" },
        ],
      },
      {
        name: "Beer",
        items: [
          { id: "gt-dr1", name: "Bud Light", description: "Draft pint", price: 6, category: "Draft Beer", lastUpdated: "2026-03-10" },
          { id: "gt-dr2", name: "Coors Light", description: "Draft pint", price: 6, category: "Draft Beer", lastUpdated: "2026-03-10" },
          { id: "gt-dr3", name: "Blue Moon", description: "Draft pint", price: 8, category: "Draft Beer", lastUpdated: "2026-03-10" },
          { id: "gt-dr4", name: "Guinness", description: "Draft pint", price: 9, category: "Draft Beer", lastUpdated: "2026-03-10" },
          { id: "gt-dr5", name: "Truly Hard Seltzer", description: "Can, various flavors", price: 7, category: "Canned Beer", lastUpdated: "2026-03-10" },
        ],
      },
      {
        name: "Wine",
        items: [
          { id: "gt-w1", name: "House Red", description: "Glass – Merlot", price: 9, category: "Wine", lastUpdated: "2026-03-10" },
          { id: "gt-w2", name: "House White", description: "Glass – Pinot Grigio", price: 9, category: "Wine", lastUpdated: "2026-03-10" },
          { id: "gt-w3", name: "House Rosé", description: "Glass – dry rosé", price: 9, category: "Wine", lastUpdated: "2026-03-10" },
        ],
      },
    ],
    happyHour: {
      schedule: "Daily 3–6pm",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      startTime: "15:00",
      endTime: "18:00",
      note: "Excludes game days. Bar area only.",
      sections: [
        {
          name: "Happy Hour Drinks",
          items: [
            { id: "gt-hh1", name: "Draft Beer (Select)", description: "Bud Light, Coors Light, Blue Moon", price: 4, category: "Draft Beer", lastUpdated: "2026-03-10" },
            { id: "gt-hh2", name: "House Wine", description: "Red, white, or rosé", price: 6, category: "Wine", lastUpdated: "2026-03-10" },
            { id: "gt-hh3", name: "Well Drinks", description: "Any well spirit + mixer", price: 6, category: "Cocktail", lastUpdated: "2026-03-10" },
            { id: "gt-hh4", name: "Margarita", description: "House margarita, rocks or frozen", price: 8, category: "Cocktail", lastUpdated: "2026-03-10" },
          ],
        },
        {
          name: "Happy Hour Bites",
          items: [
            { id: "gt-hh5", name: "Wings (6)", description: "Choice of sauce", price: 7, category: "Wings", lastUpdated: "2026-03-10" },
            { id: "gt-hh6", name: "Nachos", description: "Half order, all toppings", price: 8, category: "Appetizer", lastUpdated: "2026-03-10" },
            { id: "gt-hh7", name: "Pretzel Bites", description: "Warm pretzel bites, beer cheese", price: 6, category: "Appetizer", lastUpdated: "2026-03-10" },
          ],
        },
      ],
    },
  },
  {
    id: "adams-kitchen",
    name: "Adams Kitchen",
    cuisine: "Farm-to-Table",
    neighborhood: "Adams Morgan",
    address: "2467 18th St NW, Washington, DC 20009",
    phone: "(202) 555-0217",
    priceRange: "$$$",
    hours: {
      Monday: "Closed",
      Tuesday: "5pm–10pm",
      Wednesday: "5pm–10pm",
      Thursday: "5pm–11pm",
      Friday: "5pm–12am",
      Saturday: "10am–12am",
      Sunday: "10am–9pm",
    },
    lastMenuUpdate: "2026-03-15",
    menu: [
      {
        name: "Starters",
        items: [
          { id: "ak-s1", name: "Seasonal Soup", description: "Ask your server. Rotating, locally sourced", price: 12, category: "Appetizer", lastUpdated: "2026-03-15" },
          { id: "ak-s2", name: "Roasted Beet Salad", description: "Chioggia beets, goat cheese, candied walnuts, orange vinaigrette", price: 15, category: "Salad", tags: ["vegetarian"], lastUpdated: "2026-03-15" },
          { id: "ak-s3", name: "Charcuterie Board", description: "Selection of cured meats, local cheeses, pickles, mustard, grilled bread", price: 24, category: "Appetizer", lastUpdated: "2026-03-15" },
          { id: "ak-s4", name: "Oysters on the Half Shell (6)", description: "Rotating selection, mignonette, cocktail sauce, lemon", price: 21, category: "Seafood", lastUpdated: "2026-03-15" },
        ],
      },
      {
        name: "Mains",
        items: [
          { id: "ak-m1", name: "Pan-Seared Salmon", description: "Miso-glazed salmon, bok choy, sesame jasmine rice, ginger scallion sauce", price: 34, category: "Seafood", lastUpdated: "2026-03-15" },
          { id: "ak-m2", name: "Grass-Fed Beef Burger", description: "Local 8oz patty, aged cheddar, caramelized onion, arugula, truffle aioli, brioche", price: 22, category: "Burger", lastUpdated: "2026-03-15" },
          { id: "ak-m3", name: "Roasted Half Chicken", description: "Free-range chicken, herbed jus, roasted root vegetables, potato gratin", price: 32, category: "Mains", lastUpdated: "2026-03-15" },
          { id: "ak-m4", name: "Mushroom Pasta", description: "Handmade pappardelle, wild mushrooms, truffle cream, parmigiano, chives", price: 26, category: "Mains", tags: ["vegetarian"], lastUpdated: "2026-03-15" },
          { id: "ak-m5", name: "Cauliflower Steak", description: "Whole roasted cauliflower, romesco, lentils, salsa verde", price: 24, category: "Mains", tags: ["vegetarian", "vegan"], lastUpdated: "2026-03-15" },
        ],
      },
      {
        name: "Cocktails",
        items: [
          { id: "ak-c1", name: "Seasonal Negroni", description: "Rotating house-infused gin, Campari, sweet vermouth", price: 16, category: "Cocktail", lastUpdated: "2026-03-15" },
          { id: "ak-c2", name: "Smoked Old Fashioned", description: "Woodford Reserve, cherry smoke, demerara, bitters", price: 17, category: "Cocktail", lastUpdated: "2026-03-15" },
          { id: "ak-c3", name: "Garden Gimlet", description: "Hendrick's gin, elderflower, cucumber, fresh lime", price: 15, category: "Cocktail", lastUpdated: "2026-03-15" },
          { id: "ak-c4", name: "Paloma Spritz", description: "Tequila, grapefruit, honey, soda, rosemary salt rim", price: 15, category: "Cocktail", lastUpdated: "2026-03-15" },
        ],
      },
      {
        name: "Natural Wine",
        items: [
          { id: "ak-w1", name: "Pét-Nat Rosé (Virginia)", description: "Glass – naturally sparkling, strawberry, light body", price: 16, category: "Wine", lastUpdated: "2026-03-15" },
          { id: "ak-w2", name: "Orange Wine (Georgia)", description: "Glass – amber, tannic, dried fruit, skin-contact", price: 15, category: "Wine", lastUpdated: "2026-03-15" },
          { id: "ak-w3", name: "Biodynamic Pinot Noir (Oregon)", description: "Glass – earthy, red berry, light-medium body", price: 16, category: "Wine", lastUpdated: "2026-03-15" },
          { id: "ak-w4", name: "Chenin Blanc (Loire)", description: "Glass – off-dry, honeyed, floral", price: 15, category: "Wine", lastUpdated: "2026-03-15" },
        ],
      },
      {
        name: "Beer & N/A",
        items: [
          { id: "ak-dr1", name: "DC Brau Public Ale", description: "Draft pint", price: 9, category: "Draft Beer", lastUpdated: "2026-03-15" },
          { id: "ak-dr2", name: "Right Proper Raised by Wolves IPA", description: "Draft pint", price: 9, category: "Draft Beer", lastUpdated: "2026-03-15" },
          { id: "ak-dr3", name: "Housemade Shrub Soda", description: "Non-alcoholic, seasonal fruit & vinegar shrub, soda", price: 6, category: "Non-Alcoholic", lastUpdated: "2026-03-15" },
        ],
      },
    ],
    happyHour: {
      schedule: "Tue–Sun 5–7pm",
      days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      startTime: "17:00",
      endTime: "19:00",
      note: "Bar and communal table only. Excludes holiday weekends.",
      sections: [
        {
          name: "Happy Hour Drinks",
          items: [
            { id: "ak-hh1", name: "Draft Beer", description: "All draft beers", price: 6, category: "Draft Beer", lastUpdated: "2026-03-15" },
            { id: "ak-hh2", name: "Natural Wine", description: "Selected glass pours, ask your bartender", price: 9, category: "Wine", lastUpdated: "2026-03-15" },
            { id: "ak-hh3", name: "Classic Cocktails", description: "Negroni, Old Fashioned, Gimlet, Paloma", price: 10, category: "Cocktail", lastUpdated: "2026-03-15" },
          ],
        },
        {
          name: "Happy Hour Bites",
          items: [
            { id: "ak-hh4", name: "Oysters (3)", description: "Happy hour half shell with mignonette", price: 9, category: "Seafood", lastUpdated: "2026-03-15" },
            { id: "ak-hh5", name: "Cheese & Charcuterie (Small)", description: "Two cheeses, one meat, accompaniments", price: 12, category: "Appetizer", lastUpdated: "2026-03-15" },
            { id: "ak-hh6", name: "Beet Salad", description: "Beets, goat cheese, walnuts", price: 9, category: "Salad", lastUpdated: "2026-03-15" },
          ],
        },
      ],
    },
  },
  {
    id: "penn-quarter-ramen",
    name: "Penn Quarter Ramen",
    cuisine: "Japanese / Asian Fusion",
    neighborhood: "Penn Quarter",
    address: "701 7th St NW, Washington, DC 20001",
    phone: "(202) 555-0279",
    priceRange: "$$",
    hours: {
      Monday: "11:30am–10pm",
      Tuesday: "11:30am–10pm",
      Wednesday: "11:30am–10pm",
      Thursday: "11:30am–11pm",
      Friday: "11:30am–12am",
      Saturday: "12pm–12am",
      Sunday: "12pm–9pm",
    },
    lastMenuUpdate: "2026-03-18",
    menu: [
      {
        name: "Starters",
        items: [
          { id: "pqr-s1", name: "Gyoza (6)", description: "Pan-fried pork & cabbage dumplings, ponzu dipping sauce", price: 10, category: "Appetizer", lastUpdated: "2026-03-18" },
          { id: "pqr-s2", name: "Edamame", description: "Steamed, sea salt or spicy garlic", price: 7, category: "Appetizer", tags: ["vegetarian", "vegan"], lastUpdated: "2026-03-18" },
          { id: "pqr-s3", name: "Takoyaki (6)", description: "Octopus balls, bonito flakes, mayo, takoyaki sauce", price: 12, category: "Appetizer", lastUpdated: "2026-03-18" },
          { id: "pqr-s4", name: "Karaage Chicken", description: "Japanese fried chicken, kewpie mayo, lemon", price: 13, category: "Wings", lastUpdated: "2026-03-18" },
        ],
      },
      {
        name: "Ramen",
        items: [
          { id: "pqr-r1", name: "Tonkotsu Ramen", description: "Rich pork bone broth, chashu pork, soft egg, bamboo, scallion, nori", price: 18, category: "Ramen", lastUpdated: "2026-03-18" },
          { id: "pqr-r2", name: "Spicy Miso Ramen", description: "Spicy miso broth, ground pork, corn, butter, scallion, soft egg", price: 17, category: "Ramen", lastUpdated: "2026-03-18" },
          { id: "pqr-r3", name: "Shoyu Ramen", description: "Soy-based clear broth, chicken, bamboo, menma, soft egg, nori", price: 16, category: "Ramen", lastUpdated: "2026-03-18" },
          { id: "pqr-r4", name: "Vegetarian Shio Ramen", description: "Clear kombu dashi, tofu, mushrooms, bok choy, soft egg", price: 16, category: "Ramen", tags: ["vegetarian"], lastUpdated: "2026-03-18" },
        ],
      },
      {
        name: "Small Plates & Rice",
        items: [
          { id: "pqr-m1", name: "Pork Chashu Bowl", description: "Braised pork belly, rice, soft egg, pickled ginger, scallion", price: 15, category: "Mains", lastUpdated: "2026-03-18" },
          { id: "pqr-m2", name: "Spicy Tuna Roll", description: "8 pieces, spicy tuna, cucumber, sesame, sriracha aioli", price: 14, category: "Mains", lastUpdated: "2026-03-18" },
          { id: "pqr-m3", name: "Dragon Roll", description: "8 pieces, shrimp tempura, cucumber, avocado, tobiko", price: 16, category: "Mains", lastUpdated: "2026-03-18" },
        ],
      },
      {
        name: "Cocktails & Sake",
        items: [
          { id: "pqr-c1", name: "Yuzu Margarita", description: "Tequila, yuzu liqueur, lime, tajin rim", price: 14, category: "Cocktail", lastUpdated: "2026-03-18" },
          { id: "pqr-c2", name: "Lychee Martini", description: "Vodka, lychee liqueur, lime, lychee garnish", price: 14, category: "Cocktail", lastUpdated: "2026-03-18" },
          { id: "pqr-c3", name: "Shiso Sour", description: "Japanese whisky, shiso, lemon, honey, egg white", price: 15, category: "Cocktail", lastUpdated: "2026-03-18" },
          { id: "pqr-c4", name: "Sake Sangria", description: "Junmai sake, peach, ginger, citrus, green tea", price: 13, category: "Cocktail", lastUpdated: "2026-03-18" },
          { id: "pqr-c5", name: "Draft Sapporo", description: "Japanese lager, pint", price: 8, category: "Draft Beer", lastUpdated: "2026-03-18" },
          { id: "pqr-c6", name: "Kirin Ichiban", description: "Bottle", price: 7, category: "Canned Beer", lastUpdated: "2026-03-18" },
          { id: "pqr-c7", name: "Asahi Super Dry", description: "Bottle", price: 7, category: "Canned Beer", lastUpdated: "2026-03-18" },
        ],
      },
      {
        name: "Wine",
        items: [
          { id: "pqr-w1", name: "Junmai Sake (Warm or Cold)", description: "150ml carafe", price: 12, category: "Wine", lastUpdated: "2026-03-18" },
          { id: "pqr-w2", name: "House White Wine", description: "Glass – Sauvignon Blanc", price: 10, category: "Wine", lastUpdated: "2026-03-18" },
          { id: "pqr-w3", name: "House Red Wine", description: "Glass – Pinot Noir", price: 10, category: "Wine", lastUpdated: "2026-03-18" },
        ],
      },
    ],
    happyHour: {
      schedule: "Mon–Thu 5–8pm",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      startTime: "17:00",
      endTime: "20:00",
      note: "Bar seating and high-tops only.",
      sections: [
        {
          name: "Happy Hour Drinks",
          items: [
            { id: "pqr-hh1", name: "Sapporo Draft", description: "House Japanese lager", price: 5, category: "Draft Beer", lastUpdated: "2026-03-18" },
            { id: "pqr-hh2", name: "House Wine", description: "Glass of red or white", price: 7, category: "Wine", lastUpdated: "2026-03-18" },
            { id: "pqr-hh3", name: "Sake Sangria", description: "House sake sangria", price: 8, category: "Cocktail", lastUpdated: "2026-03-18" },
            { id: "pqr-hh4", name: "Well Cocktails", description: "Classic cocktails, house spirits", price: 8, category: "Cocktail", lastUpdated: "2026-03-18" },
          ],
        },
        {
          name: "Happy Hour Bites",
          items: [
            { id: "pqr-hh5", name: "Gyoza (4)", description: "Pan-fried, ponzu sauce", price: 6, category: "Appetizer", lastUpdated: "2026-03-18" },
            { id: "pqr-hh6", name: "Edamame", description: "Salted or spicy garlic", price: 4, category: "Appetizer", lastUpdated: "2026-03-18" },
            { id: "pqr-hh7", name: "Karaage Chicken (4 pieces)", description: "Japanese fried chicken", price: 8, category: "Wings", lastUpdated: "2026-03-18" },
            { id: "pqr-hh8", name: "Mini Ramen Bowl", description: "Half-size tonkotsu or shoyu ramen", price: 10, category: "Ramen", lastUpdated: "2026-03-18" },
          ],
        },
      ],
    },
  },
]

export function getRestaurantById(id: string): Restaurant | undefined {
  return restaurants.find((r) => r.id === id)
}

export function getAllNeighborhoods(): string[] {
  return [...new Set(restaurants.map((r) => r.neighborhood))].sort()
}

export function getAllCuisines(): string[] {
  return [...new Set(restaurants.map((r) => r.cuisine))].sort()
}

export function getAllMenuCategories(): string[] {
  const cats = new Set<string>()
  restaurants.forEach((r) => {
    r.menu.forEach((section) => {
      section.items.forEach((item) => cats.add(item.category))
    })
    r.happyHour?.sections.forEach((section) => {
      section.items.forEach((item) => cats.add(item.category))
    })
  })
  return [...cats].sort()
}
