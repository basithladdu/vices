export const SUBSTANCE_TYPES = {
  CIGARETTE: 'CIGARETTE',
  ALCOHOL: 'ALCOHOL',
  CANNABIS: 'CANNABIS',
  PSYCHEDELIC: 'PSYCHEDELIC',
  STIMULANT: 'STIMULANT',
  PHARMA: 'PHARMA',
  VAPE: 'VAPE',
  OTHER: 'OTHER'
};

export const TYPE_META = {
  [SUBSTANCE_TYPES.CIGARETTE]: {
    label: 'Cigarettes',
    icon: '🚬',
    color: '#dc2626',
    description: 'The classic burn. From Marlboro Reds to Dunhill.'
  },
  [SUBSTANCE_TYPES.ALCOHOL]: {
    label: 'Alcohol',
    icon: '🍺',
    color: '#d4a017',
    description: 'Liquid courage. Spirits, beer, and deep regrets.'
  },
  [SUBSTANCE_TYPES.CANNABIS]: {
    label: 'Cannabis',
    icon: '🌿',
    color: '#059669',
    description: 'Haze, Kush, and the state of flow.'
  },
  [SUBSTANCE_TYPES.PSYCHEDELIC]: {
    label: 'Psychedelics',
    icon: '🍄',
    color: '#8b5cf6',
    description: 'Acid, Shrooms, and the death of the ego.'
  },
  [SUBSTANCE_TYPES.STIMULANT]: {
    label: 'Stimulants',
    icon: '❄️',
    color: '#3b82f6',
    description: 'Speed, MDMA, and the electric night.'
  },
  [SUBSTANCE_TYPES.PHARMA]: {
    label: 'Pharmas',
    icon: '💊',
    color: '#e879f9',
    description: 'Xanax, Codeine, and the synthetic numbing.'
  },
  [SUBSTANCE_TYPES.VAPE]: {
    label: 'Vapes',
    icon: '💨',
    color: '#64748b',
    description: 'Electronic clouds and chemical flavor.'
  },
  [SUBSTANCE_TYPES.OTHER]: {
    label: 'Others',
    icon: '🧪',
    color: '#94a3b8',
    description: 'Anything else that consumes you.'
  }
};

