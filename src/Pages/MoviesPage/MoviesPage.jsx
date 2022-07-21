import React from "react";
import Container from "../../Components/Container.jsx";
import NowPlayingMovies from "./components/NowPlayingMovies.jsx";
import PopularMovies from "./components/PopularMovies.jsx";
import TopRatedMovies from "./components/TopRatedMovies.jsx";
import OnTheAgenda from "./components/OnTheAgenda.jsx";
import UserCollections from "./components/UserCollections.jsx";
import setTitle from "../../utils/useTitle";

const MoviesPage = () => {
  setTitle("Movie List");
  return (
    <>
      <div className="bg-netflix-dark text-white">
        <Container>
          <NowPlayingMovies />
          <PopularMovies />
          <TopRatedMovies />
          <OnTheAgenda />
          <UserCollections />
        </Container>
      </div>
    </>
  );
};

export default MoviesPage;
