import React from 'react';
import queryString from 'query-string';
import LayoutContainer from './Container/Layout/LayoutContainer';
import Countries from './data/countries';
import Shapefile from './data/geo_country';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';


class App extends React.Component {

	state = {
		country: Countries,
		shape: Shapefile,
	}

	render() {
		const { 
			country, shape
		} = this.state;

		const routes = [
			{ ID:1, component: LayoutContainer, path: "/", exact: true}
		];

		let keyFigureList = [
            { "ID": 1, "label": "Upop", "type": "Urban population", "type_FR": "Population urbaine", "description": "Total number of people living in urban agglomerations", "description_FR": "Nombre total de personnes vivant dans les agglomérations urbaines" },
            { "ID": 2, "label": "Urbanlevel", "type": "Level of urbanisation", "type_FR": "Niveau d'urbanisation", "description": "Share of the urban population in total population", "description_FR": "Part de la population métropolitaine dans la population totale" },
            { "ID": 3, "label": "NumAgllos", "type": "Number of agglomerations", "type_FR": "Nombre d'agglomérations", "description": "Total number of urban agglomerations in country", "description_FR": "Nombre total d'agglomérations dans le pays" },
            { "ID": 4, "label": "Mpop", "type": "Metropolitan population", "type_FR": "Population métropolitaine", "description": "Share of metropolitan population in total urban population", "description_FR": "Part de la population métropolitaine dans la population totale" },
            { "ID": 5, "label": "ADBA", "type": "Average distance between agglomerations", "type_FR": "Distance moyenne entre les agglomérations", "description": "Average distance between urban agglomerations, calculated as average of distance between all pairs of cities", "description_FR": "Distance moyenne entre les agglomérations urbaines, calculée comme moyenne de la distance entre toutes les paires de villes" }
        ];

		return (
			<BrowserRouter basename='/pac-digitalstories'>
				{routes.map( ({ID, component: C, path, exact}) => (
					<Route 
						key={ID}
						path={path}
						exact={exact}
						render={( {location, history}) =>
							<C 
								query={getParams(location)} 
								history={history} 
								data={country} 
								shape={shape} 
								keyFigureList={keyFigureList} 
								/> 
							} 
					/>
				) )}
			</BrowserRouter>
		)
	}
}

function getParams(location) {
	const queries = queryString.parse(location.search);
	return queries;
}

export default App;
