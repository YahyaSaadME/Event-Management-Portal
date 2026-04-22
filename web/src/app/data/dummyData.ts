// Dummy data for the Event Management System

export const indianCities = [
  'Mumbai, Maharashtra',
  'Delhi, Delhi',
  'Bangalore, Karnataka',
  'Hyderabad, Telangana',
  'Chennai, Tamil Nadu',
  'Kolkata, West Bengal',
  'Pune, Maharashtra',
  'Ahmedabad, Gujarat',
];

export const venues = [
  'Grand Taj Convention Center',
  'Royal Palace Banquet Hall',
  'Sunset Garden Resort',
  'Elite Business Center',
  'Pearl Auditorium',
  'Golden Gate Event Space',
  'Silver Oak Lawn',
  'Crystal Grand Hotel',
];

export const eventNames = [
  'Tech Summit 2026',
  'Wedding Celebration - Raj & Priya',
  'Annual Corporate Gala',
  'Spring Music Festival',
  'Product Launch Event',
  'Birthday Bash',
  'Charity Fundraiser',
  'Business Networking Meetup',
];

export const foodServices = [
  { name: 'Hyderabadi Biryani Deluxe', price: '₹350 per plate', category: 'Food' },
  { name: 'Gourmet Pizza Corner', price: '₹250 per pizza', category: 'Food' },
  { name: 'Classic Burger Station', price: '₹180 per burger', category: 'Food' },
  { name: 'Authentic Chicken Haleem', price: '₹200 per bowl', category: 'Food' },
  { name: 'South Indian Meals', price: '₹150 per plate', category: 'Food' },
  { name: 'North Indian Thali', price: '₹300 per plate', category: 'Food' },
];

export const decorationServices = [
  { name: 'Royal Wedding Decor', price: '₹50,000 onwards', category: 'Decoration' },
  { name: 'Modern Corporate Setup', price: '₹25,000 onwards', category: 'Decoration' },
  { name: 'Floral Paradise Arrangements', price: '₹15,000 onwards', category: 'Decoration' },
  { name: 'Birthday Theme Decor', price: '₹8,000 onwards', category: 'Decoration' },
];

export const hallServices = [
  { name: 'Grand Ballroom (500 capacity)', price: '₹75,000 per day', category: 'Hall' },
  { name: 'Elegant Banquet Hall (200 capacity)', price: '₹35,000 per day', category: 'Hall' },
  { name: 'Garden Lawn (300 capacity)', price: '₹40,000 per day', category: 'Hall' },
  { name: 'Conference Room (100 capacity)', price: '₹20,000 per day', category: 'Hall' },
];

export const photographyServices = [
  { name: 'Professional Wedding Photography', price: '₹40,000 per event', category: 'Photography' },
  { name: 'Corporate Event Coverage', price: '₹25,000 per event', category: 'Photography' },
  { name: 'Candid Photography Package', price: '₹30,000 per event', category: 'Photography' },
];

export const soundLightingServices = [
  { name: 'Premium Sound System', price: '₹15,000 per day', category: 'Sound & Lighting' },
  { name: 'Stage Lighting Setup', price: '₹20,000 per day', category: 'Sound & Lighting' },
  { name: 'Complete Audio-Visual Package', price: '₹35,000 per day', category: 'Sound & Lighting' },
];

export const allServices = [
  ...foodServices,
  ...decorationServices,
  ...hallServices,
  ...photographyServices,
  ...soundLightingServices,
];

export const serviceProviders = [
  {
    id: '1',
    name: 'Royal Caterers',
    type: 'Food',
    location: 'Mumbai, Maharashtra',
    services: ['Hyderabadi Biryani Deluxe', 'North Indian Thali'],
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Decor Dreams',
    type: 'Decoration',
    location: 'Bangalore, Karnataka',
    services: ['Royal Wedding Decor', 'Modern Corporate Setup'],
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Perfect Venues',
    type: 'Hall',
    location: 'Hyderabad, Telangana',
    services: ['Grand Ballroom', 'Garden Lawn'],
    rating: 4.6,
  },
  {
    id: '4',
    name: 'Capture Moments',
    type: 'Photography',
    location: 'Delhi, Delhi',
    services: ['Professional Wedding Photography', 'Candid Photography Package'],
    rating: 4.9,
  },
];

