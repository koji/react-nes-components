import React from "react";
import { storiesOf } from "@storybook/react";
import { NesTable } from "../Table";

storiesOf("nes-components/NesTable", module)
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
      propTablesExclude: [{ NesTable }]
    }
  })
  .add("table", () => (
    <NesTable
      isBordered={true}
      headers={["item1", "item2", "item3", "item4"]}
      items={["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg", "hhh"]}
    />
  ))
  .add("table_dark", () => (
    <NesTable
      darkMode={true}
      isCentered={true}
      headers={["itemA", "itemB", "itemC", "itemD"]}
      items={["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg", "hhh"]}
    />
  ));
