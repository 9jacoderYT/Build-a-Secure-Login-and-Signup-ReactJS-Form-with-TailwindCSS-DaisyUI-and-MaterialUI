import React from "react";
import Form from "./components/Form";
import { fetchData } from "./data";

function App() {
  fetchData();

  return (
    <div className="bg-darktwo h-screen">
      <div className="w-[80%] mx-auto pt-10">
        <Form />
      </div>
    </div>
  );
}

export default App;
