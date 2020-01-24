import React from 'react';
import classes from './SearchBar.module.css';
import Select from 'react-select';
import { NONAME } from 'dns';

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
                value={options[query.country-1]}
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
            backgroundColor: "#fef7e7",
            borderRadius: 0,
            boxShadow: 0,
            // opacity: ".9"
        }
    },
    menuList: (base, state) => {
        return {
            ...base,
            maxHeight: 'none',
            height: '340px',
        }
    },
    dropdownIndicator: (base, state) => {
      return { ...base,
        
      };
    },
    control: (base, state) => {
      return { ...base, 
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