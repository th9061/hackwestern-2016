/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ContactSchema from './contact';

// Database setup
const Realm = require('realm');
let realm = new Realm({
    schema: [ContactSchema]
});
realm.write(() => {
    let contacts = realm.objects('Contact');
    realm.delete(contacts);
});


import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Container, Content, Tabs, Header, Title } from 'native-base';

import TabOne from '../Components/TabOne';
import TabTwo from '../Components/TabTwo';

import uplyncTheme from '../Themes/uplyncTheme';

export default class uplync extends Component {
  render() {
    return (
        <Container>
          <Header>
            <Title>Header</Title>
          </Header>
            <Content theme={ uplyncTheme }>
              <Tabs>
                  <TabOne tabLabel="One"/>
                  <TabTwo tabLabel="Two"/>
              </Tabs>
          </Content>
        </Container>
    );
  }
}

AppRegistry.registerComponent('uplync', () => uplync);
