import React, { Component } from 'react';
import Controls from '../components/Feedback/Controls/Controls';
import feedback from './Feedback/Feedback.module.css';
import Statistics from '../components/Feedback/Statistic/Statistics';
import Section from '../components/Feedback/Section/Section';
import Notification from '../components/Feedback/Notification/Notification';

export class App extends Component{
  static total = 0;
  static percentPositivFeedback = 0;
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = name => {
    this.setState(prevState => {
      return {
          [name]: prevState[name] + 1,
       };
      });
    };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    this.total = good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
   this.percentPositivFeedback = Math.round((this.state.good / this.total) * 100);
  }

  render() {
    const buttons = Object.keys(this.state);
            this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();

    return (
      <div className={feedback.container}>
        <Section title="Please leave feedback">
        <Controls
          options={buttons}
          onHandleGood={this.leaveFeedback}
        />
        </Section>
        <Section title='Statistics'>
        {this.total === 0 ? (
          <Notification message='No feedback given'/>
        ):(
          <Statistics
            onGood={this.state.good}
            onNeutral={this.state.neutral}
            onBad={this.state.bad}
            totalFeedback={this.total}
            countPositive={this.percentPositivFeedback}
          />)
        }
        </Section>
      </div>
    );
  }
}
