import Nav from './components/Navbar/Nav';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Testimonials from './components/Testimonials/Testimonials';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <main className="main">
      <Nav />
      <Header />
      <Menu />
      <About />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;
