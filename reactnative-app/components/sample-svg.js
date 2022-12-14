import React, {useState } from 'react';
import {Button, View, Text, Platform } from 'react-native'
import Svg, { Path } from "react-native-svg";
import ColorPicker from 'react-native-wheel-color-picker'

const invertColor = (col) => {
col = col.toLowerCase();
  const colors = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
  let inverseColor = '#'
  col.replace('#','').split('').forEach(i => {
    const index = colors.indexOf(i)
    inverseColor += colors.reverse()[index]
  })
  return inverseColor
}


const Loader = (props) => {
  const [color, onColorChange] = useState('#ff0000');

  return (
  <View>
    <View style={{marginBottom: 20, backgroundColor: color, width: 300, height: 100, alignItems: 'center', justifyContent:"center"  }}>
      <Text  style={{ color: invertColor(color), align: 'center', fontSize: 50 }}>{ color }</Text>
    </View>

    { Platform.OS !== 'android' &&
      <View style={{ alignItems: 'center', justifyContent:"center"  }}>
        <Svg
          width={118}
          height={107}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M32.333 6C17.608 6 5.667 17.819 5.667 32.4c0 11.77 4.666 39.707 50.602 67.947a5.26 5.26 0 0 0 5.462 0c45.936-28.24 50.602-56.176 50.602-67.947 0-14.581-11.941-26.4-26.666-26.4C70.94 6 59 22 59 22S47.059 6 32.333 6Z"
            stroke={color}
            strokeWidth={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </View>
    }

    <ColorPicker
      style={{ marginBottom: 30 }}
	  	color={color}
	  	onColorChange={onColorChange}
	  	/>
    <Button
      title="Color Change"
      onPress={() => onColorChange('#ff88ff')}
      />
  </View>
  )
}
export default Loader;
