import React from 'react';
import FeatureHead from '../../API/FeatureHead.json';
import Feature from '../../API/Feature.json';
import FeaturesCard from '../FeaturesCard/FeaturesCard';

const FeaturesContent = () => {
    return (
        <>
            <section className="sec-features">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                            {FeatureHead.map((value) => (
                                <div className="head" key={value.id}>
                                    <h6>{value.subHead}</h6>
                                    <h3>{value.Head}</h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="row justify-content-evenly">
                        {Feature.map(value => <FeaturesCard key={value.id} data={value} />)}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturesContent