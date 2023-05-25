import s from './Feedback.module.css';
import PropTypes from 'prop-types';
const Feedback = ({ options, onLeaveFeedback}) => {
    return (
        <div className={s.optionBtns}>
            {options.map(option => {
                return (
                    <button
                        type='button'
                        onClick={() => onLeaveFeedback(option)}
                        key={option}
                        className={s.optionBtn}
                    >
                        {option}
                    </button>
                );
            })}
        </div>
    )
}
Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
export default Feedback