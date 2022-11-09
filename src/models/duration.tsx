
import { useParams } from 'react-router-dom';
import { UseGetDuration } from '../api/api';
import { ApiResponseAverageSessions } from '../api/types';

const Duration = () => {
     const userId = useParams().id;
     const data: ApiResponseAverageSessions = UseGetDuration(`http://localhost:3000/user/${userId}/average-sessions`);

     const sessions = data.data?.sessions;

     const translate: any = (item: number) => {
          switch (item) {
               case 1:
                    return 'L';
               case 2:
                    return 'M';
               case 3:
                    return 'M';
               case 4:
                    return 'J';
               case 5:
                    return 'V';
               case 6:
                    return 'S';
               case 7:
                    return 'D';
               default:
                    return 'default';
          }
     };



     let newData = sessions?.map((session) => {
          return {
               day: translate(session.day),
               sessionLength: session.sessionLength,
          };
     });
     
     return newData;
     
};

export default Duration;