import {React,useState} from 'react';
import axios from 'axios';
// we can use this redux hook to add dispatch our created action to the store
import { useDispatch } from 'react-redux';
import { updateData,updateError,updateLoader } from '../Redux/actions/productList';

const useFetch = () => {

    const dispatch = useDispatch()

    const baseURL = 'https://zain64-design.github.io/product.json';

    // const options = {
    //   method: 'GET',
    //   url: 'https://imdb-top-100-movies.p.rapidapi.com/',
    //   headers: {
    //     'x-rapidapi-key': 'aa7075937amshd8e8e0b5ab2d8acp1d2495jsnbd274ff06019',
    //     'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
    //   }
    // };

    async function fetchData() {
      // now this hook will transfer our actions to the reducer fn
        dispatch(updateLoader(true));
        dispatch(updateError(''));
        dispatch(updateData([]));

        // setTimeout(async() => {
        //   try {
        //     const response = await axios.request(options);
        //     dispatch(updateData(response.data));
        // } catch (error) {
        //     dispatch(updateError('Failed to fetch data from Rapid API'));
        // } finally {
        //     dispatch(updateLoader(false));
        // }
        // }, 5000);
        
         setTimeout(()=> {
            axios.get(baseURL).then((response) => {
                dispatch(updateData(response.data));
              })
              .catch((e)=> {
                dispatch(updateError('Failed to fetch data'));
              })
              .finally(()=> {
                dispatch(updateLoader(false));
              });
        },5000)
    }
  return {fetchData};
}

export default useFetch