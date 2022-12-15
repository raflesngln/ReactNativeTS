import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

function IndicatorLoading(props:any){
    return(
        <View style={{display:'flex'}}>
                <ActivityIndicator
                    animating={props.animating}
                    color="#f50a70"
                    size="large"
                    style={styles.activityIndicator}
                    />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    // justifyContent:"center",
    // alignItems:"center",
    // backgroundColor:'transparent',
    // width:'100%',
    height: deviceHeight/1+10,
},
    activityIndicator22: {
    //   backgroundColor:'#6f757a21',
      backgroundColor:'#b5860e',
      alignItems: 'center',
      position:'absolute',
      width:150,
      height:150,
      borderRadius:100,
      zIndex:99,
    },
    activityIndicator: {
        backgroundColor:'#6f757a21',
        // backgroundColor:'#b5860e',
        borderRadius:30,
        alignItems: 'center',
        position:'absolute',
        width:'100%',
        height: deviceHeight/1+10,
        // top:'-170%',
        // paddingBottom:'-55%',
        zIndex:99,
    },
  });
  
  export default IndicatorLoading