import React, { Component } from 'react';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import '../index.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = e => {
    const option = e.target.textContent;

    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const positivePercentage = (good * 100) / (good + neutral + bad) || 0;

    return Math.round(positivePercentage * 100) / 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onClick}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              Good={good}
              Neutral={neutral}
              Bad={bad}
              Total={totalFeedback}
              PositivePercentage={`${percentage}%`}
            />
          )}
        </Section>
      </div>
    );
  }
}
