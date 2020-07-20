import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import DetailsScreen from "./src/screens/DetailsScreen";

const navigator = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        headerTitleStyle: { textAlign: "center", alignSelf: "center" },
      },
    },
    Details: DetailsScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Hungry Bird",
    },
  }
);

export default createAppContainer(navigator);
