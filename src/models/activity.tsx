// model data for activity api
import { useGetActivities } from "../api/api";
import { ApiResponseActivity } from "../api/types";
import { useParams } from 'react-router-dom';

const Activity = () => {
     const userId = useParams().id;
     const data: ApiResponseActivity = useGetActivities(`http://localhost:3000/user/${userId}/activity`);

     const sessions  = data.sessions;

     /* Mapping the data from the api to a new object. */
     let newData = sessions?.map((session) => {
          return {
               day: session.day,
               kilogram: session.kilogram,
               calories: session.calories
          }
     });

     return newData;

};

export default Activity;