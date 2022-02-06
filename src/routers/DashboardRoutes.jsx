import { Routes,Route } from "react-router-dom";
import { DcScreen } from "../components/dc/DcScreen";
import { Hero } from "../components/hero/Hero";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";

export const DashboardRoutes = () => {
  return (
  <div>
      <Navbar />
      <div className="container">

      <Routes>
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="dc" element={<DcScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="hero/:heroId" element={<Hero/>}/>
        <Route path="/" element={<MarvelScreen />} />
      </Routes>

      </div>
  </div>
  );
};
