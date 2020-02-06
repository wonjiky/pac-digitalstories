import React from 'react';
import classes from './Layout.module.css';
import Mixer from '../../Components/Mixer/Mixer';
import Visualisation from '../../Components/Visualisation/Visualisation';
import _ from 'lodash';

class Layout extends React.Component {
    state = { }

    pushQueries = value => {

        let oldParameters, queryType;
        oldParameters = { ...this.props.query };
        queryType = Object.keys(value)[0];
        oldParameters[queryType] = value[queryType];
        const updatedParams = [];

        for (let i in oldParameters) {
            updatedParams.push(
                encodeURIComponent(i) + "=" + encodeURIComponent(oldParameters[i])
                );
            }

        this.props.history.push({
			pathname: this.props.history.location.pathname,
			search: "?" + updatedParams.join("&")
		});
	}
    
    render() {
        const { 
            data, shape,
            history,
            query,
            keyFigureList,
        } = this.props;

        //Set searchbar options
        let dataLanguage = 'Country'
        if ( query.lang === 'fr') dataLanguage='Country_FR';
        data.sort((a, b) => a.ISO - b.ISO);
        let countryList = _.chain(data)
            .map(c => ({ value: c.ISO, label: c[dataLanguage] }))
            .sort((a,b) => a.value - b.value)
            .chunk(50)
            .value()

        let options = [
            { label: query.lang === 'en' ? 'Regions' : 'Régions',
                 options: sortAlphabetically(countryList[1]) },
            { label: query.lang === 'en' ? 'Countries' : 'Pays',
                 options: sortAlphabetically(countryList[0]) }
        ];
         
        function sortAlphabetically(data) {
            return data.sort((a,b) => a.label.localeCompare(b.label));
        }

        if ( data.length === 0 ||
            Object.entries(query).length ===0 ){
                return <div> Loading ...</div>
            } else {
                return (
                    <div className={classes.Layout}>
                        <Mixer 
                            shape={shape}
                            countryList={options}
                            query={query}
                            onKeyFigureChange={e => this.pushQueries({ 
                                keyfigure: keyFigureList[e.value -1 ].type
                            })}
                            keyFigureList={keyFigureList}
                            language={query.lang}
                            onSearchChange={e => this.pushQueries({ country: e.value })}
                        />
                        <Visualisation 
                            query={query}
                            history={history}
                            onKeyFigureChange={e => this.pushQueries({ 
                                keyfigure: keyFigureList[e.value -1 ].type
                            })}
                            language={query.lang}
                            data={data[query.country - 1]}
                            keyFigureList={keyFigureList}
                        />
                    </div>
                )
        }   
    }
}


export default Layout;