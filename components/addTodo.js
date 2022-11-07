import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                onChangeText={changeHandler}

            />
            <Button style={styles.Button} onPress={() => submitHandler(text)} title='Add Todo' color='green' />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        marginBottom: 2,
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        borderStyle: 'dashed'
    }
})