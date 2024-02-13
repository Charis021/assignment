import Navigator from './src/components/Navigation/Navigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AuthContext from './src/components/Context/Context';
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AuthContext>
        <Navigator />
      </AuthContext>
    </GestureHandlerRootView>
  );
};

export default App;
