import React from "react";

import { GlobalStyle } from "./styles.js";
import { FEATURE_LIST } from "../../mocks/feature-list.js";
import PageWrapper from "../layout/page-wrapper/page-wrapper.jsx";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper features={FEATURE_LIST} />
    </>
  );
}
