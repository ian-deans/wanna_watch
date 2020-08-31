import * as React from 'react';
import { ListItem, Left, Right, Body, Thumbnail, Text } from 'native-base';
import { TouchableHighlight } from 'react-native';

type Props = {
    Title?: string,
    Plot?: string,
    Poster?: string,
    Released?: string,
}

const ListEntry: React.SFC<Props> = ({ Title, Plot, Poster, Released }) => {

    const openPopUp = (event: any) => {
        // console.log(event)
    }

    return (
        <TouchableHighlight onPress={ openPopUp }>

            <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{ uri: Poster }} />
                </Left>
                <Body>
                    <Text>{Title}</Text>
                    <Text note>{Plot}</Text>
                </Body>
                <Right>
                    <Text note>{Released}</Text>
                </Right>
            </ListItem>
        </TouchableHighlight>

    )
}

export default ListEntry;