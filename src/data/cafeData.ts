export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: 'breakfast' | 'mains' | 'coffee' | 'desserts';
  price: string;
  priceNumber: number;
  image: string;
  tag: string;
  isPopular?: boolean;
  isSignature?: boolean;
  dietary?: string[];
}

export interface ReviewPlaceholder {
  id: string;
  author: string;
  badge: string;
  rating: number;
  date: string;
  content: string;
  status: 'Verified Patron' | 'Google Review';
}

export const CAFE_INFO = {
  name: 'Deli Bros Cafe',
  brandName: 'DELI BROS',
  tagline: 'Good Food. Good Coffee. Good Times.',
  subtagline: 'A neighbourhood café in Kuala Lumpur serving comforting food, great coffee and good moments.',
  neighbourhood: 'Titiwangsa • Kuala Lumpur',
  address: '100, Jalan Pahang, Titiwangsa Sentral, 53000 Kuala Lumpur, Malaysia',
  shortAddress: '100, Jalan Pahang, Titiwangsa Sentral, 53000 Kuala Lumpur',
  landmark: 'Below Stays Hotel · Opposite Medical Research Institute · Near Titiwangsa Transit Interchange',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=100+Jalan+Pahang+Titiwangsa+Sentral+53000+Kuala+Lumpur',
  phoneDisplay: '+60 3-4040 1288',
  phoneTel: 'tel:+60340401288',
  whatsappUrl: 'https://wa.me/?text=Hi%20Deli%20Bros%20Cafe!%20I%20would%20like%20to%20order%20takeaway%20or%20enquire%20about%20a%20table.',
  instagramHandle: '@delibroscafe',
  instagramUrl: 'https://instagram.com',
};

export const DEFAULT_HOURS = [
  { day: 'Monday', hours: '8:00 AM – 8:00 PM', note: 'Breakfast & All-day dining' },
  { day: 'Tuesday', hours: '8:00 AM – 8:00 PM', note: 'Breakfast & All-day dining' },
  { day: 'Wednesday', hours: '8:00 AM – 8:00 PM', note: 'Breakfast & All-day dining' },
  { day: 'Thursday', hours: '8:00 AM – 8:00 PM', note: 'Breakfast & All-day dining' },
  { day: 'Friday', hours: '8:00 AM – 9:00 PM', note: 'Extended evening hours' },
  { day: 'Saturday', hours: '8:00 AM – 9:00 PM', note: 'Weekend brunch & coffee' },
  { day: 'Sunday', hours: '8:00 AM – 8:00 PM', note: 'Weekend brunch & coffee' },
];

