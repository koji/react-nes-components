import React from "react";
import { storiesOf } from "@storybook/react";
import { NesSNSIcon } from "../SNSIcon";

storiesOf("nes-components/NesSNSIcon", module)
  .addDecorator(story => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "30px"
      }}
    >
      {story()}
    </div>
  ))
  .addParameters({
    props: {
      propTablesExclude: [{ NesSNSIcon }]
    }
  })
  .add("twitter", () => (
    <NesSNSIcon snsType={"twitter"} iconSize={"medium"} />
  ))
  .add("facebook", () => (
    <NesSNSIcon snsType={"facebook"} iconSize={"medium"} />
  ))
  .add("instagram", () => (
    <NesSNSIcon snsType={"instagram"} iconSize={"medium"} />
  ))
  .add("github", () => (
    <NesSNSIcon snsType={"github"} iconSize={"medium"} />
  ))
  .add("google", () => (
    <NesSNSIcon snsType={"google"} iconSize={"medium"} />
  ))
  .add("gmail", () => (
    <NesSNSIcon snsType={"gmail"} iconSize={"medium"} />
  ))
  .add("medium", () => (
    <NesSNSIcon snsType={"medium"} iconSize={"medium"} />
  ))
  .add("linkedin", () => (
    <NesSNSIcon snsType={"linkedin"} iconSize={"medium"} />
  ))
  .add("twitch", () => (
    <NesSNSIcon snsType={"twitch"} iconSize={"medium"} />
  ))
  .add("youtube", () => (
    <NesSNSIcon snsType={"youtube"} iconSize={"medium"} />
  ))
  .add("reddit", () => (
    <NesSNSIcon snsType={"reddit"} iconSize={"medium"} />
  ))
  .add("whatsapp", () => (
    <NesSNSIcon snsType={"whatsapp"} iconSize={"medium"} />
  ));