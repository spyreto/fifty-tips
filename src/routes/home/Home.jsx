import HeroSection from "../../components/hero-section/HeroSection";
import NewProducts from "./sections/new-collection-accessories/NewProducts";

import newCollectionList from "../../data/newCollectionAccessories";

import { Container } from "./Home.styles";

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <NewProducts
        title={"new collection accessories"}
        list={newCollectionList}
      />
    </Container>
  );
};

export default Home;
