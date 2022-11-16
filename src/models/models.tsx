import { useParams } from 'react-router-dom';
import { useApi } from './../api/api';

export const Performances = () => {
     const userId = useParams().id;
     const data = useApi(`http://localhost:3000/user/${userId}/performance`);
     
     const performance = data.data?.data;
     const subject = data.data?.kind

     const translate: any = (item: any) => {
          switch (item) {
               case 'cardio':
                    return 'Cardio';
               case 'strength':
                    return 'Force';
               case 'endurance':
                    return 'Endurance';
               case 'intensity':
                    return 'Intensité';
               case 'speed':
                    return 'Vitesse';
               case 'energy':
                    return 'Energie';
               default:
                    return 'default';
          }
     };


     /* A ternary operator. It is a shorthand way of writing an if/else statement. */
     const newData = Array.isArray(performance) ? performance.map((performance: any, index: number) => {

          return { ...performance, kindFrench: translate(subject[index + 1]) };

     }) : [];


     return newData
}

export const Activity = () => {
     const userId = useParams().id;
     const data = useApi(`http://localhost:3000/user/${userId}/activity`);

     const sessions = data.data?.sessions;


     /* Mapping the data from the api to a new object. */
     let newData = sessions?.map((session: any) => {
          return { ...session, formateday: (new Date(session.day)).getDate() };
     });

     return newData;

};

export const Duration =  () => {
     const userId = useParams().id;
     const data =  useApi(`http://localhost:3000/user/${userId}/average-sessions`);

     const sessions = data.data?.sessions;

     /**
      * It takes a number and returns a string.
      * @param {number} item - number - the number to be translated
      * @returns The function translate is being returned.
      */
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

     /* Mapping the data from the API to a new array. */
     let newData = sessions?.map((session: any) => {
          return {
               day: translate(session.day),
               sessionLength: session.sessionLength,
          };
     });

     return newData;

};

export const KeyData = () => {
     const userId = useParams().id;
     const data = useApi(`http://localhost:3000/user/${userId}`);

     const key = data.data?.keyData;


     return key;
};

export const Score = () => {
     /* It's getting the id from the url. */
     const userId = useParams().id;
     /* It's getting the data from the api. */
     const data = useApi(`http://localhost:3000/user/${userId}`);

     const score = data.data?.score ? data.data?.score : data.data?.todayScore;

     return score;

}

export const User = () => {
     const userId = useParams().id;
     const data = useApi(`http://localhost:3000/user/${userId}`);


     const infos = data.data?.userInfos;

     return infos;

}