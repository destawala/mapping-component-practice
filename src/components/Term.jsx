import React from "react";

function Term(props) {
  return (
    <dt>
      <span className="emoji" role="img" aria-label="{props.name}">
        {props.emoji}
      </span>
      <span>{props.name}</span>
    </dt>
  );
}

export default Term;
