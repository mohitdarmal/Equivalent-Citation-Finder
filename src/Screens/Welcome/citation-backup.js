import React, {useEffect, useState, useRef, useCallback} from "react";
import {Text, Button, View, FlatList, ScrollView, Image, TextInput, Switch, TouchableOpacity, useColorScheme, Dimensions} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import NavigationStrings from "../../Constant/NavigationStrings";
import HeaderComp from "../../Components/HeaderComp";
import ImagePath from "../../Constant/ImagePath";
import CommonStyle from "../ScreenCommonCss";
import Style from "./Style";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from 'expo-updates';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';


const Welcome = ({navigation}) => {
  const isUserID = useSelector((state) => state.isSignIn.token);
 
  const [searchValue, setSearcValue] = useState();
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [symbol, setSymbol] = useState();
  const {height, width} = Dimensions.get('window');
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();

 
  const [loading, setLoading] = useState(false)
  const [suggestionsList, setSuggestionsList] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)
  const dropdownController = useRef(null)

  const searchRef = useRef(null)

  const getSuggestions = useCallback(async q => {
    const filterToken = q.toLowerCase()
    console.log('getSuggestions', q)
    if (typeof q !== 'string' || q.length < 3) {
      setSuggestionsList(null)
      return
    }
    setLoading(true)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const items = await response.json()
    const suggestions = items
      .filter(item => item.title.toLowerCase().includes(filterToken))
      .map(item => ({
        id: item.id,
        title: item.title,
      }))
    setSuggestionsList(suggestions)
    setLoading(false)
  }, [])

  const onClearPress = useCallback(() => {
    setSuggestionsList(null)
  }, [])

  const onOpenSuggestionsList = useCallback(isOpened => {}, [])

    useEffect(() => {
      reAuth()
      getSymbol()
    }, [])

    const reAuth = () => {
      axios.get(`${NavigationStrings.BASE_URL}getUserProfile.php`, {
        params : {uID:isUserID}
      }).then((val) => {
        val.data.data.map((data) => {
          if(data.idUser === isUserID){
            return true
          }
          else{
            AsyncStorage.removeItem('userId');
            Updates.reloadAsync()
          }
         })
           
         
      })
    }

console.log(selectedItem, "Asdfsdf")
    
  const getSymbol = () => {
    axios.get(`${NavigationStrings.BASE_URL}getSymbols.php`, {
      params : {userRole:"user"}
    }).then((res) => {
      if(res.data.status == true){
        setSymbol(res.data.data);
      }
      else{
        alert(res.data.message);
      }
    })
  }

 

 

  const colorScheme = useColorScheme();
  const themeTextStyle = colorScheme === 'light' ? '' : CommonStyle.darkThemeText;
const themeContainerStyle =
  colorScheme === 'light' ? CommonStyle.lightContainer : CommonStyle.darkContainer;


  // const navigation = useNavigation();
  const [active, setActive] = useState(true)
  const [inActive, setInActive] = useState(false)

  const goToScreen = () => {
    navigation.navigate(NavigationStrings.WELCOME, {title:'Welcome Screen'});
  }
    return(
        <View style={[themeContainerStyle, {flex:1}]}>
            <HeaderComp title="Equivalent Citation Finder"/>

           
           
            {/*  */}   

            <View
        style={[
          { flex: 1, flexDirection: 'row', alignItems: 'center' },
          Platform.select({ ios: { zIndex: 1 } }),
        ]}>
        <AutocompleteDropdown
          ref={searchRef}
          controller={controller => {
            dropdownController.current = controller
          }}
          // initialValue={'1'}
          direction={Platform.select({ ios: 'down' })}
          dataSet={suggestionsList}
          onChangeText={getSuggestions}
          onSelectItem={item => {
            item && setSelectedItem(item.title)
          }}
          debounce={600}
          suggestionsListMaxHeight={Dimensions.get('window').height * 0.4}
          onClear={onClearPress}
          //  onSubmit={(e) => onSubmitSearch(e.nativeEvent.text)}
          onOpenSuggestionsList={onOpenSuggestionsList}
          loading={loading}
          useFilter={false} // set false to prevent rerender twice
          textInputProps={{
            placeholder: 'Type 3+ letters (dolo...)',
            autoCorrect: false,
            autoCapitalize: 'none',
            style: {
              borderRadius: 25,
              backgroundColor: '#383b42',
              color: '#fff',
              paddingLeft: 18,
            },
          }}
          rightButtonsContainerStyle={{
            right: 8,
            height: 30,

            alignSelf: 'center',
          }}
          inputContainerStyle={{
            backgroundColor: '#383b42',
            borderRadius: 25,
          }}
          suggestionsListContainerStyle={{
            backgroundColor: '#383b42',
          }}
          containerStyle={{ flexGrow: 1, flexShrink: 1 }}
          renderItem={(item, text) => <Text style={{ color: '#fff', padding: 15 }}>{item.title}</Text>}
          ChevronIconComponent={<Feather name="chevron-down" size={20} color="#fff" />}
          ClearIconComponent={<Feather name="x-circle" size={18} color="#fff" />}
          inputHeight={50}
          showChevron={false}
          closeOnBlur={false}
          //  showClear={false}
        />
        <View style={{ width: 10 }} />
        {/* <Button style={{ flexGrow: 0 }} title="Toggle" onPress={() => dropdownController.current.toggle()} /> */}
      </View>
      <Text style={{ color: '#668', fontSize: 13 }}>Selected item id: {JSON.stringify(selectedItem)}</Text>     
          
        </View>
    )
}


export default Welcome