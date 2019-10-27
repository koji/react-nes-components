import React from "react";
import { storiesOf } from "@storybook/react";
import { NesCheckbox } from "../Checkbox";

storiesOf("nes-components/NesCheckbox", module)
  .addDecorator(story => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      {story()}
    </div>
  ))
  .addParameters({
    props: {
      propTablesExclude: [{ NesCheckbox }]
    }
  })
  .add("normal", () => <NesCheckbox items={["a", "b", "c", "d"]} />)
  .add("darkMode", () => (
    <div style={{backgroundColor: "#212529"}}>
      <NesCheckbox darkMode={true} items={["a", "b", "c", "d"]} />
    </div>
  ));