export const substances = [
  // CIGARETTES
  {
    id: 'marlboro-gold',
    name: 'Marlboro Gold',
    brand: 'Marlboro',
    type: SUBSTANCE_TYPES.CIGARETTE,
    variant: 'Gold',
    manufacturer: 'Philip Morris',
    origin: 'USA',
    image: 'https://images.unsplash.com/photo-1542156822-6924d1a71aba?q=80&w=2070&auto=format&fit=crop',
    tags: ['classic', 'premium', 'smooth'],
    description: 'A global icon, known for its smooth taste and heritage.'
  },
  {
    id: 'marlboro-red',
    name: 'Marlboro Red',
    brand: 'Marlboro',
    type: SUBSTANCE_TYPES.CIGARETTE,
    variant: 'Red / Full Flavor',
    manufacturer: 'Philip Morris',
    origin: 'USA',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070&auto=format&fit=crop',
    tags: ['bold', 'iconic', 'heavy'],
    description: 'The Cowboy Killer. Rich, full-bodied tobacco flavor.'
  },
  {
    id: 'camel-blue',
    name: 'Camel Blue',
    brand: 'Camel',
    type: SUBSTANCE_TYPES.CIGARETTE,
    variant: 'Blue',
    manufacturer: 'RJ Reynolds',
    origin: 'USA',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop',
    tags: ['traditional', 'mellow'],
    description: 'Famous for its Turkish and Domestic blend.'
  },
  {
    id: 'camel-crush',
    name: 'Camel Crush',
    brand: 'Camel',
    type: SUBSTANCE_TYPES.CIGARETTE,
    variant: 'Menthol Capsule',
    manufacturer: 'RJ Reynolds',
    origin: 'USA',
    image: 'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=2070&auto=format&fit=crop',
    tags: ['menthol', 'interactive', 'smooth'],
    description: 'Click the capsule for a burst of menthol.'
  },

  // ALCOHOL
  {
    id: 'jack-daniels-7',
    name: "Jack Daniel's Old No. 7",
    brand: "Jack Daniel's",
    type: SUBSTANCE_TYPES.ALCOHOL,
    subtype: 'Whiskey',
    abv: 40,
    origin: 'USA',
    image: 'https://images.unsplash.com/photo-1527281473222-7939299ab121?q=80&w=1974&auto=format&fit=crop',
    tags: ['smoky', 'charcoal-mellowed'],
    description: 'Tennessee Whiskey charcoal-mellowed drop by drop.'
  },
  {
    id: 'heineken-original',
    name: 'Heineken Original',
    brand: 'Heineken',
    type: SUBSTANCE_TYPES.ALCOHOL,
    subtype: 'Beer',
    abv: 5,
    origin: 'Netherlands',
    image: 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?q=80&w=1974&auto=format&fit=crop',
    tags: ['lager', 'refreshing', 'global'],
    description: 'The world-famous Dutch lager in the green bottle.'
  },
  {
    id: 'don-julio-1942',
    name: 'Don Julio 1942',
    brand: 'Don Julio',
    type: SUBSTANCE_TYPES.ALCOHOL,
    subtype: 'Tequila',
    abv: 40,
    origin: 'Mexico',
    image: 'https://images.unsplash.com/photo-1516535794938-6063878f08cc?q=80&w=1974&auto=format&fit=crop',
    tags: ['anejo', 'premium', 'nightlife'],
    description: 'Celebrated in exclusive cocktail bars, restaurants and nightclubs.'
  },

  // CANNABIS
  {
    id: 'og-kush',
    name: 'OG Kush',
    brand: 'N/A',
    type: SUBSTANCE_TYPES.CANNABIS,
    subtype: 'Hybrid',
    thc: 20,
    origin: 'California',
    image: 'https://images.unsplash.com/photo-1533491326698-60829c58ac06?q=80&w=1974&auto=format&fit=crop',
    tags: ['relaxed', 'euphoric', 'earthy'],
    description: 'The backbone of many West Coast cannabis varieties.'
  },
  {
    id: 'sour-diesel',
    name: 'Sour Diesel',
    brand: 'N/A',
    type: SUBSTANCE_TYPES.CANNABIS,
    subtype: 'Sativa',
    thc: 18,
    origin: 'NYC',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=1974&auto=format&fit=crop',
    tags: ['energetic', 'creative'],
    description: 'Fast-acting strain with a distinct diesel-like aroma.'
  },

  // PSYCHEDELICS
  {
    id: 'lsd-blotter',
    name: 'LSD',
    brand: 'Acid',
    type: SUBSTANCE_TYPES.PSYCHEDELIC,
    variant: 'Blotter',
    origin: 'Laboratory',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop',
    tags: ['psychedelic', 'visual', 'long-trip'],
    description: 'Lysergic acid diethylamide. A powerful, long-lasting psychoactive.'
  },
  {
    id: 'psilocybin-mushrooms',
    name: 'Magic Mushrooms',
    brand: 'N/A',
    type: SUBSTANCE_TYPES.PSYCHEDELIC,
    variant: 'Golden Teacher',
    origin: 'Natural',
    image: 'https://images.unsplash.com/photo-1585232354421-302181d768a0?q=80&w=1974&auto=format&fit=crop',
    tags: ['psilocybin', 'natural', 'spiritual'],
    description: 'Psilocybe cubensis. Deeply introspective and organic.'
  },
  {
    id: 'dmt-vape',
    name: 'DMT',
    brand: 'N/A',
    type: SUBSTANCE_TYPES.PSYCHEDELIC,
    variant: 'N,N-DMT',
    origin: 'Laboratory/Natural',
    image: 'https://images.unsplash.com/photo-1549419134-8c0847b3372c?q=80&w=1974&auto=format&fit=crop',
    tags: ['breakthrough', 'spirit-molecule'],
    description: 'The Spirit Molecule. Total ego dissolution in minutes.'
  },
  {
    id: 'ketamine-crystal',
    name: 'Ketamine',
    brand: 'N/A',
    type: SUBSTANCE_TYPES.PSYCHEDELIC,
    variant: 'Crystal',
    origin: 'Laboratory',
    image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=2070&auto=format&fit=crop',
    tags: ['dissociative', 'k-hole'],
    description: 'Special K. A dissociative anesthetic used recreationally.'
  },

  // STIMULANTS
  {
    id: 'mdma-crystal',
    name: 'MDMA',
    brand: 'Molly',
    type: SUBSTANCE_TYPES.STIMULANT,
    variant: 'Crystal',
    origin: 'Synthetic',
    image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=1974&auto=format&fit=crop',
    tags: ['empathogen', 'electric', 'party'],
    description: 'Pure empathy and energy.'
  },
  {
    id: 'cocaine-powder',
    name: 'Cocaine',
    brand: 'N/A',
    type: SUBSTANCE_TYPES.STIMULANT,
    variant: 'Powder',
    origin: 'Colombia',
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2032&auto=format&fit=crop',
    tags: ['bold', 'short-lived'],
    description: 'High-intensity stimulation.'
  },

  // PHARMAS
  {
    id: 'xanax-alprazolam',
    name: 'Xanax',
    brand: 'Alprazolam',
    type: SUBSTANCE_TYPES.PHARMA,
    variant: 'Bars',
    manufacturer: 'Pfizer',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop',
    tags: ['benzo', 'numbing'],
    description: 'Fast-acting benzodiazepine. Complete synthetic calm.'
  },
  {
    id: 'codeine-syrup',
    name: 'Codeine',
    brand: 'Lean',
    type: SUBSTANCE_TYPES.PHARMA,
    variant: 'Syrup',
    manufacturer: 'Akorn',
    image: 'https://images.unsplash.com/photo-1550570481-420216260a95?q=80&w=2070&auto=format&fit=crop',
    tags: ['opiate', 'slow', 'purple'],
    description: 'The slow, synthetic drift.'
  }
];

export const MOODS = [
  { id: 'nostalgic', label: 'Nostalgic', emoji: '🥀' },
  { id: 'peaceful', label: 'Peaceful', emoji: '🌊' },
  { id: 'chaotic', label: 'Chaotic', emoji: '🌪️' },
  { id: 'social', label: 'Social', emoji: '🤝' },
  { id: 'solo', label: 'Solo', emoji: '👤' },
  { id: 'creative', label: 'Creative', emoji: '🎨' },
  { id: 'tired', label: 'Tired', emoji: '💤' },
  { id: 'high-energy', label: 'Electric', emoji: '⚡' },
];

export const searchSubstances = (query) => {
  const q = query.toLowerCase();
  return substances.filter(s => 
    s.name.toLowerCase().includes(q) || 
    (s.brand && s.brand.toLowerCase().includes(q)) || 
    s.tags.some(t => t.toLowerCase().includes(q))
  );
};

export const getSubstanceById = (id) => substances.find(s => s.id === id);

export default substances;
