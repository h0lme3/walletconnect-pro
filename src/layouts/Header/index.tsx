import React from "react";

import { Navbar, ReadMore } from "views";
import { HeaderWrapper } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <ReadMore />
      <Navbar />
    </HeaderWrapper>
  );
};

export default Header;
