import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      title: '',
    };

    this.countUp = this.countUp.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }

  componentDidMount() {
    console.log('mounted');
  }

  componentDidUpdate() {
    console.log('updated');
    document.title = this.state.title;

    document.title = `You have clicked ${this.state.counter} times`;
  }

  countUp() {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleTitle() {
    this.setState({ title: 'semicolon academy' });
  }

  render() {
    return (
      <div className="container text-center pt-5">
        <button className="btn btn-primary" onClick={this.countUp}>
          Count up
        </button>
        <button className="btn btn-primary" onClick={this.handleTitle}>
          change Title
        </button>
        <h1 className="mt-3">{this.state.counter}</h1>
      </div>
    );
  }
}
