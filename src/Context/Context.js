import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext(null);

const ContextProvider = ({ children }) => {
  const [popularImg, setPopularImg] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  async function getImages(searchUrl, setState) {
    try {
      const response = await axios.get(searchUrl);
      setState(response.data.hits);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const url = `https://pixabay.com/api/?key=22966378-58fca9bf9b8bdf03001525418&q=${searchQuery}&image_type=photo&pretty=true`;

    getImages(url, setPopularImg);
  }, [searchQuery]);

  return (
    <Context.Provider value={{ popularImg, setSearchQuery, loginStatus }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
