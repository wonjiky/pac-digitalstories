import React from 'react';
import Layout from './Layout';

class LayoutContainer extends React.Component {

	componentDidMount() {
        if ( Object.entries(this.props.query).length === 0 ) {
            this.pushQueries({country: 1, keyfigure: "Urban population"})
        }
	}
	
	pushQueries = oldParameters => {
        let newParameters = oldParameters;
        const updatedParams = [];
        for (let i in newParameters) {
            updatedParams.push(
                encodeURIComponent(i) + "=" + encodeURIComponent(newParameters[i])
            );
        }
        const newQueries = updatedParams.join("&");

        return this.props.history.push({
            pathname: this.props.history.location.pathname,
            search: "?" + newQueries
        });
	}

    render() { return <Layout {...this.props} /> }
};

export default LayoutContainer;