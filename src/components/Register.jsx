import { Link } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [dateofbirth, setDoB] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Registering:", { username, dateofbirth, email, password });
    // Handle registration logic here
    fetch ("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //DISESUAIKAN LAGI SAMA TABEL SQL BACKEND
      body: JSON.stringify({ 
        name: username,
        dateofbirth: dateofbirth,
        email: email,
        password: password
      }),

    }).then(() => {
      navigate('/login');
    });
      
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e9deb8] p-4">
      <div className="w-full max-w-sm shadow-xl rounded-2xl bg-[#a8b764] border-none p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center text-[#374c2c]">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block mb-1 text-[#374c2c] font-medium">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your username"
              required
              className="w-full px-3 py-2 border border-[#374c2c] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#ffdd00]"
            />
          </div>
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
              className="w-full px-3 py-2 border border-[#374c2c] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#ffdd00]"
            />
          </div>
          <div>
            <label htmlFor="dateofbirth" className="block mb-1 text-[#374c2c] font-medium">
              Date of Birth
            </label>
            <input
              id="dateofbirth"
              type="date"
              min="1900-01-01" 
              max="2020-01-01"
              value={dateofbirth}
              onChange={(e) => setDoB(e.target.value)}
              placeholder="Your birthdate"
              required
              className="w-full px-3 py-2 border border-[#374c2c] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#ffdd00]"
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
          <div>
            <label htmlFor="confirmPassword" className="block mb-1 text-[#374c2c] font-medium">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-3 py-2 border border-[#374c2c] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#F0BB78]"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#F0BB78] text-[#374c2c] rounded-md font-semibold hover:bg-[#e6c900]"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
