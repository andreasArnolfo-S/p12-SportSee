import axios from "axios";
import { useState, useEffect } from "react";

const UseGetDureation = (url: string) => {
     const [data, setData] = useState<any>({});

     useEffect(() => {
          axios.get(url).then((response) => {
               setData(response.data.data.sessions);
          })
     }, [url]);

     return data;
}

export default UseGetDureation;