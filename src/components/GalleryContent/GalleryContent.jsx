import React from 'react';
import GalleryAPI from '../../API/Gallery.json';
import Fancybox from "../../assets/js/Fancybox";

const GalleryContent = () => {
    return (
        <React.Fragment>
            <section className="sec-gallery">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <div className="head">
                                <h6>Our</h6>
                                <h3>Gallery</h3>
                            </div>
                        </div>
                    </div>
                    <Fancybox options={{ infinite: false, gallery: true, }}>
                        <div className="row g-1">
                            {GalleryAPI.slice(0, 6).map((value) => (
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4" key={value.id}>
                                    <div className="card img-card">
                                        <img alt="" src={value.image} className="img-fluid thumb" />
                                        <a data-fancybox="gallery" data-caption={value.name} className="fancy-anch" href={value.image}>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Fancybox>

                    {/* <div className="row g-1">
                        {GalleryAPI.slice(0, 6).map((value) => (
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4" key={value.id}>
                                <div className="card img-card">
                                    <img alt="" src={value.image} className="img-fluid thumb" />
                                    <a className="fancy-anch" href={value.image}>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div> */}
                </div>
            </section>
        </React.Fragment>
    )
}

export default GalleryContent