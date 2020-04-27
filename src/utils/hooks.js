// hooks/UseDataApi.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const useDataApi = url => {
  // This is just for demo purposes, you probably want to separate the data from loading state and potentially add other states such as failures, etc..
  const [dataState, setDataState] = useState({ data: [], isFetching: false }); 
  const [endpointUrl] = useState(url);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        setDataState({ ...dataState, isFetching: true });
        const response = await axios.get(endpointUrl);
        setDataState({
          ...dataState,
          data: response.data,
          isFetching: false
        });
      } catch (e) {
        console.log('error', e);
        setDataState({ ...dataState, isFetching: false });
      }
    };
    fetchDataFromApi();
  }, []); // Runs once

  return [dataState];
};
const useCombinedRefs = (...refs) => {
  const targetRef = useRef();

  useEffect(() => {
    refs.forEach(ref => {
      if (!ref) {
        return;
      }

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
};

export {useDataApi,useCombinedRefs};