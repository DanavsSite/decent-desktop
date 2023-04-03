import Config from "./storage";
import { BaseDirectory } from "@tauri-apps/api/fs";
export const config = new Config(
	{ count: 0 },
	"decent.msgs",
	BaseDirectory.AppConfig,
);
