import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { NesList } from './List';
import { NesText } from './Text';
const contents = ["hell", "nes", "components", "test"];
const App: React.FC = () => {
  return (
    <div className="App">
      <NesList
        items={contents}
        isDisc={false}
      />
      <NesText
        textType={"primary"}
        content={"Hello NES.css"}
        fontSize={30}
    />

    </div>
  );
}

export default App;
