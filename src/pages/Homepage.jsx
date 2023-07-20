import Nav from '../components/Navbar/Nav';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import About from '../components/About/About';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';

function Homepage() {
  return (
    <>
      <Nav />
      <Header />
      <Menu />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Homepage;
