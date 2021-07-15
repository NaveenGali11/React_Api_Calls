import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HighCharts = () => {
  const options = {
    series: [
      {
        name: 'Profit',
        data: [100, 200, 30, 100, 30, 50, 100],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HighCharts;
