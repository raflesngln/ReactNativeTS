import React,{useEffect,useState} from 'react';
import { View } from 'react-native';
import { useAppSelector, useAppDispatch } from '../redux/hooks'

import {extendTheme,Button,Heading,AspectRatio,Text,HStack,Stack, Image,Box, Center, NativeBaseProvider } from "native-base";

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    useColorScheme,
    RefreshControl
} from 'react-native';


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const MessageScreen = () => {

  const [refreshing, setRefreshing] = React.useState(false);
  const datalogin = useAppSelector((state) => state.login)
  const dispatch = useAppDispatch()

  const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);



  return (
    <SafeAreaView style={styles.container}>
    <ScrollView
    //   contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
    <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 10 }}>
      <Text style={{ fontSize: 18,color:'blue' }}>MessageScreen Screen</Text>
      <MyCard/>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};


const MyCard = () => {
const[datas,setDatas]=useState<any[]>([])


useEffect(()=>{
async function getdata(){
  let res=await fetch("https://reqres.in/api/users?page=2")
  let resp=await res.json()
  setDatas(resp.data)
}
getdata()

},[])

return(
  <>
  {
    datas && datas.map((values,i)=>{
      return <Box alignItems="center" key={i}>
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        marginBottom={4}
        borderWidth="1"
        _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
            // uri:{values.avatar}
          }} alt="image" />
          </AspectRatio>
          <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            PHOTOS
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {values.first_name}
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              {values.email}
            </Text>
          </Stack>
          <Text fontWeight="400">
          {values.last_name}
          </Text>

          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
    })
}
  </>
)
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#dad9db',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MessageScreen;