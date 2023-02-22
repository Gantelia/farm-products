import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageWrapper from "../layout/page-wrapper/page-wrapper.jsx";
import features from "../../mocks/feature-list.js";
import products from "../../mocks/product-list.js";
import { AppRoute } from "../../const.js";
import MainPage from "../pages/main-page/main-page.jsx";
import OrderPage from "../pages/order-page/order-page.jsx";
import NotFound from "../pages/not-found/not-found.js";
import ScrollToTop from "../ui/scroll-to-top/scroll-to-top.jsx";
import { GlobalStyle } from "./styles.js";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={features} />} />
            <Route
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<OrderPage products={products} />}
            />
            <Route
              path={AppRoute.NOT_FOUND}
              element={
                <NotFound>
                  404
                  <br />
                  cтраница не найдена
                </NotFound>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
