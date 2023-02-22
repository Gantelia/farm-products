import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import { StyledPageWrapper, Main } from "./styles.js";

function PageWrapper() {
  return (
    <StyledPageWrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyledPageWrapper>
  );
}

export default PageWrapper;
