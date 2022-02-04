import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button onClick={onLeaveFeedback} id="good" type="button">
        good
      </button>
      <button onClick={onLeaveFeedback} id="neutral" type="button">
        neutral
      </button>
      <button onClick={onLeaveFeedback} id="bad" type="button">
        bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
