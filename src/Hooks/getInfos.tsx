import axios from "axios";
import { useState, useEffect } from "react";


const useGetInfos = (url: string) => {
     const [data, setData] = useState<any>({});

     useEffect(() => {
          axios.get(url).then((response) => {
               setData(response.data.data.userInfos);
          })
     }, [url]);

     return data;
};

export default useGetInfos;