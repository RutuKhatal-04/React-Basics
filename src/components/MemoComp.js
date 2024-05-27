// just like pure comp is for class the memo comp is for functional comp
import React from "react";

function MemoComp({ name }) {
  console.log("rendering memo comp");
  return <div>{name}</div>;
}

export default React.memo(MemoComp);
