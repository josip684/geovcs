import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

const startApp = () => {
    Promise.all([
        Icon.getImageSource("ios-menu", 30)
    ]).then(sources => {
        Navigation.startSingleScreenApp({
            screen: {
                screen: "geovcs.StartScreen",
                title: "GeoVCS",
                navigatorButtons: {
                    rightButtons: [
                        {
                            icon: sources[0],
                            title: "Menu",
                            id: "sideDrawer"
                        }
                    ]
                }
            },
            /*drawer: {
                right: {
                    screen: "geovcs.SideDrawerScreen"
                }
            }*/
        })
    })
}

export default startApp