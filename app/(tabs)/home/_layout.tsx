import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function HomeLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
        },
        headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
      }}>
      {/* <Stack.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          title: 'Details',
        }}
      /> */}
      /*
      这里不需要写任何东西就可以把目录下的文件都列出来 Screen的目的只是配置bottom tab 的样式
      */
    </Stack>
  );
} 