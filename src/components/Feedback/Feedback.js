import feedback from './Feedback.module.css'

const FeedbackForm = () => {
    return (
        <div>
            <p className={feedback.color}>Please leave feedback</p>
            <ul>
                <li>
                    <button type='button'>Good</button>
                </li>
            <li>
                    <button type='button'>Neutral</button>
                </li>
            <li>
                    <button type='button'>Bad</button>
                </li>
            </ul>
            <p className={feedback.color}>Statistics</p>
            <ul>
                <li>Good:{ 5}</li>
                <li>Neutral:{ 5}</li>
                <li>Bad:{ 5}</li>
            </ul>
            </div>
        );
};


export default FeedbackForm;


