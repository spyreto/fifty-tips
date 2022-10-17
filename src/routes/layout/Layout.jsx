import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../../components/header/Header";
import AuthModal from "../../components/auth/AuthModal";
import Footer from "../../components/footer/Footer";

import { Container } from "./Layout.styles";

const Navigation = () => {
  const { isSignInModalOpen, isSignUpModalOpen } = useSelector(
    (state) => state.authModal
  );

  return (
    <Container>
      {(isSignInModalOpen || isSignUpModalOpen) && (
        <AuthModal isSignInModalOpen={isSignInModalOpen} />
      )}
      <Header />
      <Outlet />
      {/* <EmptyDiv /> */}
      <Footer />
    </Container>
  );
};

export default Navigation;
