import React from "react";
import Header from "./Header";

function App() {
  const blogName = "My Awesome Blog";

  return (
    <div>
      <Header blogName={blogName} />
      
    </div>
  );
}

export default App;
