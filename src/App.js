import "./App.css";
import Home from "./components/Layout/Home/Home";
import Navbar from "./components/Layout/Home/Navbar";
import Footer from "./components/Layout/Home/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
