import axios from "axios";
import { useState, useEffect } from "react";


export const useApi = (url: string) => {
     const [data, setData] = useState<any>({});

     useEffect(() => {
          axios.get(url).then((response) => {
               setData(response.data);
          })
     }, [url]);


     return data;
}
