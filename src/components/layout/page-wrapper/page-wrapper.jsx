import React from "react";

import { StyledPageWrapper, Main } from "./styles.js";
import Header from "../header/header.jsx";
// import MainPage from "../../pages/main-page/main-page";
import OrderPage from "../../pages/order-page/order-page";
import Footer from "../footer/footer.jsx";

function PageWrapper({ features }) {
  return (
    <StyledPageWrapper>
      <Header />
      <Main>
        {/* <MainPage features={features} /> */}
        <OrderPage />
      </Main>
      <Footer />
    </StyledPageWrapper>
  );
}

export default PageWrapper;
