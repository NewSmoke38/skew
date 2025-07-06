import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";
import Bank from "./Bank";
import ProfileCircle from "./assets/profile-circle.svg";
import Cube from "./assets/cube.svg";
import AddIcon from "./assets/add.png";
import hotboy from './assets/hotboy.png';
import fish from './assets/fish.png';
import lemon from './assets/lemon.png';
import fearedOne from './assets/fearedOne.png';
import Chloe from './assets/Chloe.png';
import Emilie from './assets/Emilie.png';
import Kayla from './assets/Kayla.png';
import Tang from './assets/Tang.png';
import Miso from './assets/Miso.png';
import Kat from './assets/Kat.png';

const avatar1 = "https://randomuser.me/api/portraits/women/44.jpg";
const avatar2 = "https://randomuser.me/api/portraits/men/32.jpg";
const avatar3 = "https://randomuser.me/api/portraits/women/68.jpg";
const avatar4 = "https://randomuser.me/api/portraits/men/65.jpg";
const avatar5 = "https://randomuser.me/api/portraits/women/12.jpg";

const categories = [
  { name: "All", icon: "🔲" },
  { name: "Cool Cats", icon: "😺" },
  { name: "Pixel Apes", icon: "🦍" },
  { name: "RoboPunks", icon: "🤖" },
  { name: "Funky Frogs", icon: "🐸" },
];

const courses = [
  {
    title: "CCNA 2020 200-125 Video Boot Camp",
    students: "9,530",
    category: "IT & Software",
    color: "bg-rose-100/80",
    rating: 4.8,
    avatars: [avatar2, avatar3],
  },
  {
    title: "Powerful Business Writing: How to Write Concisely",
    students: "1,463",
    category: "Business",
    color: "bg-orange-100/80",
    rating: 4.9,
    avatars: [avatar1, avatar4],
  },
  {
    title: "Certified Six Sigma Yellow Belt Training",
    students: "6,726",
    category: "Media Training",
    color: "bg-indigo-100/80",
    rating: 4.9,
    avatars: [avatar5],
  },
  {
    title: "How to Design a Room in 10 Easy Steps",
    students: "8,735",
    category: "Interior",
    color: "bg-green-100/80",
    rating: 5.0,
    avatars: [avatar1],
    top: true,
  },
  {
    title: "UI/UX Design Essentials",
    students: "4,200",
    category: "Design",
    color: "bg-pink-100/80",
    rating: 4.7,
    avatars: [avatar2],
  },
  {
    title: "Photography Masterclass",
    students: "2,900",
    category: "Media Training",
    color: "bg-blue-100/80",
    rating: 4.8,
    avatars: [avatar3],
  },
  {
    title: "Digital Marketing 101",
    students: "7,100",
    category: "Business",
    color: "bg-yellow-100/80",
    rating: 4.6,
    avatars: [avatar4],
  },
  {
    title: "Creative Writing Workshop",
    students: "3,800",
    category: "Media Training",
    color: "bg-purple-100/80",
    rating: 4.9,
    avatars: [avatar5],
  },
  {
    title: "Interior Lighting Design",
    students: "2,200",
    category: "Interior",
    color: "bg-green-200/80",
    rating: 4.8,
    avatars: [avatar1],
  },
  {
    title: "Startup Fundamentals",
    students: "5,500",
    category: "Business",
    color: "bg-orange-200/80",
    rating: 4.7,
    avatars: [avatar2],
  },
];

const myCourses = [
  {
    title: "Flutter Masterclass (Dart, APIs, Firebase & More)",
    students: "9,530",
    category: "IT & Software",
    color: "bg-rose-200/80",
    rating: 4.8,
    avatars: [avatar2, avatar3],
  },
  {
    title: "Business",
    students: "1,463",
    category: "Business",
    color: "bg-orange-200/80",
    rating: 4.9,
    avatars: [avatar1, avatar4],
  },
];

const sidebarLinks = [
  { name: "Home", icon: "🏠" },
  { name: "My Characters", icon: "🦊" },
  { name: "Trending", icon: "🔥" },
  { name: "Settings", icon: "⚙️" },
];

const menuItems = [
  {
    name: "Burger",
    color: "bg-pink-400",
    emoji: "🍔",
    desc: "Juicy beef burger with cheese and veggies.",
  },
  {
    name: "Ramen",
    color: "bg-yellow-300",
    emoji: "🍜",
    desc: "Hot ramen bowl with egg and noodles.",
  },
  {
    name: "Pizza",
    color: "bg-cyan-300",
    emoji: "🍕",
    desc: "Cheesy pizza with pepperoni and olives.",
  },
  {
    name: "Ice Cream",
    color: "bg-pink-200",
    emoji: "🍦",
    desc: "Vanilla ice cream in a waffle cone.",
  },
  {
    name: "Soda",
    color: "bg-lime-200",
    emoji: "🥤",
    desc: "Chilled soda with ice cubes.",
  },
  {
    name: "Fries",
    color: "bg-yellow-200",
    emoji: "🍟",
    desc: "Crispy golden fries with ketchup.",
  },
];

