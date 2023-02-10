import React from "react";
import {
  LeftColumn,
  StyledOrder,
  AddressInput,
  PriceLabel,
  PriceValue,
} from "./styles";
import Panel from "../../ui/panel/panel";
import { TitleSize } from "../../ui/title/title";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";

function OrderPage() {
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
          <Button maxWidth>Купить</Button>
        </Panel>
      </LeftColumn>
      <div>Сюда нужно добавить слайдер с продуктами</div>
    </StyledOrder>
  );
}

export default OrderPage;
