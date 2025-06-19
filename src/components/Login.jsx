import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const { login, user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch ("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    }).then((response) => {
      if(!response.ok){
        alert("Login Gagal!");
      }
      else {
        return response.json();
      }
    }).then((data) => {
      login(data.user);
      // console.log(data.user);
      navigate('/');
    });
    
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e9deb8] p-4">
      <div className="w-full max-w-sm shadow-xl rounded-2xl bg-[#a8b764] border-none p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center text-[#374c2c]">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 text-[#374c2c] font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-3 py-2 border border-[#374c2c] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#F0BB78]"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 text-[#374c2c] font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-3 py-2 border border-[#374c2c] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#F0BB78]"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#F0BB78] text-[#374c2c] rounded-md font-semibold hover:bg-[#e6c900]"
          >
            Sign In
          </button>
          <Link to="/register" className="w-full py-2 mt-2 bg-[#374c2c] text-white rounded-md font-semibold hover:bg-[#2c3f23] block text-center">
            Register
          </Link>
        </form>
      </div>
    </div>
  );
}