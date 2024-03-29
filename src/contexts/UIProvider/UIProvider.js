import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const UIContext = createContext();

const UIProvider = ({ children }) => {
  const [sideNavLayoutForMobile, setSideNavLayoutForMobile] =
    useState("bottom");

  useEffect(() => {
    const newSideNavLayoutForMobile = localStorage.getItem(
      "sideNavLayoutForMobile"
    );
    if (newSideNavLayoutForMobile) {
      setSideNavLayoutForMobile(newSideNavLayoutForMobile);
    }
  }, []);
  const info = { sideNavLayoutForMobile, setSideNavLayoutForMobile };
  return <UIContext.Provider value={info}>{children}</UIContext.Provider>;
};

export default UIProvider;
