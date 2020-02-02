import React from 'react';
import queryString from 'query-string';
import LayoutContainer from './Container/Layout/LayoutContainer';
import Countries from './data/countries';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';
import './App.css';


class App extends React.Component {

	state = {
		country: Countries,
	}

	render() {
		const { 
			country,
		} = this.state;

		const routes = [
			{ ID:2, component: LayoutContainer, path: "/fr", exact: false},
			{ ID:1, component: LayoutContainer, path: "/", exact: true},
		];

		let keyFigureList = [
            { "ID": 1, "label": "Upop", "type": "Urban population", "type_FR": "Population urbaine" },
            { "ID": 2, "label": "Urbanlevel", "type": "Level of urbanisation", "type_FR": "Niveau d'urbanisation" },
            { "ID": 3, "label": "NumAgllos", "type": "Number of agglomerations", "type_FR": "Nombre d'agglomérations" },
            { "ID": 4, "label": "Mpop", "type": "Metropolitan population", "type_FfR": "Population métropolitaine" },
            { "ID": 5, "label": "ADBA", "type": "Average distance between agglomerations", "type_FR": "Distance moyenne entre les agglomérations" }
        ];

		return (
			<BrowserRouter>
				<Switch>
					{routes.map( ({ID, component: C, path, exact}) => (
						<Route 
							key={ID}
							path={path}
							exact={exact}
							render={( {location, history}) =>
								<C query={getParams(location)} history={history} data={country} keyFigureList={keyFigureList} /> } 
						/>
					) )}
				</Switch>
			</BrowserRouter>
		)
	}
}

function getParams(location) {
	const queries = queryString.parse(location.search);
	return queries;
}

export default App;
