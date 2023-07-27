import './Title.css';  
import PropTypes from 'prop-types';

export const Title = ({ classes, text }) => {
    return (
        <h1 className={!classes ? "title text-center" : classes}>{!text ? "Title" : text}</h1>
    )
}

Title.propTypes = {
    classes: PropTypes.string,
    text: PropTypes.string,
  }
