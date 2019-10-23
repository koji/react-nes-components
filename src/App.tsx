import React from 'react';
import { NesTable } from "./Table";


const contents = ["hell", "nes", "components", "test"];
const App: React.FC = () => {
  return (
    <div className="App">
      <NesTable
        darkMode={true}
        isCentered={true}
        isBordered={true}
        headers={contents}
        items={[
          "aaa",
          "bbb",
          "ccc",
          "ddd",
          "eee",
          "fff",
          "ggg",
          "hhh",
          "aaa",
          "bbb",
          "ccc",
          "ddd"
        ]}
      />
    </div>
  );
}

export default App;
