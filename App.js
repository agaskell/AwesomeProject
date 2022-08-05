/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useRef } from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { RichEditor } from 'react-native-pell-rich-editor';

const App: () => Node = () => {

  const isDarkMode = useColorScheme() === 'dark';
  
  const [size, setSize] = useState(30);

  const richtext = useRef();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  const phojiImageTag = () => `<img src="https://dev.static.phoji.app/5fb5f271-ecf2-416f-91e6-6373e49fea86/tgh.png?s=${size}" />`;
  
  const html = () => `
            This is editable content.
            <p>${phojiImageTag()} Here's a Phoji at the begining.</p>
            <p>Here's a Phoji at the end ${phojiImageTag()}</p>
            <p>Here's a ${phojiImageTag()} in the middle.</p>
            <p>Here's a Phoji with a line that wraps. ${phojiImageTag()}
            Here's a Phoji with a line that wraps.
            Here's a Phoji with a line that wraps.
            Here's a Phoji with a line that wraps.
            Here's a Phoji with a line that wraps.</p>
          `
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView>
        <RichEditor
          ref={richtext}
          initialContentHTML={html()}
        />
      </ScrollView>
        <Button 
          onPress={() => {
            setSize(size + 1);
            richtext.current.setContentHTML(html());
          }}
          title="Increase Phoji size"
        ></Button>
        <Button
          onPress={() => {
            setSize(size - 1)
            richtext.current.setContentHTML(html());
          }}
          title="Decrease Phoji size">
        </Button>
        <Text>Current Size: {size}</Text>
    </SafeAreaView>
  );
};

export default App;
