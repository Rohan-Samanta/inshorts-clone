import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import API_KEY from "./data/key";
import NavContents from "./components/nav/NavContents";

function App() {
  const [category, setCategory] = useState("general");
  const [newsResults, setNewsResults] = useState();
  const [newsArray, setNewsArray] = useState([]);
  const [loadmore, setLoadmore] = useState(10);

  useEffect(() => {
    const newsApi = async () => {
      try {
        const news = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=${category}&pageSize=${loadmore}`
        );
        console.log(news);
        setNewsArray(news.data.articles);
        setNewsResults(news.data.totalResults);
      } catch (error) {
        console.log(error);
      }
    };
    newsApi();
  }, [category, loadmore, newsResults]);

  return (
    <div className="app">
      <Nav setCategory={setCategory} />
      <NavContents
        newsResults={newsResults}
        newsArray={newsArray}
        loadmore={loadmore}
        setLoadmore={setLoadmore}
      />
    </div>
  );
}

export default App;
