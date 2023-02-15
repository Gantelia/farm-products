import React from "react";

import Header from "../header/header.jsx";
// import MainPage from "../../pages/main-page/main-page";
import OrderPage from "../../pages/order-page/order-page";
import Footer from "../footer/footer.jsx";
import { StyledPageWrapper, Main } from "./styles.js";

function PageWrapper({ features, products }) {
  return (
    <StyledPageWrapper>
      <Header />
      <Main>
        {/* <MainPage features={features} /> */}
        <OrderPage products={products} />
      </Main>
      <Footer />
    </StyledPageWrapper>
  );
}

export default PageWrapper;