export const sampleEvents = [
  {
    id: '1',
    name: 'Tech Summit 2026',
    description: 'Annual technology conference bringing together industry leaders and innovators.',
    date: '2026-03-15',
    time: '10:00 AM',
    venue: 'Grand Taj Convention Center',
    location: 'Mumbai, Maharashtra',
    organizer: 'Tech Events India',
    status: 'Upcoming',
    attendees: 450,
    services: ['Conference Room', 'Professional Photography', 'Premium Sound System'],
  },
  {
    id: '2',
    name: 'Wedding Celebration - Raj & Priya',
    description: 'Join us in celebrating the union of two souls in a beautiful ceremony.',
    date: '2026-04-20',
    time: '06:00 PM',
    venue: 'Sunset Garden Resort',
    location: 'Pune, Maharashtra',
    organizer: 'Raj Sharma',
    status: 'Upcoming',
    attendees: 300,
    services: ['Garden Lawn', 'Royal Wedding Decor', 'Hyderabadi Biryani Deluxe', 'Wedding Photography'],
  },
  {
    id: '3',
    name: 'Annual Corporate Gala',
    description: 'Company annual celebration with awards, dinner, and entertainment.',
    date: '2026-02-28',
    time: '07:00 PM',
    venue: 'Royal Palace Banquet Hall',
    location: 'Bangalore, Karnataka',
    organizer: 'ABC Corporation',
    status: 'Completed',
    attendees: 200,
    services: ['Elegant Banquet Hall', 'Modern Corporate Setup', 'Premium Sound System'],
  },
  {
    id: '4',
    name: 'Spring Music Festival',
    description: 'Outdoor music festival featuring local and national artists.',
    date: '2026-05-10',
    time: '04:00 PM',
    venue: 'Silver Oak Lawn',
    location: 'Chennai, Tamil Nadu',
    organizer: 'Music Lovers Association',
    status: 'Upcoming',
    attendees: 500,
    services: ['Garden Lawn', 'Complete Audio-Visual Package', 'Gourmet Pizza Corner'],
  },
];

export const serviceRequests = [
  {
    id: '1',
    organizerName: 'Raj Sharma',
    eventName: 'Wedding Celebration - Raj & Priya',
    eventDate: '2026-04-20',
    venue: 'Sunset Garden Resort',
    location: 'Pune, Maharashtra',
    serviceType: 'Food',
    serviceName: 'Hyderabadi Biryani Deluxe',
    status: 'Pending',
    requestedAt: '2026-02-05',
  },
  {
    id: '2',
    organizerName: 'Tech Events India',
    eventName: 'Tech Summit 2026',
    eventDate: '2026-03-15',
    venue: 'Grand Taj Convention Center',
    location: 'Mumbai, Maharashtra',
    serviceType: 'Photography',
    serviceName: 'Professional Event Coverage',
    status: 'Accepted',
    requestedAt: '2026-01-20',
  },
  {
    id: '3',
    organizerName: 'ABC Corporation',
    eventName: 'Annual Corporate Gala',
    eventDate: '2026-02-28',
    venue: 'Royal Palace Banquet Hall',
    location: 'Bangalore, Karnataka',
    serviceType: 'Decoration',
    serviceName: 'Modern Corporate Setup',
    status: 'Accepted',
    requestedAt: '2026-01-15',
  },
  {
    id: '4',
    organizerName: 'Music Lovers Association',
    eventName: 'Spring Music Festival',
    eventDate: '2026-05-10',
    venue: 'Silver Oak Lawn',
    location: 'Chennai, Tamil Nadu',
    serviceType: 'Sound & Lighting',
    serviceName: 'Complete Audio-Visual Package',
    status: 'Pending',
    requestedAt: '2026-02-08',
  },
];
