import 'react-native-reanimated';

import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {

  return (
  <SafeAreaView>
    <Text>Hello World</Text>
  </SafeAreaView>
  );
}
