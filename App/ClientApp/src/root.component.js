import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import LandingPage from "./pages/LandingPage";
import Schedule from "./pages/Schedule";

export default function Root(props) {
  return (
    <section>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/schedule" exact component={Schedule} />
        </Switch>
      </Router>
    </section>
  );
}
