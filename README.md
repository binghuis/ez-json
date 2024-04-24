# nano-json

A Nano Tool for Reading and Writing JSON.

![node](https://img.shields.io/badge/Node-339933?logo=nodedotjs&labelColor=263238)
[![npm version](https://img.shields.io/npm/v/@bit2byte/nano-json)](https://www.npmjs.com/package/@bit2byte/nano-json)

## install

`pnpm i @bit2byte/nano-json`

## usage

```ts
import path from "path";
import { PackageJson } from "type-fest";
import NanoJson from "@bit2byte/nano-json";

const pkg = new NanoJson<PackageJson>(path.join(__dirname, "./package.json"));

// read
await pkg.r();

if (pkg.d) {
  // edit
  pkg.d.version = "1.0.0";
}

// write
await pkg.w();
```

Inspired by [@srzorro/file-json](https://github.com/SrZorro/file-json)
