import React from "react";

import { GlobalStyle } from "./styles.js";
import { featureList } from "../../mocks/feature-list.js";
import PageWrapper from "../layout/page-wrapper/page-wrapper.jsx";
import products from "../../mocks/product-list.js";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper features={featureList} products={products} />
    </>
  );
}
