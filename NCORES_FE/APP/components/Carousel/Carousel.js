import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  Pressable,
  Linking,
  Alert,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useDispatch, useSelector } from 'react-redux';
import {WithLocalSvg} from 'react-native-svg'
import { actionCreators as markActions } from '../../redux/modules/mark';
import trueSvg from '../../image/true.svg'
import falseSvg from '../../image/false.svg'
const {width: windowWidth} = Dimensions.get('window');



const ITEM_WIDTH = 0.4*windowWidth;
const SEPARATOR_WIDTH = 10;
export default function ShopCarousel(props) {
  const dispatch = useDispatch();
  const {style} = props;
  const carouselRef = useRef(null);
  const mainCos = props.mainCos
  console.log(mainCos)
  async function handleInstallNowClick(url) {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }

  function renderItem({item, index}) {
    const {img, name, likeCheck,id,categoryId,naverUrl} = item;
    return (
      <Pressable
        activeOpacity={1}
        style={styles.item}
        onPress={()=>Linking.openURL(naverUrl)}>

        <Image source={{ uri: img }} style={styles.image} resizeMode='cover' />
        {
          likeCheck? <Pressable style={styles.heart}
            onPress={() => dispatch(markActions.markCosmeticAPI(id,categoryId))}

          >
       
       <WithLocalSvg
                width={28}
                height={28}
                fill={'#000000'}
                asset={trueSvg}/>
           

       
         </Pressable>
            : <Pressable style={styles.heart} onPress={() => dispatch(markActions.markCosmeticAPI(id))}>
              {/* <Image source={require('../../image/false.png')} style={{ width: 28, height: 28, marginBottom: 10 }} resizeMode="center" >
              </Image> */}
              <WithLocalSvg
                width={28}
                height={28}
                fill={'#000000'}
                asset={falseSvg}/>
              </Pressable>

}

       
        <View style={styles.lowerContainer}>
          <View style={styles.lowerLeft}>
            <Text style={styles.titleText} numberOfLines={1}>
              {name}
            </Text>
            
          </View>
       
        </View>
      </Pressable>
    );
  }

  return (
   
 
      <Carousel
        keyExtractor={item => item?.id}
        style={[styles.carousel, style]}
        ref={carouselRef}
        data={mainCos}
        renderItem={renderItem}
        itemWidth={0.4 * windowWidth}
        separatorWidth={SEPARATOR_WIDTH}
        inActiveScale={1}
        inActiveOpacity={1}
        containerWidth={windowWidth*0.4}
      />
    
   
  );
}

const styles = StyleSheet.create({
  heart: {
    position: "absolute",
    right: 10,
    bottom: 50,
  },
  carousel: {
    width: windowWidth,
    height: (ITEM_WIDTH + 100)*0.7,
    flexGrow: 0,
  },
  item: {
    // backgroundColor: 'white',
    flex: 2,
    borderRadius: 5,
    elevation: 3,
  },
  image: {
    flex: 1,
 
   
  },
  lowerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  lowerLeft: {
    width: '100%',
  },
  titleText: {
    fontSize: 15,
    color: '#1C2127',
  },
  descriptionText: {
    fontSize: 14,

    color: '#A0A0A0',
  },
  button: {
    width: '40%',
    marginLeft: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderColor: '#585B60',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#585B60',
  },
  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    marginTop: 20,
    marginHorizontal: 10,
    borderColor: '#A0A0A0',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    borderColor: '#A0A0A0',
    paddingHorizontal: 10,
  },
  logo: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1C2127',
  },
});