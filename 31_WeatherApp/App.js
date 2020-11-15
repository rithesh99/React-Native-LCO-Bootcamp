
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  
  StatusBar, TouchableOpacity
} from 'react-native';

import { Container, Header, Content, Button, Text, Left, Body, Title, Right, Thumbnail, Card, CardItem, Icon, Image, View,Accordion, Spinner } from 'native-base';


import Axios from 'axios'

// import { getLocation, getData } from 'react-native-weather-api';

import GetLocation from '@react-native-community/geolocation'


const App = () => {

  const [lat,setLat] = useState("")
  const [lon, setLon] = useState("")

  const [val, setVal] = useState(false)
const [loading, setLoading] = useState(false)
  const [details, setDetails] = useState({
    title, subtitle,degree, city, country, max,min, pressure, humidity, wind
  })
  const {title, subtitle,degree, city, country, max,min, pressure, humidity, wind} = details

  useEffect(() => {
      setLoading(true)
      getWeather()
  }, [])

  const API_key = 'fc213e25980a3c89eced900e00bcc7cf' 

  const getWeather = async () => {

    try {
      GetLocation.getCurrentPosition(info => {
        setLat(info.coords.latitude)
        setLon(info.coords.longitude)
      })

      const { data } = await Axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`)
      console.log("DATA",data)
      setDetails({...details, title: data.weather[0].main, subtitle: data.weather[0].description, degree: data.main.temp,city: data.name, country: data.sys.country,max: data.main.temp_max, min: data.main.temp_min, pressure: data.main.pressure, humidity: data.main.humidity, wind: data.wind.speed  })
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  } 
 
  if (loading) {
    return (
    <View>
    {/* <Spinner primary style={{marginTop:300}}/> */}
    <Button onPress={getWeather} style={{marginTop: 300, marginLeft:110 }}><Text>Check weather</Text></Button>
    </View>
    ) 
  }

  return (
    <>
      <SafeAreaView>
        <Container>
          <Header>
            <Left>
            <Thumbnail square source={require('./assets/icon.png')} />
            </Left>
            <Body>
              <Title style={styles.title}>WEATHER APP</Title>
            </Body>
            {/* <Right /> */}
          </Header>
          <View style={{backgroundColor: "#F0DF87"}}>
            <View style={styles.card}>
            
              <View style={styles.left}>   
                  <Text style={{fontSize:60, textTransform: "uppercase"}}>{title}</Text>
                  <Text note style={{marginLeft: 5}}>{subtitle}</Text>
              </View>
              <View style={styles.right}>
                <Text style={{fontSize:130,lineHeight:150}}>{degree}<Text style={{fontSize:20}}>°C</Text></Text>
                <Text style={{marginLeft:50}}>{city}, {country}</Text>
              </View>
            
              <View style={{flexDirection:"row", marginTop:0, alignItems: "center"}}>
                <View style={{width:200, padding:50}}><Text style={{fontSize:30}}>Max: <Text style={{fontSize:35}}>{max}</Text>°C</Text></View>
                <View style={{width:200}}><Text style={{fontSize:30}}>Min: <Text style={{fontSize:35}}>{min}</Text>°C</Text></View>
              </View>
              <View style={{flexDirection:"row",alignItems: "center", marginTop: -40}}>
                <View style={{width:180, padding:15}}><Text style={{fontSize:30}}>Pressure: <Text style={{fontSize:30}}>{pressure}mb</Text></Text></View>
                <View style={{width:180}}><Text style={{fontSize:30}}>Humidity: <Text style={{fontSize:30}}>{humidity}%</Text></Text></View>
                
                
              </View>
              <View style={{flexDirection:"row",  alignItems: "center", marginTop: -60}}>
                <View style={{width:400, padding:80}}><Text style={{fontSize:30}}>Wind speed: <Text style={{fontSize:35}}>{wind}km/hr</Text></Text></View>
               
                <Button
                onPress={() => setVal(!val)}
                primary
              ><Text>Reload</Text></Button>
              </View>
              
            </View>
            
          </View>
          
         
        </Container>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  title:{
    marginLeft: 5,
    fontWeight: "bold",
    fontSize: 25
  },
  card:{
    marginTop:150,
    flex:1,
    flexWrap: "wrap",
    flexDirection: "row"
  },
  left:{
    width: 200,
  },
  right: {
    width: 160,
  }
})

export default App;
