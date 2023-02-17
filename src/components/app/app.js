import React from "react";

import PageWrapper from "../layout/page-wrapper/page-wrapper.jsx";
import { featureList } from "../../mocks/feature-list.js";
import products from "../../mocks/product-list.js";
import { GlobalStyle } from "./styles.js";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper features={featureList} products={products} />
    </>
  );
}
