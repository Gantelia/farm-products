import React from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";

import Panel from "../../ui/panel/panel";
import { TitleSize } from "../../ui/title/title";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";
import ProductCard from "../../ui/product-card/product-card.jsx";
import {
  LeftColumn,
  StyledOrder,
  AddressInput,
  PriceLabel,
  PriceValue,
  ProductSwiper,
} from "./styles.js";

SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

function OrderPage({ products }) {
  return (
    <StyledOrder as="form">
      <LeftColumn>
        <Panel paddingTop="24" paddingBottom="12" marginBottom="20">
          <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={12}>
            Выберите продукты
          </Title>
          Чекбоксы со списком продуктов
        </Panel>
        <Panel>
          <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={24}>
            Сделать заказ
          </Title>
          <AddressInput placeholder="Введите адрес доставки" />
          <PriceLabel as="span">Цена</PriceLabel>
          <PriceValue>400 руб.</PriceValue>
          <Button isMaxWidth>Купить</Button>
        </Panel>
      </LeftColumn>
      <ProductSwiper
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{ type: "fraction" }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiper>
    </StyledOrder>
  );
}

export default OrderPage;
