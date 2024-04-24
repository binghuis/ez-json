# nano-json

A Nano Tool for Reading and Writing JSON.

## install

`pnpm i @bit2byte/nano-json`

## usage

```ts
import path from "path";
import { PackageJson } from "type-fest";
import NanoJson from "@bit2byte/nano-json";

const pkg = new NanoJson<PackageJson>(path.join(__dirname, "./package.json"));

await pkg.r();

if (pkg.d) {
  pkg.d.version = "1.0.0";
}

await pkg.w();
```

Inspired by [@srzorro/file-json](https://github.com/SrZorro/file-json)
