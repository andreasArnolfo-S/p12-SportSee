import { useParams } from 'react-router-dom';
import Charts from '../components/charts/charts';
import UseGetDureation from '../Hooks/getDuration';
import UseGetInfos from '../Hooks/getInfos';
import UseGetPerformancesKind from '../Hooks/getKind';
import UseGetPerformances from '../Hooks/getPerformances';
import Bonjour from './../components/bonjour/bonjour';
import Navbar from './../components/navbar/navbar';
import SideBar from './../components/sideBar/sideBar';
import UseGetActivities from './../Hooks/getActivity';

const dashboard = () => {
     
     /* Getting the id from the url and using it to get the data from the api. */
     // eslint-disable-next-line react-hooks/rules-of-hooks
     const userId = useParams().id;
     const data = UseGetInfos(`http://localhost:3000/user/${userId}`);

     const activities = UseGetActivities(`http://localhost:3000/user/${userId}/activity`);
     const performances = UseGetPerformances(`http://localhost:3000/user/${userId}/performance`);
     const performancesKind = UseGetPerformancesKind(`http://localhost:3000/user/${userId}/performance`);
     const duration = UseGetDureation(`http://localhost:3000/user/${userId}/average-sessions`);
          

     return (
          <>
               <Navbar />
               <div style={{display: 'flex'}}>
                    <SideBar />
                    <div>
                         <Bonjour firstname={data?.firstName} />
                         <Charts activity={activities} performances={performances} kind={performancesKind} duration={duration}/>
                    </div>
               </div>

          </>
     );
}; 

export default dashboard;