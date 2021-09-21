import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";
import Schedule from "./components/pages/Schedule";
import Filter from "./components/pages/Filter";

import "./custom.css";
import EmployeeSchedule from "./components/pages/EmployeeSchedule";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/fetch-data" component={FetchData} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/filter" component={Filter} />
        <Route path="/employee-schedule" component={EmployeeSchedule} />
      </Layout>
    );
  }
}
