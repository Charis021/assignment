import AuthContext from './src/components/Context/Context';
import Navigator from './src/components/Navigation/Navigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/src/components/Reducer/Store';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AuthContext>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </AuthContext>
    </GestureHandlerRootView>
  );
};

export default App;
