import React from 'react';
import classes from './SearchBar.module.css';
import Select from 'react-select';

const searchBar = props => {

    const {
        options,
        query,
    } = props;
    let flattenedOption = [ ...options[0].options, ...options[1].options];
    let value = flattenedOption.filter(d => d.value === Number(query.country));

    return (
        <div className={classes.SearchBar__Sm}>
            <Select 
                styles={styles}
                onChange={props.onSearchChange}
                options={options}
                value={value}
            />
        </div>
    )
}

const styles = {
    indicatorSeparator: (base, state) => {

    },
    menu: (base, state) => {
        return {
            ...base,
            // backgroundColor: "#fef7e7",
            borderRadius: 0,
            boxShadow: 0,
            // opacity: ".9"
        }
    },
    option: (base, { isDisabled, isFocused, isSelected }) => {
      return {
        ...base,
        backgroundColor: isDisabled ? "#a70000" : isSelected ? "#a70000" : null,
        // color: isDisabled
        //   ? '#ccc'
        //   : isSelected
        //   ? chroma.contrast(color, 'white') > 2
        //     ? 'white'
        //     : 'black'
        //   : data.color,
        ':active': {
          // ...styles[':active'],
          // backgroundColor: isSelected ? "#a70000" : "#a70000",
          // opacity: isSelected ? ".4" : ".7",
          // color: isSelected ? "#fef7e7" : ".7",
        },
      }
    },
    menuList: (base, state) => {
        return {
            ...base,
        }
    },
    dropdownIndicator: (base, state) => {
      return { ...base,
        
      };
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
        fontWeight:'600',
        color: '#a70000',
      }
    },
    input: (base, state) => {
      return {
        ...base,
        fontWeight:'600',
        // color: '#212529'
      }
    }
};

export default searchBar