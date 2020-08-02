import React from "react";
import { Events } from "./Events";
import { Order } from "./Order";

function App() {
  return (
    <div className="container">
      <h3 className="pt-3 pb-3 text-center"> Discounted Products </h3>
      <Events />
      <Order />
    </div>
  );
}

export default App;
