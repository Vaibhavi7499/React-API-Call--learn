import React, { useEffect, useState } from "react";
import { useRef } from "react";
const FunctionRef = () => {
  const myRef = useRef(null);
  let [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    console.log(myRef.current, "abc");
    if (isUpdate) {
      myRef.current.focus();
    }
  }, [isUpdate]);

  let clickBtn = () => {
    setIsUpdate(true);
  };

  return (
    <div>
      <h1>FunctionRef</h1>
      <input type="text" ref={myRef}></input> &nbsp;
      <button onClick={clickBtn}>click</button>
    </div>
  );
};

export default FunctionRef;
