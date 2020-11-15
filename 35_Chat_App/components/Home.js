import React, { useState } from "react";
import { StyleSheet, Text, View,TextInput } from "react-native";
import { Container, Form, Item, Button, Label, Input } from "native-base";

const Home = ({navigation}) => {
  
  const [name, setName] = useState("")

    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>UserName</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={e => setName(e)}
            value={name}
          />
          </Item>
          <Button
            style={{ marginTop: 20 }}
            full
            rounded
            success
            onPress={() => {
              console.log('Name 1 ',name);
              navigation.navigate("Chat", {name});
            }}
          >
            <Text style={{ color: "white" }}>Start Chat</Text>
          </Button>
        </Form>
      </Container>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10
  }
});

export default Home;
