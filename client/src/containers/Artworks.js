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
import CircularProgress from "@mui/material/CircularProgress";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#e5e6d2",
  boxShadow: 24,
  p: 4,
  maxHeight: "100vh",
  overflowY: "auto",
  margin: "auto",
  textAlign: "center",
};

const infiniteScrollHasMoreThreshold = 49; // number of items to load after scrolling minus 1, also change in rails controller

function ArtworkGallery() {
  const [searchArtworksResult, setSearchArtworksResult] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [hasMore, setHasMore] = useState(true);
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

  const searchArtworks = (searchQuery) => {
    fetchSearchedArtworks(searchQuery, 1);
  };

  console.log("search new artworks state", searchArtworksResult.length);

  return (
    <div>
      <Box height={60}></Box>
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
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "Georgia",
              fontSize: "1.6rem",
              lineHeight: "1.6rem",
              mt: 2,
              mb: 1,
              textTransform: "none",
            }}
          >
            {selectedArtwork?.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              textTransform: "none",
            }}
          >
            {selectedArtwork?.artist} {selectedArtwork?.description}
          </Typography>
          <br />
          <img src={selectedArtwork?.url} alt="artwork" />
        </Box>
      </Modal>
      <InfiniteScroll
        dataLength={searchArtworksResult.length}
        next={loadArtworks}
        hasMore={hasMore}
        loader={
          <Box sx={{ height: 100 }}>
            <CircularProgress
              style={{ marginTop: 11, width: 45, height: 45 }}
            />
          </Box>
        }
      ></InfiniteScroll>
    </div>
  );
}

export default ArtworkGallery;
