import Home from "./Home";
import PageNotFound from "./PageNotFound";
import { Routes, Route } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/my-portfolio-react" element={<Home />}></Route>
      <Route path="/*" element={<PageNotFound />}></Route>
    </Routes>
  );
}

export default Pages;
