import React from "react";

import Title, { TitleSize } from "../../ui/title/title";
import { P } from "../../styled";
import { StyledAbout, AboutWrapper } from "./styles.js";

function About() {
  return (
    <StyledAbout>
      <AboutWrapper>
        <Title as="h1" size={TitleSize.BIG} marginBottom={24}>
          Магазин фермерских
          <br />
          продуктов с доставкой
        </Title>
        <P>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </P>
      </AboutWrapper>
    </StyledAbout>
  );
}

export default About;
