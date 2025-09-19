"use client";
import { useRouter } from "next/navigation";

export default function LoginUser() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-row bg-white shadow-lg rounded-lg overflow-hidden h-[500px]">
        
        {/* Left side */}
        <div className="flex flex-col px-30 flex-1 justify-center items-center">
          <h4 className="text-black mb-4 text-4xl font-bold">Sign In</h4>
          <input 
            id="email-input" 
            type="text" 
            placeholder="Email Address" 
            className="text-black border border-gray-300 p-2 mb-3 rounded w-full"
          />
          <input 
            id="password-input" 
            type="password" 
            placeholder="Password" 
            className="text-black border border-gray-300 p-2 mb-3 rounded w-full"
          />
          <h4 onClick={ () => router.push("/recover")} className="text-black cursor-pointer mb-2 mt-5 text-sm">Forgot Password</h4>
          <h4  className="text-black text-sm">
            Don't have an account?{" "}
            <span  onClick={ () => router.push("/register")} className="text-blue-600 cursor-pointer text-sm">Register</span>
          </h4>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded w-full">
            Login
          </button>
        </div>

        {/* Right side */}
        <div className="bg-green-600 flex flex-col text-white px-25 h-full justify-center items-center">
          <h4 className="text-2xl font-bold mb-3 text-center">Welcome Back!</h4>
          <h4 className="text-center">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Integer <br />
            dictum a sem in fermentum. <br /> Phasellus vel lectus nec est tempor <br />
            condimentum sed sit amet ipsum. <br /> In ut lobortis mi. Integer ultrices
            urna ex,
          </h4>
        </div>
      </div>
    </div>
  );
}
