import React from 'react';
import Controls from './Controls';
import feedback from './Feedback.module.css'

class FeedbackForm extends React.Component{
    static defaultProps = {
        total: 0,
        positive: 0,
}

state = {
  good: 0,
  neutral: 0,
  bad: 0
}

    handleGood = (event) => {
        this.setState((prevState) => {
            return {
               good: this.state.good + 1
           }
       })
    }
    handleNeutral = (event) => {
                this.setState((prevState) => {
            return {
               neutral: this.state.neutral + 1
           }
       })
    }
    handleBad = () => {
               this.setState((prevState) => {
            return {
               bad: this.state.bad + 1
           }
       })
    }
    
    countTotalFeedback = () => {

    }

    countPositiveFeedbackPercentage() {
        
    }

    render() {
        return (
        <div>
            <p className={feedback.color}>Please leave feedback</p>
                <Controls
                    onHandleGood={this.handleGood}
                    onHandleNeutral={this.handleNeutral}
                    onHandleBad={this.handleBad}
                />
                <p className={feedback.color}>Statistics</p>
                <div>
            
            <ul>
                <li>Good:{ this.state.good}</li>
                <li>Neutral:{ this.state.neutral}</li>
                    <li>Bad:{this.state.bad}</li>
                    <li>Total:{ }</li>
                    <li>Positive feedback:{ }</li>
                    </ul>
                    </div>

            </div>
        );
    }
}




export default FeedbackForm;


