import * as  React from 'react';
import { ScrollView, StyleSheet, TouchableNativeFeedback } from 'react-native';
import {
  Body,
  H2,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Thumbnail,
  View,
} from "native-base";
import { Store } from '../Store';
import { SearchBox } from "../components";
import { loadModal, closeModal, searchPrograms } from '../actions';
// import './App.css';
const Modal = React.lazy<any>(() => import("../components/Modal"));



export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const handlePress = () => {
    if (state.modalOpen) {
      closeModal(dispatch);
    }
  }
  return (
    <TouchableNativeFeedback onPress={handlePress}>
      <View style={{ zIndex: 500 }}>
        {/* {
          state.error
            ? <Subtitle >{state.error}</Subtitle>
            : null
        } */}

        <SearchBox />
        <ScrollView>
          <List>
            {state.results.map((r: any, i: number) => {
              return (
                <ListItem
                  key={i}
                  onPress={() => loadModal(r.imdbID, r.Title, dispatch, state)}
                  thumbnail
                >
                  <Left>
                    <Thumbnail square source={{ uri: r.Poster }} />
                  </Left>
                  <Body>
                    <Text>{r.Title}</Text>
                    <Text note>{r.Plot}</Text>
                  </Body>
                  <Right>
                    <Text note>{r.Released}</Text>
                  </Right>
                </ListItem>
              )
            })}
          </List>
        </ScrollView>


        {
          state.modalOpen
            ? <React.Suspense fallback={<H2>Loading...</H2>}>
              <Modal />
            </React.Suspense>
            : null
        }
      </View>
    </TouchableNativeFeedback >
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
