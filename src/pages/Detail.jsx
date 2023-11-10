import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CookieStorage, CookiesKeys } from "../utils/cookies";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../Redux/action/authDetailMovie";

export const Detail = () => {
  // const [detailMovie, setDetailMovie] = useState(null);
  const [Token, setToken] = useState(CookieStorage.get(CookiesKeys.AuthToken));
  const dispatch = useDispatch();

  const movieData = useParams();

  const detailMovie = useSelector((state) => state.detailMovie.detail);
  console.log(detailMovie);

  const Detail = () => {
    dispatch(getMovieDetail(movieData.id));
  };

  useEffect(() => {
    Detail();
  }, []);

  const user = useSelector((state) => state.user);
  console.log(user, "user dari redux");

  const handleLogout = () => {
    CookieStorage.remove(CookiesKeys.AuthToken);
    window.location.href = "/";
  };

  const cektrailer = detailMovie && detailMovie?.videos?.find((videos) => videos.type === "Trailer");
  const trailer = cektrailer ? `https://www.youtube.com/watch?v=${cektrailer.key}` : null;

  return (
    <>
      <div className="relative z-50 top-0">
        {/* Header */}
        <div className="flex justify-between items-center h-[75px] mx-7 relative">
          <Link to="/" className="font-serif text-[#dd060b] font-bold sizemovielist">
            Movielist
          </Link>
          <div className="flex h-2/3 gap-2 w-[200px] justify-between">
            <button onClick={handleLogout} className="bg-red-600 items-center flex w-[70%] justify-center rounded-full text-white font-semibold">
              Logout
            </button>
          </div>
        </div>
      </div>
      {detailMovie ? (
        <div className="absolute h-screen top-0 left-0 w-[100%] z-0">
          {/* Poster */}
          <div
            className="w-full bg-center bg-cover bg-no-repeat min-h-screen"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${detailMovie?.backdrop_path})`,
            }}
          >
            <div className="absolute z-0 top-0 w-full h-full bg-opacity-50 bg-black"></div>
          </div>
          {/* Isi detail movie */}
          <div className="absolute bottom-0 w-1/2 h-[70%] ml-7">
            <div className="text-white absolute top-0 font-sans flex flex-col gap-5 items-baseline h-full">
              <h1 className="text-7xl font-semibold mb-2">{detailMovie?.title || "No Data"}</h1>
              {detailMovie?.genres && detailMovie?.genres.length > 0 && <p className="text-xl text-white mb-4">{detailMovie.genres.map((genre) => genre.name).join(", ")}</p>}
              <p className="text-white mt-4 text-xl">{detailMovie?.overview || "No Data"}</p>
              <p className="text-white mt-4 text-xl">Rating: {detailMovie?.vote_average || "No Data"} / 10</p>
              <p className="text-white mt-4 text-xl">Release Date: {detailMovie?.release_date || "No Data"}</p>
              {trailer && (
                <a href={trailer} target="_blank" rel="noopener noreferrer" className="w-[20%] flex justify-center bg-red-600 text-white rounded-full px-4 py-2 mt-4 font-semibold hover:bg-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                  </svg>
                  Watch Trailer
                </a>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
