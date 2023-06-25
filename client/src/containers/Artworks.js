import { v4 as rand } from "uuid";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ArtworkCard from "../components/ArtworkCard";
import SearchForm from "./SearchForm";
import Button from "@mui/material/Button";
import "./Artworks.scss";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#e5e6d2",
  boxShadow: 24,
  p: 4,
  maxHeight: "100vh", // Set the maximum height to 90% of the viewport height
  overflowY: "auto", // Enable vertical scrolling if content overflows
  margin: "auto",
  textAlign: "center",
};

const infiniteScrollHasMoreThreshold = 19; // number of items to load after scrolling minus 1

function ArtworkGallery() {
  const [searchArtworksResult, setSearchArtworksResult] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [searchParam, setSearchParam] = useState("");
  const [page, setPage] = useState(1);

  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const handleOpenModal = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const handleCloseModal = () => {
    setSelectedArtwork(null);
  };

  useEffect(() => {
    console.log("useEffect loadArtworks");
    loadArtworks();
  }, []);

  const fetchArtworks = async (searchParam, pageNum) => {
    try {
      const response = await fetch(
        `/artworks?search=${searchParam}&page=${pageNum}`
      );
      const data = await response.json();
      setSearchArtworksResult((prevArtworks) => prevArtworks.concat(data));
      setHasMore(data.length > infiniteScrollHasMoreThreshold);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSearchedArtworks = async (searchParam, pageNum) => {
    try {
      const response = await fetch(
        `/artworks?search=${searchParam}&page=${pageNum}`
      );
      const data = await response.json();
      console.log("setSearchArtworksResult", data);
      setSearchArtworksResult([...data]);
      setHasMore(data.length > infiniteScrollHasMoreThreshold);
    } catch (error) {
      console.error(error);
    }
  };

  const loadArtworks = () => {
    console.log("page", page);
    fetchArtworks(searchParam, page + 1);
    setPage(page + 1);
  };

  const searchArtworks = () => {
    fetchSearchedArtworks(searchParam, 1);
  };

  console.log("search new artworks state", searchArtworksResult.length);

  return (
    <div>
      <Box sx={{ height: 80 }}></Box>
      <SearchForm
        setSearchParam={setSearchParam}
        searchParam={searchParam}
        searchArtworks={searchArtworks}
        setPage={setPage}
      />

      <div className="ArtworksContainer">
        {searchArtworksResult.map((artwork) => {
          return (
            <div key={`${artwork.id}-${rand()}`}>
              <Button
                onClick={() => handleOpenModal(artwork)}
                sx={{
                  "&:hover": {
                    border: "none",
                    boxShadow: "none",
                    bgcolor: "inherit",
                  },
                }}
              >
                <ArtworkCard artwork={artwork} />
              </Button>
            </div>
          );
        })}
      </div>
      <Modal
        open={selectedArtwork !== null}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="artwork-modal" sx={style}>
          <h2>{selectedArtwork?.title}</h2>
          <p>{selectedArtwork?.artist}</p>
          <p>{selectedArtwork?.description}</p>
          <br />
          <img src={selectedArtwork?.url} alt="artwork" />
        </Box>
      </Modal>
      <InfiniteScroll
        dataLength={searchArtworksResult.length}
        next={loadArtworks}
        hasMore={hasMore}
        loader={<div>Loading...</div>}
      ></InfiniteScroll>
    </div>
  );
}

export default ArtworkGallery;
