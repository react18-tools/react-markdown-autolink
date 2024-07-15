import { describe, test } from "vitest";
import { autoLinkMd } from "../src";

describe("react-markdown-autolink", () => {
  test("test autolink url", ({ expect }) => {
    expect(autoLinkMd("this is a link: https://google.com")).toBe(
      "this is a link: <https://google.com>",
    );
  });
  test("test autolink email", ({ expect }) => {
    expect(autoLinkMd("this is a email: my-email@mail.com")).toBe(
      "this is a email: <my-email@mail.com>",
    );
  });
  test("test autolink with mixed text", ({ expect }) => {
    expect(
      autoLinkMd(
        "this is a email: my-email@mail.com and this is url: https://google.com and this is invalid url: google.com (without protocol)",
      ),
    ).toBe(
      "this is a email: <my-email@mail.com> and this is url: <https://google.com> and this is invalid url: google.com (without protocol)",
    );
  });
});
