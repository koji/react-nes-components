import React from "react";
import { storiesOf } from "@storybook/react";
import { NesCursor } from "../Cursor";

storiesOf("nes-components/NesCursor", module)
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
      propTablesExclude: [{ NesCursor }]
    }
  })
  .add("Cursor left", () => (
    <NesCursor
      isLeft={true}
      content={"Hello! This is nes-components cursor!!"}
    />
  ))
  .add("Cursor right", () => (
    <NesCursor
      isLeft={false}
      content={"Hello! This is nes-components cursor!!"}
    />
  ));