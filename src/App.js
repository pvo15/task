import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';

import { Header } from 'components/sections';

import { fetchComments } from 'actions/Comments';

import {
    Main,
    Edit
} from 'containers';

import './App.scss';


@withRouter
@connect(null, {
    fetchComments,
})
export default class App extends PureComponent {
    componentWillMount(){
        this.props.fetchComments();
    }
    render() {
        return (
            <article>
                <Header />
                <Switch>
                    <Route
                      exact
                      path="/"
                      component={Main}
                    />
                    <Route
                        path="/edit/:id"
                        component={Edit}
                    />
                    <Route
                        path="/add"
                        component={Edit}
                    />
                    <Route component={Main} />
                </Switch>

            </article>
        );
    }
}
