import { useParams } from 'react-router-dom';
import { useGetUserInfos } from './../api/api';
import { useState } from 'react';

/**
 * It's a function that returns a promise that returns an object that returns a number.
 * @returns The data is being returned as an object.
 */
const Score = () => {
     /* It's getting the id from the url. */
     const userId = useParams().id;
     /* It's getting the data from the api. */
     const data = useGetUserInfos(`http://localhost:3000/user/${userId}`);
     /* It's setting the state of the infos. */
     const [infos, setInfos] = useState<any>({});

     /* It's getting the data from the api and setting the state of the infos. */
     data.then((data) => {
          setInfos(data.data?.todayScore ? data.data?.todayScore : data.data?.score);
     });

     return infos;

}

export default Score;