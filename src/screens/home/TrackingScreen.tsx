import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const DetailScreen = (props) => {
  const route = useRoute();
  const { title } = route.params;

  return (
    <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 10 }}>
      <Text style={{color:'red', fontSize: 18, paddingBottom: 12 }}>Names: {title}</Text>
    </View>
  );
};

export default DetailScreen;