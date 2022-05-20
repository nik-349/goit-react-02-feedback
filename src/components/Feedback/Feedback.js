import React from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls';
import feedback from './Feedback.module.css';
import Statistics from './Statistics';

class FeedbackForm extends React.Component {
  //   static defaultProps = {
  //     countPositive: 0,
  //   };

  static propTypes = {
    //
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => {
      return {
        good: this.state.good + 1,
      };
    });
  };
  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: this.state.neutral + 1,
      };
    });
  };
  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: this.state.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
    if (this.countTotalFeedback() < 0.01) {
      return 0;
    }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
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
        {this.countTotalFeedback() === 0 ? (
          'No feedback given'
        ) : (
          <Statistics
            onGood={this.state.good}
            onNeutral={this.state.neutral}
            onBad={this.state.bad}
            totalFeedback={this.countTotalFeedback()}
            countPositive={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}

export default FeedbackForm;