const posts = [
  {
    title: "Colorful Workspace Inspiration",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    tag: "Workspace",
    color: "bg-yellow-200",
    height: "h-72",
  },
  {
    title: "Modern Art Wall",
    img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
    tag: "Art",
    color: "bg-pink-200",
    height: "h-96",
  },
  {
    title: "Minimalist Living Room",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    tag: "Interior",
    color: "bg-green-200",
    height: "h-80",
  },
  {
    title: "Street Style Fashion",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    tag: "Fashion",
    color: "bg-blue-200",
    height: "h-64",
  },
  {
    title: "Creative Desk Setup",
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
    tag: "Workspace",
    color: "bg-orange-200",
    height: "h-80",
  },
  {
    title: "DIY Plant Decor",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    tag: "Plants",
    color: "bg-lime-200",
    height: "h-72",
  },
];

const characters = [
  {
    name: "Cool Cat #8",
    img: "https://www.pngmart.com/files/22/Cool-Cat-PNG-Clipart.png",
    collection: "Cool Cats NFT",
    price: "6 ETH",
    timer: "3h:20m:58s",
    color: "bg-rose-100/80",
    btn: "bg-cyan-100/80",
  },
  {
    name: "Pixel Ape #12",
    img: "https://www.pngmart.com/files/22/Pixel-Art-PNG-Clipart.png",
    collection: "Pixel Apes",
    price: "2.5 ETH",
    timer: "1h:10m:12s",
    color: "bg-yellow-100/80",
    btn: "bg-pink-100/80",
  },
  {
    name: "RoboPunk #42",
    img: "https://www.pngmart.com/files/22/Pixel-Art-PNG-Transparent.png",
    collection: "RoboPunks",
    price: "4 ETH",
    timer: "0h:45m:00s",
    color: "bg-blue-100/80",
    btn: "bg-yellow-100/80",
  },
  {
    name: "Funky Frog #7",
    img: "https://www.pngmart.com/files/22/Frog-PNG-Image.png",
    collection: "Funky Frogs",
    price: "1.2 ETH",
    timer: "5h:00m:00s",
    color: "bg-green-100/80",
    btn: "bg-blue-100/80",
  },
  {
    name: "Retro Doge #99",
    img: "https://www.pngmart.com/files/22/Doge-PNG-Image.png",
    collection: "Retro Doges",
    price: "3 ETH",
    timer: "2h:30m:10s",
    color: "bg-pink-200/80",
    btn: "bg-green-100/80",
  },
  {
    name: "Alien Kid #21",
    img: "https://www.pngmart.com/files/22/Alien-PNG-Image.png",
    collection: "Alien Kids",
    price: "5 ETH",
    timer: "4h:12m:33s",
    color: "bg-cyan-100/80",
    btn: "bg-purple-100/80",
  },
];

// Custom SVG icons
const icons = {
  sword: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 3l-1.5 1.5M14 10l7-7M3 21l6.5-6.5M14 10l-1.5 1.5M14 10l-4 4" /><circle cx="5" cy="19" r="2" /></svg>
  ),
  shield: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 3l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V7l7-4z" /></svg>
  ),
  star: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2" /></svg>
  ),
  heart: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.04 3 12.5 3.81 13.28 5.09C14.06 3.81 15.52 3 17.06 3C20.06 3 22.5 5.5 22.5 8.5C22.5 13.5 12 21 12 21Z" /></svg>
  ),
};

const navLinks = ["Explore", "Create", "Marketplace", "About"];
const trendingTags = ["🔥 Hot", "⚡ New", "💎 Rare", "🎯 Popular", "🌟 Featured"];

const characterCards = [
  {
    name: "Hotboy",
    color: "bg-red-100",
    image: hotboy,
  },
  {
    name: "Fish",
    color: "bg-blue-100",
    image: fish,
  },
  {
    name: "Lemon",
    color: "bg-yellow-100",
    image: lemon,
  },
  {
    name: "Feared One",
    color: "bg-purple-100",
    image: fearedOne,
  },
  {
    name: "Chloe",
    color: "bg-pink-100",
    image: Chloe,
  },
  {
    name: "Emilie",
    color: "bg-pink-100",
    image: Emilie,
  },
  {
    name: "Kayla",
    color: "bg-yellow-100",
    image: Kayla,
  },
  {
    name: "Tang",
    color: "bg-indigo-100",
    image: Tang,
  },
  {
    name: "Miso",
    color: "bg-green-100",
    image: Miso,
  },
  {
    name: "Kat",
    color: "bg-orange-100",
    image: Kat,
  },
];

