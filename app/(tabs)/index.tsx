import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/components/header";
import TodoInput from "@/components/todo-input";
import { useTheme } from "@/hooks/use-theme";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const homeStyles = createHomeStyles(colors);
  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={homeStyles.safeArea}>
        <Header />
        <TodoInput />
      </SafeAreaView>
    </LinearGradient>
  );
}
