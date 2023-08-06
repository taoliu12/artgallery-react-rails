import React, { useState } from "react";
import Button from "@mui/material/Button";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const ArtworkImage = () => {
  const [showButton, setShowButton] = useState(false);

  const imageUrl =
    "https://openaccess-cdn.clevelandart.org/1958.31/1958.31_web.jpg"; // Replace with the actual image URL

  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  const openImageInNewTab = () => {
    window.open(imageUrl, "_blank");
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageUrl} alt="Thumbnail" />
      {showButton && (
        <Button
          variant="contained"
          onClick={openImageInNewTab}
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            zIndex: 1,
          }}
        >
          <OpenInNewIcon />
        </Button>
      )}
    </div>
  );
};

export default ArtworkImage;
