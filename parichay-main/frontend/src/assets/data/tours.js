

const tourdata = [
  {
    id: 1,
    title: "Kedarnath",
    city: "Kedarnath",
    address: "Uttarakhand,India",
    distance: 441,
    price: 10020,
    maxGroupSize: 15,
    desc: "this is the description",
    photo:
      "https://m.economictimes.com/thumb/msid-120811759,width-1200,height-900,resizemode-4,imgsize-264082/kedarnath.jpg",
    featured: true,
    reviews: [
      {
        name: "Arjun",
        rating: 4.5,
        comment: "Absolutely loved it! A must-visit destination.",
      },
      {
        name: "Vivaan",
        rating: 4.2,
        comment: "Great experience with beautiful surroundings.",
      },
      {
        name: "Myra",
        rating: 3.7,
        comment: "Good trip overall, could be slightly improved.",
      },
      {
        name: "Vihaan",
        rating: 3.8,
        comment: "Good trip overall, could be slightly improved.",
      },
      {
        name: "Reyansh",
        rating: 4.3,
        comment: "Great experience with beautiful surroundings.",
      },
    ],
  },
  {
    id: 2,
    title: "Badrinath",
    city: "Joshimath",
    address: "Uttarakhand,India",
    distance: 105,
    price: 9000,
    maxGroupSize: 13,
    desc: "this is the description",
    photo:
      "https://cdn.pixabay.com/photo/2017/09/23/19/07/vishnu-temple-2779856_1280.jpg",
    featured: true,
    reviews: [
      {
        name: "Krishna",
        rating: 3.8,
        comment: "Good trip overall, could be slightly improved.",
      },
      {
        name: "Aarav",
        rating: 4.3,
        comment: "Great experience with beautiful surroundings.",
      },
      {
        name: "Ishaan",
        rating: 4.6,
        comment: "Absolutely loved it! A must-visit destination.",
      },
      {
        name: "Vihaan",
        rating: 4.6,
        comment: "Absolutely loved it! A must-visit destination.",
      },
      {
        name: "Ira",
        rating: 3.9,
        comment: "Good trip overall, could be slightly improved.",
      },
      {
        name: "Ira",
        rating: 4.0,
        comment: "Great experience with beautiful surroundings.",
      },
    ],
  },
  {
    id: 3,
    title: "Kashi Darshan",
    city: "Varanasi",
    address: "Uttar Pradesh, India",
    distance: 256,
    price: 15000,
    maxGroupSize: 7,
    desc: "this is the description",
    photo:
      "https://images.pexels.com/photos/30854355/pexels-photo-30854355/free-photo-of-sunset-view-of-varanasi-ghats-on-the-ganges.jpeg",
    featured: true,
    reviews: [
      {
        name: "Reyansh",
        rating: 4.3,
        comment: "Great experience with beautiful surroundings.",
      },
      {
        name: "Myra",
        rating: 4.7,
        comment: "Absolutely loved it! A must-visit destination.",
      },
      {
        name: "Myra",
        rating: 4.9,
        comment: "Absolutely loved it! A must-visit destination.",
      },
      {
        name: "Shaurya",
        rating: 3.7,
        comment: "Good trip overall, could be slightly improved.",
      },
      {
        name: "Pari",
        rating: 3.7,
        comment: "Good trip overall, could be slightly improved.",
      },
      {
        name: "Saanvi",
        rating: 3.7,
        comment: "Good trip overall, could be slightly improved.",
      },
      {
        name: "Diya",
        rating: 4.4,
        comment: "Great experience with beautiful surroundings.",
      },
      {
        name: "Shaurya",
        rating: 3.7,
        comment: "Good trip overall, could be slightly improved.",
      },
      {
        name: "Aditya",
        rating: 4.5,
        comment: "Absolutely loved it! A must-visit destination.",
      },
    ],
  },
  {
    id: 4,
    title: "Char dham combined package",
    city: "Kedarnath, Gangotri, Yamnotri, Badrinath",
    address: "Uttarakhand, India",
    distance: 400,
    price: 35699,
    maxGroupSize: 13,
    desc: "this is the description",
    photo:
      "https://www.india.com/wp-content/uploads/2022/05/char-dham-main-1.jpg",
    featured: true,
    reviews: [
      {
        name: "Vihaan",
        rating: 4.3,
        comment: "Great experience with beautiful surroundings.",
      },
      {
        name: "Ira",
        rating: 3.5,
        comment: "Good trip overall, could be slightly improved.",
      },
      {
        name: "Pari",
        rating: 3.6,
        comment: "Good trip overall, could be slightly improved.",
      },
      {
        name: "Ishaan",
        rating: 4.6,
        comment: "Absolutely loved it! A must-visit destination.",
      },
      {
        name: "Krishna",
        rating: 3.8,
        comment: "Good trip overall, could be slightly improved.",
      },
      {
        name: "Arjun",
        rating: 4.8,
        comment: "Absolutely loved it! A must-visit destination.",
      },
    ],
  },
  {
    id: 5,
    title: "Baba Neem Karoli+Nainital+Jageshwar",
    city: "Nainital, Almorha, Kainchidham",
    address: "Uttarakhand India",
    distance: 114,
    price: 25000,
    maxGroupSize: 7,
    desc: "this is the description",
    photo:
      "https://www.pilgrimpackages.com/upload/package/image-A8YRCHJ0RQZGTI0H.jpg",
    featured: true,
    reviews: [
      {
        name: "Meera",
        rating: 3.6,
        comment: "Good trip overall, could be slightly improved.",
      },
      {
        name: "Vihaan",
        rating: 4.5,
        comment: "Absolutely loved it! A must-visit destination.",
      },
      {
        name: "Ishaan",
        rating: 4.1,
        comment: "Great experience with beautiful surroundings.",
      },
      {
        name: "Myra",
        rating: 4.3,
        comment: "Great experience with beautiful surroundings.",
      },
      {
        name: "Ira",
        rating: 4.4,
        comment: "Great experience with beautiful surroundings.",
      },
    ],
  },
  {
    id: 6,
    title: "Neel-Kanth Mahadev with river rafting and bunjee",
    city: "Rishikesh",
    address: "Uttarakhand, India",
    distance: 433,
    price: 7000,
    maxGroupSize: 5,
    desc: "this is the description",
    photo:
      "https://images.pexels.com/photos/20754957/pexels-photo-20754957/free-photo-of-man-holding-burning-pot-in-ritual.jpeg",
    featured: true,
    reviews: [
      {
        name: "Vivaan",
        rating: 4.0,
        comment: "Great experience with beautiful surroundings.",
      },
      {
        name: "Meera",
        rating: 4.4,
        comment: "Great experience with beautiful surroundings.",
      },
      {
        name: "Saanvi",
        rating: 4.1,
        comment: "Great experience with beautiful surroundings.",
      },
      {
        name: "Vivaan",
        rating: 4.9,
        comment: "Absolutely loved it! A must-visit destination.",
      },
      {
        name: "Vihaan",
        rating: 4.6,
        comment: "Absolutely loved it! A must-visit destination.",
      },
      {
        name: "Arjun",
        rating: 4.1,
        comment: "Great experience with beautiful surroundings.",
      },
      {
        name: "Saanvi",
        rating: 4.0,
        comment: "Great experience with beautiful surroundings.",
      },
      {
        name: "Sai",
        rating: 4.8,
        comment: "Absolutely loved it! A must-visit destination.",
      },
      {
        name: "Saanvi",
        rating: 5.0,
        comment: "Absolutely loved it! A must-visit destination.",
      },
    ],
  },
  {
    id: 7,
    title: "Gangotri Yamnotri",
    city: "Gangotri, Yamnotri",
    address: "Uttarakhand, India",
    distance: 278,
    price: 16000,
    maxGroupSize: 12,
    desc: "this is the description",
    photo:
      "https://uttarakhandtriptrek.com/wp-content/uploads/2019/02/gangotri-yamunotri.jpeg",
    featured: true,
    reviews: [
      {
        name: "Saanvi",
        rating: 4.9,
        comment: "Absolutely loved it! A must-visit destination.",
      },
      {
        name: "Krishna",
        rating: 4.2,
        comment: "Great experience with beautiful surroundings.",
      },
      {
        name: "Krishna",
        rating: 4.7,
        comment: "Absolutely loved it! A must-visit destination.",
      },
      {
        name: "Vihaan",
        rating: 4.9,
        comment: "Absolutely loved it! A must-visit destination.",
      },
      {
        name: "Shaurya",
        rating: 4.9,
        comment: "Absolutely loved it! A must-visit destination.",
      },
      {
        name: "Krishna",
        rating: 4.0,
        comment: "Great experience with beautiful surroundings.",
      },
      {
        name: "Vihaan",
        rating: 3.9,
        comment: "Good trip overall, could be slightly improved.",
      },
      {
        name: "Ira",
        rating: 4.5,
        comment: "Absolutely loved it! A must-visit destination.",
      },
      {
        name: "Meera",
        rating: 4.6,
        comment: "Absolutely loved it! A must-visit destination.",
      },
      {
        name: "Sai",
        rating: 3.6,
        comment: "Good trip overall, could be slightly improved.",
      },
    ],
  },
  {
    id: 8,
    title: "Panch Kedar Package",
    city: "Kedarnath, Madhyamaheshwar, Tungnath, Rudranath, Kalpeshwar",
    address: "Uttarakhand, India",
    distance: 286,
    price: 45000,
    maxGroupSize: 6,
    desc: "this is the description",
    photo:
      "https://www.bontravelindia.com/wp-content/uploads/2022/03/Panch-Kedar-Temple-Himalayas-1.png",
    featured: true,
    reviews: [
      {
        name: "Vivaan",
        rating: 4.0,
        comment: "Great experience with beautiful surroundings.",
      },
      {
        name: "Ira",
        rating: 4.1,
        comment: "Great experience with beautiful surroundings.",
      },
      {
        name: "Pari",
        rating: 3.7,
        comment: "Good trip overall, could be slightly improved.",
      },
      {
        name: "Shaurya",
        rating: 3.6,
        comment: "Good trip overall, could be slightly improved.",
      },
      {
        name: "Saanvi",
        rating: 4.7,
        comment: "Absolutely loved it! A must-visit destination.",
      },
    ],
  },
  {
    id: 9,
    title: "Rajasthan and its Empires",
    city: "Jaipur, Jaisalmer, Uadaipur",
    address: "Rajasthan, India",
    distance: 425,
    price: 32263,
    maxGroupSize: 15,
    desc: "this is the description",
    photo:
      "https://images.pexels.com/photos/14477034/pexels-photo-14477034.jpeg",
    featured: false,
    reviews: [
      {
        name: "Myra",
        rating: 4.0,
        comment: "Great experience with beautiful surroundings.",
      },
      {
        name: "Arjun",
        rating: 4.2,
        comment: "Great experience with beautiful surroundings.",
      },
      {
        name: "Shaurya",
        rating: 5.0,
        comment: "Absolutely loved it! A must-visit destination.",
      },
      {
        name: "Meera",
        rating: 4.6,
        comment: "Absolutely loved it! A must-visit destination.",
      },
      {
        name: "Shaurya",
        rating: 3.7,
        comment: "Good trip overall, could be slightly improved.",
      },
      {
        name: "Reyansh",
        rating: 4.2,
        comment: "Great experience with beautiful surroundings.",
      },
      {
        name: "Ira",
        rating: 3.7,
        comment: "Good trip overall, could be slightly improved.",
      },
      {
        name: "Aditya",
        rating: 3.6,
        comment: "Good trip overall, could be slightly improved.",
      },
      {
        name: "Pari",
        rating: 3.7,
        comment: "Good trip overall, could be slightly improved.",
      },
      {
        name: "Pari",
        rating: 3.8,
        comment: "Good trip overall, could be slightly improved.",
      },
    ],
  },
  {
    id: 10,
    title: "Bade Chaar dham package",
    city: "Badrinath, Dwarka, Jagganath Puri, Rameshwaram",
    address: "India",
    distance: 353,
    price: 116637,
    maxGroupSize: 14,
    desc: "this is the description",
    photo:
      "https://www.ntpgroups.com/uploaded_files/thumb_cache/thumb_840_649_bada-chardham-tour1.jpg",
    featured: false,
    reviews: [
      {
        name: "Pari",
        rating: 4.0,
        comment: "Great experience with beautiful surroundings.",
      },
      {
        name: "Reyansh",
        rating: 3.8,
        comment: "Good trip overall, could be slightly improved.",
      },
      {
        name: "Saanvi",
        rating: 4.4,
        comment: "Great experience with beautiful surroundings.",
      },
      {
        name: "Ishaan",
        rating: 3.6,
        comment: "Good trip overall, could be slightly improved.",
      },
      {
        name: "Shaurya",
        rating: 4.2,
        comment: "Great experience with beautiful surroundings.",
      },
      {
        name: "Sai",
        rating: 3.9,
        comment: "Good trip overall, could be slightly improved.",
      },
      {
        name: "Pari",
        rating: 4.6,
        comment: "Absolutely loved it! A must-visit destination.",
      },
      {
        name: "Saanvi",
        rating: 4.4,
        comment: "Great experience with beautiful surroundings.",
      },
    ],
  },
];

export default tourdata;
