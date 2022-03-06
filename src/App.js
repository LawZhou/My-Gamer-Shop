import './App.css';
import ProductPage from "./components/ProductPage";
import {useState} from "react";
import ProductShowCase from "./components/ProductShowCase";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from "./components/NavBar";
import {HomePage} from "./components/HomePage";
import NotFound from "./components/NotFound";

function App() {
  //  fetch mock data from json
  const [products, ] = useState(require("./data/products.json"))
  return (
        <div className="App">
          {(
              // mandatory check because fetching data from json file is asynchronous
              products? (
                  <div>
                      <Router>
                          <NavBar/>
                          <Routes>
                              <Route path="/"
                                     element={<HomePage/>}/>
                              <Route path="products">
                                  <Route path="/products/" element={<ProductShowCase products={products}/>}/>
                                  <Route path="/products/:uuid" element={<ProductPage products={products}/>}/>
                              </Route>
                              <Route path="*" element={<NotFound/>}/>
                          </Routes>
                      </Router>
                  </div>
              ): (
                  <div/>
              )
          )}
        </div>


  );
}


export default App;
