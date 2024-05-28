import React from "react";
import { GestureResponderEvent, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  icon: React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;
}

const IconButton = ({ icon, onPress }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      {icon}
      {/* <Ionicons name={icon} color={color} size={size} /> */}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.7,
  },
});
export default IconButton;
