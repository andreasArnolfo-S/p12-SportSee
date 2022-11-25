import { useParams } from 'react-router-dom';
import { useApi } from './../api/api';
/**
 * @file Models
 */

/**
 * @function Performances
 * 
 * @returns {Array} A array with the user's performances.
 * @description It's a function that fetche the user's data from the API and return it but with a new format.
 * this function is used in the performanceChart component.
 * @example
 * // call the function for get the performances
 * Performances()
 * // example of the return
 * [
 *  kind:{
 *     1: 'Cardio',
 *     2: 'intensity',
 *     3: 'strength',
 *     4: 'endurance',
 *     5: 'speed',
 *     6: 'energy',
 *   },
 *  kindFrench:{
 *    1: 'Cardio',
 *    2: 'Intensité',
 *    3: 'Force',
 *    4: 'Endurance',
 *    5: 'Vitesse',
 *    6: 'Energie',
 * },
 * data: [
 *    0: {
 *      kind: 1,
 *      value: 200,
 *   },...
 *  ]
 * ]
 * 
 */
export const Performances = () => {
     /* It's getting the id from the url. */
     const userId = useParams().id;
     /* It's getting the data from the api. */
     const data = useApi(`http://localhost:3000/user/${userId}/performance`);
     const performance = data.data?.data;
     const subject = data.data?.kind

     /**
      * @function translate it's a function that translate english words to french, takes in a string and returns a string.
      * @param {string} item - string - the item to translate
      * @returns {string} The function translate is being returned.
      */
     const translate: any = (item: string) => {
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


     /**
      * it's a constant that takes in the performances and returns a new array with the performances
      *
      * @returns {array} Performances is returned with new data.
      */
     const newData = Array.isArray(performance) ? performance.map((performance: any, index: number) => {

          return { ...performance, kindFrench: translate(subject[index + 1]) };

     }) : [];


     return newData
}


/**
 * @function Activity
 * @returns {array} a new array.
 * @description It's a function that fetche data (activity) from an API and return the data in a new format.
 * this function is used in the activityChart component.
 * @example
 * // call the function for get the activities
 * Activity()
 * // example of the return
 * [
 *  0 :{
 *      day: "2021-05-01"
 *      kilogram: 60
 *      calories: 1000
 *      formateday: "1"
 *   },...
 * ]
 * 
 */
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


/**
 * @function Duration
 * @returns {array} An array of objects.
 * @description It's function that Transform the data from an AverageSessions model to a good format.
 * this function is used in the durationChart component.
 * @example
 * // call the function for get the duration
 * Duration()
 * // example of the return
 * [
 * day: {'L', 'M', 'M', 'J', 'V', 'S', 'D'}
 * sessionLength: {30, 20, 30, 40, 50, 60, 70}
 * ]
 */
export const Duration = () => {
     const userId = useParams().id;
     const data = useApi(`http://localhost:3000/user/${userId}/average-sessions`);

     const sessions = data.data?.sessions;

     /**
      * it's a function translate a number on abreviate day - it take a number and return a string.
      * @function translate 
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

     let newData = sessions?.map((session: any) => {
          return {
               day: translate(session.day),
               sessionLength: session.sessionLength,
          };
     });

     return newData;

};


/**
 * @function KeyData
 * @returns {array} The key is being returned.
 * @description It's a function that fetche data (keyData) from an API and return the data in a new format.
 * this function is used in the dashboard.
 * @example
 * // call the function for get the keyData
 * KeyData()
 * // example of the return
 * [1,2,3,4,5,6,7]
 */
export const KeyData = () => {
     const userId = useParams().id;
     const data = useApi(`http://localhost:3000/user/${userId}`);
     const key = data.data?.keyData;
     return key;
};


/**
 * @function Score
 * @returns {number} The score of user.
 * @description It's a function that fetche data (score) from an API and return the data in a new format.
 * this function is used in the scoreChart component.
 * @example
 * // call the function for get the score
 * Score()
 * // example of the return
 * 0.75
 */
export const Score = () => {
     /* It's getting the id from the url. */
     const userId = useParams().id;
     /* It's getting the data from the api. */
     const data = useApi(`http://localhost:3000/user/${userId}`);
     const score = data.data?.score ? data.data?.score : data.data?.todayScore;
     return score;
}


/** 
 * @function User
 * @returns {Array} The data user.
 * @description It's a function that fetche data (user) from an API and return the data in a new format.
 * this function is used in the hello component.
 * @example
 * // call the function for get the user
 * User()
 * // example of the return
 * [
 *  {
 *   firstname: 'John',
 *   lastname: 'Doe',
 *   age: 25,
 *  }
 * ]
 * 
 */
export const User = () => {
     const userId = useParams().id;
     const data = useApi(`http://localhost:3000/user/${userId}`);
     const infos = data.data?.userInfos;
     return infos;
}