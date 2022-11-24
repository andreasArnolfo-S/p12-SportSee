import styles from './scoreChart.module.css';
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts';
import { Score } from './../../models/models';


/**
 * The today's score chart - It returns a RadialBarChart component.
 * @function ScoreChart
 * @see https://recharts.org/en-US/examples/RadialBarChart
 * @returns {JSX.Element} A radial bar chart.
 * @example
 * // call the function
 * <ScoreChart />
 */
const ScoreChart = () => {
  const score = Score();

  const data = [
    {
      scorePercentage: score,  
      fill: '#FF0000',
    }
  ];

  return (
    <ResponsiveContainer width="100%" height="100%" className={styles.chartContainer}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="60%"
        outerRadius="70%"
        barSize={10}
        data={data}
        startAngle={90}
        endAngle={450}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 1]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar background dataKey="scorePercentage" cornerRadius={'50%'} />
        <text
          x="20"
          y="20"
          textAnchor="start"
          dominantBaseline="hanging"
          className={styles.label}
        >
          Score
        </text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className={styles.value}
        >
          {`${score * 100}`}%
        </text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className={styles.helpText}
        >
          de votre objectif
        </text>

      </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default ScoreChart;
