import StackRoutes from "./stack.routes";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <StackRoutes />
        </NavigationContainer>
    );
}