import React from 'react';
import { NavLink } from 'react-router-dom';

const GalleryDetailBtn = () => {
    return (
        <React.Fragment>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <NavLink to={'/Gallery'}> view more</NavLink>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GalleryDetailBtn