import colors from "../../constants/colors";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Pressable,
  StyleProp,
} from "react-native";
import { TextInputProps } from "../../types";

export default function APTextInput({
  placeholder,
  value,
  error,
  label,
  onChangeText,
  onSubmitEditing,
  style,
}: TextInputProps) {
  return (
    <View style={[style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error ? styles.errorInput : null]}
        value={value}
        onChangeText={(text) => onChangeText(text)}
        placeholder={placeholder}
        onSubmitEditing={onSubmitEditing}
        placeholderTextColor={colors.Black3}
      />
      {error ? <Text style={styles.errorTxt}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 16,
    fontSize: 16,
    fontWeight: "400",
    backgroundColor: colors.Concrete,
    color: colors.Black,
  },
  errorInput: {
    borderColor: "red",
    borderWidth: 1,
  },
  errorTxt: {
    color: "red",
    fontSize: 12,
    marginLeft: 16,
  },
  label: {
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 16,
    marginBottom: 8,
    color: colors.Black2,
  },
});
