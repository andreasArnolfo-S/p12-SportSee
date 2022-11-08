import { FC } from 'react';
import styles from './charts.module.css';
import QuotidienActivity from './../quotidienActivity/quotidienActivity';
import DurationChart from './../durationChart/durationChart';
import IntensityChart from '../intensityChart/intensityChart';

interface ChartsProps {
  activity: [];
  performances: [];
  duration: [];
  kind: [];
}

const Charts: FC<ChartsProps> = (props) => (
  <div className={styles.Charts}>
    <QuotidienActivity activity={props.activity}/>
    <DurationChart duration={props.duration}/>
    <IntensityChart performances={props.performances} kind={props.kind}/>
  
  </div>
);

export default Charts;
