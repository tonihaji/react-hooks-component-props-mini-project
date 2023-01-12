import React from "react";
import blogData from "../data/blog";
import Header from "./component/header.js";
import About from "./component/header.js";
import Article from "./component/article";
import ArticleList from "./ArticleList";
console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Article/>
    </div>
  );
}

export default App;
