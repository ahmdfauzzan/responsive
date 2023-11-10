import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { MovieList } from "../pages/MovieList";
// import { Detail } from "../pages/Detail";
// import SearchResult from "../pages/SearchResult";
// import AllMovie from "../pages/AllMovie";
// import { Register } from "../pages/auth/Register";
// import { Login } from "../pages/auth/Login";
// import TokenProtected from "../assets/components/TokenProtected";
import Responsive from "../pages/Responsive";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/"
          element={
            <TokenProtected>
              <MovieList />
            </TokenProtected>
          }
        />
        <Route
          path="/search/:query"
          element={
            <TokenProtected>
              <SearchResult />
            </TokenProtected>
          }
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/moviesAll" element={<AllMovie />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/" element={<Responsive />} />
      </Routes>
    </BrowserRouter>
  );
};
