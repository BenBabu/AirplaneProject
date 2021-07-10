import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import APButton from "../components/APButton";
import APTextInput from "../components/APTextInput";

import { RootStackParamList } from "../types";

export default function HomeScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "Home">) {
  const [seatArray, setSeatArray] = React.useState<string>(
    "[[3,2], [4,3], [2,3], [3,4]]"
  );
  const [noOfPassengers, setPassengers] = React.useState<string>("30");

  const onPressProceed = (): void => {
    navigation.navigate("Allocation", {
      seatArray: seatArray,
      noOfPassengers: noOfPassengers,
    });
  };

  return (
    <View style={styles.container}>
      <APTextInput
        label="Enter the rows and columns as an array"
        placeholder="[[3,2], [4,3], [2,3], [3,4]]"
        onChangeText={(val: string) => setSeatArray(val)}
      ></APTextInput>
      <APTextInput
        style={styles.mt_24}
        label="Enter the number of passengers in queue"
        placeholder="30"
        onChangeText={(val: string) => setPassengers(val)}
      ></APTextInput>
      <APButton
        style={styles.proceedBtn}
        title="Proceed"
        onPress={onPressProceed}
      ></APButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  proceedBtn: {
    marginTop: 24,
  },
  mt_24: {
    marginTop: 24,
  },
});
