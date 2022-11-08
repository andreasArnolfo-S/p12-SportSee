
import axios from "axios";
import { useState, useEffect } from "react";

const useGetPerformancesKind = (url: string) => {
     const [data, setData] = useState<any>({});

     useEffect(() => {
          axios.get(url).then((response) => {
               setData(response.data.data.kind);
          })
     }, [url]);

     return data;
};

export default useGetPerformancesKind;