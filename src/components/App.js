import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "./blogData"; // Import your blog data

function App() {
  const blogName = "My Awesome Blog";
  const aboutImage = "your-image-url-here"; // Pass your image URL here
  const aboutText = "Your blog's about text here";

  return (
    <div className="App">
      <Header blogName={blogName} />
      <About image={aboutImage} aboutText={aboutText} />
      <ArticleList articles={blogData.articles} />

    </div>
  );
}

export default App;
