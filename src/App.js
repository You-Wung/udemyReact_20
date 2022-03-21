import { Route, Routes, Navigate } from "react-router-dom";
import Products from "./pages/Products";
import Weclome from "./pages/Welcome";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
	return (
		<div>
			<MainHeader />
			<main>
				<Routes>
          <Route path="*" element={<p>404</p>} />
					<Route path="/welcome/*" element={<Weclome />} />
					<Route path="wel" element={<Navigate replace to="/Welcome" />}/>
					<Route path="/products" element={<Products />} />
					<Route path="/products/:productId" element={<ProductDetail />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
