import { FC } from 'react';
import styles from './quotidienActivity.module.css';
import {
  BarChart,
  CartesianGrid,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
interface QuotidienActivityProps {
  activity: [];
}


const QuotidienActivity: FC<QuotidienActivityProps> = (props) => {

  return (
    <ResponsiveContainer width="92%" height="50%" className={styles.chartContainer}>
      <BarChart
        width={500}
        height={200}
        barSize={20}
        data={props.activity}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
        <YAxis dataKey="kilogram" domain={[60, 100]}  tick={{dx: -15}} width={40}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="kilogram" fill="#282D30" background={{ fill: '#eee' }} radius={[10, 10, 0, 0]} />
        <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default QuotidienActivity;
