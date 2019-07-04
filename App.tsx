import {createStackNavigator, createAppContainer} from 'react-navigation';
import { LoginComponent } from './components/login.component';
import { RegistrationComponent } from './components/registration.component';

const MainNavigator = createStackNavigator({
  Login: {screen: LoginComponent},
  Registration: {screen: RegistrationComponent},
});

const App = createAppContainer(MainNavigator);

export default App;