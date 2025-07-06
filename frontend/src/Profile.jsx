import React from "react";
import { Link } from "react-router-dom";
import ProfileCircle from "./assets/profile-circle.svg";

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#f9f9f6] p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="text-2xl font-black tracking-tight text-black hover:underline">
            ← Back to Skew
          </Link>
          <button className="px-5 py-1.5 rounded-lg border-2 border-black font-bold text-black bg-white hover:bg-black hover:text-white transition">
            Edit Profile
          </button>
        </div>

        {/* Profile Header */}
        <div className="bg-white border-4 border-black rounded-2xl shadow-[6px_6px_0_0_rgba(0,0,0,1)] p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Profile Picture */}
            <div className="w-32 h-32 bg-[#f7fd57] border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <img src={ProfileCircle} alt="Profile" className="w-20 h-20" />
            </div>
            
            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-black text-black mb-2">SkewMaster</h1>
              <p className="text-lg text-black/70 mb-4">Level 42 • Member since 2023</p>
              <p className="text-black/80 mb-6 max-w-2xl">
                Passionate Skew collector and creator. Building the ultimate collection of unique characters 
                and dominating the Skewverse with strategic deployments.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[#f7fd57] border-2 border-black rounded-xl p-4 text-center shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                  <div className="text-2xl font-black text-black">156</div>
                  <div className="text-sm font-bold text-black">Skews Owned</div>
                </div>
                <div className="bg-blue-100 border-2 border-black rounded-xl p-4 text-center shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                  <div className="text-2xl font-black text-black">89</div>
                  <div className="text-sm font-bold text-black">Battles Won</div>
                </div>
                <div className="bg-green-100 border-2 border-black rounded-xl p-4 text-center shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                  <div className="text-2xl font-black text-black">2.4K</div>
                  <div className="text-sm font-bold text-black">Total Points</div>
                </div>
                <div className="bg-purple-100 border-2 border-black rounded-xl p-4 text-center shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                  <div className="text-2xl font-black text-black">#12</div>
                  <div className="text-sm font-bold text-black">Rank</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button className="px-6 py-3 rounded-lg border-2 border-black font-bold text-white bg-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
            My Collection
          </button>
          <button className="px-6 py-3 rounded-lg border-2 border-black font-bold text-black bg-white shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-black hover:text-white transition">
            Battle History
          </button>
          <button className="px-6 py-3 rounded-lg border-2 border-black font-bold text-black bg-white shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-black hover:text-white transition">
            Achievements
          </button>
          <button className="px-6 py-3 rounded-lg border-2 border-black font-bold text-black bg-white shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-black hover:text-white transition">
            Settings
          </button>
        </div>


      </div>
    </div>
  );
} 