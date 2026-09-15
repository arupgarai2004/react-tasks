export type Restaurant = {
  id: string;
  name: string;
  cloudinaryImageId: string;
  locality: string;
  areaName: string;
  costForTwo: string;
  cuisines: string[];
  avgRating: number;
  totalRatingsString: string;
  slaString: string;
  lastMileTravelString: string;
  isOpen: boolean;
  veg?: boolean;
  offerHeader?: string;
  offerSubHeader?: string;
};

export const IMG_CDN =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export function restaurantImage(id: string) {
  return `${IMG_CDN}${id}`;
}

export const restaurants: Restaurant[] = [
  {
    id: "23683",
    name: "McDonald's",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/18/abbf8c57-5638-48f5-8c39-631493cccdf0_23683.JPG",
    locality: "2nd Stage",
    areaName: "Btm Layout",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
    avgRating: 4.3,
    totalRatingsString: "61K+",
    slaString: "20-25 mins",
    lastMileTravelString: "3.8 km",
    isOpen: true,
    offerHeader: "₹550 OFF",
    offerSubHeader: "ABOVE ₹2499",
  },
  {
    id: "596949",
    name: "Olio - The Wood Fired Pizzeria",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/24/b05f51b2-9e6e-456e-950a-abc16a3cf540_596949.JPG",
    locality: "Koramangala",
    areaName: "Koramangala",
    costForTwo: "₹300 for two",
    cuisines: ["Pizzas", "Pastas", "Italian", "Fast Food", "Snacks", "Beverages", "Desserts"],
    avgRating: 4.2,
    totalRatingsString: "2.1K+",
    slaString: "30-35 mins",
    lastMileTravelString: "2.6 km",
    isOpen: true,
    offerHeader: "70% OFF",
    offerSubHeader: "UPTO ₹140",
  },
  {
    id: "17036",
    name: "Leon's - Burgers & Wings (Leon Grill)",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33319107-783d-4484-97e8-2fac21b4c9b7_17036.jpg",
    locality: "HSR Layout",
    areaName: "HSR Layout",
    costForTwo: "₹300 for two",
    cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
    avgRating: 4.3,
    totalRatingsString: "105K+",
    slaString: "20-25 mins",
    lastMileTravelString: "4.6 km",
    isOpen: true,
    offerHeader: "70% OFF",
    offerSubHeader: "UPTO ₹140",
  },
  {
    id: "5934",
    name: "Burger King",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ac30c19f-5572-448a-9c6a-44be9d986625_5934.jpg",
    locality: "Koramangala",
    areaName: "Koramangala",
    costForTwo: "₹350 for two",
    cuisines: ["Burgers", "American"],
    avgRating: 3.9,
    totalRatingsString: "106K+",
    slaString: "25-30 mins",
    lastMileTravelString: "1.6 km",
    isOpen: true,
    offerHeader: "ITEMS",
    offerSubHeader: "AT ₹59",
  },
  {
    id: "10576",
    name: "Pizza Hut",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/336f6060-14bc-454b-9995-19c94b5e7464_10576.JPG",
    locality: "6th Block",
    areaName: "Koramangala",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.3,
    totalRatingsString: "22K+",
    slaString: "20-25 mins",
    lastMileTravelString: "1.0 km",
    isOpen: false,
    offerHeader: "50% OFF",
  },
  {
    id: "739117",
    name: "Boba Bhai - Bubble Tea & Korean Street Food",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/1/fe0f07e0-4f12-41b1-970c-f2659fcb3d33_739117.JPG",
    locality: "Industrial Layout ward",
    areaName: "Koramangala",
    costForTwo: "₹200 for two",
    cuisines: ["Bubble Tea", "Burger", "Korean", "Beverages", "Fast Food", "Juice and shake"],
    avgRating: 4.1,
    totalRatingsString: "1.8K+",
    slaString: "25-30 mins",
    lastMileTravelString: "2.3 km",
    isOpen: true,
    offerHeader: "60% OFF",
    offerSubHeader: "UPTO ₹120",
  },
  {
    id: "656392",
    name: "Subway",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/113d790a-4937-4b7a-a7d3-51cbbabdd50a_656392.jpg",
    locality: "1st Block",
    areaName: "Koramangala",
    costForTwo: "₹350 for two",
    cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
    avgRating: 4.4,
    totalRatingsString: "5.7K+",
    slaString: "15-20 mins",
    lastMileTravelString: "1.4 km",
    isOpen: true,
    offerHeader: "₹150 OFF",
    offerSubHeader: "ABOVE ₹299",
  },
  {
    id: "32285",
    name: "Wow! Momo",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/25/74674683-3bb2-40c3-9a8c-62c9e6109f34_32285.JPG",
    locality: "2nd Stage",
    areaName: "BTM Layout",
    costForTwo: "₹250 for two",
    cuisines: ["Momos", "Chinese", "fastfood", "Asian", "Beverages"],
    avgRating: 4.0,
    totalRatingsString: "10K+",
    slaString: "20-25 mins",
    lastMileTravelString: "2.9 km",
    isOpen: true,
    offerHeader: "70% OFF",
    offerSubHeader: "UPTO ₹140",
  },
  {
    id: "873313",
    name: "The Bihari Kitchen",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/20/f55abb38-1546-46c4-b83d-057ba9571906_873313.jpg",
    locality: "B.B.M.P South",
    areaName: "BTM 2nd Stage",
    costForTwo: "₹400 for two",
    cuisines: ["Bihari", "Snacks", "Home Food"],
    avgRating: 4.3,
    totalRatingsString: "2.9K+",
    slaString: "20-25 mins",
    lastMileTravelString: "3.6 km",
    isOpen: true,
    offerHeader: "ITEMS",
    offerSubHeader: "AT ₹149",
  },
  {
    id: "218727",
    name: "Poha On Wheels",
    cloudinaryImageId: "t3dxsb9rcm5jqlxfjgwk",
    locality: "8th Cross Road",
    areaName: "Bellandur",
    costForTwo: "₹100 for two",
    cuisines: ["Snacks"],
    avgRating: 4.4,
    totalRatingsString: "5.6K+",
    slaString: "20-25 mins",
    lastMileTravelString: "7.2 km",
    isOpen: true,
    veg: true,
    offerHeader: "ITEMS",
    offerSubHeader: "AT ₹30",
  },
  {
    id: "1004721",
    name: "Mr Phillys American Cheeseburgers",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/13/c41fe099-61b1-45cd-af96-9eee8d87e119_1004721.jpg",
    locality: "HSR",
    areaName: "HSR",
    costForTwo: "₹500 for two",
    cuisines: ["American", "Biryani", "Fast Food", "Burgers", "wrap", "Salads"],
    avgRating: 4.3,
    totalRatingsString: "5.4K+",
    slaString: "25-30 mins",
    lastMileTravelString: "6.2 km",
    isOpen: true,
    offerHeader: "70% OFF",
    offerSubHeader: "UPTO ₹140",
  },
  {
    id: "973614",
    name: "Good Flippin' Burgers",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/d53c8976-4d88-4dc5-8d86-f1d8cf40c3ee_973614.JPG",
    locality: "Unit No.SF-CN-09",
    areaName: "BTM",
    costForTwo: "₹600 for two",
    cuisines: ["Burgers", "American", "Fast Food", "Beverages", "Wraps", "Coffee"],
    avgRating: 4.4,
    totalRatingsString: "1.1K+",
    slaString: "20-25 mins",
    lastMileTravelString: "2.7 km",
    isOpen: true,
    offerHeader: "ITEMS",
    offerSubHeader: "AT ₹195",
  },
  {
    id: "1397427",
    name: "The All Night Biryani",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/b7a6e575-c6b1-4772-b988-719fd9382fdb_1397427.jpg",
    locality: "BTM",
    areaName: "BTM",
    costForTwo: "₹990 for two",
    cuisines: ["Chinese", "Biryani", "Kebabs", "Indian", "North Indian", "Mughlai"],
    avgRating: 3.7,
    totalRatingsString: "196",
    slaString: "10-15 mins",
    lastMileTravelString: "1.7 km",
    isOpen: true,
    offerHeader: "ITEMS",
    offerSubHeader: "AT ₹39",
  },
  {
    id: "74444",
    name: "Samosa Party",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/6c4dbdd7-6584-4703-897c-83cbbbb4cb8d_74444.JPG",
    locality: "Koramangala",
    areaName: "Koramangala",
    costForTwo: "₹100 for two",
    cuisines: ["Fast Food", "Snacks", "Beverages", "Chaat", "North Indian", "Street Food"],
    avgRating: 4.3,
    totalRatingsString: "19K+",
    slaString: "15-20 mins",
    lastMileTravelString: "1.4 km",
    isOpen: true,
    offerHeader: "50% OFF",
  },
];