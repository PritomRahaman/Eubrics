import { Sign } from 'crypto';
import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TodoList from "./Compnents/Todo/TodoList";
import Login from './Pages/LoginPage/Login';
import LogOutPage from './Pages/LoginPage/LogOut';
import Menu from './Pages/Menu/Menu';


const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/LogOut">
                    <LogOutPage />
                </Route>
                <Route path="/Login">
                    <Login />
                </Route>
                <Route path="/Todo">
                    <TodoList />
                </Route>
                <Route path="/">
                    <Menu />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Navigation;