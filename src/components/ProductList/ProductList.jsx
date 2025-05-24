import { useState } from 'react';
import { Cart } from '../Cart/Cart';
import { ProductItem } from '../ProductItem/ProductItem';
import { CartButton } from '../CartButton/CartButton';
import './ProductList.css';

const categoriesData = [
	{
		id: 1,
		name: 'Easy-Care Favorites',
	},
	{
		id: 2,
		name: 'Flowering Beauties',
	},
	{
		id: 3,
		name: 'Air-Purifying Plants',
	},
	{
		id: 4,
		name: 'Succulents & Cacti',
	},
	{
		id: 5,
		name: 'Large Statement Plants',
	},
];

const plantsData = [
	{
		category: 1,
		plants: [
			{
				id: 1,
				name: 'Snake Plant',
				image: 'https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'A nearly indestructible plant that thrives on neglect and tolerates low light.',
				price: 20,
			},
			{
				id: 2,
				name: 'ZZ Plant',
				image: 'https://images.pexels.com/photos/9507072/pexels-photo-9507072.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Glossy, dark green leaves make it a beautiful low-maintenance houseplant.',
				price: 25,
			},
			{
				id: 3,
				name: 'Pothos',
				image: 'https://images.pexels.com/photos/1777813/pexels-photo-1777813.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'A fast-growing vine with trailing stems that is easy to propagate and care for.',
				price: 18,
			},
			{
				id: 4,
				name: 'Spider Plant',
				image: 'https://images.pexels.com/photos/3175415/pexels-photo-3175415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
				description: 'Features arching leaves and air-purifying qualities, ideal for beginners.',
				price: 22,
			},
			{
				id: 5,
				name: 'Philodendron',
				image:
					'https://images.pexels.com/photos/32173675/pexels-photo-32173675/free-photo-of-variegated-philodendron-in-white-pot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
				description: 'Tolerates low light and irregular watering with heart-shaped leaves.',
				price: 24,
			},
			{
				id: 6,
				name: 'Chinese Evergreen',
				image: 'https://images.pexels.com/photos/12243538/pexels-photo-12243538.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Attractive foliage and tolerant of poor light, great for offices.',
				price: 26,
			},
		],
	},
	{
		category: 2,
		plants: [
			{
				id: 7,
				name: 'Peace Lily',
				image: 'https://images.pexels.com/photos/14378312/pexels-photo-14378312.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Elegant white flowers and lush green leaves, thrives in low light.',
				price: 28,
			},
			{
				id: 8,
				name: 'Anthurium',
				image: 'https://images.pexels.com/photos/8989428/pexels-photo-8989428.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Glossy heart-shaped flowers in vibrant red or pink shades.',
				price: 32,
			},
			{
				id: 9,
				name: 'Orchid',
				image: 'https://images.pexels.com/photos/1309769/pexels-photo-1309769.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Graceful blooms with long-lasting beauty, perfect for gifting.',
				price: 35,
			},
			{
				id: 10,
				name: 'Bromeliad',
				image: 'https://images.pexels.com/photos/7336391/pexels-photo-7336391.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Tropical color splash with rosette-shaped leaves and bright flowers.',
				price: 30,
			},
			{
				id: 11,
				name: 'Gloxinia',
				image: 'https://images.pexels.com/photos/7291847/pexels-photo-7291847.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Vibrant bell-shaped flowers with velvety leaves.',
				price: 27,
			},
			{
				id: 12,
				name: 'Begonia',
				image: 'https://images.pexels.com/photos/4499368/pexels-photo-4499368.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Colorful flowers and ornate foliage perfect for bright indoor spaces.',
				price: 26,
			},
		],
	},
	{
		category: 3,
		plants: [
			{
				id: 13,
				name: 'Aloe Vera',
				image: 'https://images.pexels.com/photos/9836023/pexels-photo-9836023.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Succulent with air-purifying and healing properties.',
				price: 20,
			},
			{
				id: 14,
				name: 'Areca Palm',
				image:
					'https://images.pexels.com/photos/18063065/pexels-photo-18063065/free-photo-of-a-small-plant-on-the-table.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Tall, feather-like fronds that remove indoor toxins effectively.',
				price: 34,
			},
			{
				id: 15,
				name: 'Rubber Plant',
				image: 'https://images.pexels.com/photos/2516651/pexels-photo-2516651.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Large leaves that absorb air pollutants and look great indoors.',
				price: 29,
			},
			{
				id: 16,
				name: 'Boston Fern',
				image: 'https://images.pexels.com/photos/3854749/pexels-photo-3854749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Classic fern with cascading fronds and humidifying properties.',
				price: 22,
			},
			{
				id: 17,
				name: 'Dracaena',
				image: 'https://images.pexels.com/photos/4857870/pexels-photo-4857870.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Striking sword-shaped leaves, helps filter indoor air.',
				price: 28,
			},
			{
				id: 18,
				name: 'Money Tree',
				image: 'https://images.pexels.com/photos/4050790/pexels-photo-4050790.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Believed to bring luck and prosperity, also purifies air.',
				price: 30,
			},
		],
	},
	{
		category: 4,
		plants: [
			{
				id: 19,
				name: 'Echeveria',
				image: 'https://images.pexels.com/photos/10764647/pexels-photo-10764647.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Rosette-shaped succulent that thrives in bright light.',
				price: 16,
			},
			{
				id: 20,
				name: 'Jade Plant',
				image: 'https://images.pexels.com/photos/9130769/pexels-photo-9130769.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Symbol of good luck with plump green leaves.',
				price: 18,
			},
			{
				id: 21,
				name: 'Zebra Cactus',
				image:
					'https://images.pexels.com/photos/20324601/pexels-photo-20324601/free-photo-of-plant-in-silver-flowerpot.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Small cactus with white striped leaves, very low maintenance.',
				price: 14,
			},
			{
				id: 22,
				name: 'Haworthia',
				image: 'https://images.pexels.com/photos/584764/pexels-photo-584764.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Compact succulent ideal for small pots and desks.',
				price: 15,
			},
			{
				id: 23,
				name: 'Crown of Thorns',
				image: 'https://images.pexels.com/photos/3854757/pexels-photo-3854757.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Tough succulent with red blooms and spiny stems.',
				price: 20,
			},
			{
				id: 24,
				name: 'Barrel Cactus',
				image: 'https://images.pexels.com/photos/219779/pexels-photo-219779.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Round cactus with golden spines, perfect for sunny spots.',
				price: 19,
			},
		],
	},
	{
		category: 5,
		plants: [
			{
				id: 25,
				name: 'Fiddle Leaf Fig',
				image: 'https://images.pexels.com/photos/7084309/pexels-photo-7084309.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Large violin-shaped leaves make it a dramatic focal point.',
				price: 50,
			},
			{
				id: 26,
				name: 'Bird of Paradise',
				image: 'https://images.pexels.com/photos/6805802/pexels-photo-6805802.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Tropical foliage with a strong vertical growth habit.',
				price: 55,
			},
			{
				id: 27,
				name: 'Monstera Deliciosa',
				image: 'https://images.pexels.com/photos/10894359/pexels-photo-10894359.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Split-leaf plant with striking, bold appearance.',
				price: 45,
			},
			{
				id: 28,
				name: 'Majesty Palm',
				image:
					'https://images.pexels.com/photos/18063064/pexels-photo-18063064/free-photo-of-a-small-plant-on-the-table.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Adds tropical elegance and helps purify indoor air.',
				price: 48,
			},
			{
				id: 29,
				name: 'Rubber Tree',
				image: 'https://images.pexels.com/photos/8408547/pexels-photo-8408547.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Broad leaves and upright growth for modern interiors.',
				price: 40,
			},
			{
				id: 30,
				name: 'Kentia Palm',
				image: 'https://images.pexels.com/photos/3780558/pexels-photo-3780558.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
				description: 'Classic indoor palm with graceful fronds.',
				price: 52,
			},
		],
	},
];

export const ProductList = () => {
	const [showCart, setShowCart] = useState(false);

	const handleCart = () => setShowCart(true);
	const handleContinueShopping = () => setShowCart(false);

	return (
		<>
			<header className='header'>
				<div className='container header__wrapper'>
					<a className='logo' href='/'>
						<img className='logo__image' src='img/logo.svg' alt='Logo' />
						<span className='logo__text'>Leaf & Love</span>
					</a>
					<CartButton handleCart={handleCart} />
				</div>
			</header>

			{!showCart ? (
				<div className='products'>
					<div className='container products__wrapper'>
						{categoriesData.map(category => (
							<section key={category.id} className='products__category'>
								<h2 className='products__category-title'>{category.name}</h2>
								<ul className='products-list'>
									{(plantsData.find(item => item.category === category.id)?.plants || []).map(plant => (
										<ProductItem key={plant.id} product={plant} />
									))}
								</ul>
							</section>
						))}
					</div>
				</div>
			) : (
				<Cart onContinueShopping={handleContinueShopping} />
			)}
		</>
	);
};
