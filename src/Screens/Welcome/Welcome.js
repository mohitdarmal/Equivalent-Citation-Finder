import React, {useEffect, useState, useRef, useCallback} from "react";
import {Text, Button, View, FlatList, ScrollView, Image, TextInput, Switch, TouchableOpacity, useColorScheme, Dimensions} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HTMLView from 'react-native-htmlview';
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
 
  const [proceedData, setProceedData] = useState();
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [symbol, setSymbol] = useState();
 
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();

 
  const [loading, setLoading] = useState(false)
  const [suggestionsList, setSuggestionsList] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)
  const dropdownController = useRef(null)

  const searchRef = useRef(null)

  const getSuggestions = useCallback(async q => {
    const filterToken = q.toLowerCase()
    console.log('typing', q)
    if (typeof q !== 'string' || q.length < 3) {
      setSuggestionsList(null)
      return
    }
    setLoading(true)
    const response = await fetch('https://spotlawapp.com/Admin/json/getcitation.php')
    const items = await response.json()
    const suggestions = items
    
      .filter(item => item.toLowerCase().includes(filterToken))
      .map((item, i) => ({title:item}))
     /*  .map(item => ({
        id: item.id,
        title: item,
      })) */
    setSuggestionsList(suggestions)
    setLoading(false)
  }, [])

  const onClearPress = useCallback(() => {
    setSuggestionsList(null)
  }, [])

  const onOpenSuggestionsList = useCallback(isOpened => {}, [])

    useEffect(() => {
      reAuth()
      getJudgement()
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
 
    
  const getJudgement = () => {
    axios.get(`https://spotlawapp.com/Admin/json/getjudgement.php?apRe=${selectedItem}`)
    .then((res) => {
      setProceedData(res.data);
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
        <View style={[themeContainerStyle, {flex:1, paddingHorizontal:30}]}>
            <HeaderComp title="ECf"/>

           
           
            {/*  */}   

            <View
        // style={[{ flex: 1, flexDirection: 'row', alignItems: 'center' },
      
        // ]}
        >
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
            placeholder: 'Type 3+ letters',
            autoCorrect: false,
            autoCapitalize: 'none',
            style: {
              borderRadius: 25,             
              color: '#444',
              paddingLeft: 25,
            },
          }}
          rightButtonsContainerStyle={{
            right: 8,
            height: 30,

            alignSelf: 'center',
          }}
          inputContainerStyle={{
            borderWidth:1,
            borderColor:'#aaaaaa',
            // backgroundColor: '#383b42',
            marginBottom:20,
            borderRadius: 50,
            color:'redd'
          }}
          
          suggestionsListContainerStyle={{
            backgroundColor: '#383b42',           
          }}
          containerStyle={{ flexGrow: 1, flexShrink: 1 }}
          renderItem={(item, text) => <Text style={{ color: '#f2f2f2', lineHeight:22, padding: 15 }}>{item.title}</Text>}
          ChevronIconComponent={<Feather name="chevron-down" size={20} color="#444" style={{marginRight:10}} />}
          ClearIconComponent={<Feather name="x-circle" size={18} color="red" style={{marginRight:10}} />}
          inputHeight={60}
          showChevron={true}
          closeOnBlur={false}
          //  showClear={false}
        />
        <View style={{ width: 10 }} />
        {/* <Button style={{ flexGrow: 0 }} title="Toggle" onPress={() => dropdownController.current.toggle()} /> */}
      </View>
      {/* <Text style={{ color: '#668', fontSize: 13 }}>Selected item id: {JSON.stringify(selectedItem)}</Text>      */}
          
          <TouchableOpacity style={{marginBottom:30}} onPress={getJudgement}>
            <Text style={{  backgroundColor: '#b2752a',
        color: '#fff',
        padding: 15,
        fontSize: 18,
        textAlign: 'center',
        borderRadius:100,
        fontWeight:"bold"
       }}>Proceed</Text>
          </TouchableOpacity>
 
          <HTMLView           
            value={proceedData}                  
           />   
        </View>
    )
}


export default Welcome