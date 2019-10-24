import React from "react";
import { storiesOf } from "@storybook/react";
import { NesLinkButton } from "../Button";

storiesOf("nes-components/NesLinkButton", module)
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
      propTablesExclude: [{ NesLinkButton }]
    }
  })
  .add("default", () => (
    <NesLinkButton link={"https://google.com"} label={"default"} />
  ))
  .add("primary", () => (
    <NesLinkButton
      buttonType={"primary"}
      link={"https://google.com"}
      label={"primary"}
    />
  ))
  .add("success", () => (
    <NesLinkButton
      buttonType={"success"}
      link={"https://google.com"}
      label={"success"}
    />
  ))
  .add("warning", () => (
    <NesLinkButton
      buttonType={"warning"}
      link={"https://google.com"}
      label={"warning"}
    />
  ))
  .add("error", () => (
    <NesLinkButton
      buttonType={"error"}
      link={"https://google.com"}
      label={"error"}
    />
  ))
  .add("disabled", () => (
    <NesLinkButton
      buttonType={"disabled"}
      link={"https://google.com"}
      label={"disabled"}
    />
  ));