export const MENU_ITEMS: MenuItem[] = [
  // MAINS & TOASTED CHEESE MELTS (Signature Deli Bros Offerings)
  {
    id: 'm1',
    name: 'Tuna Cheese Melt',
    description: 'Crispy toasted golden sourdough packed with seasoned albacore tuna, house pickle relish, and a generous layer of molten cheddar and mozzarella cheese pull.',
    category: 'mains',
    price: 'RM 17.90',
    priceNumber: 17.90,
    image: '/src/assets/images/sandwich_tuna_melt_1791432761491.jpg',
    tag: 'Deli Bros Signature',
    isPopular: true,
    isSignature: true,
    dietary: ['Pescatarian', 'House Special'],
  },
  {
    id: 'm2',
    name: 'Chicken Cheese Melt',
    description: 'Juicy herb-grilled chicken breast slices, caramelized sweet onions, Dijon aioli, and melted sharp cheddar pressed between crunchy rustic farmhouse bread.',
    category: 'mains',
    price: 'RM 17.90',
    priceNumber: 17.90,
    image: '/src/assets/images/sandwich_chicken_melt_1791432777467.jpg',
    tag: 'House Classic',
    isPopular: true,
    isSignature: true,
    dietary: ['Halal Poultry'],
  },
  {
    id: 'm3',
    name: 'Artisan Pastrami Melt Sandwich',
    description: 'Cured deli pastrami with melted Swiss Emmental cheese, whole-grain Bavarian mustard, and pickled gherkins on warm grilled rye bread.',
    category: 'mains',
    price: 'RM 22.90',
    priceNumber: 22.90,
    image: '/src/assets/images/sandwich_tuna_melt_1791432761491.jpg',
    tag: 'Deli Specialty',
    dietary: ['Beef Deli'],
  },
  {
    id: 'm4',
    name: 'Truffle Mushroom Melt (V)',
    description: 'Sautéed wild Swiss brown mushrooms, white truffle cream, caramelized leeks, and melted fontina cheese on artisanal sourdough.',
    category: 'mains',
    price: 'RM 19.90',
    priceNumber: 19.90,
    image: '/src/assets/images/sandwich_chicken_melt_1791432777467.jpg',
    tag: 'Vegetarian',
    dietary: ['Vegetarian'],
  },

  // BREAKFAST & BRUNCH
  {
    id: 'b1',
    name: 'Artisan Sourdough Avocado Toast',
    description: 'Poached free-range eggs on toasted artisanal country sourdough, crushed Haas avocado, cherry vine tomatoes, and microgreens.',
    category: 'breakfast',
    price: 'RM 19.90',
    priceNumber: 19.90,
    image: '/src/assets/images/food_breakfast_dish_1791432260346.jpg',
    tag: 'Brunch Favourite',
    isPopular: true,
    dietary: ['Vegetarian', 'Nutritious'],
  },
  {
    id: 'b2',
    name: 'Deli Bros Big Breakfast',
    description: 'Scrambled eggs, chicken bratwurst, grilled beef bacon, roasted herb portobello, sautéed baby spinach, and warm toast.',
    category: 'breakfast',
    price: 'RM 24.90',
    priceNumber: 24.90,
    image: '/src/assets/images/food_breakfast_dish_1791432260346.jpg',
    tag: 'Hearty Classic',
    isPopular: true,
    dietary: ['All-Day Breakfast'],
  },
  {
    id: 'b3',
    name: 'Truffle Scrambled Egg Croissant',
    description: 'Buttery flaky French croissant loaded with soft folded free-range eggs infused with Italian white truffle oil, chives, and parmesan.',
    category: 'breakfast',
    price: 'RM 21.90',
    priceNumber: 21.90,
    image: '/src/assets/images/food_pastry_dessert_1791432282763.jpg',
    tag: 'Morning Highlight',
    dietary: ['Freshly Baked'],
  },
  {
    id: 'b4',
    name: 'Golden French Brioche Toast',
    description: 'Thick sliced brioche soaked in vanilla bean custard, served with fresh seasonal berries, whipped mascarpone, and pure maple syrup.',
    category: 'breakfast',
    price: 'RM 18.90',
    priceNumber: 18.90,
    image: '/src/assets/images/food_breakfast_dish_1791432260346.jpg',
    tag: 'Sweet Morning',
    dietary: ['Vegetarian'],
  },

  // COFFEE & SPECIALTY DRINKS
  {
    id: 'c1',
    name: 'Hot Americano (Single Origin Italy)',
    description: 'Signature single-origin Italian roast espresso diluted with hot mineral water. Clean, smooth body with notes of roasted hazelnut and dark cacao.',
    category: 'coffee',
    price: 'RM 8.00',
    priceNumber: 8.00,
    image: '/src/assets/images/drink_specialty_coffee_1791432271642.jpg',
    tag: 'Single Origin Italy',
    isPopular: true,
    dietary: ['Italian Roast'],
  },
  {
    id: 'c2',
    name: 'Cappuccino (Single Origin Italy)',
    description: 'Italian roast double espresso extracted with velvety dense microfoam and dusted with Dutch cocoa powder.',
    category: 'coffee',
    price: 'RM 15.00',
    priceNumber: 15.00,
    image: '/src/assets/images/drink_specialty_coffee_1791432271642.jpg',
    tag: 'Barista Craft',
    isPopular: true,
    dietary: ['Italian Roast'],
  },
  {
    id: 'c3',
    name: 'Latte (Single Origin Italy)',
    description: 'Silky steamed fresh milk delicately poured over a rich double shot of single-origin Italian espresso. Sweet caramel sweetness.',
    category: 'coffee',
    price: 'RM 15.00',
    priceNumber: 15.00,
    image: '/src/assets/images/drink_specialty_coffee_1791432271642.jpg',
    tag: 'Daily Brew',
    isPopular: true,
    dietary: ['Hot / Iced Available'],
  },
  {
    id: 'c4',
    name: 'Matcha Latte (Organic Pure Japan)',
    description: 'Ceremonial grade pure organic Japanese Uji matcha whisked with fresh whole milk or oat milk, served hot or chilled over crystal ice.',
    category: 'coffee',
    price: 'RM 15.00',
    priceNumber: 15.00,
    image: '/src/assets/images/drink_matcha_latte_1791432803686.jpg',
    tag: 'Organic Japan',
    isPopular: true,
    dietary: ['Pure Ceremonial Grade'],
  },
  {
    id: 'c5',
    name: 'Mocha (Rich Cocoa Espresso)',
    description: 'Single-origin espresso harmonized with Belgian dark chocolate ganache and textured steamed milk.',
    category: 'coffee',
    price: 'RM 16.90',
    priceNumber: 16.90,
    image: '/src/assets/images/drink_specialty_coffee_1791432271642.jpg',
    tag: 'Decadent Coffee',
    dietary: ['Specialty'],
  },
  {
    id: 'c6',
    name: 'Dirty Chai (Single Origin Italy)',
    description: 'Spiced aromatic masala chai blend infused with a bold espresso shot of Italian single-origin beans.',
    category: 'coffee',
    price: 'RM 17.90',
    priceNumber: 17.90,
    image: '/src/assets/images/drink_specialty_coffee_1791432271642.jpg',
    tag: 'Signature Fusion',
    isSignature: true,
    dietary: ['House Special'],
  },
  {
    id: 'c7',
    name: 'Chai Latte (House Spiced)',
    description: 'Authentic spiced black tea simmered with cinnamon, cardamom, cloves, and ginger, finished with silky steamed milk.',
    category: 'coffee',
    price: 'RM 10.00',
    priceNumber: 10.00,
    image: '/src/assets/images/drink_specialty_coffee_1791432271642.jpg',
    tag: 'Comfort Drink',
    dietary: ['Non-Coffee'],
  },

  // DESSERTS & FRESH BAKES
  {
    id: 'd1',
    name: 'Sea Salt Dark Chocolate Brownie',
    description: 'Dense, intensely fudgy 70% dark chocolate brownie with a paper-thin crackly top, finished with flaky hand-harvested sea salt flakes.',
    category: 'desserts',
    price: 'RM 15.00',
    priceNumber: 15.00,
    image: '/src/assets/images/dessert_sea_salt_brownie_1791432793000.jpg',
    tag: 'Customer Favourite',
    isPopular: true,
    isSignature: true,
    dietary: ['House Baked'],
  },
  {
    id: 'd2',
    name: 'Chocolate Chip Cookie',
    description: 'Classic American-style butter cookie with crisp chewy edges and molten chunks of Belgian dark chocolate.',
    category: 'desserts',
    price: 'RM 13.00',
    priceNumber: 13.00,
    image: '/src/assets/images/dessert_sea_salt_brownie_1791432793000.jpg',
    tag: 'Fresh Daily Bake',
    isPopular: true,
    dietary: ['Baked Daily'],
  },
  {
    id: 'd3',
    name: 'Classic Burnt Basque Cheesecake',
    description: 'Caramelized burnished exterior with an ultra-creamy, melt-in-the-mouth center. Baked fresh daily in-house.',
    category: 'desserts',
    price: 'RM 16.00',
    priceNumber: 16.00,
    image: '/src/assets/images/food_pastry_dessert_1791432282763.jpg',
    tag: 'Bakery Highlight',
    dietary: ['Vegetarian'],
  },
  {
    id: 'd4',
    name: 'Artisan Butter Croissant',
    description: 'Traditional French laminated butter croissant with delicate crisp honeycomb layers and golden flaky crust.',
    category: 'desserts',
    price: 'RM 12.00',
    priceNumber: 12.00,
    image: '/src/assets/images/food_pastry_dessert_1791432282763.jpg',
    tag: 'Morning Pastry',
    dietary: ['French Butter'],
  },
];

