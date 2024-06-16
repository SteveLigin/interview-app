import "./App.css";
import HomePage from "./components/homepage/HomePage";
import Navbar from "./components/navbar/Navbar";
import RentBuilding from "./components/rentbuilding/RentBuilding";
import Sale from "./components/sale/Sale";
import Blogs from "./components/blogs/Blogs";
import Aboutus from "./components/aboutus/AboutUs";
import RealEstate from "./components/realestate/RealEstate";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HomePage />
      <Aboutus />
      <RentBuilding />
      <RealEstate />
      <Sale />
      <Blogs />
    </div>
  );
}

export default App;
