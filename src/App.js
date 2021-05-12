import {Switch, Route, Link, BrowserRouter as Router} from "react-router-dom";
import "./styles.css";
import {ToasterProvider} from "./ui/ToasterContext";
import {BrowserRouter} from 'react-router-dom';
import {CookiesProvider} from 'react-cookie';
import Layout from "./components/layout/Layout";
import {AuthProvider} from "./authContext";
import {HomePage} from "./page/HomePage/HomePage";
import PrivateRoute from "./PrivateRoute";
import LoginCheck from "./page/HomePage/LoginCheck";

function App() {
    return (
        <CookiesProvider>
            <BrowserRouter>
                <AuthProvider>
                    <Router>
                        <ToasterProvider>
                            <Layout>
                                <HomePage/>
                            </Layout>
                        </ToasterProvider>
                    </Router>
                </AuthProvider>
            </BrowserRouter>
        </CookiesProvider>
    );
}

export default App;
