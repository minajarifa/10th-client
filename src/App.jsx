import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";

function App() {
  return (
    <>
      <div className="font-bold bg-black text-white">
      <div className="mx-20 md:mx-36">
        <Header />
        <Outlet />
      </div>
      <Footer />
      </div>
    </>
  );
}

export default App;
