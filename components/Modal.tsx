import React from 'react';
import { IStreamLocation, IProgram } from "../interfaces";
import { Store, actions } from "../Store";
import { closeModal } from "../actions"
import { Button, Subtitle, Header, H2, H3, Text, Thumbnail, Card, CardItem, Left, Right, Icon, Body } from 'native-base';
import { imdbConfig } from '../config';
import { Image, TouchableWithoutFeedback, View, Modal as NBModal, ScrollView, BackHandler } from "react-native";


export default function Modal(): JSX.Element {
  const { dispatch, state: { savedItems, modalData, modalOpen } } = React.useContext(Store);

  const {
    Title,
    Year,
    Released,
    Rated,
    Genre,
    Actors,
    Plot,
    Poster,
    imdbID,
    streaming
  } = modalData

  const cancelBubble = (e: any): void => {
    e.stopPropagation()
  }

  const saveItem = (item: IProgram) => {
    const match = savedItems.find((p: IProgram) => p.imdbID === item.imdbID)

    if (!match) {
      dispatch({
        type: actions.SAVE_PROGRAM,
        payload: item,
      })
    }
  }

  const removeSavedItem = (item: IProgram) => {
    const newSavedItems = savedItems.filter((p: IProgram) => p.imdbID !== item.imdbID);
    dispatch({
      type: actions.REMOVE_SAVED_PROGRAM,
      payload: newSavedItems,
    })
  }

  const isSaved = savedItems.find((p: IProgram) => p.imdbID === imdbID);
  const buttonProps = isSaved
    ? { color: 'danger', text: 'Remove', clickFn: removeSavedItem }
    : { color: 'success', text: 'Save', clickFn: saveItem }


    const backAction = () => {
      console.log("BACK")
      // Alert.alert("Hold on!", "Are you sure you want to go back?", [
      //   {
      //     text: "Cancel",
      //     onPress: () => null,
      //     style: "cancel"
      //   },
      //   { text: "YES", onPress: () => BackHandler.exitApp() }
      // ]);
      closeModal(dispatch);
      return true;
    };
  
    React.useEffect(() => {
      BackHandler.addEventListener("hardwareBackPress", backAction);
  
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, []);

  // React.useEffect(() => {
  //   const backAction = () => {
  //     // Alert.alert("Hold on!", "Are you sure you want to go back?", [
  //     //   {
  //     //     text: "Cancel",
  //     //     onPress: () => null,
  //     //     style: "cancel"
  //     //   },
  //     //   { text: "YES", onPress: () => BackHandler.exitApp() }
  //     // ]);
  //     closeModal(dispatch);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, []);


  return (
    <NBModal
      animationType="slide"
      visible={modalOpen}
    >

      {/* <View style={{ */}
      {/* // position: 'fixed',

      // display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'center',

      // zIndex: 100,
      // top: '50px',

      // minHeight: '50vh',
      // width: '80vw'
      //  background-color: var(--main-bg-color),
      // boxShadow: 'black 8px 15px 20px 7px' */}
      {/* }} > */}
      <Header>
        <Left>
          <Button onPress={() => closeModal(dispatch)} transparent>
            <Icon type="FontAwesome" name="arrow-left" />
          </Button>
        </Left>
      </Header>
      <ScrollView>

        <Card>
          <CardItem>
            <Left>
              {/* <Thumbnail source={} /> */}
              <Body>
                <H2>{Title}</H2>
                <Text>{Genre}</Text>
                <Text note>{Released}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Image style={{ height: 400, width: 300, flex: 1 }} source={{ uri: Poster }} />
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                {Plot}
              </Text>

              <Text note>
                {Actors}
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            {streaming
              ? streaming.map(({ display_name, icon, url }: IStreamLocation, i: number) => {
                return (
                  <Image resizeMode="contain" style={{ width: 100, height: 50, marginRight: 5 }} key={i} source={{ uri: icon }} />
                )
              })
              : <Text>No Streaming Available</Text>
            }
          </CardItem>



        </Card>
      </ScrollView>

      {/* <View>
        <Text>
          {Title}
        </Text>
        <Text>
          {`Released: ${Year}`}
        </Text>
        <Subtitle><Text>{Genre}</Text></Subtitle>
        <Subtitle><Text>Rated: {Rated}</Text></Subtitle>
        <Text>
          {Plot}
        </Text>
        <Text>
          {Actors}
        </Text>
        <Button color="primary">
          <Text>
            IMDB
                </Text>
        </Button>
        <Button
          color={buttonProps.color}
          onPress={() => buttonProps.clickFn(modalData)}
        >
          <Text>

            {buttonProps.text}
          </Text>
        </Button>
        
      </View>
      <Button onPress={() => closeModal(dispatch)}><Text>Back</Text></Button>
      </View> */}
    </NBModal >


  )
}
