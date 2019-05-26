import { Navigation } from 'react-native-navigation'

import StartScreen from './src/screens/StartScreen/StartScreen'
import CodeScreen from './src/screens/CodeScreen/CodeScreen'
//import SideDrawerScreen from './src/screens/SideDrawerScreen/SideDrawerScreen'
import startApp from './src/screens/StartApp/StartApp'

Navigation.registerComponent("geovcs.StartScreen", () => StartScreen)
Navigation.registerComponent("geovcs.CodeScreen", () => CodeScreen)
//Navigation.registerComponent("geovcs.SideDrawerScreen", () => SideDrawerScreen)

startApp()
