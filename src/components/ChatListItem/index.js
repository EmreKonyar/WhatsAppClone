import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Gecici from '../../../assets/UniCoLogo.png'

const ChatListItem = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={Gecici}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text 
          style={styles.name}
          numberOfLines={1}
          >
          Lukas
          </Text>
          <Text style={styles.subTitle}>8:30</Text>
        </View>
        
        <Text 
        style={styles.subTitle}
        numberOfLines={1}
        >
        Hello there
        </Text>
      </View>
    </View>
        
  )
}
//Koyduğumu numberOfLines={1} ile gözükebilecek maximuım satır sayısını 1 yaptık.
const styles = StyleSheet.create({
    container:{
      flexDirection: 'row', //İçerdiği childrenları yani Image ve atlıdnaki View u aynı rowa koydu.  
      marginHorizontal: 10, //İçeriklerini ekranın sağından ve solundan 10 kadar uzaklaştırdı.
      marginVertical: 5,//İçeriklerine aşağıdan veya yukarıdan 5 kadar uzaklaştırdı.
      height: 70
    },
    image:{
        width: 60, //Enine boyutunu ayarladık
        height: 60, //Boyuna boyutunu ayarladık.
        borderRadius: 30, // İçeriğin köşelerini yuvarlak hale getirdik.
        marginRight: 10, //Image öğesinin sağ tarafına gelecekleri 10 kadar uzaklaştırdık.
    },
    content:{
        flex: 1,//Boşluk Bırakmayacak şekilde sola doğru yapıştı.
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'lightgray',
        //Chat list ıtemın altına gri bir çizgi koymamızı sağladı. StyleSheet li kısım ise alabilecek en küçük değeri vermemizi sağladı.
    },
    row:{
        flexDirection: 'row', //İçeriğindeki isim ve zamanı aynı satıra aldık.
        marginBottom: 5, //İsimin altına gelenlere ile isim arasına 5 kadar boşluk bıraktık.
    },
    name:{
        flex: 1, //İsim bırakılan tüm boşluğu kullandı sadece zamana yetece kkadar bir boşluk bıraktı ve zaman en sağa dayanmış oldu.
        fontWeight: 'bold', //Yazının fontunu kalınlaştırdık.

    },
    subTitle:{
        color: 'gray', //Renk değiştirdik.
    },
})

export default ChatListItem
