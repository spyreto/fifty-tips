import heroImage from "../../assets/hero-img.jpg";

import { Container, LabelContainer } from "./HeroSection.style";

const HeroSection = () => {
  return (
    <Container imagePath={heroImage}>
      <LabelContainer>
        <p>New way</p>
        <p>
          of <span>shopping</span>
        </p>
      </LabelContainer>
    </Container>
  );
};

export default HeroSection;
