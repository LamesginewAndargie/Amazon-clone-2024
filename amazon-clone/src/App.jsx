import "./App.css";
import Carousel from "./Components/Carousel/CarouselEffect";
import Category from "./Components/Category/Category";
import Header from "./Components/Header/Header";

function App() {
	return (
		<>
			<div className="App">
				<Header />
				<Carousel />
				<Category />
			</div>
		</>
	);
}

export default App;
