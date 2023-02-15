import React from "react";

import { TitleSize } from "../title/title.js";
import OptionsList from "../options-list/options-list.jsx";
import Tabs from "../tabs/tabs.jsx";
import Panel from "../panel/panel.js";
import { ContentWrapper, Price, ProductImage, ProductTitle } from "./styles.js";

function ProductCard({ product }) {
  const { description, specifications, structure } = product;

  const tabsList = [
    {
      title: "Описание",
      content: description.text,
    },
    {
      title: "Характеристики",
      content: <OptionsList options={specifications} />,
    },
    {
      title: "Свойства",
      content: <OptionsList options={structure} />,
    },
  ];

  return (
    <Panel as="article">
      <ProductImage src={product.image} />
      <ContentWrapper>
        <ProductTitle as="h3" size={TitleSize.SMALL}>
          {product.title}
        </ProductTitle>
        <Tabs maxContentHeight="105px" tabsList={tabsList} />
        <Price>
          {description.price} руб. / {description.weight} гр.
        </Price>
      </ContentWrapper>
    </Panel>
  );
}

export default ProductCard;
