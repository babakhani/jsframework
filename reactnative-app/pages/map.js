import Svg from '../components/sample-svg.js'
import {Button, View, Text } from 'react-native'

function MapPage ({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Svg></Svg>
    </View>
  );
}

export default MapPage;
