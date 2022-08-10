import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import Map from "./components/Map/Map";
import airportData from "./data/airports.json";
import liveFlightData from "./data/live_flight.json";

export default function App() {
  const [airports] = useState(airportData);
  const [liveFlights] = useState(liveFlightData);
  const [location] = useState({
    latitude: 28.7041,
    longitude: 77.1025,
  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Map airports={airports} liveFlights={liveFlights} location={location} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
