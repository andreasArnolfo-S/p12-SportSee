import styles from './performanceChart.module.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Performances } from '../../models/models';



/**
 * It returns a RadarChart component from the Recharts library, which is a ResponsiveContainer
 * component that contains a RadarChart component that contains a PolarGrid component, a PolarAngleAxis
 * component, and a Radar component
 * @returns {JSX.Element} A radar chart.
 */
const PerformanceChart = () => {

  const data = Performances();

  return (
    <ResponsiveContainer width="100%" height="100%" className={styles.chartContainer}>
      <RadarChart
        cx="50%"
        cy="50%"
        data={data}
        outerRadius="60%"
      >
        <PolarGrid stroke="white" />
        <PolarAngleAxis
          stroke="white"
          dataKey="kindFrench"
          tick={{ fontSize: '15px', fill: 'white', fontWeight: 'bold' }}
          tickLine={false}
        />
        <Radar
          name="Performance"
          dataKey="value"
          stroke="#e60000"
          fill="#e60000"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default PerformanceChart;
