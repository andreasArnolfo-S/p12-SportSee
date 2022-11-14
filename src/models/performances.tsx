
import { useParams } from 'react-router-dom';
import { useGetPerformances, useGetPerformancesKind } from '../api/api';
import { ApiResponsePerformance } from '../api/types';


const Performances = () => {
     const userId = useParams().id;
     const data: ApiResponsePerformance = useGetPerformances(`http://localhost:3000/user/${userId}/performance`);
     const kind = useGetPerformancesKind(`http://localhost:3000/user/${userId}/performance`);


     /**
      * It takes a string as an argument and returns a string.
      * @param {any} item - the item to be translated
      * @returns The function translate is being returned.
      */
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
     const newData = Array.isArray(data) ? data.map((performance: any, index: number) => {

          /* Returning an object with two properties: value and kind. */
          return {
               value: performance.value,
               kind: translate(kind[index + 1])
          }
     }) : [];


     return newData
}

export default Performances;