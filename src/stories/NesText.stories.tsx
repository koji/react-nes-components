import React from "react";
import { storiesOf } from "@storybook/react";
import WebFont from 'webfontloader';
import { NesText } from "../Text";

WebFont.load({
  google: {
    families: ['Press+Start+2P']
  }
});

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
      fontSize={30}
    />
  ))
  .add("success", () => (
    <NesText
      textType={"success"}
      content={"Hello NES.css success"}
      fontSize={30}
    />
  ))
  .add("warning", () => (
    <NesText
      textType={"warning"}
      content={"Hello NES.css warning"}
      fontSize={30}
    />
  ))
  .add("error", () => (
    <NesText textType={"error"} content={"Hello NES.css error"} fontSize={50} />
  ))
  .add("disabled", () => (
    <NesText
      textType={"disabled"}
      content={"Hello NES.css disabled"}
      fontSize={30}
    />
  ));
