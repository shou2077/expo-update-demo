import { Stack } from 'expo-router';

export default function TodoLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="new-task"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
