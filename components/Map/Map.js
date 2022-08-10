import { Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Map = ({ airports, location, liveFlights }) => {
  const windowWidth = Dimensions.get("window").width;
  return (
    <MapView
      initialRegion={{
        latitude: location?.latitude,
        longitude: location?.longitude,
        latitudeDelta: 0.3,
        longitudeDelta: 0.3,
      }}
      style={{ flex: 1, width: windowWidth }}
    >
      {airports?.map(({ lat, lng, name, country_code }, index) => (
        <Marker
          coordinate={{
            latitude: lat,
            longitude: lng,
          }}
          key={index}
          title={name}
          description={country_code}
        >
          <TouchableOpacity>
            <MaterialCommunityIcons name="airport" size={40} color="#017cbf" />
          </TouchableOpacity>
        </Marker>
      ))}
      {liveFlights?.map(
        ({ lat, lng, flag, flight_icao, dep_iata, arr_iata }, index) => (
          <Marker
            coordinate={{
              latitude: lat,
              longitude: lng,
            }}
            title={`${dep_iata} - ${arr_iata}`}
            key={index}
            description={flight_icao}
          >
            <TouchableOpacity>
              <MaterialIcons name="flight" size={24} color="black" />
            </TouchableOpacity>
          </Marker>
        )
      )}
    </MapView>
  );
};

export default Map;
