// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';
import Icon from 'react-native-vector-icons/AntDesign'

export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof AntDesign>['name']>) {
  return <AntDesign size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
