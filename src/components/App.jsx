import React from "react";
import Term from "./Term";
import Description from "./Description";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emo) => {
          return (
            <div className="term">
              <Term name={emo.name} emoji={emo.emoji} />
              <Description meaning={emo.meaning} />
            </div>
          );
        })}
      </dl>
    </div>
  );
}

export default App;
