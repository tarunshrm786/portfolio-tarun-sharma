import { Container } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
