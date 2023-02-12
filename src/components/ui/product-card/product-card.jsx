import React from "react";
import Panel from "../panel/panel.js";
import { ContentWrapper, Price } from "./styles.js";
import { TitleSize } from "../title/title.js";
import { ProductImage, ProductTitle } from "./styles.js";

function ProductCard({ product }) {
  return (
    <Panel as="article">
      <ProductImage src={product.image} />
      <ContentWrapper>
        <ProductTitle as="h3" size={TitleSize.SMALL}>
          {product.title}
        </ProductTitle>
        <Price>
          {product.description.price} руб. / {product.description.weight} гр.
        </Price>
      </ContentWrapper>
    </Panel>
  );
}

export default ProductCard;
