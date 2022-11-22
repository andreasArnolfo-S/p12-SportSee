import axios from "axios";
import { useState, useEffect } from "react";


/**
 * It's a function that returns a promise that resolves to an object.
 * @param {string} url - string - The url to fetch the data from
 * @returns The data object.
 */
export const useApi = (url: string) => {
     /* It's a hook that allows you to add React state to function components. */
     const [data, setData] = useState<any>({});

     /* It's a hook that runs after the component is rendered. */
     useEffect(() => {
          axios.get(url).then((response) => {
               setData(response.data);
          })
     }, [url]);


     return data;
}
