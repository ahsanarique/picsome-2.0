import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext(null);

const ContextProvider = ({ children }) => {
  // product
  const [imgList, setImgList] = useState([]);
  const [itemCount, setItemCount] = useState(30);
  const [homeImgList, setHomeImgList] = useState([]);

  // search
  const [searchQuery, setSearchQuery] = useState("");

  // price
  const [imgPrice, setImgPrice] = useState(5);
  const [totalPrice, setTotalPrice] = useState(0);

  // user
  const [userData, setUserData] = useState([]);
  const [loginStatus, setLoginStatus] = useState(false);

  // cart
  const [cartItems, setCartItems] = useState([]);

  async function getImages(searchUrl, setState) {
    try {
      const response = await axios.get(searchUrl);
      setState(response.data.hits);
    } catch (error) {
      console.log(error);
    }
  }

  // default for homepage
  useEffect(() => {
    const url = `https://pixabay.com/api/?key=22966378-58fca9bf9b8bdf03001525418&pretty=true&per_page=12&orientation=horizontal`;

    getImages(url, setHomeImgList);
  }, []);

  // based on search query
  useEffect(() => {
    const url = `https://pixabay.com/api/?key=22966378-58fca9bf9b8bdf03001525418&q=${searchQuery}&pretty=true&per_page=${itemCount}&orientation=horizontal`;

    getImages(url, setImgList);
  }, [searchQuery, itemCount]);

  return (
    <Context.Provider
      value={{
        imgList,
        homeImgList,
        searchQuery,
        setSearchQuery,
        itemCount,
        setItemCount,
        getImages,
        imgPrice,
        setImgPrice,
        totalPrice,
        setTotalPrice,
        loginStatus,
        setLoginStatus,
        userData,
        setUserData,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
