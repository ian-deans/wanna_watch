import * as React from 'react';
// import { StyleSheet } from 'react-native';
// import EditScreenInfo from '../components/EditScreenInfo';
// import { View } from '../components/Themed';
import ListEntry from "../components/ListEntry";

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, List, ListItem, Text, Thumbnail } from 'native-base';

const props = {
  Title: "Test",
  Plot: "Test summary",
  Poster: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  Released: "release year",
}

const TabOneScreen: React.SFC = () => {
  return (
    <Container>
      <Content padder>
        <List>
          <ListEntry {...props} />
          <ListEntry {...props} />
          <ListEntry {...props} />
          <ListEntry {...props} />
        </List>
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}


export default TabOneScreen;