import { useState } from "react";
import { myaxiox } from "../api/AxioxClient";
import { Link } from "react-router-dom";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await myaxiox.post('/login', { name, password });
      localStorage.setItem('token', response.data.token);
      setName('');
      setPassword('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen p-4">
      <div className="flex flex-col lg:flex-row w-full max-w-[1000px] bg-gray-100 rounded-[25px] shadow-xl overflow-hidden">
        {/* Left Side: Login Form */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center mb-2">LOGIN</h2>
          <p className="text-sm text-center text-gray-400 mb-6">
            How to get started lorem ipsum dolor sit?
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <i className="fas fa-user" />
              </span>
              <input
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="pl-10 w-full px-4 py-2 bg-white rounded-md outline-none"
              />
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <i className="fas fa-lock" />
              </span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-10 w-full px-4 py-2 bg-white rounded-md outline-none"
              />
            </div>
            {/* <Link to={'/'}> */}
              <button
                type="submit"
                className="w-full bg-[#6c63ff] hover:bg-[#574fd6] text-white font-semibold py-2 rounded-md shadow-md transition"
              >
                Login Now
              </button>
            {/* </Link> */}
          </form>

          {/* Register Button */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600 mb-2">Don't have an account?</p>
            <Link
              to={'/auth/Register'}
              className="inline-block bg-[#6c63ff] hover:bg-[#574fd6] text-white font-semibold py-2 px-4 rounded-md shadow-md transition"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Right Side: Image Section */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#6a5af9] to-[#764af1] flex items-center justify-center relative lg:rounded-tr-[25px] lg:rounded-br-[25px] p-6">
          <div className="p-4 sm:p-6 rounded-2xl text-white text-center">
            <h3 className="text-xl font-bold mb-4">
              Very good works are <br />
              waiting for you Login <br />
              Now!!!
            </h3>
            <DotLottieReact
              src="https://lottie.host/455137e7-cf6f-4ef6-b26b-903f8f3a62d1/hNjkYLx80u.lottie"
              loop
              autoplay
              className="rounded-lg w-full max-w-[350px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
