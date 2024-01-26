import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AntIcon from "react-native-vector-icons/AntDesign";
export default function BilgisayarMuh({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Courses");
  };
  return (
    <ScrollView style={styles.wrapperAll}>
      <TouchableOpacity style={styles.wrapper} onPress={handlePress}>
        <Image
          style={styles.img}
          source={require("../../assets/cppPhoto.jpg")}
        />
        <View style={styles.wrapper2}>
          <Text style={styles.title}>
            C++ ile Algoritma ve {"\n"}Programlamaya Giriş
          </Text>
          <AntIcon
            style={styles.AntDesign}
            name="copy1"
            size={20}
            color="#000080"
          />
          <Text style={styles.icerik}>25 içerik</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.wrapper}>
        <Image
          style={styles.img}
          source={require("../../assets/kalkulus.jpg")}
        />
        <Text style={styles.title}>Kalkülüs</Text>
        <Text style={styles.icerik2}>ÇOK YAKINDA!</Text>
      </View>
      <View style={styles.wrapper}>
        <Image style={styles.img} source={require("../../assets/btt.webp")} />
        <Text style={styles.title}>BTT</Text>
        <Text
          style={{
            marginLeft: -50,
            marginTop: 60,
            fontSize: 17,
            color: "#696969",
          }}
        >
          ÇOK YAKINDA!
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 160,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#8b008b",
  },
  title: {
    alignItems: "flex-start",
    marginLeft: 20,
    marginTop: 0,
    fontSize: 18,
    fontWeight: "bold",
  },
  textDesc: {
    fontSize: 10,
  },
  wrapper: {
    flexDirection: "row",
    marginVertical: 15,
    marginHorizontal: 10,
    borderWidth: 0.7,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 4,
    backgroundColor: "#dcdcdc",
  },
  wrapper2: {},
  AntDesign: {
    marginLeft: 10,
    marginTop: 10,
  },
  icerik: {
    marginLeft: 31,
    marginTop: -23,
    fontSize: 17,
    color: "#696969",
  },
  icerik2: {
    marginLeft: -90,
    marginTop: 60,
    fontSize: 17,
    color: "#696969",
  },

  wrapperAll : {
    backgroundColor: "black",
  },
});
