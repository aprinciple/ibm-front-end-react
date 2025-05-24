import './GetStartedButton.css';

export const GetStartedButton = ({ handleClick }) => {
	return (
		<button type='button' className='button button-get-started' onClick={handleClick}>
			Get Started
		</button>
	);
};
