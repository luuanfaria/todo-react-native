import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  task: {
    padding: 12,
    color: "#1b1b1b",
    borderRadius: 16,
    flex: 1,
  },
  taskCompleted: {
    textDecorationLine: "line-through",
    padding: 12,
    color: "#1b1b1b",
    borderRadius: 16,
    flex: 1,
  },
});
