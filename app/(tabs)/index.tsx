import { useTheme } from "@/hooks/use-theme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  return (
    <View style={style.container}>
      <Text style={style.content}>Hello </Text>
      <TouchableOpacity onPress={toggleDarkMode} style={style.content}>
        Toggle
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  content: {
    color: "red",
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "900",
  },
});
