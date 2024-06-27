import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {LineChart, BarChart, PieChart, StackedBarChart} from 'react-native-chart-kit';

const Chart = () => {

  return (
    
      <View>
        <StackedBarChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            legend: ['Rainy', 'Sunny', 'Cloudy'], // Legend for each stack
            data: [
              [20, 45, 28, 80, 99, 43], // Data for the first stack
              [35, 60, 45, 85, 79, 64], // Data for the second stack
              [10, 30, 20, 40, 50, 30], // Data for the third stack
            ],
          }}
          width={Dimensions.get('window').width - 16}
          height={220}
          yAxisLabel="$"
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    
  );
}

export default Chart

const styles = StyleSheet.create({})