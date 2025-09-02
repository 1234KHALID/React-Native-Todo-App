import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const DangerZone = () => {
  const { colors } = useTheme();
  const settingStyles = createSettingsStyles(colors);

  const clearAllTodos = useMutation(api.todos.clearAllTodo);

  const handleResetApp = async () => {
    Alert.alert(
      "Reset App",
      "⚠️ This will delete all your todos permanently. This action can not be undone",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete All",
          style: "destructive",
          onPress: async () => {
            try {
              const result = await clearAllTodos();
              Alert.alert(
                "App reset",
                `Successfully deleted ${result.deletedCount} todo${result.deletedCount === 1 ? "" : "s"}. Your app has been reset.`
              );
            } catch (error) {
              console.log("Error deleting all todos", error);
              Alert.alert("Error", "Failed to reset app");
            }
          },
        },
      ]
    );
  };

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingStyles.section}
    >
      <Text style={settingStyles.sectionTitleDanger}>Danger Zone</Text>
      <TouchableOpacity
        style={[settingStyles.actionButton, { borderBottomWidth: 0 }]}
        onPress={handleResetApp}
        activeOpacity={0.7}
      >
        <View style={settingStyles.actionLeft}>
          <LinearGradient
            colors={colors.gradients.danger}
            style={settingStyles.actionIcon}
          >
            <Ionicons name="trash" size={18} color="#ffffff" />
          </LinearGradient>
          <Text style={settingStyles.actionTextDanger}>Reset App</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default DangerZone;
