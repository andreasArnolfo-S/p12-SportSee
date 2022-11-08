import React, { FC } from 'react';
import styles from './scordChart.module.css';

interface ScordChartProps {}

const ScordChart: FC<ScordChartProps> = () => (
  <div className={styles.ScordChart}>
    ScordChart Component
  </div>
);

export default ScordChart;
