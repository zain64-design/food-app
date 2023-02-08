import {React, useState, useEffect} from 'react';
import axios from 'axios';
import BestProduct from '../Products/BestProduct';

const BestSellers = (props) => {

    // NOTE Using promises
    // first state name, second ref
    const [burger, setBurger] = useState([]);

    // Axios method
    const baseURL = 'https://demo-customprojects.com/developer/weed-entertainment/api/check-videos2';

    // fetch method
    // const url = 'https://ecom-rest-apis.herokuapp.com/api/products';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'aa7075937amshd8e8e0b5ab2d8acp1d2495jsnbd274ff06019',
    //         'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
    //     }
    // };
    useEffect(() => {

        // AXIOS method
        axios.get(baseURL).then((response) => {
            console.log(response.data);
            setBurger(response.data)
        })

        // fetch method
            // fetch(url)
            //     .then(res => res.json())
            //     // .then(json => console.log(json))
            //     .catch(err => console.error('error:' + err))
            //     .then(burger => {
            //         setBurger(burger);
            //     });


        }, []);


        return (
            <React.Fragment>
                <section className="sec-best-sellers">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                                <div className="headings">
                                    <h6>{props.heading}</h6>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur assumenda quam sunt quaerat facilis beatae?</p>
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center justify-content-center">

                            {burger.map(value => <BestProduct key={value.id} data={value}/>)}

                            {/* {burger.map((value) => (
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4" key={value.id}>
                                    <div className="card burger-card">
                                        <div className="img">
                                            <img src={value.thumbnail} className="img-fluid thumb" alt="" />
                                        </div>

                                        <div className="desc">
                                            <a href="/" className="anchor">{value.title}</a>
                                            <span>{value.Name}</span>
                                            <p>{value.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))} */}

                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }

export default BestSellers