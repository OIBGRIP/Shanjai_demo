import { FunctionalComponent } from "./components/FunctionalComponents";
import { MyClassComponent } from "./components/MyClassComponent";
import React from "react";
export function App() {

  const [state, setState] =React.useState(1); 
  return (
      <div>
          <h1>App state : {state}</h1>
          <button onClick = {() => setState(state + 1)}>Incerement</button>

          <MyClassComponent myProp = "1" />
          <FunctionalComponent myProp = "2" />
        </div>
     
  );
}


