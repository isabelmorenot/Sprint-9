import React from "react";
import Header from "./pages/header/header";
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./pages/Paginas";
import Cart from "./components/cart";
import { DataProvider } from "./components/context/Dataprovider";
import Home from "./pages/home/home";

function App() {
  return (
    <DataProvider>
      <div className="app">
        <Router>
          <Header/>
          <Paginas/>
          <Home/>
          <Cart/>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
