# React Markdown Autolink <img src="https://github.com/mayank1513/mayank1513/blob/main/popper.png?raw=true" style="height: 40px"/>

[![test](https://github.com/react18-tools/react-markdown-autolink/actions/workflows/test.yml/badge.svg)](https://github.com/react18-tools/react-markdown-autolink/actions/workflows/test.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/5ba946f4d45271583a1f/maintainability)](https://codeclimate.com/github/react18-tools/react-markdown-autolink/maintainability) [![codecov](https://codecov.io/gh/react18-tools/react-markdown-autolink/graph/badge.svg)](https://codecov.io/gh/react18-tools/react-markdown-autolink) [![Version](https://img.shields.io/npm/v/react-markdown-autolink.svg?colorB=green)](https://www.npmjs.com/package/react-markdown-autolink) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/react-markdown-autolink.svg)](https://www.npmjs.com/package/react-markdown-autolink) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-markdown-autolink) [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

## Automatically Detect and Add Hyperlinks to Your Markdown Content

A highly lightweight utility that automatically detects and makes links clickable in Markdown rendered by `react-markdown` or other markdown renderers.

### Key Features

✅ **Automatic Link Detection**: Automatically detects URLs and makes them clickable in your Markdown content.

✅ **Lightweight**: Minimal overhead, ensuring fast and efficient performance.

✅ **Seamless Integration**: Easily integrates with `react-markdown` and other React, Vue, web components, or any other framework/library supporting markdown.

✅ **TypeScript First**: Built with TypeScript, ensuring type safety and developer-friendly experience.

> <img src="https://github.com/mayank1513/mayank1513/blob/main/popper.png?raw=true" style="height: 20px"/> Please consider starring [this repository](https://github.com/react18-tools/react-markdown-autolink) and sharing it with your friends.

## Getting Started

### Installation

```bash
pnpm add react-markdown-autolink
```

**_or_**

```bash
npm install react-markdown-autolink
```

**_or_**

```bash
yarn add react-markdown-autolink
```

## Usage

```ts
import Markdown from "react-markdown";
import { autoLinkMd } from "react-markdown-autolink";

const md = `## Automatically Detect and Add Hyperlinks to Your Markdown Content
https://github.com/react18-tools/react-markdown-autolink
`;

export default function Page(): JSX.Element {
  return <Markdown>{autoLinkMd(md)}</Markdown>;
}
```

## License

This library is licensed under the MPL-2.0 open-source license.

> <img src="https://github.com/mayank1513/mayank1513/blob/main/popper.png?raw=true" style="height: 20px"/> Please consider enrolling in [our courses](https://mayank-chaudhari.vercel.app/courses) or [sponsoring](https://github.com/sponsors/mayank1513) our work.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
