import { Routes, Route } from "react-router-dom";

const Weclome = () => {
	return (
		<section>
			<h1>Weclome</h1>
			<Routes>
				<Route path=':user' element={<p>welcome2</p>} />
			</Routes>
		</section>
	);
};


export default Weclome;