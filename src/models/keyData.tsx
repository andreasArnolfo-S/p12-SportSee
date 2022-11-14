import { useGetUserInfos } from "../api/api";
import { useParams } from 'react-router-dom';
import { useState } from "react";

/**
 * It's a function that returns a promise that returns an object.
 * @returns The key object.
 */
const KeyData = () => {
     const userId = useParams().id;
     const data = useGetUserInfos(`http://localhost:3000/user/${userId}`);

     const [key, setkey] = useState<any>({});

     data.then((data) => {
          return setkey(data.data?.keyData);
     });


     return key;
};

export default KeyData;
     