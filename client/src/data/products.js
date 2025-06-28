// import { Product } from '../types';

export const products = [
  {
    id: "p1",
    name: "Ashwagandha Capsules",
    description: "Pure Ashwagandha extract in easy-to-consume capsule form. Known for its stress-relief and immunity-boosting properties.",
    price: 599,
    category: "supplements",
    image: "https://images.pexels.com/photos/6692132/pexels-photo-6692132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    benefits: ["Reduces stress and anxiety", "Boosts immunity", "Improves sleep quality", "Enhances vitality"],
    ingredients: ["Ashwagandha root extract", "Vegetable cellulose"],
    usage: "Take 1 capsule twice daily after meals with water.",
    stock: 50
  },
  {
    id: "p2",
    name: "Triphala Churna",
    description: "Traditional Ayurvedic formula combining three fruits known for supporting digestive health and detoxification.",
    price: 349,
    category: "digestive",
    image: "https://images.pexels.com/photos/5759635/pexels-photo-5759635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    benefits: ["Supports digestive health", "Natural detoxifier", "Improves absorption of nutrients", "Maintains regular bowel movements"],
    ingredients: ["Amalaki (Emblica officinalis)", "Bibhitaki (Terminalia bellirica)", "Haritaki (Terminalia chebula)"],
    usage: "Take 1 teaspoon with warm water before bedtime.",
    stock: 45
  },
  {
    id: "p3",
    name: "Brahmi Hair Oil",
    description: "Nourishing hair oil formulated with Brahmi to strengthen hair roots and promote hair growth.",
    price: 450,
    category: "haircare",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/hair-oil/s/9/t/500-brahmi-dudhi-500ml-hair-oil-500-ml-vimal-original-imagzhdhsdurzhyv.jpeg?q=90&crop=false",
    benefits: ["Strengthens hair roots", "Reduces hair fall", "Promotes new hair growth", "Calms the mind"],
    ingredients: ["Brahmi extract", "Coconut oil", "Amla extract", "Bhringraj"],
    usage: "Massage into scalp and leave overnight for best results. Use 2-3 times weekly.",
    stock: 30
  },
  {
    id: "p4",
    name: "Tulsi-Ginger Tea",
    description: "Refreshing herbal tea blend that combines the goodness of Holy Basil (Tulsi) and Ginger for respiratory health.",
    price: 199,
    category: "beverages",
    image: "https://images.pexels.com/photos/6157084/pexels-photo-6157084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    benefits: ["Supports respiratory health", "Boosts immunity", "Relieves stress", "Aids digestion"],
    ingredients: ["Tulsi leaves", "Dried ginger", "Black pepper", "Cardamom"],
    usage: "Steep one teabag in hot water for 3-5 minutes. Enjoy 2-3 cups daily.",
    stock: 100
  },
  {
    id: "p5",
    name: "Chyawanprash",
    description: "Traditional Ayurvedic jam packed with herbs and spices to boost immunity and overall wellbeing.",
    price: 550,
    category: "immunity",
    image: "https://images.pexels.com/photos/5863397/pexels-photo-5863397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    benefits: ["Enhances immunity", "Improves digestion", "Provides antioxidants", "Supports respiratory health"],
    ingredients: ["Amla (Indian Gooseberry)", "Ghee", "Honey", "40+ herbs and spices"],
    usage: "Take 1 tablespoon daily in the morning.",
    stock: 40
  },
  {
    id: "p6",
    name: "Neem Face Wash",
    description: "Gentle face wash with the purifying properties of Neem to cleanse and refresh the skin.",
    price: 275,
    category: "skincare",
    image: "https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    benefits: ["Deep cleanses skin", "Controls acne", "Removes impurities", "Soothes irritation"],
    ingredients: ["Neem extract", "Tulsi extract", "Aloe vera", "Natural cleansers"],
    usage: "Apply on wet face, massage gently and rinse. Use twice daily.",
    stock: 65
  }
];

export const productCategories = [
  { id: "all", name: "All Products" },
  { id: "supplements", name: "Supplements" },
  { id: "digestive", name: "Digestive Health" },
  { id: "haircare", name: "Hair Care" },
  { id: "skincare", name: "Skin Care" },
  { id: "beverages", name: "Herbal Beverages" },
  { id: "immunity", name: "Immunity Boosters" }
];