import axios from "axios";
import { useState, useEffect } from "react";

const useGetPerformances = (url: string) => {
     const [data, setData] = useState<any>({});

     useEffect(() => {
          axios.get(url).then((response) => {
               setData(response.data.data.data);
          })
     }, [url]);

     return data;
};

export default useGetPerformances;