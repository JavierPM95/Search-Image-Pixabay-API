import React from 'react';
import { faChevronLeft, faChevronRight, faEye, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContainerSearch = (props) => {

    
    return(
    <div className="row point">
        {
            props.results.map(result => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={result.id}>
                    <div className="card">
                    <img className="card-img-top p-5 row" src={result.previewURL} alt={result.tags} />
                        <div className="card-body">
                            <h5 className="card-text">{result.likes} <FontAwesomeIcon icon={faThumbsUp} /></h5>
                            <p className="card-text">{result.views} <FontAwesomeIcon icon={faEye} /></p>
                            <a className="btn btn-primary btn-block" href={result.largeImageURL} target="_blank" rel="noopener noreferrer" >View image</a>
                        </div>
                    </div>
                </div>
            ))
        }
        <div className="col-md-12 d-flex justify-content-center">
            <button className="btn btn-info mx-1" onClick={() => props.handlePrevious()}><FontAwesomeIcon icon={faChevronLeft}/> Previous</button>
            <button className="btn btn-info mx-1" onClick={() => props.handleNext()}>Next <FontAwesomeIcon icon={faChevronRight}/></button>
        </div>
    </div>
    )
} 


export default ContainerSearch;