import React from 'react';
import classes from './SearchBar.module.css';
import Select from 'react-select';

const searchBar = props => {

    const {
        options,
        query,
    } = props;

    return (
        <div className={classes.SearchBar}>
            <Select 
                styles={styles}
                onChange={props.onSearchChange}
                menuIsOpen={true}
                options={options}
                // isSearchable={false}
                value={options[query.country-1]}
                components={{
                  Control: () => null
                }}
            />
        </div>
    )
}

const styles = {
    // indicatorSeparator: (base, state) => {

    // },
    menu: (base, state) => {
        return {
            ...base,
            backgroundColor: "#fef7e7",
            borderRadius: 0,
            boxShadow: 0,
            height: '572px',
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
            maxHeight: 'none',
            height: '100%',
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
        fontSize:'2rem',
        fontWeight:'600',
        color: '#212529',
      }
    },
    input: (base, state) => {
      return {
        ...base,
        fontSize:'2rem',
        fontWeight:'900',
        color: '#212529'
      }
    }
};

export default searchBar