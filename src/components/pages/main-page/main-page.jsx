import About from "../../blocks/about/about";
import Features from "../../blocks/features/features";

function MainPage({ features }) {
  return (
    <>
      <About />
      <Features features={features} />
    </>
  );
}

export default MainPage;
