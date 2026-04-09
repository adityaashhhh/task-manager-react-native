import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useMemo, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles as s } from "./styles/homeStyles";

type Filter = "All" | "Active" | "Done";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export default function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<Filter>("All");
  const [search, setSearch] = useState("");

  // ✅ LOAD + API
  useEffect(() => {
    loadTasks();
    fetchTasks();
  }, []);

  const saveTasks = async (tasksToSave: Task[]) => {
    await AsyncStorage.setItem("tasks", JSON.stringify(tasksToSave));
  };

  const loadTasks = async () => {
    const data = await AsyncStorage.getItem("tasks");
    if (data) setTasks(JSON.parse(data));
  };

  const fetchTasks = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();

      const apiTasks = data.slice(0, 5).map((item: any) => ({
        id: item.id.toString(),
        text: item.title,
        completed: item.completed,
      }));

      setTasks((prev) => [...apiTasks, ...prev]);
    } catch (e) {
      console.log("API error");
    }
  };

  // ✅ FILTER LOGIC
  const filtered = useMemo(() => {
    return tasks.filter((t) => {
      const matchesFilter =
        filter === "All" ||
        (filter === "Done" && t.completed) ||
        (filter === "Active" && !t.completed);

      const matchesSearch = t.text.toLowerCase().includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [tasks, filter, search]);

  // ✅ ADD TASK
  function addTask() {
    const text = input.trim();
    if (!text) return;

    const newTasks = [
      {
        id: Date.now().toString(),
        text,
        completed: false,
      },
      ...tasks,
    ];

    setTasks(newTasks);
    saveTasks(newTasks);
    setInput("");
  }

  // ✅ TOGGLE
  function toggleTask(id: string) {
    const newTasks = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t,
    );
    setTasks(newTasks);
    saveTasks(newTasks);
  }

  // ✅ DELETE
  function deleteTask(id: string) {
    const newTasks = tasks.filter((t) => t.id !== id);
    setTasks(newTasks);
    saveTasks(newTasks);
  }

  return (
    <SafeAreaView style={s.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 40 }}
          ListHeaderComponent={
            <>
              {/* Title */}
              <Text style={s.title}>My Tasks</Text>

              {/* Search */}
              <TextInput
                style={[s.input, { marginBottom: 12 }]}
                placeholder="Search tasks..."
                placeholderTextColor="#4A4A6A"
                value={search}
                onChangeText={setSearch}
              />

              {/* Add */}
              <View style={s.inputRow}>
                <TextInput
                  style={s.input}
                  placeholder="Add a new task..."
                  placeholderTextColor="#4A4A6A"
                  value={input}
                  onChangeText={setInput}
                />
                <TouchableOpacity style={s.addButton} onPress={addTask}>
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 22,
                      fontWeight: "300",
                      lineHeight: 26,
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Filters */}
              <View style={s.filterRow}>
                {["All", "Active", "Done"].map((f) => (
                  <TouchableOpacity
                    key={f}
                    style={[s.pill, filter === f && s.pillActive]}
                    onPress={() => setFilter(f as Filter)}
                  >
                    <Text
                      style={[s.pillText, filter === f && s.pillTextActive]}
                    >
                      {f}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          }
          renderItem={({ item }) => (
            <View style={s.taskCard}>
              {/* Check circle with tick when done */}
              <TouchableOpacity
                style={[s.checkCircle, item.completed && s.checkCircleDone]}
                onPress={() => toggleTask(item.id)}
              >
                {item.completed && (
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: "700",
                      lineHeight: 15,
                    }}
                  >
                    ✓
                  </Text>
                )}
              </TouchableOpacity>

              <View style={s.taskInfo}>
                <Text style={[s.taskText, item.completed && s.taskTextDone]}>
                  {item.text}
                </Text>
              </View>

              {/* Styled delete button */}
              <TouchableOpacity
                onPress={() => deleteTask(item.id)}
                style={s.deleteButton}
              >
                <Text style={s.deleteButtonText}>✕</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
