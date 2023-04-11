import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import { DefaultTheme } from "react-native-paper";

function Home({ navigation }) {
  return (
    <ScrollView style={styles.scroll}>
      <Card style={styles.card}>
        <Card.Content>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("Capcom")}
          >
            Capcom
          </Button>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("Eletronic Arts (EA)")}
          >
            Eletronic Arts EA
          </Button>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("Nintendo")}
          >
            Nintendo
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10,
  },
  card: {
    width: "40%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default Home;
