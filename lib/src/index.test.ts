import { describe, test } from "vitest";
import { autoLinkMd } from "../src";

describe("react-markdown-autolink", () => {
  test("test autolink", ({ expect }) => {
    expect(autoLinkMd("this is a link: google.com")).toBe("this is a link: <google.com>");
  });
});
