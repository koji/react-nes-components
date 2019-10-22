import React from "react";
import { storiesOf } from "@storybook/react";
import { NesBadge } from "../Badge";

storiesOf("nes-components/NesBadge", module)
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
      propTablesExclude: [{ NesBadge }]
    }
  })
  .add("dark", () => (
    <NesBadge
      badgeType={["dark"]}
      contents={["nes-components"]}
    />
  ))
  .add("dark_success_splited", () => (
    <NesBadge
      badgeType={["dark", "success"]}
      contents={["nes-components", "0.0.1"]}
    />
  ))
  .add("primary", () => (
    <NesBadge
      badgeType={["primary"]}
      contents={["nes-components"]}
    />
  ))
  .add("dark_primary_splited", () => (
    <NesBadge
      badgeType={["dark", "primary"]}
      contents={["npm", "1.1.1"]}
    />
  ))
  .add("success", () => (
    <NesBadge
      badgeType={["success"]}
      contents={["nes-components"]}
    />
  ))
  .add("warning", () => (
    <NesBadge
      badgeType={["warning"]}
      contents={["nes-components"]}
    />
  ))
  .add("error", () => (
    <NesBadge
      badgeType={["error"]}
      contents={["nes-components"]}
    />
  ))