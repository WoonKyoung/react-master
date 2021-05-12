import React from 'react';
import {store} from '../../scripts/store';
import {Redirect, Route, Switch} from "react-router-dom";
import BookList from "../Book/BookList";
import BookDetails from "../Book/BookDetails";
import Overview from "../Overview/Overview";
import SignIn from "../../components/User/SignIn";
import Schedule from "../Schedule/Schedule";
import Orders from "../Orders/Orders";
import LoginCheck from "./LoginCheck";


export const HomePage = () => {

    const [open, setOpen] = React.useState(true);

    const leftMenuhandle = (e) => {
        setOpen(e);
    };

    const isAuthenticated = store.isAuthorized || sessionStorage.getItem('isAuthorized');
    const userInfo = JSON.parse(sessionStorage.getItem('user'));
    console.log(isAuthenticated, userInfo);

    return (
                <Switch>
                    <Route path="/login/check" exact component={LoginCheck} />
                    <Route path="/" exact>
                        <LoginCheck/>
                    </Route>
                    <Route path="/book" exact>
                        <BookList/>
                    </Route>
                    <Route path="/book/:id" exact>
                        <BookDetails/>
                    </Route>
                    <Route path="/orders" exact>
                        <Orders/>
                    </Route>
                    <Route path="/overview" exact>
                        <Overview/>
                    </Route>
                    <Route path="/schedule" exact>
                        <Schedule/>
                    </Route>
                    <Route path="/signin">
                        <SignIn/>
                    </Route>
                    <Route path={"*"}>
                        <Redirect to={"/not-found"}/>
                    </Route>
                </Switch>
    );
};