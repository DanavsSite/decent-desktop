import * as process from "@tauri-apps/api/process";
export default function TitleBar({ onExit }: { onExit: () => Promise<void> }) {
	const closeApp = () => {
		onExit().finally(() => {
			process.exit(0);
		});
	};
	return (
		<>
			<nav>
				<div class="logo">Hello</div>
				<button type="button">-</button>
				<button type="button">+</button>
				<button type="button" onClick={closeApp}>
					x
				</button>
			</nav>
		</>
	);
}
