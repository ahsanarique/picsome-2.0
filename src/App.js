import React from "react";
import { Switch, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import HomePage from "./Pages/HomePage/HomePage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import ProductListPage from "./Pages/ProductListPage/ProductListPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage/ProductDetailPage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/authPage">
            <AuthPage />
          </Route>
          <Route path="/productListPage">
            <ProductListPage />
          </Route>
          <Route path="/productDetailsPage">
            <ProductDetailsPage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
