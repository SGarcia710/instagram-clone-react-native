import {AppRegistry} from 'react-native';
import TabNavigator from './src/navigation';
import {name as appName} from './app.json';

import {DOMAIN_PATH} from './src/config';

import axios from 'axios';
axios.defaults.baseURL = `${DOMAIN_PATH}/api/`;

AppRegistry.registerComponent(appName, () => TabNavigator);

// Modalbox needs to update something about native animations, i didnt wanted to touch the library, so I used this to turn the warning off.
console.disableYellowBox = true;
