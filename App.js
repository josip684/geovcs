import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import StartScreen from './src/screens/StartScreen/StartScreen'
import CodeScreen from './src/screens/CodeScreen/CodeScreen'
import CreateProjectScreen from './src/screens/CreateProjectScreen/CreateProjectScreen'
//import SideDrawerScreen from './src/screens/SideDrawerScreen/SideDrawerScreen'
import startApp from './src/screens/StartApp/StartApp'

import configurateStore from './src/store/configStore'

const store = configurateStore()

Navigation.registerComponent("geovcs.StartScreen", () => StartScreen, store, Provider)
Navigation.registerComponent("geovcs.CodeScreen", () => CodeScreen, store, Provider)
Navigation.registerComponent("geovcs.CreateProjectScreen", () => CreateProjectScreen, store, Provider)
//Navigation.registerComponent("geovcs.SideDrawerScreen", () => SideDrawerScreen)

startApp()
