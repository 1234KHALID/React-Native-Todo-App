import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";

const TodoInput = () => {
  const [taskName, setTaskName] = useState("");
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

  const addTodo = useMutation(api.todos.addTodos);

  const createTodo = async () => {
    if (taskName.trim()) {
      try {
        await addTodo({ taskName: taskName.trim() });
        setTaskName("");
      } catch (error) {
        console.log("Error adding a todo", error);
        Alert.alert("Error", "Failed to add todo");
      }
    }
  };

  return (
    <View style={homeStyles.inputSection}>
      <View style={homeStyles.inputWrapper}>
        <TextInput
          style={homeStyles.input}
          placeholder="What needs to be done?"
          value={taskName}
          onChangeText={setTaskName}
          onSubmitEditing={createTodo}
          multiline
          placeholderTextColor={colors.textMuted}
        />
        <TouchableOpacity
          onPress={createTodo}
          activeOpacity={0.8}
          disabled={!taskName.trim()}
        >
          <LinearGradient
            colors={
              taskName.trim()
                ? colors.gradients.primary
                : colors.gradients.muted
            }
            style={[
              homeStyles.addButton,
              !taskName.trim() && homeStyles.addButtonDisabled,
            ]}
          >
            <Ionicons name="add" size={24} color="#ffffff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoInput;
