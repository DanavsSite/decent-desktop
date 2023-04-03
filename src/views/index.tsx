import { createEffect, createSignal } from "solid-js";
import { config } from "../utils/config";
import TitleBar from "../components/nav";

function Index() {
	const [count, setCount] = createSignal<number>(0);

	createEffect(() => {
		// rome-ignore lint/suspicious/noExplicitAny: <explanation>
		config
			.getConfig()
			// rome-ignore lint/suspicious/noExplicitAny: <explanation>
			.then((config: any) => setCount(config.count - 1));
	});
	createEffect(() => {
		console.log(count());
	});
	return (
		<div class="container">
			<TitleBar
				onExit={async () => {
					await config.updateConfig({ count: count() });
				}}
			/>
			<h1>{count()}</h1>
			<div>
				<button onClick={() => setCount(count() + 1)}>Increment </button>
				<button onClick={() => setCount(count() - 1)}>Decrement </button>
			</div>
		</div>
	);
}

export default Index;
