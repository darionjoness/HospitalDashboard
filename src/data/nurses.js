const nurses = [
  {
    name: "Sarah Johnson",
    phoneNumber: "555-1234",
    email: "sarah.johnson@example.com",
    floor: 1,
    shift: "day",
    image: "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    name: "Jessica Davis",
    phoneNumber: "555-5678",
    email: "jessica.davis@example.com",
    floor: 2,
    shift: "night",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Matthew Rodriguez",
    phoneNumber: "555-9012",
    email: "matthew.rodriguez@example.com",
    floor: 1,
    shift: "day",
    image: "https://randomuser.me/api/portraits/men/51.jpg"
  },
  {
    name: "Kimberly Martinez",
    phoneNumber: "555-3456",
    email: "kimberly.martinez@example.com",
    floor: 3,
    shift: "night",
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    name: "David Hernandez",
    phoneNumber: "555-7890",
    email: "david.hernandez@example.com",
    floor: 4,
    shift: "day",
    image: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    name: "Laura Perez",
    phoneNumber: "555-2345",
    email: "laura.perez@example.com",
    floor: 2,
    shift: "night",
    image: "https://randomuser.me/api/portraits/women/23.jpg"
  },
  {
    name: "Anthony Williams",
    phoneNumber: "555-6789",
    email: "anthony.williams@example.com",
    floor: 5,
    shift: "day",
    image: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    name: "Stephanie Brown",
    phoneNumber: "555-0123",
    email: "stephanie.brown@example.com",
    floor: 1,
    shift: "night",
    image: "https://randomuser.me/api/portraits/women/66.jpg"
  },
  {
    name: "Jason Lee",
    phoneNumber: "555-4567",
    email: "jason.lee@example.com",
    floor: 3,
    shift: "day",
    image: "https://randomuser.me/api/portraits/men/92.jpg"
  },
  {
    name: "Danielle White",
    phoneNumber: "555-8901",
    email: "danielle.white@example.com",
    floor: 4,
    shift: "night",
    image: "https://randomuser.me/api/portraits/women/57.jpg"
  },
  {
    name: "Thomas Martin",
    phoneNumber: "555-2345",
    email: "thomas.martin@example.com",
    floor: 2,
    shift: "day",
    image: "https://randomuser.me/api/portraits/men/19.jpg"
  },
  {
    name: "Eric Johnson",
    phoneNumber: "555-0123",
    email: "eric.johnson@example.com",
    floor: 3,
    shift: "day",
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
  },
  {
    name: "Maria Martinez",
    phoneNumber: "555-4567",
    email: "maria.martinez@example.com",
    floor: 4,
    shift: "night",
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1704&q=80',
  },
  {
    name: "Kevin Wilson",
    phoneNumber: "555-8901",
    email: "kevin.wilson@example.com",
    floor: 5,
    shift: "day",
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    name: "Michelle Garcia",
    phoneNumber: "555-1234",
    email: "michelle.garcia@example.com",
    floor: 2,
    shift: "night",
    image: 'https://images.unsplash.com/photo-1561742026-e99d88acc2e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    name: "Brian Taylor",
    phoneNumber: "555-5678",
    email: "brian.taylor@example.com",
    floor: 1,
    shift: "day",
    image: 'https://images.unsplash.com/photo-1641723345378-a701b30b2d36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
  },
  {
    name: "Lauren Hernandez",
    phoneNumber: "555-9012",
    email: "lauren.hernandez@example.com",
    floor: 4,
    shift: "night",
    image: 'https://images.unsplash.com/photo-1630631729332-d564de91400f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    name: "Brandon Jackson",
    phoneNumber: "555-3456",
    email: "brandon.jackson@example.com",
    floor: 3,
    shift: "day",
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    name: "Samantha Lee",
    phoneNumber: "555-7890",
    email: "samantha.lee@example.com",
    floor: 5,
    shift: "day",
    image: 'https://images.unsplash.com/photo-1573497491207-618cc224f243?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  }
];


  export default nurses