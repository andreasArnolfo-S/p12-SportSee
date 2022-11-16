import axios from "axios";
import { useState, useEffect } from "react";


/**
 * It's a function that returns a promise that resolves to an object.
 * @param {string} url - string - The url to fetch the data from
 * @returns The data object.
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
