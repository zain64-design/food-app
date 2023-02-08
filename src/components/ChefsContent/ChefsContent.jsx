import React from 'react';
import ChefsCardData from '../../API/Chefs.json';
import ChefsHead from '../../API/ChefHead.json';
import ChefsCard from '../ChefsCard/ChefsCard';

const ChefsContent = () => {
  return (
    <>
      <section className="sec-chefs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {ChefsHead.map((value) => (
                <div className="head" key={value.id}>
                  <h6>{value.subHead}</h6>
                  <h3>{value.Head}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="row justify-content-evenly">
            {ChefsCardData.map(value => <ChefsCard key={value.id} data={value} />)}
          </div>
        </div>
      </section>
    </>
  )
}

export default ChefsContent