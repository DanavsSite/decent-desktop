import {
	readTextFile,
	BaseDirectory,
	createDir,
	writeTextFile,
	exists,
} from "@tauri-apps/api/fs";

export default class Config {
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	defaultConfig: any;
	configPath: string;
	configDir: BaseDirectory;
	constructor(defaultConfig: unknown, path: string, defaultDir: BaseDirectory) {
		this.defaultConfig = defaultConfig;
		this.configPath = path;
		this.configDir = defaultDir;
	}
	async getConfig() {
		const fileExists = await exists(this.configPath, {
			dir: this.configDir,
		});
		if (!fileExists) {
			await writeTextFile(this.configPath, JSON.stringify(this.defaultConfig), {
				dir: this.configDir,
			});
			return this.defaultConfig;
		}
		const data = await readTextFile(this.configPath, {
			dir: this.configDir,
		});
		return data ? JSON.parse(data) : this.defaultConfig;
	}
	async updateConfig(config: unknown) {
		const fileExists = await exists(this.configPath, {
			dir: this.configDir,
		});
		if (!fileExists) {
			await writeTextFile(this.configPath, JSON.stringify(config), {
				dir: this.configDir,
			});
			return config;
		}
		await writeTextFile(this.configPath, JSON.stringify(config), {
			dir: this.configDir,
		});
	}
}
