"use client";

import React, { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi input
    if (!email || !password) {
      setError("Email dan Password tidak boleh kosong.");
      return;
    }

    // Reset error
    setError("");
    alert("Login berhasil!");
    // Tambahkan logika tambahan di sini, seperti API request
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left section */}
      <div className="flex flex-1 justify-center items-center bg-gray-100">
        <div className="text-center">
          <img
            src="/image/HorizonLogo.jpeg" // Ganti dengan path gambar toko
            alt="Storefront"
            className="w-64 h-64 mx-auto"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex flex-1 justify-center items-center">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Pesan error */}
            {error && (
              <div className="mb-4 text-red-500 text-sm font-semibold">
                {error}
              </div>
            )}

            {/* Email field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="text-black mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Password field */}
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="text-black mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-9 text-sm text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="mb-6">
              {/* Forget Password link */}
              <div className="mb-2">
                <a
                  href="http://localhost:3000/forget-password" // Ganti dengan path halaman Forget Password
                  className="ml-64 text-sm text-gray-600 hover:underline"
                >
                  Forget Password?
                </a>
              </div>

              {/* Register link */}
              <div className="flex justify-between items-center">
                <span className="text-sm text-black">Belum punya akun?</span>
                <a
                  href="http://localhost:3000/register"
                  className="text-sm text-blue-600 hover:underline mr-auto ml-2"
                >
                  Register
                </a>
              </div>
            </div>

            <Link href="/manager/dashboard">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              >
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
