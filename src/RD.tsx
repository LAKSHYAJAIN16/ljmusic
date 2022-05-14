import React, { useEffect, useState } from "react";
import Home from "./Home";
import Parchive from "./parchive";

export default function RD() {
  const [urL, setUrL] = useState<string>("pasta");

  useEffect(() => {
    const uri = new URL(window.location.href).pathname;
    setUrL(uri);
  }, []);

  return (
    <>
      {urL !== "pasta" && (
        <>
          {urL === "/" && <Home />}
          {urL === "/home" && <Home />}
          {urL === "/parchive" && <Parchive />}
        </>
      )}
    </>
  );
}
