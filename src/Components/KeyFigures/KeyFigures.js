import React from 'react';
import classes from './KeyFigures.module.css';

export default props => {

    const { data, query, onKeyFigureChange } = props;
    let lang = 'type';
    if ( props.language === '/fr') lang = 'type_FR';
    
    let checkValue = data.filter(d => d.type === query.keyfigure)
    return (
        <form className={classes.KeyFigures}>
            {data.map(d => (
                <React.Fragment key={d.ID}>
                    <input 
                        key={d.ID}
                        type="radio" 
                        value={d.ID} 
                        checked={checkValue[0].ID === d.ID} 
                        onChange={onKeyFigureChange}
                    />
                    <label>
                        {d[lang]}   
                    </label> 
                </React.Fragment>
            ))}
        </form> 
    );
}
