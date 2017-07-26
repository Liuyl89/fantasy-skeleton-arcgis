import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
const Home = () => {
    return (
        <div className="jumbotron">
            <h1>欢迎使用</h1>
            <p>fantasy-skeleton-react 是一个开发骨架，集成了webpack、bootstrap和React，祝你好运~</p>
            <p><a className="btn btn-primary btn-lg" target="_blank"
                href="https://github.com/Liuyl89/fantasy-skeleton-react" role="button">前往Github</a></p>
        </div>
    )
}
const Sub = () => {
    return (
        <div className="jumbotron">
            <h1>骨架集成了React Router</h1>
            <p>这是Router的一个简单的示例，使用的是react-router 4.1.2版本，查看文档及教程时请注意其版本间的巨大差异~</p>
            <p><a className="btn btn-primary btn-lg" target="_blank"
                href="https://github.com/Liuyl89/fantasy-skeleton-react" role="button">前往Github</a></p>
        </div>
    )
}

const ListItemLink = ({label, to, activeOnlyWhenExact}) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({match}) => (
        <li role="presentation" className={match ? 'active' : ''}>
            <Link to={to}>{label}</Link>
        </li>
    )}/>
)

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/fantasy-skeleton-react">
                <div>
                    <ul className="nav nav-tabs">
                        <ListItemLink to="/" label="Home" activeOnlyWhenExact="true"/>
                        <ListItemLink to="/sub" label="Sub" activeOnlyWhenExact="true"/>
                    </ul>
                    <Route path='/' exact component={Home}/>
                    <Route path='/sub' component={Sub}/>
                </div>
            </BrowserRouter>
        )

    }
}