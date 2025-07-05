import React from "react";

export default function Login() {
  return (
    <form className="w-full max-w-md bg-white border-4 border-black rounded-2xl shadow-[6px_6px_0_0_rgba(0,0,0,1)] p-8 flex flex-col gap-6">
      <h2 className="text-3xl font-black text-black mb-2 text-center">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="px-4 py-3 rounded-lg border-2 border-black bg-blue-100 text-lg font-semibold focus:outline-none focus:bg-yellow-100 transition"
      />
      <input
        type="password"
        placeholder="Password"
        className="px-4 py-3 rounded-lg border-2 border-black bg-blue-100 text-lg font-semibold focus:outline-none focus:bg-yellow-100 transition"
      />
      <button
        type="submit"
        className="w-full py-3 rounded-lg border-2 border-black bg-[#f7fd57] text-black font-extrabold text-lg shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:bg-black hover:text-white transition"
      >
        Login
      </button>
      <div className="text-center text-black font-semibold">
        Don't have an account?{' '}
        <button type="button" className="underline font-bold hover:text-blue-600">Sign Up</button>
      </div>
    </form>
  );
} 