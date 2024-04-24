# @binghuis/ez-json

```ts
import path from "path";
import EasyJson from "@binghuis/ez-json";
import { PackageJson } from "type-fest";

const pkg = new EasyJson<PackageJson>(path.join(__dirname, "./package.json"));

await pkg.r();

if (pkg.d) {
  pkg.d.version = "1.0.0";
}

await pkg.w();
```

Inspired by [@srzorro/file-json](https://github.com/SrZorro/file-json)
