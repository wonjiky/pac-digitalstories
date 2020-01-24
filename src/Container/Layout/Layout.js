import React from 'react';
import classes from './Layout.module.css';
import Mixer from '../../Components/Mixer/Mixer';
import Visualisation from '../../Components/Visualisation/Visualisation';


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
            data,
            history,
            query,
            keyFigureList,
        } = this.props;

        //Set searchbar options
        let dataLanguage = 'Country'
        if ( history.location.pathname === '/fr') dataLanguage='Country_FR';
        let countryList = data.map(c => ({ value: c.ISO, label: c[dataLanguage] }))



        if ( data.length === 0 ||
            Object.entries(query).length ===0 ){
                return <div> Loading ...</div>
            } else {
                return (
                    <div className={classes.Layout}>
                        <Mixer 
                            countryList={countryList}
                            query={query}
                            onSearchChange={e => this.pushQueries({ country: e.value })}
                        />
                        <Visualisation 
                            query={query}
                            history={history}
                            onKeyFigureChange={e => this.pushQueries({ 
                                keyfigure: keyFigureList[e.target.value -1 ].type
                            })}
                            language={history.location.pathname}
                            data={data[query.country - 1]}
                            keyFigureList={keyFigureList}
                        />
                    </div>
                )
        }   
    }
}


export default Layout;