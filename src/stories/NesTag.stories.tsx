import React from "react";
import { storiesOf } from "@storybook/react";
import { NesTag } from "../Tag";

storiesOf("nes-components/NesTag", module)
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
      propTablesExclude: [{ NesTag }]
    }
  })
  .add("primary", () => <NesTag textType={"primary"} item={"nes-components"} />)
  .add("success", () => <NesTag textType={"success"} item={"nes-components"} />)
  .add("warning", () => <NesTag textType={"warning"} item={"nes-components"} />)
  .add("error", () => <NesTag textType={"error"} item={"nes-components"} />);

