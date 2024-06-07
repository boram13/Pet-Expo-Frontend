import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import  Contact  from "../components/Contact";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";
import NoMatch  from "../components/NoMatch";

export default function App() {
  return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="gallery/:type" element={<Gallery />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
  );
}