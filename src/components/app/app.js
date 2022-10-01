import React from 'react';

import { GlobalStyle } from "./styles";
import { FEATURE_LIST } from "../../mocks/feature-list.js";
import PageWrapper from "../layout/page-wrapper/page-wrapper";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper features={FEATURE_LIST} />
    </>
  );
}
