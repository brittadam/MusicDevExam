import { View } from 'react-native';
import Details from '../components/MusicDetails';


const Info = ({ route }) => {

  return (
    <View>
      <Details songTitle={route.params.itemTitle}
        singer={route.params.itemDescription}
        photo={route.params.itemImage} />
    </View>
  )
}


export default Info;
