import React from "react";
import { storiesOf } from "@storybook/react";
import { NesButton } from "../Button";
// import { action } from "@storybook/addon-actions";

const handleClick =() => {
  console.log("clicked");
}

storiesOf("nes-components/NesButton", module)
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
      propTablesExclude: [{ NesButton }]
    }
  })
  .add("default", () => (
    <NesButton onClick={handleClick}>
      default
    </NesButton>
  ))
  .add("primary", () => (
    <NesButton onClick={handleClick} buttonType={"primary"}>
      primary
    </NesButton>
  ));
  // .add("primary", () => (
  //   <NesButton onClick={handleClick} buttonType={"primary"} label={"primary"} />
  // ))
  // .add("success", () => (
  //   <NesButton buttonType={"success"} label={"success"} onClick={handleClick} />
  // ))
  // .add("warning", () => (
  //   <NesButton buttonType={"warning"} label={"warning"} onClick={handleClick} />
  // ))
  // .add("error", () => (
  //   <NesButton buttonType={"error"} label={"error"} onClick={handleClick} />
  // ))
  // .add("disabled", () => (
  //   <NesButton
  //     buttonType={"disabled"}
  //     label={"disabled"}
  //     onClick={handleClick}
  //   />
  // ));
