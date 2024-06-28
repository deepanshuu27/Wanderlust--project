const sampleListings = [
        {
            title: "Cozy Beachfront Cottage",
            description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
            image: {
                filename: "listingimage",
                url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            },
            price: 1500,
            location: "Malibu",
            country: "United States",
            geometry: {
                type: "Point",
                coordinates: [-118.778613, 34.025922]
            },
            category: "beach" // Add the appropriate category
        },
        {
            "title": "Northern Light Hut by Torneriver",
            "description": "Enjoy the mesmerizing Northern Lights from this cozy hut by the Torneriver. Experience the tranquility and beauty of Kiruna N, Sweden.",
            "image": {
                "filename": "listingimage",
                "url": "https://a0.muscache.com/im/pictures/352bca00-41a3-4391-b303-1919599cb382.jpg?im_w=1200"
            },
            "price": 6500,
            "location": "Kiruna N",
            "country": "Sweden",
            "geometry": {
                "type": "Point",
                "coordinates": [20.263035, 67.855744]  // Coordinates for Kiruna, Sweden
            },
            "category": "arctic"
        },
        {
            "title": "B&B Marrula - Finland",
            "description": "Experience the serene beauty of Kuopio, Finland at B&B Marrula. A perfect retreat for nature lovers.",
            "image": {
                "filename": "listingimage",
                "url": "https://a0.muscache.com/im/pictures/miso/Hosting-37911089/original/50668d00-094b-4bc7-afdf-497817167e40.jpeg?im_w=1200"
            },
            "price": 4500,
            "location": "Kuopio",
            "country": "Finland",
            "geometry": {
                "type": "Point",
                "coordinates": [27.674191, 62.892391]  // Coordinates for Kuopio, Finland
            },
            "category": "arctic"
        },
        
        
        {
            title: "Modern Loft in Downtown",
            description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
            image: {
                filename: "listingimage",
                url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            },
            price: 1200,
            location: "New York City",
            country: "United States",
            geometry: {
                type: "Point",
                coordinates: [-74.005974, 40.712776]
            },
            category: "mountain" // Add the appropriate category
        },
        {
            "title": "Sparkling - Sauna Cabin by the Rapids",
            "description": "Relax and rejuvenate in this sparkling sauna cabin by the rapids in Kontiolahti, Finland. A perfect getaway to unwind and connect with nature.",
            "image": {
                "filename": "listingimage",
                "url": "https://a0.muscache.com/im/pictures/miso/Hosting-642654961343232939/original/b663a411-0b05-4ce1-97a7-baa3fd7a378c.jpeg?im_w=1200"
            },
            "price": 7900,
            "location": "Kontiolahti",
            "country": "Finland",
            "geometry": {
                "type": "Point",
                "coordinates": [29.840837, 62.765694]  // Coordinates for Kontiolahti, Finland
            },
            "category": "arctic"
        },
        
    
  {
      title: "Mountain Retreat",
      description:
          "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1000,
      location: "Aspen",
      country: "United States",
      geometry: {
          type: "Point",
          coordinates: [-106.821967, 39.191098]
      },
      category: "pool"
  },

  {
    "title": "Villa Remo, Iso-Syöte",
    "description": "Discover the charm of Villa Remo in Iso-Syöte, Pudasjärvi, Finland. Perfect for a peaceful retreat surrounded by stunning natural beauty.",
    "image": {
        "filename": "listingimage",
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1014411211002451825/original/538ed5a3-90df-405f-b5d6-f1916a72b794.jpeg?im_w=1200"
    },
    "price": 9800,
    "location": "Pudasjärvi",
    "country": "Finland",
    "geometry": {
        "type": "Point",
        "coordinates": [27.0246, 65.3594]  // Coordinates for Pudasjärvi, Finland
    },
    "category": "arctic"
},

{
    "title": "Villa on the Shore of Lake Oulujärvi",
    "description": "Enjoy a tranquil escape at this beautiful villa on the shore of Lake Oulujärvi in Vaala, Finland. Perfect for nature lovers and those seeking relaxation.",
    "image": {
        "filename": "listingimage",
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-869269302654014867/original/9d709332-66d3-44e2-ab01-bfa1f9e95006.jpeg?im_w=1200"
    },
    "price": 8000,
    "location": "Vaala",
    "country": "Finland",
    "geometry": {
        "type": "Point",
        "coordinates": [26.8341, 64.5639]  // Coordinates for Vaala, Finland
    },
    "category": "arctic"
},


{
    "title": "Rashid Desert Private Camp",
    "description": "Experience the magic of the desert at Rashid Desert Private Camp in Bidiyah, Oman. Enjoy stunning dune views and a unique, private retreat.",
    "image": {
        "filename": "listingimage",
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-821516730029751465/original/b6dad850-69f7-4d3e-8c25-989d00c2b243.jpeg?im_w=1200"
    },
    "price": 7000,
    "location": "Bidiyah",
    "country": "Oman",
    "geometry": {
        "type": "Point",
        "coordinates": [58.8056, 22.4443]  // Coordinates for Bidiyah, Oman
    },
    "category": "camping"
},
{
    "title": "Experience the Cave, Rock, and Camping",
    "description": "Immerse yourself in the unique experience of cave dwelling and camping in Al Taif, Saudi Arabia. Discover the beauty of the desert landscape and enjoy a peaceful retreat.",
    "image": {
        "filename": "listingimage",
        "url": "https://a0.muscache.com/im/pictures/hosting/Hosting-994810898498549365/original/9222e9ab-d216-4f3a-b806-b0d5a077724e.jpeg?im_w=1200"
    },
    "price": 7500,
    "location": "Al Taif",
    "country": "Saudi Arabia",
    "geometry": {
        "type": "Point",
        "coordinates": [40.4055, 21.4858]  // Coordinates for Al Taif, Saudi Arabia
    },
    "category": "camping"
},
{
    "title": "Adventure Tent & Desert Safari",
    "description": "Embark on an exciting adventure with tent camping and desert safari in Dubai, UAE. Experience the thrill of the desert and enjoy memorable moments.",
    "image": {
        "filename": "listingimage",
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-768013539711282456/original/65459a8a-a148-4daa-905f-04df7fe8208b.jpeg?im_w=1200"
    },
    "price": 5500,
    "location": "Dubai",
    "country": "United Arab Emirates",
    "geometry": {
        "type": "Point",
        "coordinates": [55.2708, 25.2048]  // Coordinates for Dubai, UAE
    },
    "category": "camping"
},
{
    "title": "Talwar Farm (4BR) with Private Pool in Manesar",
    "description": "Enjoy a luxurious stay at Talwar Farm, featuring a 4-bedroom villa with a private pool in Manesar, Gurugram, India. Perfect for relaxation and leisure.",
    "image": {
        "filename": "listingimage",
        "url": "https://a0.muscache.com/im/pictures/6bf7c09a-0ca2-491a-a450-7d209e6fbec3.jpg?im_w=1200"
    },
    "price": 6500,
    "location": "Manesar",
    "country": "India",
    "geometry": {
        "type": "Point",
        "coordinates": [76.9378, 28.3535]  // Coordinates for Manesar, Gurugram, India
    },
    "category": "camping"
},

{
    "title": "Volca Treehouse with Swimming Pool - Near IXC Airport",
    "description": "Escape to the Volca Treehouse near IXC Airport in Zirakpur, India. Enjoy a unique stay with a swimming pool amidst natural surroundings.",
    "image": {
        "filename": "listingimage",
        "url": "https://a0.muscache.com/im/pictures/48ab9dd1-742e-43f7-be76-e9cb58a909cc.jpg?im_w=1200"
    },
    "price": 4000,
    "location": "Zirakpur",
    "country": "India",
    "geometry": {
        "type": "Point",
        "coordinates": [76.8326, 30.642]  // Coordinates for Zirakpur, India
    },
    "category": "treehouse"
},





  {
      title: "Historic Villa in Tuscany",
      description:
          "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Florence",
      country: "Italy",
      geometry: {
          type: "Point",
          coordinates: [11.255814, 43.769871]
      },
      category: "beach"
  },
  {
      title: "Secluded Treehouse Getaway",
      description:
          "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2800,
      location: "Portland",
      country: "United States",
      geometry: {
          type: "Point",
          coordinates: [-122.673447, 45.523064]
      },
      category:"mountain"
  },
  {
      title: "Beachfront Paradise",
      description:
          "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      location: "Cancun",
      country: "Mexico",
      geometry: {
          type: "Point",
          coordinates: [-86.822037, 21.161907]
      },
      category:"beach",
  },
  {
      title: "Rustic Cabin by the Lake",
      description:
          "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2900,
      location: "Lake Tahoe",
      country: "United States",
      geometry: {
          type: "Point",
          coordinates: [-120.032354, 39.096849]
      },

      category:"mountain"
  },
  {
      title: "Bestefarhaugen - The cozy house on the hill",
      description: "Bestefarhaugen is a very nice house in quiet, natural surroundings. Mountain and sea views. the kitchen is perfectly equipped, the house has plenty of space",
      image: {
          filename: "listingimage",
            url:"https://a0.muscache.com/im/pictures/181d4be2-6cb2-4306-94bf-89aa45c5de66.jpg?im_w=1200",
        },
      price: 3500,
      location: "Nordland, Norway",
      country: "Norway",
      geometry: {
          type: "Point",
          coordinates: [14.5736, 67.0975]
      },
      category:"arctic",
  },
  {
      title: "Ski-In/Ski-Out Chalet",
      description:
          "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
      geometry: {
          type: "Point",
          coordinates: [7.228554, 46.097825]
      },
      category:"boat"
  },
  {
      title: "Safari Lodge in the Serengeti",
      description:
          "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      image: {
          filename: "listingimage",
          url:"https://a0.muscache.com/im/pictures/miso/Hosting-952201752971547203/original/c8d2a9f2-18cb-4c9f-8ee1-0efc91864381.jpeg?im_w=1200",
      },
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
      geometry: {
          type: "Point",
          coordinates: [34.836098, -2.333333]
      },
      category:"trending",
  },
  {
    title: "Historic Canal House",
    description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: {
        type: "Point",
        coordinates: [4.9041, 52.3676],
    },
    category:"camping"
},
{
    title: "Private Island Retreat",
    description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    geometry: {
        type: "Point",
        coordinates: [178.0650, -17.7134],
    },
    category:"mountain"
},
{
    title: "Charming Cottage in the Cotswolds",
    description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    geometry: {
        type: "Point",
        coordinates: [-1.7204, 51.8330],
    },
    category:"beach",
},
{
    title: "Historic Brownstone in Boston",
    description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    geometry: {
        type: "Point",
        coordinates: [-71.0589, 42.3601],
    },
    category:"boat"
},
{
    title: "Beachfront Bungalow in Bali",
    description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Denpasar, Bali",
    country: "Indonesia",
    geometry: {
        type: "Point",
        coordinates: [115.1889, -8.4095],
    },
    category:"camping",
},
{
    title: "Mountain View Cabin in Banff",
    description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    geometry: {
        type: "Point",
        coordinates: [-115.5708, 51.1784],
    },
    category:"mountain",
},
{
    title: "Art Deco Apartment in Miami",
    description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
        filename: "listingimage",
        url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    geometry: {
        type: "Point",
        coordinates: [-80.1918, 25.7617],
    },
    category:"arctic",
},
{
    title: "Tropical Villa in Phuket",
    description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    geometry: {
        type: "Point",
        coordinates: [98.3923, 7.8804],
    },
    category:"mountain",
},
{
    title: "Historic Castle in Scotland",
    description: "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
        filename: "listingimage",
        url: "https://a0.muscache.com/im/pictures/37e5e8c0-0c13-43f7-b029-70ba43af9713.jpg?im_w=1200",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    geometry: {
        type: "Point",
        coordinates: [-4.2026, 57.7880],
    },
    category:"castle",
},
{
    title: "Desert Oasis in Dubai",
    description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: {
        type: "Point",
        coordinates: [55.2708, 25.2048],
    },
    category:"castle",
},

  {
      title: "Rustic Log Cabin in Montana",
      description: "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1100,
      location: "Montana",
      country: "United States",
      geometry: {
          type: "Point",
          coordinates: [-110.3626, 46.8797],
      },
      category:"mountain"
  },
  {
      title: "Beachfront Villa in Greece",
      description: "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Mykonos",
      country: "Greece",
      geometry: {
          type: "Point",
          coordinates: [25.3802, 37.4467],
      },
    category:"pool",  
  },
  {
      title: "Eco-Friendly Treehouse Retreat",
      description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
      image: {
          filename: "listingimage",
          url:"https://a0.muscache.com/im/pictures/miso/Hosting-803218751400526550/original/57a71142-e9f7-43d8-8ff1-8556f5ceb037.jpeg?im_w=1200",   
        },
      price: 750,
      location: "Costa Rica",
      country: "Costa Rica",
      geometry: {
          type: "Point",
          coordinates: [-84.0739, 9.7489],
      },
      category:"treehouse"
  },
  {
      title: "Historic Cottage in Charleston",
      description: "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
      image: {
          filename: "listingimage",
            url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1600,
      location: "Charleston",
      country: "United States",
      geometry: {
          type: "Point",
          coordinates: [-79.9311, 32.7765],
      },
      category:"mountain",
  },
  {
      title: "Modern Apartment in Tokyo",
      description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      location: "Tokyo",
      country: "Japan",
      geometry: {
          type: "Point",
          coordinates: [139.6917, 35.6895],
      },
      category:"rooms",
  },
  {
      title: "Lakefront Cabin in New Hampshire",
      description: "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "New Hampshire",
      country: "United States",
      geometry: {
          type: "Point",
          coordinates: [-71.5724, 43.1939],
      },
      category:"camping",
  },
  {
      title: "Luxury Villa in the Maldives",
      description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
      image: {
          filename: "listingimage",
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-1051332798233447554/original/acd25c93-3202-435c-877d-5e60a40ef189.jpeg?im_w=1200",
      },
      price: 6000,
      location: "Maldives",
      country: "Maldives",
      geometry: {
          type: "Point",
          coordinates: [73.2207, 3.2028],
      },
      category:"pool",
  },
  {
      title: "Ski Chalet in Aspen",
      description: "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Aspen",
      country: "United States",
      geometry: {
          type: "Point",
          coordinates: [-106.8205, 39.1911],
      },
      category:"trending",
  },
  {
      title: "Secluded Beach House in Costa Rica",
      description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Costa Rica",
      country: "Costa Rica",
      geometry: {
          type: "Point",
          coordinates: [-84.0739, 9.7489],
      },
      category:"beach"
  },
  {
      title: "Modern Loft in SoHo",
      description: "Sleek loft with industrial-chic design in the heart of SoHo.",
      image: {
          filename: "listingimage",
          url: "https://images.pexels.com/photos/1895031/pexels-photo-1895031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      price: 4000,
      location: "SoHo",
      country: "United States",
      geometry: {
          type: "Point",
          coordinates: [-74.002, 40.7233],
      },
      category:"trending"
  },
  {
      title: "Charming Brownstone in Harlem",
      description: "Historic brownstone with original details and modern amenities.",
      image: {
          filename: "listingimage",
          url: "https://images.pexels.com/photos/20427358/pexels-photo-20427358/free-photo-of-villa-with-palm-tree.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      price: 2800,
      location: "Harlem",
      country: "United States",
      geometry: {
          type: "Point",
          coordinates: [-73.9442, 40.8116],
      },
      category:"trending"

  },
  
  
    {
        title: "Stylish Condo in Williamsburg",
        description: "Contemporary condo with rooftop access in trendy Williamsburg.",
        image: {
            filename: "listingimage",
            url: "https://images.pexels.com/photos/2480608/pexels-photo-2480608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        price: 3500,
        location: "Williamsburg",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-73.9513, 40.718],
        },
        category:"pool",
    },
    {
        title: "Luxury Penthouse in Tribeca",
        description: "Elegant penthouse with panoramic views of the city skyline.",
        image: {
            filename: "listingimage",
            url: "https://images.pexels.com/photos/25731657/pexels-photo-25731657/free-photo-of-a-small-house-with-a-pool-and-a-boat.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        price: 8000,
        location: "Tribeca",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-74.0107, 40.7163],
        },
        category:"pool",
    },
    {
        title: "Garden Oasis in Greenwich Village",
        description: "Tranquil garden oasis in the heart of Greenwich Village.",
        image: {
            filename: "listingimage",
            url: "https://images.pexels.com/photos/19142026/pexels-photo-19142026/free-photo-of-walkway-between-bungalows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        price: 5000,
        location: "Greenwich Village",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-74.0027, 40.7336],
        },
        category:"trending",
    },

    {
        "title": "Secluded Treehouse in North Carolina",
        "description": "Escape to a serene treehouse nestled in China Grove, North Carolina. Experience the tranquility of nature with all the comforts of modern living.",
        "image": {
            "filename": "listingimage",
            "url": "https://a0.muscache.com/im/pictures/a8ef5d47-0b5a-4189-abaf-322753e942b2.jpg?im_w=1200"
        },
        "price": 20000,
        "location": "China Grove, North Carolina",
        "country": "United States",
        "geometry": {
            "type": "Point",
            "coordinates": [-80.5812, 35.5743]
        },
        category:"treehouse"
    },

    {
        "title": "Secluded Cabin Retreat in Arizona",
        "description": "Experience rustic charm in this secluded cabin on Cane Beds Rd, Arizona. Surrounded by nature, it's the perfect getaway for peace and quiet.",
        "image": {
            "filename": "listingimage",
            "url": "https://a0.muscache.com/im/pictures/eb99fe55-7424-455a-acd7-d847926e26de.jpg?im_w=1200"
        },
        "price": 3500,
        "location": "Cane Beds Rd, Arizona",
        "country": "United States",
        "geometry": {
            "type": "Point",
            "coordinates": [-112.9417, 36.9424]
        },
        category:"trending"
    },
    {
        "title": "Wood House @HolidayVagamon",
        "description": "Experience the charm of Vagamon, India with a stay at the Wood House at HolidayVagamon. Enjoy a peaceful retreat surrounded by natural beauty.",
        "image": {
            "filename": "listingimage",
            "url": "https://a0.muscache.com/im/pictures/miso/Hosting-811254278641206438/original/cb89e0d2-fc6c-4f60-b687-85d36ebf132b.jpeg?im_w=1200"
        },
        "price": 8500,
        "location": "Vagamon",
        "country": "India",
        "geometry": {
            "type": "Point",
            "coordinates": [76.9686, 9.6844]  // Coordinates for Vagamon, India
        },
        "category": "treehouse"
    },
    {
        "title": "Tree House",
        "description": "Stay in a charming Tree House in the heart of Idukki, India. Enjoy a unique and serene experience surrounded by lush greenery.",
        "image": {
            "filename": "listingimage",
            "url": "https://a0.muscache.com/im/pictures/miso/Hosting-922343787240590704/original/4263d59f-68d0-41db-9bb1-8314f3b0dd79.jpeg?im_w=1200"
        },
        "price": 8900,
        "location": "Idukki",
        "country": "India",
        "geometry": {
            "type": "Point",
            "coordinates": [77.0922, 9.9175]  // Coordinates for Idukki, India
        },
        "category": "treehouse"
    },
    
    
    {
        "title": "Charming Cabin in Montrose, Pennsylvania",
        "description": "Discover rustic charm in this cozy cabin located in Montrose, Pennsylvania. Surrounded by picturesque landscapes, it offers a peaceful retreat.",
        "image": {
            "filename": "listingimage",
            "url": "https://a0.muscache.com/im/pictures/c6b72b07-2f2e-4548-8788-c18dc1fad5a2.jpg?im_w=1200"
        },
        "price": 3000,
        "location": "Montrose, Pennsylvania",
        "country": "United States",
        "geometry": {
            "type": "Point",
            "coordinates": [-75.8797, 41.8346]
        },
        category:"trending"
    },
    {
        "title": "Sunny Guest House in Key Largo",
        "description": "Enjoy a sunny retreat in this charming guest house in Key Largo, Florida. Relax by the beach and explore the vibrant marine life.",
        "image": {
            "filename": "listingimage",
            "url": "https://a0.muscache.com/im/pictures/dbc42565-34bf-414f-b8db-2e5dbb1911b7.jpg?im_w=1200"
        },
        "price": 4500,
        "location": "Key Largo, Florida",
        "country": "United States",
        "geometry": {
            "type": "Point",
            "coordinates": [-80.4311, 25.0865]
        },
        category:"trending",
    },
    {
        "title": "Luxurious Villa in İnlice, Turkey",
        "description": "Indulge in luxury at this spacious villa located in İnlice, Turkey. Enjoy breathtaking views and modern amenities for a relaxing getaway.",
        "image": {
            "filename": "listingimage",
            "url": "https://a0.muscache.com/im/pictures/ef127682-2b1b-449b-9b12-bc9abdef3fdf.jpg?im_w=1200"
        },
        "price": 6000,
        "location": "İnlice, Turkey",
        "country": "Turkey",
        "geometry": {
            "type": "Point",
            "coordinates": [28.0117, 36.9617]
        },
        category:"pool",
    },
    {
        "title": "Historic Castle in Bergerac, France",
        "description": "Live like royalty in this historic castle located in Bergerac, France. Immerse yourself in medieval charm and picturesque surroundings.",
        "image": {
            "filename": "listingimage",
            "url": "https://a0.muscache.com/im/pictures/46c25e83-4b01-4798-85df-db58a3a546a6.jpg?im_w=1200"
        },
        "price": 8000,
        "location": "Bergerac, France",
        "country": "France",
        "geometry": {
            "type": "Point",
            "coordinates": [0.4831, 44.8509]
        },
        category:"castle",

    },
    {
        "title": "Cozy Chalet in Blattniksele, Sweden",
        "description": "Experience the charm of Blattniksele in this cozy chalet. Surrounded by serene landscapes, it's the perfect retreat for relaxation and outdoor activities.",
        "image": {
            "filename": "listingimage",
            "url": "https://a0.muscache.com/im/pictures/miso/Hosting-46487748/original/9e4c806e-dbad-4186-a0c6-bd75adc0c068.jpeg?im_w=1200"
        },
        "price": 6000,
        "location": "Blattniksele, Sweden",
        "country": "Sweden",
        "geometry": {
            "type": "Point",
            "coordinates": [18.3428, 64.2023]
        },
        category:"arctic",
    },
    {
        "title": "Secluded Chalet in Kittilä, Finland",
        "description": "Escape to this secluded chalet nestled in Kittilä, Finland. Enjoy the peaceful surroundings and experience Finnish Lapland's natural beauty.",
        "image": {
            "filename": "listingimage",
            "url": "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA1NTkxNTIxMDgwNDI2NjEzMg%3D%3D/original/83d35089-6d14-4600-b4b9-d420020bf915.jpeg?im_w=1200"
        },
        "price": 8000,
        "location": "Kittilä, Finland",
        "country": "Finland",
        "geometry": {
            "type": "Point",
            "coordinates": [24.9394, 67.6347]
        },
        category:"arctic",
    },

    {
        "title": "Rustic Cabin in Posio, Finland",
        "description": "Embrace the rustic charm of Posio in this cozy cabin. Nestled amidst Finnish wilderness, it offers a tranquil escape for nature enthusiasts.",
        "image": {
            "filename": "listingimage",
            "url": "https://a0.muscache.com/im/pictures/3ada8472-2788-4ded-ba72-88437f5b57d5.jpg?im_w=1200"
        },
        "price": 6000,
        "location": "Posio, Finland",
        "country": "Finland",
        "geometry": {
            "type": "Point",
            "coordinates": [28.1655, 66.1198]
        },
        category:"arctic",
    },
    
    
    

    {
        "title": "Cozy Cabin Retreat in Gerton, North Carolina",
        "description": "Escape to this cozy cabin retreat nestled in Gerton, North Carolina. Surrounded by nature, it offers peace and relaxation.",
        "image": {
            "filename": "listingimage",
            "url": "https://a0.muscache.com/im/pictures/miso/Hosting-46582886/original/3e62fd16-5f65-4add-86d2-65349d8ea763.jpeg?im_w=1200"
        },
        "price": 3000,
        "location": "Gerton, North Carolina",
        "country": "United States",
        "geometry": {
            "type": "Point",
            "coordinates": [-82.3452, 35.5246]
        },
        category:"trending",
    },
    
    {
        "title": "Serenetree Tree Villa ",
        "description": "Immerse yourself in tranquility at the Serenetree Tree Villa in Kerala, India. Experience the beauty of nature with panoramic views and serene surroundings.",
        "image": {
            "filename": "listingimage",
            "url": "https://images.unsplash.com/photo-1550355191-aa8a80b41353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZSUyMGhvdXNlfGVufDB8fDB8fHww"
        },
        "price": 12000,
        "location": "Kerala, India",
        "country": "India",
        "geometry": {
            "type": "Point",
            "coordinates": [76.8094, 10.8505]
        },
        category:"trending",
    },

    {
        "title": "Tree House amidst Forest @ Kailasa Woods",
        "description": "Experience the serenity of nature in this charming tree house nestled in Kailasa Woods, Dehradun, India. Surrounded by lush forest, it offers a peaceful retreat with stunning views.",
        "image": {
            "filename": "listingimage",
            "url": "https://images.unsplash.com/photo-1519378045141-f05b62faa055?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJlZSUyMGhvdXNlfGVufDB8fDB8fHww"
        },
        "price": 8000,
        "location": "Dehradun, India",
        "country": "India",
        "geometry": {
            "type": "Point",
            "coordinates": [78.0322, 30.3165]
        },
        category:"treehouse",
    },

    {
        "title": "The Sky Treehouse | 100 MTR Trek",
        "description": "Discover tranquility at The Sky Treehouse, located in Jibhi, India. Enjoy breathtaking views and a serene environment just a short trek away.",
        "image": {
            "filename": "listingimage",
            "url": "https://plus.unsplash.com/premium_photo-1685305676839-26406ddbe4de?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        "price": 9000,
        "location": "Jibhi, India",
        "country": "India",
        "geometry": {
            "type": "Point",
            "coordinates": [77.4069, 31.6638]
        },
        category:"treehouse",
    },
    

    
    {
        "title": "Tree House Birders’ Nook. Galkadawala Forest Lodge",
        "description": "Experience the serene Tree House Birders’ Nook at Galkadawala Forest Lodge in Habarana, Sri Lanka. Surrounded by lush greenery, it's a perfect retreat for birdwatchers and nature enthusiasts.",
        "image": {
            "filename": "listingimage",
            "url": "https://images.unsplash.com/photo-1498358498068-4f10bd19665d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRyZWUlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D"
        },
        "price": 10000,
        "location": "Habarana, Sri Lanka",
        "country": "Sri Lanka",
        "geometry": {
            "type": "Point",
            "coordinates": [80.8155, 8.0229]
        },
        category:"treehouse",
    },
    
    {
        "title": "Maya Cottages - Bamboo Treehouse @ Ashvem",
        "description": "Stay in a beautiful bamboo treehouse at Maya Cottages, located in the serene surroundings of Ashvem, Mandrem, India. Perfect for a tranquil and unique getaway.",
        "image": {
            "filename": "listingimage",
            "url": "https://images.unsplash.com/photo-1618767689159-1bfda407947b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyZWUlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D"
        },
        "price": 7000,
        "location": "Mandrem, India",
        "country": "India",
        "geometry": {
            "type": "Point",
            "coordinates": [73.7407, 15.7168]
        },
        category:"treehouse",
    },
    {
        "title": "Breathtaking Cruise 2 Nights Roundtrip-Ayutthaya 4",
        "description": "Embark on a breathtaking 2-night cruise from Bangkok to Ayutthaya and back. Enjoy stunning views, luxurious accommodations, and exceptional service.",
        "image": {
            "filename": "listingimage",
            "url": "https://images.unsplash.com/photo-1583768522824-792bf08ef0bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        "price": 25000,
        "location": "Bangkok, Thailand",
        "country": "Thailand",
        "geometry": {
            "type": "Point",
            "coordinates": [100.5168, 13.7563]
        },
        category:"boat",
    },

    {
        "title": "Jewel of the Nile Yacht Hotel and Cruises",
        "description": "Experience luxury aboard the Jewel of the Nile Yacht Hotel and Cruises in New Jersey, United States. Enjoy unparalleled comfort, exquisite dining, and breathtaking views.",
        "image": {
            "filename": "listingimage",
            "url": "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3J1aXNlfGVufDB8fDB8fHww"
        },
        "price": 35000,
        "location": "New Jersey, United States",
        "country": "United States",
        "geometry": {
            "type": "Point",
            "coordinates": [-74.4057, 40.0583]
        },
        category:"boat",

    },


    {
        "title": "Vision Yachting / Yat kiralama Fethiye",
        "description": "Explore the beauty of Fethiye aboard Vision Yachting. Enjoy a luxurious yacht rental experience with stunning views of the Turkish coastline.",
        "image": {
            "filename": "listingimage",
            "url": "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eWFjaHR8ZW58MHx8MHx8fDA%3D"
        },
        "price": 28000,
        "location": "Fethiye, Turkey",
        "country": "Turkey",
        "geometry": {
            "type": "Point",
            "coordinates": [28.6391, 36.6217]
        },
        category:"boat",

    },
    
    
    {
        "title": "Maldives Luxury Yacht Private Charter",
        "description": "Indulge in luxury with a private yacht charter in the Maldives. Experience unparalleled comfort and explore the stunning beauty of the Maldivian islands.",
        "image": {
            "filename": "listingimage",
            "url": "https://images.unsplash.com/photo-1535024966840-e7424dc2635b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHlhY2h0fGVufDB8fDB8fHww"
        },
        "price": 45000,
        "location": "Maldives",
        "country": "Maldives",
        "geometry": {
            "type": "Point",
            "coordinates": [73.2207, 3.2028]
        },
        category:"boat",

    },


    {
        "title": "4 Cabin Boat in Fethiye",
        "description": "Experience the beauty of Fethiye aboard a luxurious 4 cabin boat. Explore the stunning coastline and turquoise waters of Turkey in comfort and style.",
        "image": {
            "filename": "listingimage",
            "url": "https://images.unsplash.com/photo-1593351415075-3bac9f45c877?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8eWFjaHR8ZW58MHx8MHx8fDA%3D"
        },
        "price": 32000,
        "location": "Fethiye, Turkey",
        "country": "Turkey",
        "geometry": {
            "type": "Point",
            "coordinates": [28.6391, 36.6217]
        },
        category:"boat",

    },

    {
        "title": "Dragon of the Mekong",
        "description": "Discover the charm of Phnom Penh aboard the Dragon of the Mekong. Enjoy a unique river cruise experience and explore the cultural richness of Cambodia.",
        "image": {
            "filename": "listingimage",
            "url": "https://a0.muscache.com/im/pictures/3c4cb3ca-6daf-49fe-9515-e4b5fbd06c32.jpg?im_w=1200"
        },
        "price": 18000,
        "location": "Phnom Penh, Cambodia",
        "country": "Cambodia",
        "geometry": {
            "type": "Point",
            "coordinates": [104.9167, 11.5564]
        },
        category:"boat",

    },

    {
        "title": "Cheers Yachting (Blue Cruise) Rent Boat - Weekly Boat",
        "description": "Experience the ultimate Blue Cruise with Cheers Yachting in Fethiye, Turkey. Rent a weekly boat and explore the stunning Turkish coast and Mediterranean Sea.",
        "image": {
            "filename": "listingimage",
            "url": "https://a0.muscache.com/im/pictures/33dd96a1-c6c8-4918-9300-86932eee29f5.jpg?im_w=1200"
        },
        "price": 42000,
        "location": "Fethiye, Turkey",
        "country": "Turkey",
        "geometry": {
            "type": "Point",
            "coordinates": [28.6391, 36.6217]
        },
        category:"boat",

    },
    {
        "title": "Apartment Elisabeth Herrenhaus Viecheln Anno 1869",
        "description": "Stay in a historic apartment at the Elisabeth Herrenhaus, dating back to 1869. Experience the charm of a bygone era with modern comforts.",
        "image": {
            "filename": "listingimage",
            "url": "https://images.unsplash.com/photo-1609237756221-88c4a93846b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        "price": 3500,
        "location": "Behren-Lübchin, Germany",
        "country": "Germany",
        "geometry": {
            "type": "Point",
            "coordinates": [12.6972, 53.8747]
        },
        category:"castle",

    },
    {
        "title": "Royal Boutique Hotel - VILA DOMINA",
        "description": "Experience luxury at the Royal Boutique Hotel - VILA DOMINA in Sinaia, Romania. Enjoy impeccable service, elegant accommodations, and explore the beauty of the Carpathian Mountains.",
        "image": {
            "filename": "listingimage",
            "url": "https://images.unsplash.com/photo-1597941265658-46a50fb4efc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENhc3RsZXN8ZW58MHx8MHx8fDA%3D"
        },
        "price": 5000,
        "location": "Sinaia, Romania",
        "country": "Romania",
        "geometry": {
            "type": "Point",
            "coordinates": [25.5559, 45.3611]
        },
        category:"castle",

    },


    {
        "title": "The Small Castle of the Moors II, Access to the Sea",
        "description": "Discover the charm of The Small Castle of the Moors II in Minori, Italy, with direct access to the sea. Enjoy stunning views, historic ambiance, and a memorable stay.",
        "image": {
            "filename": "listingimage",
            "url": "https://images.unsplash.com/photo-1597466599360-3b9775841aec?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        "price": 6000,
        "location": "Minori, Italy",
        "country": "Italy",
        "geometry": {
            "type": "Point",
            "coordinates": [14.6206, 40.6525]
        },
        category:"castle",

    },


    {
        "title": "Zámek Ruda nad Moravou Apartmán 8",
        "description": "Stay in the historic Zámek Ruda nad Moravou, Apartment 8, in Ruda nad Moravou, Czechia. Enjoy elegant accommodations with a touch of history and explore the beautiful surroundings.",
        "image": {
            "filename": "listingimage",
            "url": "https://images.unsplash.com/photo-1571504211935-1c936b327411?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2FzdGxlc3xlbnwwfHwwfHx8MA%3D%3D"
        },
        "price": 4800,
        "location": "Ruda nad Moravou, Czechia",
        "country": "Czechia",
        "geometry": {
            "type": "Point",
            "coordinates": [17.2622, 49.0125]
        },
        category:"castle",

    },

    {
        "title": "Ritterzimmer Burg Plankenstein",
        "description": "Experience a medieval stay at the Ritterzimmer in Burg Plankenstein, Austria. Immerse yourself in history and enjoy a unique castle accommodation.",
        "image": {
            "filename": "listingimage",
            "url": "https://images.unsplash.com/photo-1562937778-deb2b7bf3eb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fENhc3RsZXN8ZW58MHx8MHx8fDA%3D"
        },
        "price": 5500,
        "location": "Plankenstein, Austria",
        "country": "Austria",
        "geometry": {
            "type": "Point",
            "coordinates": [15.3089, 48.0150]
        },
        category:"castle",

    },


    {
        "title": "Modern Room in a Flat with City View - Stratford",
        "description": "Enjoy a modern room with a stunning city view in Stratford, London, United Kingdom. Experience comfort and convenience in this vibrant part of the city.",
        "image": {
            "filename": "listingimage",
            "url": "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Um9vbXN8ZW58MHx8MHx8fDE%3D"
        },
        "price": 3000,
        "location": "Stratford, London",
        "country": "United Kingdom",
        "geometry": {
            "type": "Point",
            "coordinates": [-0.0042, 51.5423]
        },
        category:"rooms",

    },

    {
        "title": "Luxe Boho Room with Xbox, Theatre, Private Balcony",
        "description": "Stay in a luxurious Boho room with an Xbox, private theatre, and a private balcony in Gurugram, India. Enjoy modern amenities and comfort in a stylish setting.",
        "image": {
            "filename": "listingimage",
            "url": "https://images.unsplash.com/photo-1678874953579-72cbd94874b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNTc1NzI1fHxlbnwwfHx8fHw%3D"
        },
        "price": 4500,
        "location": "Gurugram, India",
        "country": "India",
        "geometry": {
            "type": "Point",
            "coordinates": [77.0266, 28.4595]
        },
        category:"rooms",
    },

    {
        "title": "Naggarville Farmstead (Premium MV Room G. Floor)",
        "description": "Enjoy a premium stay at the Naggarville Farmstead in Naggar, India. Experience the serene surroundings and modern comforts in the ground floor MV Room.",
        "image": {
            "filename": "listingimage",
            "url": "https://a0.muscache.com/im/pictures/miso/Hosting-23081411/original/7a775a1a-1eac-4185-8f5a-01c7c9fc0262.jpeg?im_w=1200"
        },
        "price": 4000,
        "location": "Naggar, India",
        "country": "India",
        "geometry": {
            "type": "Point",
            "coordinates": [77.1647, 32.0935]
        },
        category:"rooms",
    },


    {
        "title": "Cozy Cottage by the Tropical Garden - Joglo Villa",
        "description": "Relax in a cozy cottage by the tropical garden at Joglo Villa in Tampak Siring, Indonesia. Enjoy the serene environment and traditional architecture for a peaceful retreat.",
        "image": {
            "filename": "listingimage",
            "url": "https://a0.muscache.com/im/pictures/miso/Hosting-700556011074770966/original/d3f035eb-17d9-4144-97a5-443e2a5b8ebf.jpeg?im_w=1200"
        },
        "price": 5500,
        "location": "Tampak Siring, Indonesia",
        "country": "Indonesia",
        "geometry": {
            "type": "Point",
            "coordinates": [115.3112, -8.4297]
        },
        category:"rooms",
    },

    {
        "title": "Spa#1_Analog_Hanok_북촌",
        "description": "Experience traditional Korean living with modern comforts at Spa#1_Analog_Hanok in 북촌 (Bukchon), 종로구 (Jongno-gu), South Korea. Relax and unwind in a serene and beautifully preserved hanok.",
        "image": {
            "filename": "listingimage",
            "url": "https://a0.muscache.com/im/pictures/e24c90c0-ec0d-44e9-a8d1-ca07344b1dd1.jpg?im_w=1200"
        },
        "price": 6000,
        "location": "종로구, South Korea",
        "country": "South Korea",
        "geometry": {
            "type": "Point",
            "coordinates": [126.9816, 37.5793]
        },
        category:"rooms",
    },


    {
        "title": "OCB stays: Stargazing Deck",
        "description": "Enjoy a unique stay at OCB stays with a stargazing deck in Fagu, India. Experience the tranquility and beauty of the night sky from this cozy and comfortable retreat.",
        "image": {
            "filename": "listingimage",
            "url": "https://a0.muscache.com/im/pictures/a6ea9b11-9630-4b3c-b9f4-53e6a9d1efaa.jpg?im_w=1200"
        },
        "price": 4200,
        "location": "Fagu, India",
        "country": "India",
        "geometry": {
            "type": "Point",
            "coordinates": [77.2531, 31.1020]
        },
        category:"trending",
    },

    {
        "title": "Elivaas Radhyam Luxurious Villa with Pool",
        "description": "Stay at the Elivaas Radhyam, a luxurious 2BHK villa with a private pool in Udaipur, India. Enjoy the opulent amenities and serene environment for a perfect getaway.",
        "image": {
            "filename": "listingimage",
            "url": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9vbCUyMGhvdXNlfGVufDB8fDB8fHww"
        },
        "price": 7500,
        "location": "Udaipur, India",
        "country": "India",
        "geometry": {
            "type": "Point",
            "coordinates": [73.6846, 24.5854]
        },
        category:"pool",
    },


    {
        "title": "Oasis 3 BHK Villa with Pvt Pool & Outdoor Dining",
        "description": "Escape to the Oasis, a luxurious 3 BHK villa with a private pool and outdoor dining area in New Delhi, India. Enjoy the perfect blend of modern amenities and serene surroundings.",
        "image": {
            "filename": "listingimage",
            "url": "https://images.unsplash.com/photo-1602075432748-82d264e2b463?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        "price": 9500,
        "location": "New Delhi, India",
        "country": "India",
        "geometry": {
            "type": "Point",
            "coordinates": [77.2090, 28.6139]
        },
        category:"pool",
    },

   
 
   

    {
        "title": "Delightful Luxury Tent Room",
        "description": "Experience luxury in the heart of nature at the Delightful Luxury Tent Room in East Khasi Hills, India. Relax and unwind in a beautifully appointed tent surrounded by serene landscapes.",
        "image": {
            "filename": "listingimage",
            "url": "https://plus.unsplash.com/premium_photo-1680813626932-7e5f24145c6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FtcGluZ3xlbnwwfHwwfHx8MQ%3D%3D"
        },
        "price": 8000,
        "location": "East Khasi Hills, India",
        "country": "India",
        "geometry": {
            "type": "Point",
            "coordinates": [91.8802, 25.5788]
        },
        category:"camping",
    },


    {
        "title": "Glamping in Tipperary Estate",
        "description": "Experience luxury camping (glamping) in a tipi at Tipperary Estate, Yercaud, India. Enjoy the serene surroundings and unique accommodation for a memorable getaway.",
        "image": {
            "filename": "listingimage",
            "url": "https://plus.unsplash.com/premium_photo-1661861308572-a138f9c5d927?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MQ%3D%3D"
        },
        "price": 7000,
        "location": "Yercaud, India",
        "country": "India",
        "geometry": {
            "type": "Point",
            "coordinates": [78.2199, 11.7753]
        },
        category:"camping",
    },

    
    {
    "title": "Caravan of the Fury",
    "description": "Experience the unique Caravan of the Fury in Dibba, Oman. This accommodation offers a blend of comfort and adventure amidst stunning natural landscapes.",
    "image": {
        "filename": "listingimage",
        "url": "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTI2Njc4MzAzNTM4NjMyOTE2/original/1ed46150-5f81-4698-b908-e4aae7d7043f.jpeg?im_w=720"
    },
    "price": 8500,
    "location": "Dibba, Oman",
    "country": "Oman",
    "geometry": {
        "type": "Point",
        "coordinates": [56.2610, 26.0963]
    },
    category:"trending",
},

{
    "title": "Deluxe Suite in Tropical Paradise, Canggu area #1",
    "description": "Experience luxury in the heart of Canggu area, Kuta Utara, Indonesia with this deluxe suite. Enjoy tropical surroundings and premium amenities.",
    "image": {
        "filename": "listingimage",
        "url": "https://a0.muscache.com/im/pictures/6ebacde4-252f-466e-b5f2-732b8f9bb570.jpg?im_w=1200"
    },
    "price": 2500,
    "location": "Kuta Utara",
    "country": "Indonesia",
    "geometry": {
        "type": "Point",
        "coordinates": [115.1406, -8.6500]  // Coordinates for Kuta Utara, Indonesia
    },
    "category": "rooms"
},

{
    "title": "Luxurious Sydney Apartment | A Home Away from Home",
    "description": "Enjoy the luxury of this Sydney apartment, offering a home away from home experience. Perfect for a comfortable and memorable stay.",
    "image": {
        "filename": "listingimage",
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-779243828803679868/original/6506e14d-8f3e-4b7a-9eae-19314204906a.jpeg?im_w=1200"
    },
    "location": "Sydney",
    "country": "Australia",
    "geometry": {
        "type": "Point",
        "coordinates": [151.2093, -33.8688]  // Coordinates for Sydney, Australia
    },
    "price": 3000,
    "category": "rooms"
},

{
    "title": "DOUBLE BED in a PRIVATE ROOM w/SPLIT AC Copacabana",
    "description": "Enjoy a comfortable stay with a double bed in a private room with split AC in Copacabana, Brazil. Ideal for travelers looking for convenience and comfort.",
    "image": {
        "filename": "listingimage",
        "url": "https://a0.muscache.com/im/pictures/896289f9-341b-4614-867c-5d8e910e5080.jpg?im_w=1200"
    },
    "price": 8000,
    "location": "Copacabana",
    "country": "Brazil",
    "geometry": {
        "type": "Point",
        "coordinates": [-43.1852, -22.9719]  // Coordinates for Copacabana, Brazil
    },
    "category": "rooms"
},

{
    "title": "1 Bedroom Included Breakfast 2 Pax",
    "description": "Enjoy a cozy 1-bedroom accommodation with breakfast included for 2 guests in Tegallalang, Indonesia. Perfect for a relaxing getaway.",
    "image": {
        "filename": "listingimage",
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-929944720214995582/original/33141d7c-1228-42a3-878d-8ab7fe92e1df.jpeg?im_w=1200"
    },
    "location": "Tegallalang",
    "country": "Indonesia",
    "geometry": {
        "type": "Point",
        "coordinates": [115.2781, -8.4375]  // Coordinates for Tegallalang, Indonesia
    },
    "category": "rooms",
    "price": 1200
},


{
    "title": "Sage: 3BHK Villa/Pvt Pool/Power BackUp/Wifi@Anjuna",
    "description": "Experience luxury at Sage, a 3-bedroom villa with a private pool, power backup, and WiFi in Vagator, Anjuna, India. Ideal for a relaxing and comfortable stay.",
    "image": {
        "filename": "listingimage",
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-676104485875631401/original/a69fdea8-27da-429d-8b50-1575d0506184.jpeg?im_w=1200"
    },
    "location": "Vagator, Anjuna",
    "country": "India",
    "geometry": {
        "type": "Point",
        "coordinates": [73.7397, 15.6021]  // Coordinates for Vagator, Anjuna, India
    },
    "category": "beach",
    "price": 5000,
},

{
    "title": "Morjim River Villa",
    "description": "Enjoy the serene Morjim River Villa in Morjim, India. Experience tranquility and comfort in this beautiful location.",
    "image": {
        "filename": "listingimage",
        "url": "https://a0.muscache.com/im/pictures/4316c021-f4dc-4515-b54e-0c776ceb5bb2.jpg?im_w=1200"
    },
    "location": "Morjim",
    "country": "India",
    "geometry": {
        "type": "Point",
        "coordinates": [73.7392, 15.6256]  // Coordinates for Morjim, India
    },
    "category": "beach",
    "price": 3500
},


{
    "title": "Nature's Abode 3BHK Villa with Private Pool @ Morjim",
    "description": "Experience nature's beauty at Nature's Abode, a 3-bedroom villa with a private pool in Morjim, India. Perfect for relaxation and tranquility.",
    "image": {
        "filename": "listingimage",
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-670750716347282626/original/8b09f2ca-f2ec-42bf-94aa-2e46c016af18.jpeg?im_w=1200"
    },
    "location": "Morjim",
    "country": "India",
    "geometry": {
        "type": "Point",
        "coordinates": [73.7417, 15.6199]  // Coordinates for Morjim, India
    },
    "category": "pool",
    "price": 6000
},
{
    "title": "Saga De Petra M 3BHK Lux Villa Anjuna",
    "description": "Experience luxury at Saga De Petra M, a 3-bedroom luxury villa in Anjuna, India. Enjoy comfort and style in a beautiful setting.",
    "image": {
        "filename": "listingimage",
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-988104185826193497/original/80d08801-3d4f-41e2-949d-3881073884f7.jpeg?im_w=1200"
    },
    "location": "Anjuna",
    "country": "India",
    "geometry": {
        "type": "Point",
        "coordinates": [73.7437, 15.5839]  // Coordinates for Anjuna, India
    },
    "category": "beach",
    "price": 7500
},

{
    "title": "Stylish Cave Hotel & Suites",
    "description": "Experience luxury and style at the Stylish Cave Hotel & Suites in Ortahisar Belediyesi, Turkey. Enjoy unique accommodations in a historical cave setting.",
    "image": {
        "filename": "listingimage",
        "url": "https://a0.muscache.com/im/pictures/3e13ae05-69b2-4da8-8367-6e8aca8e44c1.jpg?im_w=720"
    },
    "location": "Ortahisar Belediyesi",
    "country": "Turkey",
    "geometry": {
        "type": "Point",
        "coordinates": [34.8466, 38.6056]  // Coordinates for Ortahisar Belediyesi, Turkey
    },
    "category": "trending",
    "price": 3000
},
{
    "title": "Cave Room with Private Pool Room in Ürgüp",
    "description": "Enjoy a unique stay in a cave room with a private pool in Ürgüp, Turkey. Experience comfort and relaxation in a historical setting.",
    "image": {
        "filename": "listingimage",
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-1015842622628695976/original/451ec7a9-f0d8-41a9-b2fa-11f4a3e34b0f.jpeg?im_w=1200"
    },
    "location": "Ürgüp",
    "country": "Turkey",
    "geometry": {
        "type": "Point",
        "coordinates": [34.8926, 38.6315]  // Coordinates for Ürgüp, Turkey
    },
    "category": "trending",
    "price": 4000
},

{
    "title": "O'NEST By The Beach 8BHK Villa with Private Pool",
    "description": "Enjoy a luxurious stay at O'NEST By The Beach, an 8-bedroom villa with a private pool in Barashiv, India. Perfect for large groups or families looking for comfort and relaxation.",
    "image": {
        "filename": "listingimage",
        "url": "https://a0.muscache.com/im/pictures/bce4ba91-39b4-4620-8643-bacba0d17a73.jpg?im_w=1200"
    },
    "location": "Barashiv",
    "country": "India",
    "geometry": {
        "type": "Point",
        "coordinates": [72.8828, 20.8907]  // Coordinates for Barashiv, India
    },
    "category": "beach",
    "price": 12000
}










    
    
    
    
    
    

    
    
    
];


//Function to shuffle the listings array

function shuffleArray(sampleListings) {
    for (let i = sampleListings.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sampleListings[i], sampleListings[j]] = [sampleListings[j], sampleListings[i]];
    }
    return sampleListings;
  }

       
 const shuffledListings = shuffleArray(sampleListings);
  
  

 module.exports = { data:shuffledListings };