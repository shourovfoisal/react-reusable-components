import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Button, Layout, Navbar } from "./components";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						path="/button"
						element={<Button className="text-orange-500">My Button</Button>}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
