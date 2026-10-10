export interface MenuItem {
  id: string;
  name: string;
  malayalamName?: string;
  category: 'breads' | 'puffs' | 'cakes' | 'traditional' | 'beverages';
  description: string;
  price: number;
  unit?: string;
  image: string;
  dietary: 'veg' | 'eggless' | 'contains-egg';
  bakeBatch: string;
  isPopular?: boolean;
  isSignature?: boolean;
}

export interface DayHours {
  day: string;
  dayShort: string;
  open: string;
  close: string;
  isClosed?: boolean;
  isToday?: boolean;
}

export const BAKERY_INFO = {
  name: "NK Bakery",
  localName: "Piravom",
  tagline: "Artisanal Bakes & Neighbourhood Favourites in Piravom",
  taglineSecondary: "Slow fermented breads, hot flaky puffs, bespoke celebration cakes & traditional Kerala sweets.",
  logoUrl: "https://lh3.googleusercontent.com/pw/AP1GczMa6l-3Wu_jDA5pAJpuDmR4YaDdHwUUzh1wzfwFAUORW89WcVUin6pgGV-Rq0mSSewZrHmbgtmth8DGwti_Z8AY5WM0EROuk0pT0rAL_u3PF5BUTriVOtN7zCJ8QD8bmIDcIdw4rYoVRtZefAcvdqk=w928-h928-s-no-gm?authuser=0",
  customCakeBgUrl: "https://lh3.googleusercontent.com/pw/AP1GczNxABMjv2zFA6ubC2WS4M01tWJOddZmI9OnnBhfbzajUjeBIe7nctEbHIgqkdEreXD4ea5GlAEr9qd7pmby6FoKzhN8u2UGIYn7N8qImKYQyvA_iXrDFKwx6SUAqLxN0XRHZhLunkW_7DlxPVkxVKY=w1160-h928-s-no-gm?authuser=0",
  phone: "+91 94467 17040",
  phoneRaw: "+919446717040",
  whatsappNumber: "919446717040",
  email: "nkbakery3@gmail.com",
  address: "Near JMP Medical Centre, Piravom Kerala 686664",
  landmark: "Piravom, Ernakulam District",
  googleMapsUrl: "https://maps.app.goo.gl/HvZFfaFPZMfDvqvP9",
  instagramUrl: "https://www.instagram.com/nk.bakery.piravom/",
  instagramHandle: "@nk.bakery.piravom",
  pickupOnlyNote: "All items freshly baked for store pickup. Home delivery is not available.",
  customCakeAdvanceNotice: "Please order custom celebration cakes at least 24 hours in advance."
};

export const WEEKLY_HOURS: DayHours[] = [
  { day: "Monday", dayShort: "Mon", open: "08:00", close: "20:30", isClosed: false },
  { day: "Tuesday", dayShort: "Tue", open: "08:00", close: "20:30", isClosed: false },
  { day: "Wednesday", dayShort: "Wed", open: "08:00", close: "20:30", isClosed: false },
  { day: "Thursday", dayShort: "Thu", open: "08:00", close: "20:30", isClosed: false },
  { day: "Friday", dayShort: "Fri", open: "08:00", close: "20:30", isClosed: false },
  { day: "Saturday", dayShort: "Sat", open: "08:00", close: "20:30", isClosed: false },
  { day: "Sunday", dayShort: "Sun", open: "", close: "", isClosed: true },
];

