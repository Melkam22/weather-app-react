import React, { Component } from 'react';
import './App.css';
import { Input, Button } from 'reactstrap';
import Home from './Components/Home';
import { classBody } from '@babel/types';

class App extends Component {

  state = {
    input: '',
    icon: '',
    temperature: '',
    description: '',
    windSpeed: '',
    humidity: '',
    country: '',
  }

  componentDidMount() {
    let myApi = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=berlin&APPID=${Home}`;
    fetch(myApi)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          temperature: Math.floor(data.main.temp),
          icon: data.weather[0].icon,
          humidity: data.main.humidity,
          description: "container " + data.weather[0].description,
          windSpeed: data.wind.speed,
          country: data.sys.country,
          maxTemp: Math.floor(data.main.temp_max)
        })
      })
  }

  clickSubmit(e) {
    e.preventDefault()
    //console.log(this.state.input);
    let myApi = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&APPID=${Home}`
    fetch(myApi)
      .then(response => response.json())
      .then(data => {
        this.setState({
          temperature: Math.floor(data.main.temp),
          icon: data.weather[0].icon,
          humidity: data.main.humidity,
          description: "container " + data.weather[0].description,
          windSpeed: data.wind.speed,
          country: data.sys.country,
          maxTemp: Math.floor(data.main.temp_max),
        })
      })
  }

  render() {
    return (
      <div className="main">
        <h1>Weather forecast App</h1>
        <form onSubmit={(e) => this.clickSubmit(e)} className="form">
          <Input className="input" placeholder="insert city name"
            value={this.state.input}
            onChange={(e) => this.setState({ input: e.target.value })} />
          <button className="btn" type="submit">Submit</button>
        </form>

        <div /* clsNm container added above */ className={(this.state.description)}>
          <div className="title">
            {/* <span className="span">{this.state.icon}</span> */}
            <span className="span">

              <img src={`http://openweathermap.org/img/wn/${this.state.icon}.png`} alt="img" />
            </span>
          </div>
          <div className="temperature">temperature: {this.state.temperature} °c</div>
          <div className="humidity">humidity: {this.state.humidity} %</div>
          <div className="windSpeed">wind-speed: {this.state.windSpeed} kmh </div>
          <div className="weather">max-temperature: {this.state.maxTemp} °c</div>
          <div className="country">country: {this.state.country}</div>
        </div>
        <form className="refresh">
          <Button id="btn">Refresh</Button>
        </form>
      </div>
    )
  }
}

export default App;
