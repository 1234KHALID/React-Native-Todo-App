import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

const Header = () => {
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos);
  const completedCount = todos
    ? todos.filter((todo) => todo.isCompleted).length
    : 0;
  const totalCount = todos ? todos.length : 0;

  const progressPrecentage =
    totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
  return (
    <View style={homeStyles.header}>
      <View style={homeStyles.titleContainer}>
        <LinearGradient
          colors={colors.gradients.primary}
          style={homeStyles.iconContainer}
        >
          <Ionicons name="flash-outline" size={28} color="#fff" />
        </LinearGradient>
        <View style={homeStyles.titleTextContainer}>
          <Text style={homeStyles.title}>Today's Tasks 👀</Text>
          <Text style={homeStyles.subtitle}>
            {completedCount} of {totalCount} completed
          </Text>
        </View>
      </View>
      {totalCount > 0 && (
        <View style={homeStyles.progressContainer}>
          <View style={homeStyles.progressBarContainer}>
            <View style={homeStyles.progressBar}>
              <LinearGradient
                colors={colors.gradients.success}
                style={[
                  homeStyles.progressFill,
                  { width: `${progressPrecentage}%` },
                ]}
              />
            </View>
            <Text style={homeStyles.progressText}>
              {Math.round(progressPrecentage)}%
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Header;
