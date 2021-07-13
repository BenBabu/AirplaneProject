import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import APButton from "../components/APButton";
import APTextInput from "../components/APTextInput";
import colors from "../constants/colors";
import { assignSeats } from "../utils";

import { RootStackParamList } from "../types";

export default function AllocationScreen({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, "Allocation">) {
  const seatArray = JSON.parse(route.params.seatArray);
  const noOfPassengers = parseInt(route.params.noOfPassengers);
  const [seats, setSeats] = React.useState<Array<any>>();

  React.useEffect(() => {
    mapPassengers();
  }, []);

  const mapPassengers = () => {
    let seats = assignSeats(seatArray, noOfPassengers);
    setSeats(seats);
  };

  return (
    <View style={styles.container}>
      <Pressable style={{ margin: 8 }} onPress={() => navigation.goBack()}>
        <Text style={styles.backBtnTxt}>Back</Text>
      </Pressable>
      <View style={styles.cabin}>
        <Text style={styles.cabinTxt}>Cabin this way</Text>
      </View>
      <ScrollView
        horizontal={true}
        style={{ flexDirection: "row", width: "100%" }}
      >
        {seats?.map((seatSection: Array<any>, sectionindex: number) => (
          <View key={sectionindex} style={styles.seatSection}>
            {seatSection.map((seatRow: Array<any>, rowIndex: number) => (
              <View key={rowIndex} style={{ flexDirection: "row" }}>
                {seatRow.map((seat: number, seatIndex: number) => (
                  <View key={seatIndex} style={styles.seatCntnr}>
                    <Text style={styles.seat}>{seat}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
  },
  backBtnTxt: {
    color: colors.Black,
    fontWeight: "bold",
    fontSize: 16,
  },
  cabin: {
    height: 100,
    backgroundColor: colors.Black2,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  cabinTxt: {
    color: "white",
  },
  seatSection: {
    padding: 24,
    margin: 8,
    backgroundColor: colors.Black3,
    borderRadius: 16,
    marginVertical: 24,
  },
  seatCntnr: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.Black2,
    borderRadius: 8,
    margin: 8,
  },
  seat: {
    color: "white",
  },
});
