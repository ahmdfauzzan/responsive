import React, { useEffect, useState } from "react";
import { RenderList } from "../assets/components/RenderList";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { SliderItem } from "../assets/components/SliderItem";
import { Autoplay, Pagination } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../Redux/action/authLogin";
import { getMoviePopular } from "../Redux/action/authMovie";
import { getUser } from "../Redux/action/authGetUser";
import { fetchSearchResults } from "../Redux/action/authSearchMovie";
import { CgProfile } from "react-icons/cg";

export const MovieList = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(""); // Menyimpan nama film yang dicari
  const navigate = useNavigate();
  const [Page, setPage] = useState(1);

  const loginUser = useSelector((state) => state.auth.token);
  console.log(loginUser, "login user redux");

  const dataMoviePopular = useSelector((state) => state.movies.popular.data);
  console.log(dataMoviePopular, "moviepopular redux");

  const user = useSelector((state) => state.user.data.data);
  console.log(user, "user dari redux");

  // const searchResults = useSelector((state) => state.search.searchResults);

  const handleProfileClick = () => {
    alert(`Detail akun anda \nNama: ${user.name}, \nEmail: ${user.email}`);
    console.log(alert);
  };

  const MoviePopular = () => {
    dispatch(getMoviePopular(Page));
  };

  useEffect(() => {
    MoviePopular();
  }, []);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  // search harus di enter
  // const handleSearchEnter = (event) => {
  //   if (event.key === "Enter") {
  //   }
  // };
  const handleSearchEnter = (event) => {
    if (event.key === "Enter" && searchQuery.trim() !== "") {
      dispatch(fetchSearchResults(searchQuery));
      navigate(`/search/${searchQuery}`);
    }
  };

  const handleLogout = () => {
    dispatch(LogOut(undefined));
    window.location.href = "/login";
  };

  return (
    <>
      <div className="relative h-[100vh] top-0 left-0 w-full">
        <div className="z-50 flex justify-between items-center h-[75px] mx-7 relative">
          <Link to="/" className="font-serif text-[#dd060b] font-bold sizemovielist">
            Movielist
          </Link>
          <div className="w-1/3 h-2/3 relative">
            <input className="w-full h-full rounded-full border border-red-300 pl-6 pr-10" placeholder="What do you want to watch?" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyPress={handleSearchEnter}></input>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute right-2 w-6 h-6 top-1/2 transform -translate-y-1/2 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <div className="flex h-2/3 gap-5 w-[12%] justify-end">
            <button onClick={handleProfileClick}>
              <CgProfile style={{ color: "red", height: "100%", width: "100%" }} />
            </button>
            <button onClick={handleLogout} className="bg-red-600 items-center flex w-[70%] justify-center rounded-full text-white font-semibold text-lg">
              Logout
            </button>
          </div>
        </div>
        <div className="absolute h-screen top-0 left-0 w-[100%] z-0">
          <Swiper spaceBetween={0} slidesPerView={1} modules={[Autoplay, Pagination]} loop={true} autoplay={{ delay: 2000, disableOnInteraction: false }} pagination={{ clickable: true }}>
            {dataMoviePopular && dataMoviePopular.length > 0 ? (
              dataMoviePopular.map((value) => (
                <SwiperSlide key={value.id}>
                  <SliderItem dataSlider={value} />
                </SwiperSlide>
              ))
            ) : (
              <p>Loading</p>
            )}
          </Swiper>
        </div>
      </div>

      <div className="mt-[50px]">
        <header className="flex justify-between items-center mb-5 px-[20px]">
          <h1 className={`text-3xl font-bold ${searchQuery ? "self-start" : ""}`}>{searchQuery ? `Search Result "${searchQuery}"` : "POPULAR MOVIE"}</h1>
          <Link to="/moviesAll" className="text-red-500 text-3xl font-bold">
            See All Movie
          </Link>
        </header>
        <div className="flex flex-wrap w-screen justify-center">{dataMoviePopular && dataMoviePopular.length > 0 ? dataMoviePopular.map((value, index) => <RenderList key={index} dataMovie={value} />) : <p>Data not available</p>}</div>
      </div>
    </>
  );
};
