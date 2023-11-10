import React, { useState } from "react";
import { LogOut, LoginUser } from "../../Redux/action/authLogin";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../assets/components/GoogleLogin";
import { useDispatch } from "react-redux";
import background from "../../assets/img/movie list bg.jpeg";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { mutate: login, data: errMsg } = useLoginUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
    if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  const loginUser = async () => {
    const success = await dispatch(
      LoginUser({
        email: email,
        password: password,
      })
    );
    if (success) {
      navigate("/");
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      loginUser();
    }
  };

  return (
    <div className="h-screen relative">
      <img
        src={background}
        alt="bg"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1, // Mengatur z-indeks ke angka negatif
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Warna hitam dengan opacity 0.6
        }}
      />

      <div
        className="border-[2px] backdrop-blur-md shadow-sm border-red-500 h-[55%] w-[30%] flex flex-col items-center justify-evenly"
        style={{
          position: "absolute",
          top: "50%", // Center it vertically
          left: "50%", // Center it horizontally
          transform: "translate(-50%, -50%)", // Center it perfectly
          zIndex: 1, // Ensure it appears above the background
        }}
      >
        <h1 className="text-white font-bold text-[2rem]">Login</h1>
        <div className="flex flex-col space-y-4 items-center w-full">
          <input onChange={handleInput} placeholder="email" id="email" className="border-[1px] w-[80%] py-3 px-5 block border-gray-200 rounded-full bg-transparent text-white text-lg " type="text" />
          <input onChange={handleInput} onKeyPress={handleEnterPress} placeholder="password" id="password" className="border-[1px] w-[80%] py-3 px-5 block border-gray-200 rounded-full bg-transparent text-white text-lg " type="password" />
        </div>
        <button className="bg-gray-50 hover:bg-gray-200  text-black h-[2.8rem] w-[80%] rounded-full" onClick={loginUser}>
          Login
        </button>

        <GoogleLogin />
        <h1 className="text-white">
          Belum Punya akun?
          <a className="cursor-pointer" onClick={() => navigate("/register")} style={{ color: "white", textDecoration: "underline", marginLeft: "5px" }}>
            Register
          </a>
        </h1>
      </div>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
    </div>
  );
};
