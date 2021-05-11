import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import "./styles.css";
import {ToasterProvider} from "./ui/ToasterContext";
import Layout from "./components/layout/Layout";
import SignIn from "./components/User/SignIn";
import {AuthProvider} from "./authContext";
import PrivateRoute from "./PrivateRoute";
import Orders from "./page/Orders/Orders";
import Overview from "./page/Overview/Overview";
import Schedule from "./page/Schedule/Schedule";

function App() {
  return (
      <AuthProvider>
        <Router>
          <ToasterProvider>
            <Layout>
              <Switch>
                <Route path="/" exact>
                  <BookList/>
                </Route>
                <PrivateRoute path="/book/:id">
                  <BookDetails/>
                </PrivateRoute>
                <PrivateRoute path="/orders" exact>
                  <Orders />
                </PrivateRoute>
                <PrivateRoute path="/overview" exact>
                  <Overview />
                </PrivateRoute>
                <PrivateRoute path="/schedule" exact>
                  <Schedule />
                </PrivateRoute>
                <Route path="/signin">
                  <SignIn/>
                </Route>
              </Switch>
            </Layout>
          </ToasterProvider>
        </Router>
      </AuthProvider>
  );
}

export default App;
