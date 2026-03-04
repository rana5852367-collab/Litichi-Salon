// src/app/data/megaMenuData.js

export const megaMenuData = [
  {
    id: "hair",
    name: "Hair",
    icon: "✂️",
    services: [
      { 
        id: "womens-haircut",
        name: "Women's Haircut", 
        link: "/services#womens-haircut",
        price: "Rs. 1,500",
        duration: "60 mins",
        description: "Professional haircut with wash, styling and finishing"
      },
      { 
        id: "hair-coloring",
        name: "Hair Coloring", 
        link: "/services#hair-coloring",
        price: "Rs. 3,500",
        duration: "120 mins",
        description: "Full hair coloring with premium quality products"
      },
      { 
        id: "hair-spa",
        name: "Hair Spa Treatment", 
        link: "/services#hair-spa",
        price: "Rs. 2,500",
        duration: "90 mins",
        description: "Deep conditioning treatment for damaged hair"
      },
      { 
        id: "bridal-hair",
        name: "Bridal Hair Styling", 
        link: "/services#bridal-hair",
        price: "Rs. 5,000",
        duration: "120 mins",
        description: "Complete bridal hairstyling with accessories"
      },
    ],
  },
  {
    id: "skin",
    name: "Skin Care",
    icon: "✨",
    services: [
      { 
        id: "luxury-facial",
        name: "Luxury Facial", 
        link: "/services#luxury-facial",
        price: "Rs. 2,500",
        duration: "75 mins",
        description: "Premium facial with imported products for glowing skin"
      },
      { 
        id: "gold-facial",
        name: "Gold Facial", 
        link: "/services#gold-facial",
        price: "Rs. 4,500",
        duration: "90 mins",
        description: "Special gold facial for radiant and youthful skin"
      },
      { 
        id: "skin-whitening",
        name: "Skin Whitening", 
        link: "/services#skin-whitening",
        price: "Rs. 3,000",
        duration: "60 mins",
        description: "Advanced skin whitening treatment with natural products"
      },
    
    ],
  },
  {
    id: "makeup",
    name: "Makeup",
    icon: "💄",
    services: [
      { 
        id: "bridal-makeup",
        name: "Bridal Makeup", 
        link: "/services#bridal-makeup",
        price: "Rs. 15,000",
        duration: "180 mins",
        description: "Complete bridal makeup with hair styling and accessories"
      },
      { 
        id: "party-makeup",
        name: "Party Makeup", 
        link: "/services#party-makeup",
        price: "Rs. 5,000",
        duration: "90 mins",
        description: "Glamorous party makeup for special occasions"
      },
      { 
        id: "engagement-makeup",
        name: "Engagement Makeup", 
        link: "/services#engagement-makeup",
        price: "Rs. 8,000",
        duration: "120 mins",
        description: "Elegant makeup for engagement ceremonies"
      },
     
    ],
  },
  {
    id: "nails",
    name: "Nails",
    icon: "💅",
    services: [
      { 
        id: "manicure",
        name: "Manicure", 
        link: "/services#manicure",
        price: "Rs. 1,800",
        duration: "45 mins",
        description: "Complete hand and nail care with polish"
      },
      { 
        id: "pedicure",
        name: "Pedicure", 
        link: "/services#pedicure",
        price: "Rs. 2,000",
        duration: "60 mins",
        description: "Relaxing foot treatment with nail care"
      },
      { 
        id: "nail-art",
        name: "Nail Art", 
        link: "/services#nail-art",
        price: "Rs. 2,500",
        duration: "75 mins",
        description: "Creative nail art designs by expert artists"
      },
    
    ],
  },
];

// Categories for the header menu
export const serviceCategories = megaMenuData.map(item => ({
  id: item.id,
  name: item.name,
  icon: item.icon
}));

// Helper function to get all services in a flat array
export const getAllServices = () => {
  return megaMenuData.flatMap(category => 
    category.services.map(service => ({
      ...service,
      categoryId: category.id,
      categoryName: category.name,
      categoryIcon: category.icon
    }))
  );
};

// Helper function to get a single service by ID
export const getServiceById = (serviceId) => {
  const allServices = getAllServices();
  return allServices.find(service => service.id === serviceId);
};

export default megaMenuData;