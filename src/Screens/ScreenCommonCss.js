import {
    StyleSheet
} from "react-native";
const CommonStyle = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: '500',
        // color: '#31465B'
        color:'#fff'
    },
    subHeading: {
        color: '#fff9',
        fontSize: 16,
        marginBottom: 25,
    },
    paddingHorizontal20: {
        paddingHorizontal: 20,
    },
    screnLoader: {
        flex: 1,
        position: 'absolute',
        zIndex: 55,
        backgroundColor: '#ffffffab',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

   


    // Light Dark css
    lightContainer: {
        // backgroundColor: '#F3F5F9',
        backgroundColor:'#F3F5F9',
      },
      lightThemeText: {
          color: '#242c40',
        },
      darkContainer: {
        backgroundColor: '#14191f',
      },
      darkThemeText: {
        color: '#bcc3cd',
      },
      flex1:{
        flex:1
      }
      
})

export default CommonStyle;