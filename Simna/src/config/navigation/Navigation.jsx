import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginStack from "../stack/LoginStack";
import Menu from "../../modules/auth/login/adapters/screens/Menu"; // Update the path accordingly
import MenuStack from "../stack/MenuStack";
import Historigrama from "../../modules/historigrama/adapters/screens/Historigrama";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="LoginStack"
                screenOptions={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: "#9CCDDB", 
                    },
                    headerTitleStyle: {
                        color: "#072D44", 
                    },
                }}
            >
                <Stack.Screen name="LoginStack" component={LoginStack} />
                <Stack.Screen name="Menu" component={Menu} />
                <Stack.Screen name="MenuStack" component={MenuStack} />
                <Stack.Screen
                    name="Historigrama"
                    component={Historigrama}
                    options={{ headerShown: true }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
