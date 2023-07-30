import React, { useState } from "react";
import { Skeleton } from "@mui/material";

const ArtworkCard = (props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="ArtworkCard">
      <h3>{props.artwork.title}</h3>
      <p>{props.artwork.artist}</p>
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
