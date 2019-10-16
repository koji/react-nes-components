import React from "react";
import { storiesOf } from "@storybook/react";
import { NesText } from "../Text";

storiesOf("nes-components/NesText", module)
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
      propTablesExclude: [{ NesText }]
    }
  })
  .add("primary", () => (
    <NesText
      textType={"primary"}
      content={"Hello NES.css primary"}
      fontSize={50}
    />
  ))
  .add("success", () => (
    <NesText
      textType={"success"}
      content={"Hello NES.css success"}
      fontSize={50}
    />
  ))
  .add("warning", () => (
    <NesText
      textType={"warning"}
      content={"Hello NES.css warning"}
      fontSize={50}
    />
  ))
  .add("error", () => (
    <NesText textType={"error"} content={"Hello NES.css error"} fontSize={50} />
  ))
  .add("disabled", () => (
    <NesText
      textType={"disabled"}
      content={"Hello NES.css disabled"}
      fontSize={50}
    />
  ));
