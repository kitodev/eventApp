import React from 'react';
import { 
Text,
View,
StyleSheet,
TouchableWithoutFeedback,
Button, 
TextInput,
ImageBackground,
DateBox,
SafeAreaView,
SectionHeader,
LinearGradient,
SectionSearch,
SectionTitle,
SearchView,
FlatList,
GiftBox
} from 'react-native';
import { McAvatar, McIcon, McText } from '../components';
import { icons, images, SIZES, dummyData, FONTS, COLORS } from '../constants';
import styled from 'styled-components/native';
//import moment from 'moment'

const Featured = ({ navigation }) => {
  
  const _renderItem = ({item, index}) => {
    return (
      <TouchableWithoutFeedback
        onPress={()=> {
          navigation.navigate('EventDetail', {selectedEvent: item})
        }}
      >
      <View style={{
        marginLeft: index === 0 ? 30: 20,
        marginRight: index === dummyData.Events.length -1 ? 30: 0,
      }}>
        <ImageBackground 
          source={item.image} 
          resizeMode='cover'
          style={{
            width: SIZES.width / 2 + 70,
            height: SIZES.height / 2 + 70,
            justifyContent: 'space-between'
          }} 
          >
            <View style={{
              alignItems: 'flex-end',
              marginHorizontal: 15,
              marginVertical: 15,
            }}> 
              <DateBox style={styles.dateBox}>
              <McText body5 style={{opacity: 5, letterSpacing: 2}} color={COLORS.black}>{moment(item.statingTime).format('MMM').toUppercase()}</McText>
              <McText h2 color={COLORS.black}>{moment(item.statingTime).format('DD')}</McText>
              </DateBox>
            </View>

            <View style={{
              marginLeft: 20,
              marginBottom: 20 
            }}>
              <McText body5>{item.type}</McText>
              <McText h2>{item.title}</McText>
            </View>
          </ImageBackground>
      </View>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <SectionHeader style={styles.sectionHeader}>
        <View>
          <McText body5>
            DECEMBER 21, 9:10 PM
          </McText>
          <McText h1>Explore events</McText>  
        </View>
        <McAvatar source={images.avatar} />
      </SectionHeader>
      <SectionSearch style={styles.sectionSerch}>
        <SearchView style={styles.searchView}>
          <McIcon source={icons.search} />
          <TextInput 
          placeholder="Search"
          placeholderTextColor={COLORS.gray1}
          style={{
            ...FONTS.h4,
            color: COLORS.white,
            width: 250
          }}
          ></TextInput>
          <McIcon source={icons.filter} />
        </SearchView>
      </SectionSearch>
      <SectionTitle style={styles.sectionTitle}>
        <McText h5>FEATURED</McText>
      </SectionTitle>
      <View>
        <FlatList
          horizontal
          contentContainerStyle={{}}
          keyExtractor={(item) => 'event_' + item.id}
          data={dummyData.Events}
          renderItem={_renderItem}
        > 

        </FlatList>
      </View>
      <SectionTitle>
        <McText h5>FOR YOU</McText>
      </SectionTitle>
      <LinearGradient
        colors={COLORS.linear}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        syle={{
          height: 120,
          marginHorizontal: 30,
          borderRadius: SIZES.radius
        }}
      >
        <View>
          <GiftBox style={styles.giftBox}>
            <McIcon source={icons.gift} size={24} />
          </GiftBox>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionheader: {
    padding: '16px',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  sectionSearch: {
    margin: '4px',
    height: '50px',
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: COLORS.input,
  },
  sectionTitle: {
    margin: '20px'
  },
  searchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '9px',
    marginRight: '15px',
  },
  dateBox: {
    width: '60px',
    height: '60px',
    borderRadius: 15,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  giftBox: {
    width: '50px',
    height: '50px',
    borderRadius: 15,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Featured;