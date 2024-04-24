import fs from "fs/promises";

export default class EasyJson<JsonSchema> {
  private readonly filePath: string;
  private data: JsonSchema | null = null;

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  private async read() {
    const data = await fs.readFile(this.filePath, "utf-8");
    try {
      this.data = JSON.parse(data);
    } catch (error) {
      throw new Error("Invalid JSON file");
    }
  }

  private async write() {
    if (!this.data) {
      throw new Error("No data to write");
    }
    await fs.writeFile(this.filePath, JSON.stringify(this.data, null, 2));
  }

  public async r() {
    await this.read();
  }

  public get d() {
    return this.data;
  }

  public async w() {
    await this.write();
  }
}
