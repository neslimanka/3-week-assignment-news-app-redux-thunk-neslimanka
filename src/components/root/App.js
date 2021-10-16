import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import NewsPage from "../newsPage/NewsPage"

function App() {
  return (
    <div>
      <Container>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/category" exact component={Dashboard} />
          <Route path="/category/:id" exact component={NewsPage} />
          
        </Switch>
      </Container>
    </div>
  );
}

export default App;
