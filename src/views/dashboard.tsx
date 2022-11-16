import ActivityChart from '../components/activityChart/activityChart';
import Hello from '../components/hello/hello';
import Navbar from '../components/navbar/navbar';
import styles from './dashboard.module.css';
import DurationChart from './../components/durationChart/durationChart';
import Sidebar from './../components/sidebar/sidebar';
import PerformanceChart from '../components/performanceChart/performanceChart';
import { KeyData } from './../models/models';
import Card from './../components/card/card';
import { FaFire, FaDrumstickBite, FaApple, FaHamburger } from 'react-icons/fa';
import ScoreChart from './../components/scoreChart/scoreChart';



const dashboard = () => {

     const keyData = KeyData();


     return (
          <div className={styles.dashboard}>
               <Navbar />
               <div className={styles.main}>
                    <Sidebar />
                    <div className={styles.mainContainer}>
                         <Hello />

                         <section className={styles.chartSection}>
                              <div className={styles.div1}>
                                   <ActivityChart />
                              </div>
                              <div className={styles.div2}>
                                   <DurationChart />
                              </div>
                              <div className={styles.div3}>
                                   <PerformanceChart />
                              </div>
                              <div className={styles.div4}>
                                   <ScoreChart />
                              </div>
                              <div className={styles.div5}>
                              <Card value={keyData?.lipidCount} unit='g' title='Lipides' icon={<FaHamburger />} bgColor='#fa749a46' color='#FD5181' />
                              </div>
                              <div className={styles.div6}>
                              <Card value={keyData?.carbohydrateCount} unit='g' title='Glucides' icon={<FaApple />} bgColor='#fadc6454' color='#FDCC0C' />
                              </div>
                              <div className={styles.div7}>
                                   <Card value={keyData?.proteinCount} unit='g' title='Proteines' icon={<FaDrumstickBite />} bgColor='#7acaff44' color='#4AB8FF' />
                              </div>
                              <div className={styles.div8}>
                                   <Card value={keyData?.calorieCount} unit='kCal' title='Calories' icon={<FaFire />} bgColor='#ff5d5d49' color='#FF0000'/>
                              </div>
                         </section>
                    </div>
               </div>

          </div>
     );
};

export default dashboard;