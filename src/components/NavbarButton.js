import * as React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

export default function NavbarButton({ item, route }) {
  return (
    <Link className="top-nav-bar-link" style={{ color: "white" }} to={route}>
    <Button
    sx={{
        mx: 0.7,
        my: 2,
        fontSize: "1.2rem",
        color: "white",
        display: "block",
        boxShadow: "none", // Remove drop shadow
        ":hover": {
        boxShadow: "none", // Remove drop shadow on hover
        textDecoration: "underline",
        },
    }}
    >
        {item}
      </Button>
    </Link>
  );
}
