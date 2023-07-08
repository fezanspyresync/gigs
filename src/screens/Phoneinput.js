import {View, Text, TextInput, Pressable, FlatList} from 'react-native';
import React, {useState} from 'react';
import ExpandArrow from '../../assets/ExpandArrow.svg';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const countryCodes = [1, 1, 7, 92, 212, 91];
export default function Phoneinput() {
  const [code, setCode] = useState('212');
  const [isListShow, setIsListShow] = useState(false);

  const countryCodeHandler = code => {
    setCode(code);
    setIsListShow(!isListShow);
  };
  const showHandler = () => {
    setIsListShow(!isListShow);
  };

  const ItemList = ({item}) => {
    console.log(item);
    return (
      <Text
        onPress={() => countryCodeHandler(item)}
        style={{
          padding: 3,
          color: '#000',
          borderBottomColor: '#000',
          borderBottomWidth: 1,
          textAlign: 'center',
        }}>
        {item}
      </Text>
    );
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 2,
          borderColor: 'red',
          overflow: 'hidden',
          borderRadius: 10,
          backgroundColor: 'white',
          marginTop: widthPercentageToDP('4.5%'),
        }}>
        <Pressable
          onPress={showHandler}
          style={{
            alignSelf: 'stretch',
            width: '23%',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingHorizontal: widthPercentageToDP('2%'),
            alignItems: 'center',
            borderRightWidth: 1,
            borderRightColor: 'rgba(0, 0, 0, 0.25)',
          }}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Inter',
              fontSize: widthPercentageToDP('5%'),
              fontWeight: 'bold',
            }}>
            {`+${code}`}
          </Text>
          <ExpandArrow fill="#000000" />
        </Pressable>
        <View style={{flex: 1, alignSelf: 'stretch'}}>
          <TextInput
            style={{
              fontSize: widthPercentageToDP('5%'),
              paddingHorizontal: widthPercentageToDP('2%'),
            }}
          />
        </View>
      </View>
      {isListShow ? (
        <View
          style={{
            width: '23%',
            borderRadius: 5,
            marginLeft: 2,
            position: 'absolute',
            top: heightPercentageToDP('10%'),
          }}>
          <FlatList
            data={countryCodes}
            renderItem={ItemList}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      ) : null}
    </View>
  );
}
