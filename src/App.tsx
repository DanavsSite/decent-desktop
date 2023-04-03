import { Route, Routes } from "@solidjs/router";
import Index from "./views/index";
function App() {
	return (
		<div class="container">
			<Routes>
				<Route path="/" element={<Index />} />
			</Routes>
		</div>
	);
}

export default App;
