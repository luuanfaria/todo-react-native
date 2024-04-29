import { Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";

interface TaskProps {
  completed: boolean;
  description: string;
  onClick: () => void;
  onRemove: () => void;
}

export function Task({ description, completed, onClick, onRemove }: TaskProps) {
  return (
    <View style={styles.container}>
      <BouncyCheckbox size={18} fillColor="#1b1b1b" onPress={onClick} />
      <Text style={completed ? styles.taskCompleted : styles.task}>
        {description}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Text>-</Text>
      </TouchableOpacity>
    </View>
  );
}
