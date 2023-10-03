import React, { useState } from "react";
import { Skeleton, Typography } from "@mui/material";

const ArtworkCard = (props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  // console.log(props.artwork.title);
  return (
    <div className="ArtworkCard">
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
      <Typography
        sx={{
          fontWeight: "bold",
          fontFamily: "Georgia",
          fontSize: "1.4rem",
          lineHeight: "1.6rem",
          mt: 2,
          mb: 1,
          textTransform: "none",
        }}
      >
        {props.artwork.title}
      </Typography>
      <Typography
        sx={{
          fontSize: "1rem",
          textTransform: "none",
        }}
      >
        {props.artwork.artist}
      </Typography>
    </div>
  );
};

export default ArtworkCard;
