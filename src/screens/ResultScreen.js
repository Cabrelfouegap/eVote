import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import {PieChart} from "react-native-chart-kit";



const screenWidth = Dimensions.get("window").width;
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
const ResultScreen = () => {
  return (
    <View style= {styles.container}>
      <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor={"Voies"}
        backgroundColor={"transparent"}
        paddingLeft={"15"} 
        absolute
      />
    </View>
  );
}

const data = [
  {
    name: "Liste Verte",
    Voies: 212,
    color: "green",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Liste Rouge",
    Voies: 1000,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Liste Jaune",
    Voies: 276,
    color: "yellow",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Liste Bleu",
    Voies: 538,
    color: "blue",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
];

let styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
});

export default ResultScreen;