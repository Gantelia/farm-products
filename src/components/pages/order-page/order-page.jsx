import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Scrollbar } from "swiper";
import "swiper/swiper-bundle.min.css";

import Panel from "../../ui/panel/panel";
import { TitleSize } from "../../ui/title/title";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";
import ProductCard from "../../ui/product-card/product-card.jsx";
import CheckboxList from "../../ui/checkbox-list/checkbox-list.jsx";
import {
  LeftColumn,
  StyledOrder,
  AddressInput,
  PriceLabel,
  PriceValue,
  ProductSwiper,
  CheckboxLabel,
} from "./styles.js";

function OrderPage({ products }) {
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);
  const [address, setAddress] = useState("");

  const selectedProducts = selectedProductIds.map((id) =>
    products.find((product) => product.id === id)
  );

  const fullPrice = selectedProducts.reduce(
    (sum, product) => (sum += product.description.price),
    0
  );

  const handleProductClick = (value, index) => {
    if (!selectedProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };

  const handleBuyButtonClick = () => {
    alert(
      `Спасибо за заказ! Вы купили: \n${selectedProducts
        .map(
          (product) => `${product.title} - ${product.description.price} руб.\n`
        )
        .join("")}
      Итого: ${fullPrice} руб.
      Доставка по адресу: ${address}.
    `
    );
  };

  return (
    <StyledOrder as="form">
      <LeftColumn>
        <Panel paddingTop="24" paddingBottom="12" marginBottom="20">
          <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={12}>
            Выберите продукты
          </Title>
          <CheckboxList
            selectedValues={selectedProductIds}
            labelComponent={CheckboxLabel}
            options={products.map((product) => ({
              value: product.id,
              title: product.title,
            }))}
            onChange={setSelectedProductIds}
            onLabelClick={handleProductClick}
          />
        </Panel>
        <Panel>
          <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={24}>
            Сделать заказ
          </Title>
          <AddressInput
            placeholder="Введите адрес доставки"
            onChange={(evt) => setAddress(evt.target.value)}
          />
          <PriceLabel as="span">Цена</PriceLabel>
          <PriceValue value={fullPrice} />
          <Button isMaxWidth onClick={handleBuyButtonClick}>
            Купить
          </Button>
        </Panel>
      </LeftColumn>
      <ProductSwiper
        modules={[Pagination, Mousewheel, Scrollbar]}
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{ type: "fractions" }}
        onSwiper={setSwiperRef}
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
