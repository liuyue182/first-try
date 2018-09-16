import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link ,
    Switch,
    Redirect,
    Prompt
} from 'react-router-dom';
import PageA from './PageA';
import PageB from './PageB';
import Home from './Home';
import Children from './Children';

const Jump=(props)=>{
    return <Link to={props.to}>jump</Link>
}
const  X=(props)=>{
    return (
        <div>
            <button onClick={()=>{
                props.history.push('/');
            }}>click</button>
        </div>
    )
}
class Main extends Component {

    render() {
        return (
            <div>
                main
                <Router>
                    <div>
                        <Link to="/">首页</Link>
                        ----
                        <Link to="/a/5">跳转A</Link>
                        ----
                        <Link to="/b">跳转B</Link>
                        ----
                        <Link to="/render">render</Link>
                        ----
                        <Link to="/children/6">children</Link>
                        ----
                        <Link to="/x">编程式导航</Link>
                        {/*<switch>*/}
                            {/*<Route path="/" component={Home}></Route>*/}
                            {/*<Route path="/a" component={PageA}></Route>*/}
                            {/*<Route path="/b" component={PageB}></Route>*/}
                        {/*</switch>*/}
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/a/:id" component={PageA}></Route>
                        <Route path="/b" component={PageB}></Route>
                        <Route path="/render" render={()=>{
                            // return <h1>render</h1>
                            return <Redirect to="/b"></Redirect>
                        }}></Route>
                        <Route path="/children/:num" children={Children}></Route>
                        <Jump to="/"></Jump>
                        <Route path="/x" component={X}></Route>
                        {/*<Prompt when={} message={}></Prompt>*/}
                    </div>
                </Router>
            </div>
        );
    }
}

export default Main;
