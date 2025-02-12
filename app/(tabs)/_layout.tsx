// (tabs)/_layout.tsx
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === 'dark' ? '#fff' : '#000',
        tabBarInactiveTintColor: colorScheme === 'dark' ? '#888' : '#666',
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
        },
        headerStyle: {
          backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
        },
        headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => <IconSymbol name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Hello1",
          tabBarIcon: ({ color }) => <IconSymbol name="person" color={color} />,
        }}
      />
      <Tabs.Screen
        name="todo"
        options={{
          title: "Task",
          tabBarIcon: ({ color }) => <IconSymbol name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}
