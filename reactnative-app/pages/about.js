import {Button, View, Text } from 'react-native'

function Page ({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is a about  page.</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('home')}
        />
      <Button
        title="OPen Drawe"
        onPress={() => navigation.openDrawer('setting')}
        />
    </View>
  );
}

export default Page;
