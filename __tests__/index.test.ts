import path from "path";
import EasyJson from "../src/index";
import { PackageJson } from "type-fest";
import { describe, expect, it } from "vitest";

describe("EasyJson 测试", async () => {
  const pkg = new EasyJson<PackageJson>(path.resolve(__dirname, "./pkg.json"));

  it("测试 json 读改写", async () => {
    await pkg.r();
    expect(pkg.d?.name).toBe("@bit2byte/ez-json");

    if (pkg.d) {
      pkg.d.version = "0.0.2";
    }
    await pkg.w();
    expect(pkg.d?.version).toBe("0.0.2");
  });
});
