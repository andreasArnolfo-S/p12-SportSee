import { useParams } from 'react-router-dom';
import { useGetUserInfos } from './../api/api';
import { useState } from 'react';

const Score = () => {
     const userId = useParams().id;
     const data = useGetUserInfos(`http://localhost:3000/user/${userId}`);
     const [infos, setInfos] = useState<any>({});

     data.then((data) => {
          setInfos(data.data?.todayScore);
     });

     return infos;

}

export default Score;