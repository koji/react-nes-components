import { configure, addDecorator } from "@storybook/react";
import { setConsoleOptions } from "@storybook/addon-console";
const { withPropsTable } = require("storybook-addon-react-docgen");

setConsoleOptions({
  panelExclude: []
});

function loadStories() {
  let req = require.context("../src/stories", true, /.(tsx|js)$/);
  req.keys().forEach(filename => req(filename));

  req = require.context("../src", true, /.stories.(tsx|js)$/);
  req.keys().forEach(filename => req(filename));
}

// addDecorator(withPropsTable(options));
addDecorator(withPropsTable);

configure(loadStories, module);
