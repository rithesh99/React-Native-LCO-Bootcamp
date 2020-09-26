import React from 'react';
import { StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
// import Expo from "expo";

export default class CardNativeBase extends React.Component {

constructor(props){
  super(props);
  this.state = {
    isLoading: true
  }
}

componentWillMount = async() => {
  await Expo.Font.loadAsync({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
  });
  this.setState({
    isLoading: false
  })
}

  render() {
    if (this.state.isLoading) {
      return <ActivityIndicator />
    }
    return (
        <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://a.espncdn.com/combiner/i?img=/media/motion/ESPNi/2020/0601/int_200601_INET_FC_Jan_on_Timo_Werner_transfer_links/int_200601_INET_FC_Jan_on_Timo_Werner_transfer_links.jpg'}} />
                <Body>
                  <Text>Footbsll</Text>
                  <Text note>@Madrid</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://a.espncdn.com/combiner/i?img=/media/motion/ESPNi/2020/0601/int_200601_INET_FC_Jan_on_Timo_Werner_transfer_links/int_200601_INET_FC_Jan_on_Timo_Werner_transfer_links.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
