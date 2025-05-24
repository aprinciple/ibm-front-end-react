import { useSelector } from 'react-redux';
import { CartItem } from '../CartItem/CartItem';
import './Cart.css';

export const Cart = ({ onContinueShopping }) => {
	const cart = useSelector(state => state.cart.items);
	const totalPrice = useSelector(state => state.cart.totalPrice);
	const totalAmount = useSelector(state => state.cart.totalAmount);

	const handleContinueShopping = () => onContinueShopping();
	const handleCheckoutShopping = () => alert('Coming Soon');

	return (
		<section className='cart container'>
			{cart.length === 0 ? (
				<div className='cart__empty'>
					<p className='cart__empty-text'>Your cart is empty...</p>
					<button type='button' className='button cart__button-continue' onClick={handleContinueShopping}>
						Continue Shopping
					</button>
				</div>
			) : (
				<>
					<header className='cart__header'>
						<h2 className='cart__total-amount'>Total amount: {totalAmount} pcs.</h2>
					</header>
					<ul className='cart__list'>
						{cart.map(item => (
							<CartItem key={item.id} item={item} />
						))}
					</ul>
					<footer className='cart__footer'>
						<div className='cart__total'>
							<p className='cart__total-price'>
								Total: <span>{totalPrice}$</span>
							</p>
							<button type='button' className='button' onClick={handleCheckoutShopping} disabled={cart.length === 0}>
								Checkout
							</button>
						</div>
						<button type='button' className='button cart__button-continue' onClick={handleContinueShopping}>
							Continue Shopping
						</button>
					</footer>
				</>
			)}
		</section>
	);
};