export const EXPERIENCE_PILLARS = [
  {
    title: 'Good Food',
    description: 'Comforting café favourites made for everyday visits.',
    detail: 'Famous for hot golden toasted cheese melts (Tuna Cheese Melt & Chicken Cheese Melt from RM 17.90) and wholesome sourdough brunch.',
    metric: 'Signature Melts & Sourdough',
  },
  {
    title: 'Good Coffee',
    description: 'A relaxed place to enjoy your coffee, whether you’re starting the morning or taking a break.',
    detail: 'Single-origin Italian roast beans (Americano from RM 8, Latte & Cappuccino RM 15) and pure Japanese organic matcha.',
    metric: 'Single Origin Italy & Pure Japan',
  },
  {
    title: 'Good Company',
    description: 'A welcoming neighbourhood atmosphere for catching up, working or simply enjoying a meal.',
    detail: 'Situated at 100 Jalan Pahang right below Stays Hotel at Titiwangsa Sentral, created for both quiet coffee breaks and friendly catchups.',
    metric: 'Titiwangsa Sentral Hub',
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'Tuna Cheese Melt (RM 17.90)',
    category: 'Signature Melts',
    image: '/src/assets/images/sandwich_tuna_melt_1791432761491.jpg',
    aspect: 'tall',
  },
  {
    id: 'gal-2',
    title: 'Chicken Cheese Melt (RM 17.90)',
    category: 'Warm Mains',
    image: '/src/assets/images/sandwich_chicken_melt_1791432777467.jpg',
    aspect: 'wide',
  },
  {
    id: 'gal-3',
    title: 'Iced Matcha Latte Pure Japan (RM 15)',
    category: 'Organic Japan',
    image: '/src/assets/images/drink_matcha_latte_1791432803686.jpg',
    aspect: 'square',
  },
  {
    id: 'gal-4',
    title: 'Sea Salt Brownie (RM 15)',
    category: 'Fresh Bakes',
    image: '/src/assets/images/dessert_sea_salt_brownie_1791432793000.jpg',
    aspect: 'square',
  },
  {
    id: 'gal-5',
    title: 'Italian Single Origin Latte (RM 15)',
    category: 'Espresso Bar',
    image: '/src/assets/images/drink_specialty_coffee_1791432271642.jpg',
    aspect: 'wide',
  },
  {
    id: 'gal-6',
    title: 'Sourdough Avocado Brunch (RM 19.90)',
    category: 'Breakfast',
    image: '/src/assets/images/food_breakfast_dish_1791432260346.jpg',
    aspect: 'wide',
  },
];

