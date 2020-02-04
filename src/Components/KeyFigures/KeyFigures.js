import React from 'react';
import classes from './KeyFigures.module.css';
import Select from 'react-select';

export default props => {
    
    const { data, query, onKeyFigureChange } = props;
    let lang = 'type';
    if ( props.language === 'fr') lang = 'type_FR';
    
    let checkValue = data.filter(d => d.type === query.keyfigure)
    let options = data.map(d => ({
        value: d.ID, label: d[lang]
    }))
    let style = props.type === 'small' ? styles__sm : styles;

    return (
        <div className={classes.KeyFiguresWrapper}>
            <Select 
                options={options}
                styles={style}
                className={classes.KeyFigures}
                isRtl={false}
                isSearchable={false}
                value={options[checkValue[0].ID - 1]}
                onChange={onKeyFigureChange}
                components={
                    props.type ==='small' ? null : 
                    {
                        // DropdownIndicator: null,
                        IndicatorSeparator: null,
                    }
                }
            />
        </div>
        // <form className={classes.KeyFigures}>
        //     {data.map(d => (
        //         <React.Fragment key={d.ID}>
        //             <input 
        //                 key={d.ID}
        //                 type="radio" 
        //                 value={d.ID} 
        //                 checked={checkValue[0].ID === d.ID} 
        //                 onChange={onKeyFigureChange}
        //             />
        //             <label>
        //                 {d[lang]}   
        //             </label> 
        //         </React.Fragment>
        //     ))}
        // </form> 
    );
};

const styles__sm = {
  indicatorSeparator: (base, state) => {

  },
  menu: (base, state) => {
      return {
          ...base,
          backgroundColor: "white",
          borderRadius: 0,
          boxShadow: 0,
      }
  },
  option: (base, { isDisabled, isFocused, isSelected }) => {
    return {
      ...base,
      backgroundColor: isDisabled ? "#a70000" : isSelected ? "#a70000" : null,
      ':active': {
      },
    }
  },
  menuList: (base, state) => {
      return {
          ...base,
      }
  },
  control: (base, state) => {
    return { ...base,
      isHidden: true, 
      boxShadow: 'none',
      backgroundColor: 'none',
      borderStyle: 'solid', 
      borderBottom: '2px solid black',
      borderRadius: '0px',
      borderWidth: '0px',
      color: 'none', 
      "&:hover": { 
      }
    };
  },
  singleValue: (base, state) => {
    return {
      ...base,
      // color: '#212529',
      // textAlign: "right",
    }
  },
  input: (base, state) => {
    return {
      ...base,
      // color: '#212529'
    }
  }
};

const styles = {
    // indicatorSeparator: (base, state) => {

    // },
    menu: (base, state) => {
        return {
            ...base,
            backgroundColor: "white",
            borderRadius: 0,
            boxShadow: 0,
        }
    },
    option: (base, { isDisabled, isFocused, isSelected }) => {
      return {
        ...base,
        backgroundColor: isDisabled ? "#a70000" : isSelected ? "#a70000" : null,
        ':active': {
        },
      }
    },
    menuList: (base, state) => {
        return {
            ...base,
        }
    },
    control: (base, state) => {
      return { ...base,
        isHidden: true, 
        boxShadow: 'none',
        backgroundColor: 'none',
        borderStyle: 'solid', 
        borderColor: '#449999',
        borderWidth: '0px',
        color: 'none', 
        "&:hover": { 
        }
      };
    },
    singleValue: (base, state) => {
      return {
        ...base,
        color: '#212529',
        textAlign: "right",
      }
    },
    input: (base, state) => {
      return {
        ...base,
        color: '#212529'
      }
    }
};