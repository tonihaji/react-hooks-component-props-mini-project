import React from "react";
import blogData from "../data/blog";
import About from "../components/About";
import Article from "./Article.js";
import ArtcleList from "../components/ArticleList";
import Header from "../components/Header";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About />
      <ArtcleList />
      <Article name={blogData.name} />
    </div>
  );
}

export default App;