import React from 'react';
import { Store } from '../Store';
import { searchPrograms } from "../actions";
import { Button, Container, Header, Icon, Input, Item, Form, View, Text } from "native-base";
// import './SearchBox.css';

export default function SearchBox(): JSX.Element {
  const { dispatch } = React.useContext(Store);
  const [term, setTerm] = React.useState<string>('');

  const updateTerm = (e: any) => {
    setTerm(e.nativeEvent.text);
  }

  const handleSubmit = (): void => {
    searchPrograms(term, dispatch);
  }

  return (
    <Header searchBar rounded>
      <Item>
        <Icon name="ios-search" style={{ width: "25%" }} />
        <Input placeholder="Search" autoFocus={true} onChange={updateTerm} />
      </Item>
      <Item>

        <Button small transparent={true} onPress={handleSubmit}>
          <Text>
            Search
            </Text>
        </Button>
      </Item>
    </Header>
  )
}
