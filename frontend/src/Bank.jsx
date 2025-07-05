import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cube from "./assets/cube.svg";
import hotboy from './assets/hotboy.png';
import fish from './assets/fish.png';
import lemon from './assets/lemon.png';
import fearedOne from './assets/fearedOne.png';
import Chloe from './assets/Chloe.png';
import Emilie from './assets/Emilie.png';
import Kayla from './assets/Kayla.png';
import Tang from './assets/Tang.png';

export default function Bank() {
  const [filter, setFilter] = useState('all');
  
  // Sample user's created Skews
  const userSkews = [
    {
      id: 1,
      name: "Hotboy",
      image: hotboy,
      color: "bg-red-100",
      status: "Deployed",
      rarity: "Legendary",
      createdAt: "2024-01-15",
      likes: 234,
      views: 1200
    },
    {
      id: 2,
      name: "Fish",
      image: fish,
      color: "bg-blue-100",
      status: "Active",
      rarity: "Rare",
      createdAt: "2024-01-10",
      likes: 156,
      views: 890
    },
    {
      id: 3,
      name: "Lemon",
      image: lemon,
      color: "bg-yellow-100",
      status: "Draft",
      rarity: "Common",
      createdAt: "2024-01-08",
      likes: 89,
      views: 456
    },
    {
      id: 4,
      name: "Feared One",
      image: fearedOne,
      color: "bg-purple-100",
      status: "Deployed",
      rarity: "Epic",
      createdAt: "2024-01-05",
      likes: 445,
      views: 2100
    },
    {
      id: 5,
      name: "Chloe",
      image: Chloe,
      color: "bg-pink-100",
      status: "Active",
      rarity: "Rare",
      createdAt: "2024-01-03",
      likes: 178,
      views: 950
    },
    {
      id: 6,
      name: "Emilie",
      image: Emilie,
      color: "bg-pink-100",
      status: "Draft",
      rarity: "Common",
      createdAt: "2024-01-01",
      likes: 67,
      views: 320
    },
    {
      id: 7,
      name: "Kayla",
      image: Kayla,
      color: "bg-yellow-100",
      status: "Deployed",
      rarity: "Epic",
      createdAt: "2023-12-28",
      likes: 312,
      views: 1500
    },
    {
      id: 8,
      name: "Tang",
      image: Tang,
      color: "bg-indigo-100",
      status: "Active",
      rarity: "Legendary",
      createdAt: "2023-12-25",
      likes: 567,
      views: 2800
    }
  ];

  const filteredSkews = filter === 'all' 
    ? userSkews 
    : userSkews.filter(skew => skew.status.toLowerCase() === filter);

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'deployed': return 'bg-green-100 text-green-800';
      case 'active': return 'bg-blue-100 text-blue-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRarityColor = (rarity) => {
    switch(rarity.toLowerCase()) {
      case 'legendary': return 'bg-yellow-100 text-yellow-800';
      case 'epic': return 'bg-purple-100 text-purple-800';
      case 'rare': return 'bg-blue-100 text-blue-800';
      case 'common': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f6] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-2xl font-black tracking-tight text-black hover:underline">
              ← Back to Skew
            </Link>
            <div className="flex items-center gap-2">
              <img src={Cube} alt="Bank" className="w-8 h-8" />
              <h1 className="text-3xl font-black text-black">My Bank</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold text-black">Total Skews: {userSkews.length}</span>
            <button className="px-5 py-1.5 rounded-lg border-2 border-black font-bold text-white bg-black hover:bg-[#f7fd57] hover:text-black transition">
              Create New
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white border-4 border-black rounded-2xl p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <div className="text-3xl font-black text-black mb-2">{userSkews.filter(s => s.status === 'Deployed').length}</div>
            <div className="text-sm font-bold text-black/70">Deployed</div>
          </div>
          <div className="bg-white border-4 border-black rounded-2xl p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <div className="text-3xl font-black text-black mb-2">{userSkews.filter(s => s.status === 'Active').length}</div>
            <div className="text-sm font-bold text-black/70">Active</div>
          </div>
          <div className="bg-white border-4 border-black rounded-2xl p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <div className="text-3xl font-black text-black mb-2">{userSkews.filter(s => s.status === 'Draft').length}</div>
            <div className="text-sm font-bold text-black/70">Drafts</div>
          </div>
          <div className="bg-white border-4 border-black rounded-2xl p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            <div className="text-3xl font-black text-black mb-2">{userSkews.reduce((sum, s) => sum + s.likes, 0)}</div>
            <div className="text-sm font-bold text-black/70">Total Likes</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6">
          {['all', 'deployed', 'active', 'draft'].map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-6 py-3 rounded-lg border-2 border-black font-bold shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition ${
                filter === filterOption
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-black hover:text-white'
              }`}
            >
              {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
            </button>
          ))}
        </div>

        {/* Skews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkews.map((skew) => (
            <div key={skew.id} className="bg-white border-4 border-black rounded-2xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] overflow-hidden">
              {/* Image */}
              <div className={`w-full aspect-square ${skew.color} border-b-4 border-black flex items-center justify-center overflow-hidden`}>
                <img src={skew.image} alt={skew.name} className="object-cover w-full h-full" />
              </div>
              
              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-black text-black">{skew.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${getRarityColor(skew.rarity)}`}>
                    {skew.rarity}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(skew.status)}`}>
                    {skew.status}
                  </span>
                  <span className="text-xs text-black/60 font-semibold">
                    {new Date(skew.createdAt).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-xs text-black/70 mb-3">
                  <span>❤️ {skew.likes}</span>
                  <span>👁️ {skew.views}</span>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-1.5 rounded-lg border-2 border-black font-bold text-black bg-white shadow-[1px_1px_0_0_rgba(0,0,0,1)] hover:bg-black hover:text-white transition text-sm">
                    Edit
                  </button>
                  <button className="flex-1 px-3 py-1.5 rounded-lg border-2 border-black font-bold text-white bg-black shadow-[1px_1px_0_0_rgba(0,0,0,1)] hover:bg-[#f7fd57] hover:text-black transition text-sm">
                    Deploy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 