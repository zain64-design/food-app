import {React,useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateData,updateError,updateLoader } from '../Redux/actions/productList';

const useFetch = () => {

    const dispatch = useDispatch()

    const baseURL = 'https://zain64-design.github.io/product.json';

    function fetch() {
        dispatch(updateLoader(true));
        dispatch(updateError(''));
        dispatch(updateData([]));
        
        setTimeout(()=> {
            axios.get(baseURL).then((response) => {
                console.log(response.data);
                dispatch(updateData(response.data));
              })
              .catch((e)=> {
                console.error(e);
                dispatch(updateError('Failed to fetch data'));
              })
              .finally(()=> {
                dispatch(updateLoader(false));
              });
        },5000)
    }

  return {fetch}
}

export default useFetch