export const SAMPLE_REVIEWS: ReviewPlaceholder[] = [
  {
    id: 'r1',
    author: 'Kuala Lumpur Foodie & Coffee Guide',
    badge: 'Local Regular',
    rating: 5,
    date: 'Verified Visit',
    content: '“The Tuna Cheese Melt (RM 17.90) is easily one of the best in Titiwangsa — crunchy toasted sourdough with generous gooey cheese. Paired with their Italian single-origin Flat White, it’s unbeatable.”',
    status: 'Verified Patron',
  },
  {
    id: 'r2',
    author: 'Stays Hotel & Sentral Commuter',
    badge: 'Titiwangsa Resident',
    rating: 5,
    date: 'Verified Visit',
    content: '“A stylish Scandinavian-style café tucked into Jalan Pahang right below Stays Hotel. Americano is only RM 8 and very smooth. Clean interior, calm morning vibes.”',
    status: 'Verified Patron',
  },
  {
    id: 'r3',
    author: 'Remote Worker / Creative',
    badge: 'Coffee Enthusiast',
    rating: 5,
    date: 'Verified Visit',
    content: '“The Sea Salt Brownie (RM 15) and Organic Pure Japanese Matcha Latte (RM 15) are absolute staples. Welcoming staff and very comfortable seating.”',
    status: 'Verified Patron',
  },
];
