import React from "react";
import {Text, View, Image, TouchableOpacity, StyleSheet, useColorScheme} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import ImagePath from "../Constant/ImagePath";
import NavigationString from "../Constant/NavigationStrings";
import CommonStyle from "../Screens/ScreenCommonCss";

const HeaderComp = (props) => {
    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'light' ? '' : CommonStyle.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? CommonStyle.lightContainer : CommonStyle.darkContainer;

    const navigation = useNavigation();
    return (
        <View style={Style.headerContainer}>
            <View>
                {props.backBtn ?
             (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text> <Ionicons style={[Style.menuIcon, themeTextStyle]} name="md-chevron-back" size={24}  /> </Text>
              </TouchableOpacity>

             )    :  !!props.toggleBtn ?
             (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                {/* <Text> <Feather style={Style.menuIcon} name="menu" size={24}  /> </Text> */}
                <Image style={ {
                          width : 40,
                          height : 40,
                        }}
                      source={ImagePath.hemBurger} />
              </TouchableOpacity>
             ) :
              ( <Text /> )
            }

            </View>

            <View>
                <Text style={[Style.cstmTitle, themeTextStyle]}> {props.title} </Text>                   
            </View>

                <View>
                <TouchableOpacity onPress={() => navigation.navigate(NavigationString.USER_PROFILE)}>
                <FontAwesome style={[Style.menuIcon, themeTextStyle]} name="user-circle" size={26}  /> 
                  {/*   <Image style={ {
                        width : 25,
                        height : 25,
                     }}
                    source={ImagePath.userProfile} /> */}
                </TouchableOpacity>
                </View>
        </View>
    )
}

const Style = StyleSheet.create({
    headerContainer : {
        flexDirection:'row',
        paddingLeft:20,
        paddingRight:30,
        paddingTop:50,
        paddingBottom:20,
        justifyContent:'space-between',
        alignItems:'center'
    },
    menuIcon:{
        color : '#01203F'
        // color:'#fff'
    },
    cstmTitle:{
        color:'#01203F',
        // color:'#fff',
        fontSize:22,
        fontWeight:'600'
    }
})

export default HeaderComp;