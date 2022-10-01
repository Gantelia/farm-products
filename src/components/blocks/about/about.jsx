import Title from "../../styled/title/title";
import { StyledAbout, AboutWrapper } from "./styles.js";
import P from "../../styled/p/p";
import { TitleSize, TitleLevel } from "../../../style-const";

function About() {
  return (
    <StyledAbout>
      <AboutWrapper>
        <Title
          size={TitleSize.BIG}
          titleLevel={TitleLevel.H1}
          marginBottom={24}
        >
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
