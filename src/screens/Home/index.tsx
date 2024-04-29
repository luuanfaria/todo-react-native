import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import uuid from "react-native-uuid";
import { Task } from "../../components/Task";

interface taskProps {
  id: any;
  description: string;
  completed: boolean;
}

export function Home() {
  const [inputTask, setInputTask] = useState<string>("");
  const [tasks, setTasks] = useState<taskProps[]>([]);
  const [completedTasks, setCompletedTasks] = useState<number>(0);

  function checkDuplicatedTask() {
    return tasks.find((task) => task.description === inputTask);
  }

  function handleAddTask() {
    if (inputTask && !checkDuplicatedTask()) {
      setTasks((prevState) => [
        ...prevState,
        {
          id: uuid.v4(),
          description: inputTask,
          completed: false,
        },
      ]);
      setInputTask("");
    } else if (checkDuplicatedTask()) {
      Alert.alert(
        "Duplicated task",
        "Task is already on your list. Do you want to add it again?",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Yes",
            onPress: () => {
              setTasks((prevState) => [
                ...prevState,
                {
                  id: uuid.v4(),
                  description: inputTask,
                  completed: false,
                },
              ]);
              setInputTask("");
            },
          },
        ]
      );
    }
  }

  function handleRemoveTask(id: string) {
    const filterTaskById = tasks.filter((task) => task.id !== id);
    setTasks((prevState) => filterTaskById);
  }

  function handleToggleTaskStatus(id: string) {
    const filterTaskById = tasks.find((task) => task.id === id);

    if (filterTaskById) {
      const updateTask = tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );

      setTasks(updateTask);
    }
  }

  useEffect(() => {
    const completedTasksCount = tasks.filter((task) => task.completed).length;
    setCompletedTasks(completedTasksCount);
  }, [tasks, completedTasks]);

  const sortedTasks = () => {
    const incompleteTasks = tasks.filter((task) => !task.completed);
    const completedTasks = tasks.filter((task) => task.completed);

    incompleteTasks.sort((a, b) => tasks.indexOf(a) - tasks.indexOf(b));

    return [...incompleteTasks, ...completedTasks];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>todo</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add new task"
          value={inputTask}
          onChangeText={(text) => {
            setInputTask(text);
          }}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        <View style={styles.listInfo}>
          <Text>Tasks {tasks.length}</Text>
          <Text>Completed {completedTasks ?? 0}</Text>
        </View>
        <FlatList
          style={styles.listContainer}
          data={sortedTasks()}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Task
              description={item.description}
              completed={item.completed}
              onRemove={() => handleRemoveTask(item.id)}
              onClick={() => handleToggleTaskStatus(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>
              Your task list is empty. Create a new task to add it to your list.
            </Text>
          )}
        />
      </View>
    </View>
  );
}
