import React from "react";
import { Link as MLink } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

export default function Link(props) {
  console.log("🚀 ~ file: Link.jsx ~ line 5 ~ Link ~ props", props);
  return props.button ? (
    <MLink
      style={{
        padding: "20px 40px",
        fontWeight: "700",
        fontSize: "2rem",
        color: "white",
        backgroundColor: "blueviolet",
        borderRadius: "5px",
        boxSizing: "border-box",
        cursor: "pointer",
      }}
      {...props}
      component={RouterLink}
    >
      {props.children}
    </MLink>
  ) : (
    <MLink {...props} component={RouterLink}>
      {props.children}
    </MLink>
  );
}
