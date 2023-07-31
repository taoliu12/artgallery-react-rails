import { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { Button, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const CustomIconButton = styled(IconButton)({
  alignSelf: "center",
  marginLeft: "-60px",
  borderRadius: "50%",
  "&:hover": {
    backgroundColor: "#f2f2f2",
  },
});

export default function SearchForm({ searchArtworks, setPage }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParam, setSearchParam] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    searchArtworks(searchQuery);
    setSearchParam(searchQuery);
  };

  const resetSearch = (e) => {
    setPage(1);
    setSearchQuery("");
    setSearchParam("");
    searchArtworks("");
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box
      sx={{
        mx: "auto",
        mt: 5,
        minWidth: "344px",
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <form onSubmit={handleSearch}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
            fullWidth
            placeholder="Search by title or artist"
            inputProps={{
              "aria-label": "ex. Vermeer",
              style: { fontSize: "18px" },
            }}
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            sx={{
              border: "none",
              backgroundColor: "white",
              borderRadius: "4px",
            }}
          />
          <CustomIconButton onClick={handleSearch}>
            <SearchIcon fontSize="large" />
          </CustomIconButton>
        </Box>
      </form>
      {searchParam == "" ? null : (
        <Button className="submit-btn"
          onClick={resetSearch}
          sx={{
            margin: "auto",
            mt: "10px",
          }}
        >
          Reset
        </Button>
      )}
    </Box>
  );
}
