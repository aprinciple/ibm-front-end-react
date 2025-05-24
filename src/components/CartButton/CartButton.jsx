import { useSelector } from 'react-redux';
import './CartButton.css';

export const CartButton = ({ handleCart }) => {
	const cart = useSelector(state => state.cart.items);

	return (
		<button type='button' className='b-cart' aria-label='Cart' onClick={() => handleCart()}>
			<span className='b-cart__count'>{cart.length}</span>
		</button>
	);
};
