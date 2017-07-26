import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Map from 'esri/Map'
import MapView from 'esri/views/MapView'

class MapComponent extends React.Component {
    componentDidMount() {
        this.map = new Map({
            basemap: 'streets'
        })

        this.view = new MapView({
            container: this.dom,
            map: this.map
        })
    }

    render() {
        return (
            <div className="jumbotron">
                <p>这是一个地图示例</p>
                <div style={{width: '100%', height: '400px'}} ref={(dom) => {
                    this.dom = dom
                }}/>
            </div>
        )
    }
}
const Home = () => {
    return (
        <div className="jumbotron">
            <h1>欢迎使用</h1>
            <p>fantasy-skeleton-arcgis 是一个开发骨架，集成了Arcgis JavaScript API、webpack、bootstrap和React，祝你好运~</p>
            <p><a className="btn btn-primary btn-lg" target="_blank"
                href="https://github.com/Liuyl89/fantasy-skeleton-arcgis" role="button">前往Github</a></p>
        </div>
    )
}

const ListItemLink = ({label, to, activeOnlyWhenExact}) => (
    <Route path={to} exact={activeOnlyWhenExact=='true'?true:false} children={({match}) => (
        <li role="presentation" className={match ? 'active' : ''}>
            <Link to={to}>{label}</Link>
        </li>
    )}/>
)

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/fantasy-skeleton-arcgis">
                <div>
                    <ul className="nav nav-tabs">
                        <ListItemLink to="/" label="Home" activeOnlyWhenExact="true"/>
                        <ListItemLink to="/map" label="Map" activeOnlyWhenExact="true"/>
                    </ul>
                    <Route path='/' exact component={Home}/>
                    <Route path='/map' component={MapComponent}/>
                </div>
            </BrowserRouter>
        )

    }
}