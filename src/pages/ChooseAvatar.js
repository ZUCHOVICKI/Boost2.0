import React, {useState, useEffect, useCallback, memo, useRef} from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';
//import CustomButton from '../Components/CustomButton';
import  AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Label } from "native-base";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  slide: {
    height: windowHeight,
    width: windowWidth,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  slideImage: { width: windowWidth * 0.6, height: windowHeight * 0.4, borderRadius: 15 },
  slideTitle: { fontSize: 24, color: 'white' },
  // slideSubtitle: { fontSize: 18 },

  pagination: {
    position: "absolute",
    bottom: 118,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  paginationDotActive: { backgroundColor: "lightblue" },
  paginationDotInactive: { backgroundColor: "gray" },

  carousel: { flex: 1 },

  container: {
    flex: 1,
    backgroundColor: "#0A0B3E",
    // color: 'white',
},
Vamos: {
    padding: 5,
    paddingTop: 70,
    marginHorizontal: 16,
    fontSize: 30,
    textAlign: "left",
    color: 'white',
    // fontFamily: "Poppins",
    fontWeight: 'bold',
},
emoji: {
    width: 30,
    height: 30,
},
Sel: {
  padding: 5,
  paddingTop: 10,
  marginHorizontal: 10,
  fontSize: 20,
  textAlign: "left",
  color: 'white',
  // fontFamily: "Poppins",
},
text: {
  color: '#0A0B3E',
  fontWeight: 'bold',
  fontSize: 23,
  left: 37,
},
listo: {
  backgroundColor: 'white',
  borderRadius: 8,
  marginBottom: 40,
  width: '38%',
  alignSelf: 'center',
},
});


const slideList = Array.from({ length: 4 }).map((_, i) => {
  return {
    id: i,
    // image: av[i],
    title: `Avatar ${i + 1}`,
    // subtitle: `This is the subtitle ${i + 1}!`,
  };
});

const Slide = memo(function Slide({ data }) {
  console.log(data.id);

  if(data.id == 0){
    return (
      <View style={styles.slide}>
        <Image source={require("../img/Avatares/Avatar_1.png")} style={styles.slideImage}></Image>
        <Text style={styles.slideTitle}>{data.title}</Text>
        <Text style={styles.slideSubtitle}>{data.subtitle}</Text>
      </View>
    );
  }else if(data.id == 1){
    return (
      <View style={styles.slide}>
        <Image source={require("../img/Avatares/Avatar_2.png")} style={styles.slideImage}></Image>
        <Text style={styles.slideTitle}>{data.title}</Text>
        <Text style={styles.slideSubtitle}>{data.subtitle}</Text>
      </View>
    );
  }else if(data.id == 2){
    return (
      <View style={styles.slide}>
        <Image source={require("../img/Avatares/Avatar_3.png")} style={styles.slideImage}></Image>
        <Text style={styles.slideTitle}>{data.title}</Text>
        <Text style={styles.slideSubtitle}>{data.subtitle}</Text>
      </View>
    );
  }else if(data.id == 3){
    return (
      <View style={styles.slide}>
        <Image source={require("../img/Avatares/Avatar_4.png")} style={styles.slideImage}></Image>
        <Text style={styles.slideTitle}>{data.title}</Text>
        <Text style={styles.slideSubtitle}>{data.subtitle}</Text>
      </View>
    );
  }
  
});



function Pagination({ index }) {
  return (
    <View style={styles.pagination} pointerEvents="none">
      {slideList.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.paginationDot,
              index === i
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
        );
      })}
    </View>
  );
}

export default function Login({ navigation }) {

  const [username, setUsername] = useState("user");

  async function loadData (){
  const nb = await AsyncStorage.getItem("data");
  var nb2 = nb.substr(9);
  nb2 = nb2.replace('"', "");
  nb2 = nb2.replace('}', "");
  // console.log(nb2);
  setUsername(nb2);
  // console.log(data);
  //navigation.navigate("Login");
}

  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback(s => String(s.id), []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      []
    ),
  };

  const renderItem = useCallback(function renderItem({ item }) {
    return <Slide data={item} />;
  }, []);

    useEffect(function () {
        navigation.setOptions({
            headerShown: false,
        });
        loadData();
    });

    return (
      <View style={ styles.container }>
        <Text style={styles.Vamos}>¡Vamos a empezar @{username}!
        <Image 
            style={styles.emoji}
            source={require('../img/frio.png')}
        />
        </Text>

        <Text style={styles.Sel}> Selecciona un avatar.</Text>

        <FlatList
            data={slideList}
            style={styles.carousel}
            renderItem={renderItem}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <Pagination index={index}></Pagination>

      <Button style={styles.listo} onPress={() => {
              try {
                  navigation.navigate('Cuestionario2')
              }
              catch (error) {
                console.log(error.toString())
              }
            }}>
      <Text style={styles.text}>
          ¡Listo!
      </Text>
      </Button>
        
      </View>
    );
  }
  