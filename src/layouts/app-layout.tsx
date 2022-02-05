import React from "react";
import { useRouter } from "next/router";

import Footer from "./Footer";
import Header from "./Header";

const AppLayout: React.FC = ({ children }) => {
  const router = useRouter();
  return (
    <>
      {router.route === "/" ? <Header /> : ""}
      {children}
      {router.route === "/" ? <Footer /> : ""}
    </>
  );
};

export default AppLayout;
