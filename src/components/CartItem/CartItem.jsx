import { useDispatch } from 'react-redux';
import { removeItem, plusItem, minusItem } from '../../redux/CartSlice';
import './CartItem.css';

export const CartItem = ({ item }) => {
	const dispatch = useDispatch();

	const handlePlusItem = id => dispatch(plusItem(id));
	const handleMinusItem = id => dispatch(minusItem(id));
	const handleRemoveItem = id => {
		if (window.confirm('Are you sure you want to delete this item?')) {
			dispatch(removeItem(id));
		}
	};

	return (
		<li className='cart-item'>
			<img className='cart-item__image' src={item.image} alt={item.name} />
			<div className='cart-item__details'>
				<h3 className='cart-item__title'>{item.name}</h3>
				<span className='cart-item__price'>{item.price}$</span>
			</div>
			<div className='cart-item__count'>
				<button
					type='button'
					className='cart-item__count-button cart-item__count-button--minus'
					onClick={() => handleMinusItem(item.id)}
				>
					-
				</button>
				<span className='cart-item__count-value'>{item.quantity}</span>
				<button
					type='button'
					className='cart-item__count-button cart-item__count-button--plus'
					onClick={() => handlePlusItem(item.id)}
				>
					+
				</button>
			</div>
			<div className='cart-item__total'>
				Total: <span>{item.price * item.quantity}$</span>
			</div>
			<button
				type='button'
				className='button cart-item__delete'
				onClick={() => handleRemoveItem(item.id)}
				aria-label='Remove'
			></button>
		</li>
	);
};
