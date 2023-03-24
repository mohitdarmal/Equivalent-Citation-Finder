import {
    StyleSheet
} from "react-native";

const Style = StyleSheet.create({

    inputBox: {
        // flexDirection: 'row',
        backgroundColor: '#ffffff10',
        borderWidth: 1,
        borderColor: '#315492',
        borderRadius: 5,
        overflow: 'hidden',
        width: '100%',
        marginBottom: 20,
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    boxContainer: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 5,
        // marginBottom: 30,
        justifyContent: 'space-between'
    },
    activeboxBtn: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%'
    },
    boxBtn: {
        // backgroundColor: '#ffffff10',
        paddingHorizontal: 10,
        paddingVertical: 13,
        justifyContent: 'center',
        width: '50%',
        alignItems: 'center'
    },
    boxImg: {
        marginBottom: 10,
        width: 110,
        height: 110
    },
    boxHeading:{
        fontSize: 17,
        // color: '#01203F',
        color:'#fff',
        fontWeight:'400',
        textAlign: 'center',
        // lineHeight:25
    },
    inputBox: {
        flexDirection: 'row',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        overflow: 'hidden',
        width: '90%',
        marginBottom: 20,
        backgroundColor:'#dee2e7',
        height:60,
        paddingHorizontal:30,
        marginTop:20
      
    },
    inputBoxIcon: {
        borderColor: '#c1c1c1',
        padding: 13,
        color: '#1E3441',
       paddingTop:22,
       paddingRight:5
    },
    inputField: {
        flex: 1,
        paddingHorizontal: 12,
        fontSize:20
    },
    flatList:{
        paddingLeft: 15, 
        marginTop:15, 
        paddingBottom:15,
        fontSize: 20,
        borderBottomColor: '#26a69a',
        borderBottomWidth:1
    },
    a: {
        fontWeight: 'bold',
        fontSize:20,
        color: '#FF3366', // make links coloured pink
      },
})

export default Style;