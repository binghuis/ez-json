import path from "path";
import NanoJson from "../src/index";
import { PackageJson } from "type-fest";
import { describe, expect, it } from "vitest";

describe("NanoJson 测试", async () => {
  const pkg = new NanoJson<PackageJson>(path.resolve(__dirname, "./pkg.json"));

  it("测试 json 读改写", async () => {
    await pkg.r();
    expect(pkg.d?.name).toBe("@bit2byte/nano-json");

    if (pkg.d) {
      pkg.d.version = "0.0.2";
    }
    await pkg.w();
    expect(pkg.d?.version).toBe("0.0.2");
  });
});
