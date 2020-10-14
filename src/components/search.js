import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'



const Search = (props)=> {
    
    //search per letter
    const handleSearchChange = (e) => {
           props.searched(e.target.value);
    }
    //search per searchings
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log(props.searched.searched);
    }
    
    return (
        <form className="row mt-5" onSubmit={handleSearchSubmit} >
            <div className="col-md-8 form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Search any image. Example: banana, city, stone" onChange={handleSearchChange} />
            </div>
            <div className="col-md-4 form-group">
                <button type="submit" className="form-control btn btn-primary btn-block btn-lg" >Search <FontAwesomeIcon icon={faSearch} /></button>
            </div>            
        </form>
    )
}

export default Search;