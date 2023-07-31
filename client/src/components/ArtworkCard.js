import React, { useState } from "react";
import { Skeleton, Typography } from "@mui/material";

const ArtworkCard = (props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  console.log(props.artwork.title);
  return (
    <div className="ArtworkCard">
      <Typography
        sx={{
          fontWeight: "bold",
          fontFamily: "Georgia",
          fontSize: "1.4rem",
          mb: 1,
          textTransform: "none",
        }}
      >
        {props.artwork.title}
      </Typography>
      <Typography
        sx={{
          fontSize: "1rem",
          mb: 2,
          textTransform: "none",
        }}
      >
        {props.artwork.artist}
      </Typography>
      <div className="card-image-div">
        {!imageLoaded && (
          <Skeleton variant="rounded" height={200} animation="wave" />
        )}
        <img
          className="ArtworkImage"
          alt={props.artwork.title}
          src={props.artwork.url}
          style={{
            display: imageLoaded ? "block" : "none",
          }}
          onLoad={handleImageLoad}
        />
      </div>
    </div>
  );
};

export default ArtworkCard;
