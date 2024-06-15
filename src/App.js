import "./App.css";
import HomePage from "./components/homepage/HomePage";
import Navbar from "./components/navbar/Navbar";
import RentBuilding from "./components/rentbuilding/RentBuilding";
import Sale from "./components/sale/Sale";
import Blogs from "./components/blogs/Blogs";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HomePage />
      <RentBuilding />
      <Sale />
      <Blogs />
    </div>
  );
}

export default App;
