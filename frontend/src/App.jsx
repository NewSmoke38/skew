import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import ProfileCircle from "./assets/profile-circle.svg";
import hotboy from './assets/hotboy.png';
import fish from './assets/fish.png';
import lemon from './assets/lemon.png';
import fearedone from './assets/fearedOne.png';
import Chloe from './assets/Chloe.png';
import Emilie from './assets/Emilie.png';
import Kayla from './assets/Kayla.png';
import Tang from './assets/Tang.png';

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

const navLinks = ["About", "Docs", "API", "Blog"];
const trendingTags = ["fox", "brute", "mech", "🐸"];

const characterCards = [
  {
    name: "Hotboy",
    color: "bg-pink-200",
    image: hotboy,
  },
  {
    name: "Fish",
    color: "bg-yellow-200",
    image: fish,
  },
  {
    name: "Lemon",
    color: "bg-blue-200",
    image: lemon,
  },
  {
    name: "Feared One",
    color: "bg-purple-200",
    image: fearedone,
  },
  {
    name: "Chloe",
    color: "bg-green-200",
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
    { icon: "➕", label: "Generate" },
    { icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ), label: "Bank" },
    { icon: <img src={ProfileCircle} alt="Profile" className="w-7 h-7 group-hover:invert group-hover:brightness-0" />, label: "Profile" },
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

function CharacterCard({ name, color, image }) {
  return (
    <div className={`flex flex-col border-4 border-black rounded-2xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white min-w-0 transition hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.8)] hover:brightness-95`}>  
      {/* Image box */}
      <div className={`w-full aspect-square ${color} flex items-center justify-center border-b-4 border-black rounded-t-xl overflow-hidden`}>
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
              <CharacterCard key={i} {...card} />
            ))}
          </div>
        </main>
        <FabMenu />
      </div>
    </BrowserRouter>
  );
}
