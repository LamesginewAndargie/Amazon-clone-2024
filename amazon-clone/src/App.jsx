import "./App.css";
import Carousel from "./Components/Carousel/CarouselEffect";
import Category from "./Components/Category/Category";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";

function App() {
	return (
		<>
			<div className="App">
				<Header />
				<Carousel />
				<Category />
				<Product />
			</div>
		</>
	);
}

export default App;
