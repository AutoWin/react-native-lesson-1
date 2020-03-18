import axios from 'axios';
import { ActionSheetIOS } from 'react-native';

export default ActionSheetIOS.create({
    baseUrl: 'https://api.yelp.com/v3/businesses/',
    header: {
        Authorization: 'Anohaha '
    }
});

