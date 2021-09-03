import React from "react";
import "./App.css";

import Frame from "./components/Frame";
import useInterval from "./utils";

const App = () => {
  const [currentFrame, setCurrentFrame] = React.useState(0);
  const [play, setPlay] = React.useState(false);

  useInterval(() => {
    if (play) {
      setCurrentFrame(currentFrame + 1);
    } else {
      setCurrentFrame(-1);
    }
  }, [(play && 1900) || null]);

  const stopEffect = () => {
    if (currentFrame >= 16) setPlay(false);
  };
  React.useEffect(stopEffect, [currentFrame]);

  return (
    <div className="App">
      <Frame list={[5, 4, 3, 2, 1]} is_active={true} />
      <button
        onClick={() => {
          setPlay(!play);
        }}
      >
        {play ? "Stop" : "Play"}
      </button>
      <div className="frames">
        <Frame
          list={[5, 4, 3, 2, 1]}
          is_active={currentFrame === 0}
          pivot_bubble={0}
        />
        <Frame
          list={[4, 5, 3, 2, 1]}
          is_active={currentFrame === 1}
          pivot_bubble={1}
        />
        <Frame
          list={[4, 3, 5, 2, 1]}
          is_active={currentFrame === 2}
          pivot_bubble={2}
        />
        <Frame
          list={[4, 3, 2, 5, 1]}
          is_active={currentFrame === 3}
          pivot_bubble={3}
        />

        <Frame
          list={[4, 3, 2, 1, 5]}
          is_active={currentFrame === 4}
          pivot_bubble={4}
        />
        <Frame
          list={[4, 3, 2, 1, 5]}
          is_active={currentFrame === 5}
          pivot_bubble={0}
        />
        <Frame
          list={[3, 4, 2, 1, 5]}
          is_active={currentFrame === 6}
          pivot_bubble={1}
        />
        <Frame
          list={[3, 2, 4, 1, 5]}
          is_active={currentFrame === 7}
          pivot_bubble={2}
        />
        <Frame
          list={[3, 2, 1, 4, 5]}
          is_active={currentFrame === 8}
          pivot_bubble={3}
        />

        <Frame
          list={[2, 3, 1, 4, 5]}
          is_active={currentFrame === 9}
          pivot_bubble={0}
        />
        <Frame
          list={[2, 3, 1, 4, 5]}
          is_active={currentFrame === 10}
          pivot_bubble={1}
        />
        <Frame
          list={[2, 1, 3, 4, 5]}
          is_active={currentFrame === 11}
          pivot_bubble={2}
        />
        <Frame
          list={[2, 1, 3, 4, 5]}
          is_active={currentFrame === 12}
          pivot_bubble={0}
        />
        <Frame
          list={[1, 2, 3, 4, 5]}
          is_active={currentFrame === 13}
          pivot_bubble={1}
        />
        <Frame list={[1, 2, 3, 4, 5]} is_active={play} done={true} />
      </div>
    </div>
  );
};
export default App;
