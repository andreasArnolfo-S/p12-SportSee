import axios from "axios";
import { useState, useEffect } from "react";


/**
 * It's a custom hook that fetches data from an API and returns the data.
 * @param {string} url - The URL to fetch data from.
 * @returns {array} data - The data object.
 */
export const useApi = (url: string) => {
     const [data, setData] = useState<any>({});

     useEffect(() => {
          axios.get(url).then((response) => {
               setData(response.data);
          })
     }, [url]);


     return data;
}
