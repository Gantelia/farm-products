import ProviderMark from "../provider-mark/provider-mark";
import Title from "../../styled/title/title";
import { Feature, Header } from "./styles.js";
import P from "../../styled/p/p";
import { TitleSize } from "../../../style-const";

function FeatureCard({ provider, title, description, image }) {
  return (
    <Feature provider={provider}>
      <Header image={image}>
        <ProviderMark provider={provider} />
        <Title size={TitleSize.SMALL}>{title}</Title>
      </Header>
      <P>{description}</P>
    </Feature>
  );
}

export default FeatureCard;
