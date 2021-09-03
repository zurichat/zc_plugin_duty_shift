import React, { Component } from 'react';

export class FetchDataCopy extends Component {
  static displayName = FetchDataCopy.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>ID</th>
            <th>Team Name</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.id}>
              <td>{forecast.id}</td>
              <td>{forecast.teamName}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchDataCopy.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >HNGi8 Teams</h1>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('zccoredatainttest');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
