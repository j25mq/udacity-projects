import picture from "./picture.jpg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [likes, setLikes] = useState(0);
  return (
    <div className="container">
      <div className="container-photo">
        <h2>Like this photo</h2>
        <img src={picture} alt="Picture"></img>
      </div>
      <div className="container-likes">
        <p>Amount of likes: {likes}</p>
        <button onClick={() => setLikes(likes + 1)}>Like</button>        
      </div>
    </div>
  );
};

export default App;