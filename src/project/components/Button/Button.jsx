import './Button.css';
import PropTypes from 'prop-types';

export const Button = ({ text = "click", btnClass, icon, onClick }) => {
    return (
        <button className={`btn ${btnClass}`} onClick={onClick}>
            {icon}
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    btnClass: PropTypes.string,
    icon: PropTypes.element,
    onClick: PropTypes.func
}