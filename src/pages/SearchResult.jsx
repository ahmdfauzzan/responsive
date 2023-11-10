import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { searchMovie } from "../services/search-movie";
import { RenderList } from "../assets/components/RenderList";
import { setSearchResults } from "../Redux/reducers/Search/searchSlice";
import { fetchSearchResults } from "../Redux/action/authSearchMovie";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../Redux/action/authLogin";

const SearchResult = () => {
  const { query } = useParams();
  const dispatch = useDispatch();

  const searchResults = useSelector((state) => state.search.searchResults.data);
  console.log(searchResults);

  const isSearching = useSelector((state) => state.search.loading);

  const [searchQuery, setSearchQuery] = useState(query);

  const user = useSelector((state) => state.user.data.data);
  console.log(user, "user dari redux");

  useEffect(() => {
    // Dispatch the fetchSearchResults action to initiate the search.
    if (searchQuery.trim() !== "") {
      dispatch(fetchSearchResults(searchQuery));
    } else {
      // Clear search results if the searchQuery is empty.
      dispatch(setSearchResults([]));
    }
  }, [dispatch, searchQuery]);

  const handleLogout = () => {
    dispatch(LogOut());
    window.location.href = "/login";
  };
  return (
    <div>
      <div className="bg-slate-900 h-[100px] items-center flex w-[100%]">
        <div className="z-50 flex justify-between items-center h-[75px] mx-7 relative w-[100%]">
          <Link to="/" className="font-serif text-[#dd060b] font-bold sizemovielist">
            Movielist
          </Link>

          <div className="w-1/3 h-2/3 relative">
            <input className="w-full h-full rounded-full border border-red-300 pl-6 pr-10" placeholder="What do you want to watch?" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute right-2 w-6 h-6 top-1/2 transform -translate-y-1/2 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <div className="flex h-2/3 gap-2 w-[200px] justify-end">
            <button onClick={handleLogout} className="bg-red-600 items-center flex w-[70%] justify-center rounded-full text-white font-semibold">
              Logout
            </button>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold mt-4 mb-2 ml-7">Search Results for "{searchQuery}"</h1>
      {isSearching ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="flex flex-wrap w-screen justify-center">{searchResults ? searchResults.map((value, index) => <RenderList key={index} dataMovie={value} />) : <p>No results found</p>}</div>
      )}
    </div>
  );
};

export default SearchResult;
