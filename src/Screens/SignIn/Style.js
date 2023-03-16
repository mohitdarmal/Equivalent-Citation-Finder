import {
    StyleSheet
} from "react-native";

const Styles = StyleSheet.create({

    loginTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 30,
        // color:'#01203F',
        color: '#08113f',
        textAlign: 'center'
    },

    inputBoxContainer: {
        alignItems: 'center',
        flex: 1,
        marginTop: 20,
        paddingTop: 25,
        marginHorizontal: 25,
        paddingHorizontal: 15,
        borderRadius: 10,
    },

    inputBox: {
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        width: '100%',
        marginBottom: 20,
        backgroundColor: '#fff',
        height: 60,
        elevation: 20,
        shadowColor: '#00000047',
    },
    inputBoxIcon: {
        borderColor: '#c1c1c1',
        padding: 13,
        color: '#c1c1c1',
        paddingTop: 22,
        paddingRight: 5
    },
    inputBoxIconSecond: {
        padding: 13,
        color: '#c1c1c1',
        paddingTop: 22,
        paddingRight: 20
    },
    inputField: {
        flex: 1,
        paddingHorizontal: 12
    },
    loginBtnContanier: {
        width: '100%'
    },
    loginBtn: {
        backgroundColor: '#b2752a',
        marginTop: 25,
        color: '#fff',
        padding: 15,
        fontSize: 18,
        textAlign: 'center',
        borderRadius: 50,
        fontWeight: '600'
    },
    orOption: {
        height: 20,
        marginVertical: 15
    },
    forgetPassword: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%'
    },
    forgetPasswordBtn: {
        color: '#01203F',
        // color: '#fff'
    },
    loginGoogleBtnContainer: {
        width: '100%',

    },
    loginGoogleBtn: {
        flexDirection: 'row',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#466362',
        padding: 18,
        marginBottom: 20,
        backgroundColor: '#fff',
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center'
    },
    alreadyAcTxt:{
        color:'#888'
    },
    alreadyAccount: {
        flexDirection: 'row',
        paddingTop: 40,
        color: '#01203F'
    },
    loginGoogleText: {
        color: '#01203F',
        fontWeight: '600',
        fontSize: 18
    },
    registerText: {
        color: '#466362',
        fontWeight:'bold'
        // color:'#ffffff90'
    },

})

export default Styles