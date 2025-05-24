import { useSelector } from 'react-redux';
import './CartButton.css';

export const CartButton = ({ handleCart }) => {
	const totalAmount = useSelector(state => state.cart.totalAmount);

	return (
		<button type='button' className='b-cart' aria-label='Cart' onClick={() => handleCart()}>
			<span className='b-cart__count'>{totalAmount}</span>
		</button>
	);
};
