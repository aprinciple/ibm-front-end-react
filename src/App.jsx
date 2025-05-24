import { useState } from 'react';
import { GetStartedButton, AboutUs, ProductList } from './components';
import './App.css';

export const App = () => {
	const [showProductList, setShowProductList] = useState(false);

	const handleGetStartedClick = () => {
		setShowProductList(true);
	};

	return (
		<div className='page'>
			<section className='page__promo'>
				<h1 className='page__promo-title'>
					Welcome To <span>Leaf & Love</span>
				</h1>
				<AboutUs />
				<GetStartedButton handleClick={handleGetStartedClick} />
			</section>
			<div className={`page__products ${showProductList ? 'show' : ''}`}>
				<ProductList />
			</div>
		</div>
	);
};