const statIcons = [
  { icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 3l-1.5 1.5M14 10l7-7M3 21l6.5-6.5M14 10l-1.5 1.5M14 10l-4 4" /><circle cx="5" cy="19" r="2" /></svg>
    ), label: "Attack" },
  { icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 3l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V7l7-4z" /></svg>
    ), label: "Defense" },
  { icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2" /></svg>
    ), label: "Rarity" },
  { icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.04 3 12.5 3.81 13.28 5.09C14.06 3.81 15.52 3 17.06 3C20.06 3 22.5 5.5 22.5 8.5C22.5 13.5 12 21 12 21Z" /></svg>
    ), label: "Health" },
];

// Sidebar icons
const sidebarIcons = [
  { icon: "🏠", label: "Home" },
  { icon: "🔍", label: "Explore" },
  { icon: "🧪", label: "Generate", disabled: true },
];

// Floating Action Button (FAB) component
function FabMenu() {
  const [open, setOpen] = React.useState(false);
  const [hovered, setHovered] = React.useState(null);
  const actions = [
    { icon: <img src={AddIcon} alt="Generate" className="w-7 h-7 group-hover:invert group-hover:brightness-0" />, label: "Generate", action: () => console.log("Generate clicked") },
    { icon: <img src={Cube} alt="Bank" className="w-7 h-7 group-hover:invert group-hover:brightness-0" />, label: "Bank", action: () => window.location.href = "/bank" },
    { icon: <img src={ProfileCircle} alt="Profile" className="w-7 h-7 group-hover:invert group-hover:brightness-0" />, label: "Profile", action: () => window.location.href = "/profile" },
  ];
  return (
    <div
      className="fixed bottom-8 left-4 z-50 flex flex-col items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => { setOpen(false); setHovered(null); }}
    >
      {/* Action Circles */}
      <div className={`flex flex-col items-center gap-3 mb-3 transition-all duration-300 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'}`}>
        {actions.map((action, i) => (
          <div key={action.label} className="relative flex items-center">
            <button
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f7fd57] border-4 border-black text-2xl text-black font-extrabold shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:bg-black hover:text-white transition group"
              title={action.label}
              style={{ transitionDelay: `${i * 60}ms` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={action.action}
            >
              <span>{action.icon}</span>
            </button>
            {/* Tooltip */}
            {hovered === i && (
              <div className="absolute left-16 top-1/2 -translate-y-1/2 px-4 py-2 bg-black text-white border-2 border-black rounded-xl shadow-[2px_2px_0_0_rgba(0,0,0,1)] font-bold text-base whitespace-nowrap z-50">
                {action.label}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Main FAB */}
      <button
        className={`w-14 h-14 flex items-center justify-center rounded-full bg-[#f7fd57] border-4 border-black text-3xl text-black font-extrabold shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-all duration-200`}
        aria-label="Open actions"
      >
        <span>+</span>
      </button>
    </div>
  );
}

function CharacterCard({ name, color, image, onCardClick }) {
  const [isLiked, setIsLiked] = React.useState(false);
  const [showLikeButton, setShowLikeButton] = React.useState(false);

  const handleLikeClick = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <div 
      className={`flex flex-col border-4 border-black rounded-2xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white min-w-0 transition hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.8)] hover:brightness-95 overflow-hidden relative cursor-pointer`}
      onMouseEnter={() => setShowLikeButton(true)}
      onMouseLeave={() => setShowLikeButton(false)}
      onClick={onCardClick}
    >  
      {/* Like Button - Hidden by default, appears on hover */}
      <button
        onClick={handleLikeClick}
        className={`absolute top-3 right-3 w-12 h-12 rounded-full border-2 border-black font-bold shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all duration-200 z-10 flex items-center justify-center ${
          showLikeButton 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-75 pointer-events-none'
        } ${
          isLiked 
            ? 'bg-red-100 text-red-800' 
            : 'bg-white text-black hover:bg-black hover:text-white'
        }`}
      >
        <svg width="20" height="20" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.04 3 12.5 3.81 13.28 5.09C14.06 3.81 15.52 3 17.06 3C20.06 3 22.5 5.5 22.5 8.5C22.5 13.5 12 21 12 21Z" />
        </svg>
      </button>

      {/* Image box */}
      <div className={`w-full aspect-square ${color} flex items-center justify-center border-b-4 border-black overflow-hidden`}>
        {image ? (
          <img src={image} alt={name} className="object-cover w-full h-full" />
        ) : (
          <span className="text-5xl text-black/30 font-extrabold">?</span>
        )}
      </div>
      {/* Name + View Button Row */}
      <div className="flex flex-col sm:flex-row items-stretch justify-between px-4 py-4 gap-2 bg-blue-100" style={{background: 'linear-gradient(135deg, #e0f2ff 60%, #c7ceea 100%)'}}>
        <span className="text-xl font-extrabold text-black flex items-center">{name}</span>
        <button
          className="sm:ml-2 px-6 py-1.5 rounded-full border-2 border-black font-bold text-black bg-white shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-black hover:text-white transition text-base whitespace-nowrap"
        >
          View
        </button>
      </div>
    </div>
  );
}

function CharacterDetailModal({ character, onClose }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const year = date.getFullYear().toString().slice(-2);
    return `${day} ${month}, ${year}`;
  };
  
  // Simple character content for tutorial purposes
  const characterContent = {
          "Hotboy": {
        description: "A fiery character with explosive personality and unstoppable energy.",
        stats: { power: 95, speed: 88, intelligence: 72, charisma: 90 },
        abilities: ["🔥 Fire Blast", "💨 Speed Burst", "😤 Intimidation"],
        backstory: "Born from the flames of chaos, Hotboy emerged as a force of nature.",
        personality: "Hot-headed, passionate, protective",
        weaknesses: "Water attacks, cold environments",
        allies: ["Lemon", "Kayla"],
        enemies: ["Fish", "Feared One"],
        catchphrases: ["Feel the Burn!", "Hot enough for ya?"],
        favoriteFood: "Spicy chili peppers",
        hobbies: "Training, collecting fire gems",
        origin: "Born from a dying star",
        age: "25",
        height: "6'2\"",
        weight: "185 lbs",
        element: "Fire",
        rarity: "Legendary",
        tags: ["🔥 Hot", "⚡ Fast", "😤 Intimidating", "🔥 Fire Element"],
        createdAt: "2024-01-15",
        likes: 234
      },
          "Fish": {
        description: "A mysterious aquatic being with deep wisdom and fluid movements.",
        stats: { power: 75, speed: 85, intelligence: 95, charisma: 80 },
        abilities: ["🌊 Water Control", "🧠 Mind Reading", "🐟 Shape Shift"],
        backstory: "From the depths of the ancient ocean, Fish carries the knowledge of millennia.",
        personality: "Wise, mysterious, peaceful",
        weaknesses: "Electric attacks, dehydration",
        allies: ["Emilie", "Chloe"],
        enemies: ["Hotboy", "Feared One"],
        catchphrases: ["The tides of fate flow ever onward"],
        favoriteFood: "Fresh plankton",
        hobbies: "Meditation, collecting artifacts",
        origin: "Born in the Mariana Trench",
        age: "Ancient",
        height: "5'8\"",
        weight: "150 lbs",
        element: "Water",
        rarity: "Ancient",
        tags: ["🌊 Water", "🧠 Wise", "🐟 Shape Shifter", "🌊 Ancient"],
        createdAt: "2024-01-10",
        likes: 156
      },
          "Lemon": {
        description: "A zesty and refreshing character with a sour attitude but sweet heart.",
        stats: { power: 70, speed: 90, intelligence: 78, charisma: 85 },
        abilities: ["🍋 Acid Spray", "⚡ Energy Boost", "🌿 Healing Touch"],
        backstory: "Harvested from the golden groves, Lemon embodies the perfect balance of sweet and sour.",
        personality: "Zesty, caring, protective",
        weaknesses: "Cold temperatures, dehydration",
        allies: ["Chloe", "Fish"],
        enemies: ["Feared One", "Hotboy"],
        catchphrases: ["When life gives you lemons, make lemonade!"],
        favoriteFood: "Fresh citrus fruits",
        hobbies: "Gardening, making juice",
        origin: "Created by Citrus Druids",
        age: "847 years",
        height: "5'6\"",
        weight: "130 lbs",
        element: "Nature",
        rarity: "Rare",
        tags: ["🍋 Citrus", "⚡ Energetic", "🌿 Healing", "🍋 Zesty"],
        createdAt: "2024-01-08",
        likes: 89
      },
      "Feared One": {
        description: "A dark and mysterious entity that strikes fear into the hearts of enemies.",
        stats: { power: 92, speed: 80, intelligence: 88, charisma: 75 },
        abilities: ["👻 Shadow Walk", "😱 Fear Aura", "⚔️ Dark Blade"],
        backstory: "Born from the nightmares of the world, the Feared One exists to bring justice through terror.",
        personality: "Dark, mysterious, honorable",
        weaknesses: "Light magic, positive emotions",
        allies: ["Kayla", "Emilie"],
        enemies: ["Chloe", "Lemon"],
        catchphrases: ["Fear is your only companion now"],
        favoriteFood: "Shadow essence",
        hobbies: "Collecting dark artifacts",
        origin: "Born from nightmares",
        age: "Unknown",
        height: "6'5\"",
        weight: "Unknown",
        element: "Darkness",
        rarity: "Mythical",
        tags: ["👻 Shadow", "😱 Fear", "⚔️ Dark", "👻 Mysterious"],
        createdAt: "2024-01-05",
        likes: 445
      },
      "Chloe": {
        description: "A charming and elegant character with a gentle spirit and powerful magic.",
        stats: { power: 82, speed: 75, intelligence: 90, charisma: 95 },
        abilities: ["🌸 Flower Magic", "💫 Charm Spell", "🦋 Butterfly Summon"],
        backstory: "Chloe's beauty is matched only by her kindness.",
        personality: "Gentle, kind, graceful",
        weaknesses: "Dark magic, negative emotions",
        allies: ["Lemon", "Fish"],
        enemies: ["Feared One", "Hotboy"],
        catchphrases: ["Beauty blooms from within"],
        favoriteFood: "Fresh fruits and honey",
        hobbies: "Gardening, painting",
        origin: "Born from a cherry blossom tree",
        age: "1,247 years",
        height: "5'4\"",
        weight: "110 lbs",
        element: "Nature",
        rarity: "Legendary",
        tags: ["🌸 Flower", "💫 Charm", "🦋 Butterfly", "🌸 Peaceful"],
        createdAt: "2024-01-03",
        likes: 178
      },
      "Emilie": {
        description: "A mystical sorceress with ancient knowledge and powerful spells.",
        stats: { power: 88, speed: 70, intelligence: 98, charisma: 82 },
        abilities: ["🔮 Crystal Ball", "✨ Magic Missile", "🌟 Star Summon"],
        backstory: "Trained in the ancient towers of magic, Emilie has dedicated her life to mastering the arcane.",
        personality: "Wise, powerful, humble",
        weaknesses: "Anti-magic fields, exhaustion",
        allies: ["Fish", "Feared One"],
        enemies: ["Hotboy", "Lemon"],
        catchphrases: ["Magic flows through all things"],
        favoriteFood: "Magical herbs",
        hobbies: "Studying texts, stargazing",
        origin: "Born in Crystal Valley",
        age: "1,847 years",
        height: "5'8\"",
        weight: "140 lbs",
        element: "Arcane",
        rarity: "Mythical",
        tags: ["🔮 Magic", "✨ Arcane", "🌟 Star", "🔮 Mystical"],
        createdAt: "2024-01-01",
        likes: 67
      },
      "Kayla": {
        description: "A fierce warrior with unmatched strength and determination.",
        stats: { power: 98, speed: 85, intelligence: 75, charisma: 80 },
        abilities: ["💪 Super Strength", "🛡️ Shield Wall", "⚔️ Battle Cry"],
        backstory: "Raised in the warrior clans, Kayla's strength is legendary.",
        personality: "Brave, strong, protective",
        weaknesses: "Magic attacks, manipulation",
        allies: ["Hotboy", "Feared One"],
        enemies: ["Fish", "Chloe"],
        catchphrases: ["Strength through honor!"],
        favoriteFood: "Protein-rich meals",
        hobbies: "Training, weapon collecting",
        origin: "Born during the Great War",
        age: "547 years",
        height: "6'0\"",
        weight: "180 lbs",
        element: "Physical",
        rarity: "Legendary",
        tags: ["💪 Strong", "🛡️ Warrior", "⚔️ Battle", "💪 Protector"],
        createdAt: "2023-12-28",
        likes: 312
      },
      "Tang": {
        description: "A citrus-powered hero with tangy abilities and refreshing personality.",
        stats: { power: 78, speed: 88, intelligence: 82, charisma: 85 },
        abilities: ["🍊 Citrus Burst", "🌪️ Zest Tornado", "💨 Fresh Breeze"],
        backstory: "Infused with the essence of the rarest citrus fruits, Tang's powers are unique.",
        personality: "Refreshing, energetic, optimistic",
        weaknesses: "Cold temperatures, dehydration",
        allies: ["Lemon", "Chloe"],
        enemies: ["Hotboy", "Feared One"],
        catchphrases: ["Stay fresh!"],
        favoriteFood: "All citrus fruits",
        hobbies: "Citrus farming, juice making",
        origin: "Created by Citrus Alchemists",
        age: "234 years",
        height: "5'7\"",
        weight: "145 lbs",
        element: "Citrus",
        rarity: "Rare",
        tags: ["🍊 Citrus", "🌪️ Zesty", "💨 Fresh", "🍊 Tangy"],
        createdAt: "2023-12-25",
        likes: 567
      },
      "Miso": {
        description: "A mysterious and wise character with ancient knowledge and powerful magic abilities.",
        stats: { power: 85, speed: 75, intelligence: 95, charisma: 88 },
        abilities: ["🔮 Mystic Vision", "✨ Energy Manipulation", "🌟 Star Power"],
        backstory: "Born from the cosmic energies of the universe, Miso carries the wisdom of countless generations.",
        personality: "Wise, mysterious, powerful",
        weaknesses: "Physical attacks, close combat",
        allies: ["Emilie", "Fish"],
        enemies: ["Hotboy", "Feared One"],
        catchphrases: ["The stars guide my path", "Wisdom flows through me"],
        favoriteFood: "Stellar energy crystals",
        hobbies: "Stargazing, meditation, collecting ancient artifacts",
        origin: "Born from cosmic energy",
        age: "2,847 years",
        height: "5'9\"",
        weight: "145 lbs",
        element: "Cosmic",
        rarity: "Mythical",
        tags: ["🔮 Mystic", "✨ Cosmic", "🌟 Star", "🔮 Wise"],
        createdAt: "2023-12-20",
        likes: 423
      },
      "Kat": {
        description: "A fierce and agile warrior with lightning-fast reflexes and deadly precision.",
        stats: { power: 90, speed: 95, intelligence: 80, charisma: 85 },
        abilities: ["⚡ Lightning Strike", "🐱 Stealth Mode", "⚔️ Precision Blade"],
        backstory: "Trained in the ancient arts of the shadow warriors, Kat moves like the wind and strikes like lightning.",
        personality: "Fierce, agile, determined",
        weaknesses: "Heavy armor, slow movement",
        allies: ["Kayla", "Hotboy"],
        enemies: ["Fish", "Chloe"],
        catchphrases: ["Speed is my weapon", "Strike fast, strike true"],
        favoriteFood: "Fresh fish and rice",
        hobbies: "Training, weapon maintenance, meditation",
        origin: "Shadow Warrior Clan",
        age: "347 years",
        height: "5'5\"",
        weight: "125 lbs",
        element: "Lightning",
        rarity: "Legendary",
        tags: ["⚡ Fast", "🐱 Agile", "⚔️ Warrior", "⚡ Lightning"],
        createdAt: "2023-12-18",
        likes: 678
      }
  };

  const content = characterContent[character.name] || {
    description: "A mysterious character with unknown powers and abilities.",
    stats: { power: 75, speed: 75, intelligence: 75, charisma: 75 },
    abilities: ["❓ Unknown Ability"],
    backstory: "Little is known about this character's origins and powers.",
    personality: "Unknown",
    weaknesses: "Unknown",
    allies: ["Unknown"],
    enemies: ["Unknown"],
    catchphrases: ["Unknown"],
    favoriteFood: "Unknown",
    hobbies: "Unknown",
    origin: "Unknown",
    age: "Unknown",
    height: "Unknown",
    weight: "Unknown",
    element: "Unknown",
    rarity: "Unknown",
    tags: ["❓ Unknown"],
    createdAt: "2024-01-15",
    likes: 0
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_0_rgba(0,0,0,1)] max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-4 border-black bg-[#f7fd57]">
          <div>
            <h2 className="text-3xl font-black text-black mb-2">{character.name}</h2>
            <div className="flex items-center gap-4 text-sm text-black">
              <span className="font-bold">Created: {formatDate(content.createdAt)}</span>
              <span className="font-bold flex items-center gap-1">
                <svg width="16" height="16" fill="#dc2626" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.04 3 12.5 3.81 13.28 5.09C14.06 3.81 15.52 3 17.06 3C20.06 3 22.5 5.5 22.5 8.5C22.5 13.5 12 21 12 21Z" />
                </svg>
                {content.likes} likes
              </span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 bg-black text-white border-2 border-black rounded-full flex items-center justify-center text-2xl font-extrabold shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:bg-red-500 transition"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Image and Stats Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className={`aspect-square ${character.color} border-4 border-black rounded-2xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] overflow-hidden`}>
              {character.image ? (
                <img src={character.image} alt={character.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-8xl text-black/30 font-extrabold">?</span>
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="space-y-6">
              <div className="bg-orange-100 border-4 border-black rounded-2xl p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                <h3 className="text-xl font-black text-black mb-4">Stats</h3>
                <div className="space-y-3">
                  {Object.entries(content.stats).map(([stat, value]) => (
                    <div key={stat} className="flex items-center gap-3">
                      <span className="text-sm font-bold text-black capitalize w-20">{stat}</span>
                      <div className="flex-1 bg-gray-200 border-2 border-black rounded-full h-4">
                        <div 
                          className="bg-black h-full rounded-full transition-all duration-500"
                          style={{ width: `${value}%` }}
                        />
                      </div>
                      <span className="text-sm font-black text-black w-8">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Abilities */}
              <div className="bg-purple-100 border-4 border-black rounded-2xl p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                <h3 className="text-xl font-black text-black mb-4">Abilities</h3>
                <div className="flex flex-wrap gap-2">
                  {content.abilities.map((ability, index) => (
                    <span key={index} className="px-4 py-2 bg-white border-2 border-black rounded-full text-sm font-bold text-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                      {ability}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-green-100 border-4 border-black rounded-2xl p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                <h3 className="text-xl font-black text-black mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {content.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1.5 bg-[#f7fd57] border-2 border-black rounded-full text-sm font-bold text-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-blue-100 border-4 border-black rounded-2xl p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 border-2 border-black rounded-full flex items-center justify-center">
                <span className="text-white font-black text-sm">📝</span>
              </div>
              <h3 className="text-xl font-black text-black">Description</h3>
            </div>
            <div className="bg-white border-2 border-black rounded-xl p-4 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
              <p className="text-lg text-black leading-relaxed font-medium">{content.description}</p>
            </div>
          </div>

          {/* Backstory */}
          <div className="bg-pink-100 border-4 border-black rounded-2xl p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-pink-500 border-2 border-black rounded-full flex items-center justify-center">
                <span className="text-white font-black text-sm">📖</span>
              </div>
              <h3 className="text-xl font-black text-black">Backstory</h3>
            </div>
            <div className="bg-white border-2 border-black rounded-xl p-4 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
              <p className="text-lg text-black leading-relaxed font-medium">{content.backstory}</p>
            </div>
          </div>

          {/* Character Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Personality */}
              <div className="bg-yellow-100 border-4 border-black rounded-2xl p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-yellow-500 border-2 border-black rounded-full flex items-center justify-center">
                    <span className="text-white font-black text-sm">😊</span>
                  </div>
                  <h3 className="text-xl font-black text-black">Personality</h3>
                </div>
                <div className="bg-white border-2 border-black rounded-xl p-4 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                  <p className="text-lg text-black leading-relaxed font-medium">{content.personality}</p>
                </div>
              </div>

              {/* Weaknesses */}
              <div className="bg-red-100 border-4 border-black rounded-2xl p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-red-500 border-2 border-black rounded-full flex items-center justify-center">
                    <span className="text-white font-black text-sm">⚠️</span>
                  </div>
                  <h3 className="text-xl font-black text-black">Weaknesses</h3>
                </div>
                <div className="bg-white border-2 border-black rounded-xl p-4 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                  <p className="text-lg text-black leading-relaxed font-medium">{content.weaknesses}</p>
                </div>
              </div>

              {/* Allies */}
              <div className="bg-emerald-100 border-4 border-black rounded-2xl p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                <h3 className="text-xl font-black text-black mb-4">Allies</h3>
                <div className="flex flex-wrap gap-2">
                  {content.allies.map((ally, index) => (
                    <span key={index} className="px-3 py-1 bg-green-100 border-2 border-black rounded-full text-sm font-bold text-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                      🤝 {ally}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enemies */}
              <div className="bg-rose-100 border-4 border-black rounded-2xl p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                <h3 className="text-xl font-black text-black mb-4">Enemies</h3>
                <div className="flex flex-wrap gap-2">
                  {content.enemies.map((enemy, index) => (
                    <span key={index} className="px-3 py-1 bg-red-100 border-2 border-black rounded-full text-sm font-bold text-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                      ⚔️ {enemy}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Catchphrases */}
              <div className="bg-indigo-100 border-4 border-black rounded-2xl p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-indigo-500 border-2 border-black rounded-full flex items-center justify-center">
                    <span className="text-white font-black text-sm">💬</span>
                  </div>
                  <h3 className="text-xl font-black text-black">Catchphrases</h3>
                </div>
                <div className="bg-white border-2 border-black rounded-xl p-4 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                  <div className="space-y-3">
                    {content.catchphrases.map((phrase, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-2xl">💭</span>
                        <p className="text-lg text-black font-bold italic leading-relaxed">"{phrase}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Personal Info */}
              <div className="bg-cyan-100 border-4 border-black rounded-2xl p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-cyan-500 border-2 border-black rounded-full flex items-center justify-center">
                    <span className="text-white font-black text-sm">📋</span>
                  </div>
                  <h3 className="text-xl font-black text-black">Personal Info</h3>
                </div>
                <div className="bg-white border-2 border-black rounded-xl p-4 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg text-black">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🍽️</span>
                      <span><span className="font-bold">Favorite Food:</span> {content.favoriteFood}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🎨</span>
                      <span><span className="font-bold">Hobbies:</span> {content.hobbies}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🌍</span>
                      <span><span className="font-bold">Origin:</span> {content.origin}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🎂</span>
                      <span><span className="font-bold">Age:</span> {content.age}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">📏</span>
                      <span><span className="font-bold">Height:</span> {content.height}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">⚖️</span>
                      <span><span className="font-bold">Weight:</span> {content.weight}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">⚡</span>
                      <span><span className="font-bold">Element:</span> {content.element}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">💎</span>
                      <span><span className="font-bold">Rarity:</span> {content.rarity}</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-full">
                      <span className="text-xl">🔄</span>
                      <span><span className="font-bold">Evolution:</span> {content.evolution}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

function EventCard({ event }) {
  return (
    <div className={`rounded-2xl p-3 mb-3 border border-black shadow-sm flex flex-col gap-1 ${event.color}`}
      style={{ minHeight: 80 }}>
      <div className="flex items-center gap-2 text-xs font-semibold">
        <span>{event.icon}</span>
        <span>{event.title}</span>
        {event.label && <span className="ml-auto bg-blue-200 text-blue-900 px-2 py-0.5 rounded-full text-[10px] font-bold">{event.label}</span>}
        {event.status && <span className="ml-auto bg-purple-200 text-purple-900 px-2 py-0.5 rounded-full text-[10px] font-bold">{event.status}</span>}
      </div>
      <div className="text-xs text-gray-700">{event.location}</div>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-xs text-gray-500">{event.duration}</span>
        {event.link && <a href="#" className="ml-auto underline text-xs text-yellow-800">Agenda.pdf</a>}
        {event.join && <button className="ml-auto bg-gray-200 border border-black rounded-full px-3 py-0.5 text-xs font-bold">Join</button>}
      </div>
    </div>
  );
}

export default function App() {
  const [modal, setModal] = useState(null); // 'login' | 'signup' | null
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const closeCharacterModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-[#f9f9f6] flex flex-col">
        {/* Header */}
        <header className="w-full border-b-2 border-black bg-white flex items-center justify-between px-8 py-4">
          <div className="text-2xl font-black tracking-tight text-black">Skew</div>
          <nav className="flex gap-8 ml-8">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-lg font-bold text-black hover:underline underline-offset-4">{link}</a>
            ))}
          </nav>
          <div className="flex gap-3 ml-auto">
            <button onClick={() => setModal('login')} className="px-5 py-1.5 rounded-lg border-2 border-black font-bold text-black bg-white hover:bg-black hover:text-white transition">Login</button>
            <button onClick={() => setModal('signup')} className="px-5 py-1.5 rounded-lg border-2 border-black font-bold text-white bg-black hover:bg-[#f7fd57] hover:text-black transition">Sign Up</button>
          </div>
        </header>
        {/* Modal Overlay */}
        {modal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="absolute inset-0" onClick={() => setModal(null)} />
            <div className="relative z-10">
              <button onClick={() => setModal(null)} className="absolute -top-6 -right-6 bg-black text-white border-2 border-black rounded-full w-10 h-10 flex items-center justify-center text-2xl font-extrabold shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-red-500 transition">✕</button>
              {modal === 'login' ? <Login /> : <SignUp />}
            </div>
          </div>
        )}

        {/* Character Detail Modal */}
        {selectedCharacter && (
          <CharacterDetailModal 
            character={selectedCharacter} 
            onClose={closeCharacterModal} 
          />
        )}
        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <section className="w-full bg-[#f7fd57] border-b-2 border-black flex flex-col items-center py-12 px-4">
                <h1 className="text-4xl md:text-5xl font-black text-black text-center mb-8 leading-tight">
                  Find your perfect Skew<br />to deploy and dominate
                </h1>
                <div className="flex flex-col items-center w-full max-w-2xl">
                  <div className="flex w-full">
                    <div className="flex items-center bg-white border-2 border-black rounded-l-lg px-4 py-2 w-full">
                      <svg className="w-6 h-6 text-black mr-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
                      <input type="text" placeholder="Search by name or use filters" className="flex-1 bg-transparent outline-none text-lg font-semibold text-black placeholder-black/50" />
                    </div>
                    <button className="bg-white border-y-2 border-r-2 border-black rounded-r-lg px-4 flex items-center hover:bg-black hover:text-white transition">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>
                    </button>
                    <button className="ml-4 px-6 py-2 rounded-lg border-2 border-black bg-[#e0e0e0] font-bold text-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-black hover:text-white transition">Find Skews</button>
                  </div>
                  <div className="flex gap-2 mt-4 w-full flex-wrap items-center">
                    <span className="text-black/60 font-semibold mr-2">Trending:</span>
                    {trendingTags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full border-2 border-black bg-white text-black font-bold text-sm shadow-[1px_1px_0_0_rgba(0,0,0,1)] mr-1 mb-1">{tag}</span>
                    ))}
                  </div>
                </div>
              </section>
              {/* Card Grid Section */}
              <main className="w-full max-w-7xl mx-auto px-4 py-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl md:text-3xl font-black text-black">New Skew Drops</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {characterCards.map((card, i) => (
                    <CharacterCard 
                      key={i} 
                      {...card} 
                      onCardClick={() => handleCharacterClick(card)}
                    />
                  ))}
                </div>
              </main>
              <FabMenu />
            </>
          } />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bank" element={<Bank />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
