"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterUser() {
  const router = useRouter();
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("password", password);

    const res = await fetch(
      "http://petsadoptiondz.byethost7.com/register.php",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    if (data.success) {
      alert("✅ Registered Successfully!");
      router.push("/home");
    } else {
      alert("❌ " + data.message);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-row bg-white shadow-lg rounded-lg overflow-hidden h-[500px]">
        <div className="flex flex-col px-25  justify-center items-center">
          <h4 className="text-black mb-4 text-4xl font-bold">Register Now!</h4>

          <div className="flex flex-col gap-1 w-[250px]">
            <input
              type="text"
              placeholder="Full Name"
              className="text-black border border-gray-300 p-2 mb-3 rounded w-full"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="text-black border border-gray-300 p-2 mb-3 rounded w-full"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email Address"
              className="text-black border border-gray-300 p-2 mb-3 rounded w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="text-black border border-gray-300 p-2 mb-3 rounded w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <h4
            onClick={() => router.push("/recover")}
            className="text-black cursor-pointer mb-2 mt-5 text-sm"
          >
            Forgot Password
          </h4>
          <h4 className="text-black text-sm">
            Have an account?{" "}
            <span
              onClick={() => router.push("/login")}
              className="text-blue-600 cursor-pointer text-sm"
            >
              Login
            </span>
          </h4>

          <button
            onClick={handleRegister}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded w-full"
          >
            Register
          </button>
        </div>

        {/* Right side */}
        <div className="bg-green-600 flex flex-col text-white px-25 h-full justify-center items-center">
          <h4 className="text-2xl font-bold mb-3 text-center">Welcome Back!</h4>
          <h4 className="text-center">
            Give a loving home to a furry friend. <br />
            Adopting a pet means saving a life <br />
            and gaining a loyal companion forever. <br />
            Every dog or cat deserves a chance <br />
            to be part of a caring family. <br />
            Open your heart—adopt today!
          </h4>
        </div>
      </div>
    </div>
  );
}
