import React, {Component} from 'react';
import './App.css';

class StopWatch extends Component {
  constructor(props) {
      super(props);
      this.state ={
        hours: 0,
        minutes: 0,
        seconds: 0
      }
  }

  componentWillMount (){
    this.getTimeUntill(this.props.deadline);
  }

  componentDidMount(){
    setInterval(() => this.getTimeUntill(this.props.deadline), 1000 );
  }

  leading0(num){
    return num< 10 ? '0' + num : num;
  }

  getTimeUntill(stopdeadline){
    const time = Date.parse(stopdeadline) - Date.parse(new Date());
    // console.log('time', time);
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor( time/(1000*60*60) % 24);

    // console.log('seconds',  seconds, 'minutes', minutes, 'hours', hours, 'days', days);
    this.setState({hours, minutes, seconds});
  }

  render(){
    return(
      <div>
      <div className="Clock-hours">{this.leading0(this.state.hours)} hours</div>
      <div className="Clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
      <div className="Clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
      </div>
    )
  }
}

export default StopWatch;
