import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import chat from './chat';
function App() {
return (
<Router>
<Switch>
<Route exact path="/" component={Home} />
<Route exact path="/signup" component={SignUp} />
<Route exact path="/chat" component={chat} />


</Switch>
</Router>
);
}
export default App;