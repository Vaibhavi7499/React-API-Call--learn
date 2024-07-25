import React, { useContext } from "react";
import authContext from "../context/AuthContext";
import nameContext from "../context/NameContext";

const GetCounter = () => {
  const data = useContext(authContext);
  const { name, setName } = useContext(nameContext);

  let decCounter = () => {
    data.setCounter(data.counter - 1);
  };

  return (
    <div>
      <h1>{data.counter}</h1>
      <button onClick={decCounter}>decCounter</button>
      <h1>{name}</h1>
      <button onClick={() => setName("Vaibhavi Kishor Phawade")}>
        changeName
      </button>
    </div>
  );
};

export default GetCounter;
