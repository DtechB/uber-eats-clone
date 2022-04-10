import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./app/navigation/MainNavigator";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./app/redux/store";

const store = configureStore();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </ReduxProvider>
  );
}
