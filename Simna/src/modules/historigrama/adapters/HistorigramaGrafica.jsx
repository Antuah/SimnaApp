import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, G, Line, Text as TextSVG, Path } from 'react-native-svg';

const data = [10, 20, 30, 40, 50]; // Replace this with your actual data

const chartConfig = {
  yAxisWidth: 50,
  xAxisHeight: 30,
  barWidth: 20,
  barGap: 10,
  chartHeight: 250,
};

const HistorigramaGrafica = () => {
  const {
    yAxisLabel,
    xAxisLabel,
    yAxisWidth,
    xAxisHeight,
    barWidth,
    barGap,
    chartHeight,
  } = chartConfig;

  const max = Math.max(...data);

  const getY = (value) => chartHeight - (value / max) * chartHeight;

  return (
    <View style={styles.container}>
      <Svg width="400" height={chartHeight + xAxisHeight + 50}>
        <G x={yAxisWidth}>
          {/* Y-axis */}
          <Line
            x1={0}
            y1={chartHeight}
            x2={0}
            y2={0}
            stroke="#ccc"
            strokeWidth={1}
          />
          <Text x={-yAxisWidth / 2} y={chartHeight / 2} dominantBaseline="middle" textAnchor="middle">
            {yAxisLabel}
          </Text>
          {/* Bars */}
          {data.map((value, index) => (
            <Path
              key={index}
              d={`M ${index * (barWidth + barGap)} ${chartHeight} L ${
                index * (barWidth + barGap)
              } ${getY(value)} L ${(index + 1) * barWidth + index * barGap} ${
                getY(value)
              } L ${(index + 1) * barWidth + index * barGap} ${chartHeight} Z`}
              fill="#66cccc"
            />
          ))}
        </G>
        {/* X-axis */}
        <Line
          x1={yAxisWidth}
          y1={chartHeight}
          x2={400 - yAxisWidth}
          y2={chartHeight}
          stroke="#ccc"
          strokeWidth={1}
        />
        <Text
          x={200 - yAxisWidth / 2}
          y={chartHeight + xAxisHeight - 5}
          dominantBaseline="middle"
          textAnchor="middle"
        >
          {xAxisLabel}
        </Text>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HistorigramaGrafica;