export const BAKE_SCHEDULE = [
  {
    time: "7:00 AM",
    title: "Morning Artisan Breads & Loaves",
    desc: "Warm milk bread, whole wheat loaves, and crusty country rolls fresh from the dawn oven."
  },
  {
    time: "11:30 AM",
    title: "Piping Hot Puffs & Savouries",
    desc: "Egg puffs, roasted chicken puffs, and spiced potato vegetable rolls with crisp layered butter pastry."
  },
  {
    time: "3:30 PM",
    title: "Tea-Time Specials & Fresh Sweets",
    desc: "Fresh honey cake slices, warm plum cake, traditional halwa cuts, and evening snacks."
  },
  {
    time: "6:00 PM",
    title: "Evening Treats & Shakes",
    desc: "Freshly blended Sharjah shakes, tender coconut chillers, and freshly brewed Malabar cardamom tea."
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Breads & Daily Loaves
  {
    id: "bread-milk",
    name: "Classic Artisanal Milk Bread",
    malayalamName: "മിൽക്ക് ബ്രെഡ്",
    category: "breads",
    description: "Cloud-soft, lightly sweetened sandwich loaf made with whole milk, unbleached flour, and pure butter. Baked fresh every morning.",
    price: 45,
    unit: "loaf (400g)",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    dietary: "veg",
    bakeBatch: "7:00 AM Dawn Batch",
    isPopular: true
  },
  {
    id: "bread-sourdough",
    name: "Rustic Sourdough Boule",
    malayalamName: "സോർഡോ ബൗൾ",
    category: "breads",
    description: "Naturally fermented 24-hour slow fermented country loaf with a crisp blistered crust and an airy, chewy crumb.",
    price: 120,
    unit: "500g loaf",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80",
    dietary: "veg",
    bakeBatch: "Daily Morning",
    isSignature: true
  },
  {
    id: "bread-coconut-bun",
    name: "Sweet Cardamom Coconut Bun",
    malayalamName: "തേങ്ങാ ബൺ",
    category: "breads",
    description: "Golden glazed soft brioche bun generously filled with fresh grated coconut, Kerala jaggery syrup, and green cardamom.",
    price: 25,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80",
    dietary: "veg",
    bakeBatch: "7:30 AM & 3:30 PM",
    isPopular: true
  },
  {
    id: "bread-wheat",
    name: "100% Whole Wheat Sandwich Bread",
    malayalamName: "ഗോതമ്പ് ബ്രെഡ്",
    category: "breads",
    description: "Wholesome stone-ground whole wheat loaf topped with roasted sesame and flax seeds. Zero refined sugar.",
    price: 55,
    unit: "loaf (400g)",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
    dietary: "veg",
    bakeBatch: "Daily 7:00 AM"
  },
  {
    id: "bread-focaccia",
    name: "Rosemary & Garlic Sea Salt Focaccia",
    malayalamName: "ഫോക്കാച്ചിയ",
    category: "breads",
    description: "Extra virgin olive oil dimpled flatbread infused with fresh garden rosemary, confit garlic cloves, and flaky Maldon salt.",
    price: 80,
    unit: "portion",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    dietary: "veg",
    bakeBatch: "Daily 11:00 AM"
  },

  // Hot Puffs & Savouries
  {
    id: "puff-egg",
    name: "Kerala Malabar Golden Egg Puff",
    malayalamName: "എഗ്ഗ് പഫ്സ്",
    category: "puffs",
    description: "Our signature bakery puff! Countless paper-thin crispy layers enveloping half a boiled farm egg and slow-caramelized onion pepper masala.",
    price: 22,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=800&q=80",
    dietary: "contains-egg",
    bakeBatch: "11:30 AM & 4:00 PM Hot Drop",
    isPopular: true,
    isSignature: true
  },
  {
    id: "puff-chicken",
    name: "Spiced Kerala Chicken Puff",
    malayalamName: "ചിക്കൻ പഫ്സ്",
    category: "puffs",
    description: "Tender roasted chicken morsels cooked with shallots, crushed ginger, green chillies, curry leaves, and freshly toasted garam masala in flaky pastry.",
    price: 32,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80",
    dietary: "contains-egg",
    bakeBatch: "11:30 AM & 4:00 PM Hot Drop",
    isPopular: true
  },
  {
    id: "puff-veg",
    name: "Garden Vegetable Puff",
    malayalamName: "വെജ് പഫ്സ്",
    category: "puffs",
    description: "Golden puff pastry filled with diced potatoes, tender carrots, green peas, and fragrant coriander and fennel spice mix.",
    price: 20,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
    dietary: "veg",
    bakeBatch: "11:30 AM & 4:00 PM Hot Drop"
  },
  {
    id: "puff-meat-roll",
    name: "Crispy Crumbed Meat Cutlet Roll",
    malayalamName: "മീറ്റ് റോൾ",
    category: "puffs",
    description: "Spiced minced meat and potato filling rolled in soft breading, golden fried to a delicate, satisfying crunch.",
    price: 35,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    dietary: "contains-egg",
    bakeBatch: "3:30 PM Tea Time"
  },

  // Cakes & Sweet Slices
  {
    id: "cake-plum",
    name: "Traditional Rich Kerala Plum Cake",
    malayalamName: "പ്ലം കേക്ക്",
    category: "cakes",
    description: "Dense, aromatic, dark fruit cake matured with premium black raisins, dates, candied orange peel, nutmeg, and caramelized sugar.",
    price: 190,
    unit: "500g bar",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    dietary: "contains-egg",
    bakeBatch: "Fresh Weekly Batches",
    isSignature: true,
    isPopular: true
  },
  {
    id: "cake-honey",
    name: "Nostalgic Bakery Honey Cake",
    malayalamName: "ഹണി കേക്ക്",
    category: "cakes",
    description: "Light vanilla sponge infused with pure honey citrus syrup, crowned with a layer of mixed fruit jam and shredded desiccated coconut.",
    price: 35,
    unit: "slice",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80",
    dietary: "eggless",
    bakeBatch: "Daily Morning",
    isPopular: true
  },
  {
    id: "cake-truffle",
    name: "Belgian Dark Chocolate Truffle Cake",
    malayalamName: "ചോക്ലേറ്റ് ട്രഫിൾ",
    category: "cakes",
    description: "Layers of moist chocolate sponge filled with 55% dark chocolate ganache, finished with hand-shaved chocolate flakes. Available as slice or whole cake.",
    price: 490,
    unit: "500g / Whole cake",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80",
    dietary: "eggless",
    bakeBatch: "Daily & Made to Order",
    isSignature: true
  },
  {
    id: "cake-black-forest",
    name: "Classic Black Forest Gateau",
    malayalamName: "ബ്ലാക്ക് ഫോറസ്റ്റ്",
    category: "cakes",
    description: "Authentic German-style cake with light chocolate sponge, whipped vanilla cream, dark cherries, and chocolate shavings.",
    price: 440,
    unit: "500g / Whole cake",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80",
    dietary: "eggless",
    bakeBatch: "Daily & Made to Order"
  },
  {
    id: "cake-red-velvet",
    name: "Velvet Red Sponge with Cream Cheese",
    malayalamName: "റെഡ് വെൽവെറ്റ് കേക്ക്",
    category: "cakes",
    description: "Silky crimson sponge layered with rich whipped cream cheese frosting and fine sponge crumbles.",
    price: 520,
    unit: "500g / Whole cake",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=800&q=80",
    dietary: "eggless",
    bakeBatch: "Pre-order & Weekend Special"
  },
  {
    id: "cake-marble-tea",
    name: "Old-Fashioned Vanilla Marble Tea Cake",
    malayalamName: "ടീ കേക്ക്",
    category: "cakes",
    description: "Golden buttery ribboned swirl cake made with real butter and Madagascar vanilla. The quintessential accompaniment for hot evening tea.",
    price: 70,
    unit: "250g loaf",
    image: "https://images.unsplash.com/photo-1549589237-9e70b6be4da8?auto=format&fit=crop&w=800&q=80",
    dietary: "contains-egg",
    bakeBatch: "Daily 8:00 AM"
  },

  // Traditional Kerala Sweets & Savouries
  {
    id: "sweet-halwa",
    name: "Pure Ghee Wheat Halwa (Black & Red)",
    malayalamName: "നെയ്യ് ഹൽവ",
    category: "traditional",
    description: "Slow-stirred in large copper urulis with whole wheat milk, pure cow's ghee, caramelized jaggery, and fried cashew nuts.",
    price: 95,
    unit: "250g box",
    image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=800&q=80",
    dietary: "veg",
    bakeBatch: "Handcrafted Fresh Weekly",
    isPopular: true
  },
  {
    id: "sweet-chips",
    name: "Golden Coconut Oil Banana Chips",
    malayalamName: "ഏത്തക്ക ഉപ്പേരി (ചിപ്സ്)",
    category: "traditional",
    description: "Thinly sliced raw Nendran plantains fried crisp in fresh wood-pressed coconut oil with rock salt and a pinch of turmeric.",
    price: 115,
    unit: "250g pack",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80",
    dietary: "veg",
    bakeBatch: "Daily Fresh Fry",
    isPopular: true
  },
  {
    id: "sweet-diamond-cuts",
    name: "Crispy Sweet Diamond Cuts (Madakku)",
    malayalamName: "ഡയമണ്ട് കട്ട്സ്",
    category: "traditional",
    description: "Crunchy flour diamond morsels tossed in warm sugar syrup and subtle cardamom. Crunchy nostalgia in every bite.",
    price: 65,
    unit: "200g pack",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    dietary: "veg",
    bakeBatch: "Fresh Batch"
  },
  {
    id: "sweet-cashew-peda",
    name: "Cardamom Milk Peda & Cashew Burfi",
    malayalamName: "പാൽ പേഡ",
    category: "traditional",
    description: "Velvety reduced full-cream milk fudge lightly scented with saffron strands and crushed green cardamom.",
    price: 130,
    unit: "250g box",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
    dietary: "veg",
    bakeBatch: "Fresh Batch"
  },

  // Beverages, Tea & Shakes
  {
    id: "drink-tea",
    name: "Fresh Malabar Cardamom Tea",
    malayalamName: "ചായ (ഏലയ്ക്ക)",
    category: "beverages",
    description: "Strongly brewed tea decoction pulled with hot fresh milk and hand-crushed green cardamom. Served piping hot.",
    price: 18,
    unit: "cup",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    dietary: "veg",
    bakeBatch: "All Day Fresh",
    isPopular: true
  },
  {
    id: "drink-coffee",
    name: "Kerala South Indian Filter Coffee",
    malayalamName: "ഫിൽട്ടർ കോഫി",
    category: "beverages",
    description: "Traditional brass filter brewed chicory-infused coffee with frothed steamed milk and aromatic crema.",
    price: 25,
    unit: "cup",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    dietary: "veg",
    bakeBatch: "All Day Fresh"
  },
  {
    id: "drink-sharjah",
    name: "Signature NK Sharjah Shake",
    malayalamName: "ഷാർജ ഷേക്ക്",
    category: "beverages",
    description: "Kerala's beloved thick shake crafted with fresh Robusta bananas, frozen milk, malted nuts, Horlicks, and a scoop of vanilla ice cream.",
    price: 75,
    unit: "glass (350ml)",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    dietary: "veg",
    bakeBatch: "Made Fresh to Order",
    isSignature: true,
    isPopular: true
  },
  {
    id: "drink-tender-coconut",
    name: "Fresh Karikku (Tender Coconut) Shake",
    malayalamName: "കരിക്ക് ഷേക്ക്",
    category: "beverages",
    description: "Pure tender coconut malai (water & pulp) blended smooth with chilled milk and mild cane sugar. Refreshingly natural.",
    price: 85,
    unit: "glass (350ml)",
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80",
    dietary: "veg",
    bakeBatch: "Seasonal & Fresh Daily"
  },
  {
    id: "drink-lime-soda",
    name: "Chilled Mint Fresh Lime Soda",
    malayalamName: "ഫ്രഷ് ലൈം സോഡ",
    category: "beverages",
    description: "Freshly squeezed limes with muddled mint leaves, rock salt, and effervescent sparkling soda. Sweet, salt, or mixed.",
    price: 35,
    unit: "tall glass",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    dietary: "veg",
    bakeBatch: "Made Fresh to Order"
  }
];

export const CAKE_FLAVORS = [
  "Belgian Dark Chocolate Truffle",
  "Classic Black Forest",
  "Velvet Red Cream Cheese",
  "Butterscotch Crunch",
  "Fresh Mango & Cream (Seasonal)",
  "Rich Fruit & Nut Plum Cake",
  "White Forest & Strawberries",
  "Custom Request / Chef's Special"
];

export const CAKE_SIZES = [
  "0.5 kg (Serves 4-6)",
  "1.0 kg (Serves 8-12)",
  "1.5 kg (Serves 12-16)",
  "2.0 kg (Serves 18-24)",
  "3.0+ kg (Large Celebration / Two-Tier)"
];
