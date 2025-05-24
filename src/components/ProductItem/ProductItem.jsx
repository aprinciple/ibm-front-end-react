import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/CartSlice';
import './ProductItem.css';

export const ProductItem = ({ product }) => {
	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart.items);

	const handleAddToCart = product => dispatch(addItem(product));
	const isItemInCart = id => cart.some(item => item.id === id);

	return (
		<li className='product'>
			<picture className='product__picture'>
				<img className='product__image' src={product.image} alt={product.name} />
			</picture>
			<div className='product__info'>
				<h3 className='product__title'>{product.name}</h3>
				<p className='product__description'>{product.description}</p>
				<span className='product__price'>{product.price}$</span>
				<button
					type='button'
					className='button product__action'
					onClick={() => handleAddToCart(product)}
					disabled={isItemInCart(product.id)}
				>
					{isItemInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
				</button>
			</div>
		</li>
	);
};
