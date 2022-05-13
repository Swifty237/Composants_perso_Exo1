import { TouchableHighlight, Text, View, TextInput } from 'react-native';

const MyComponent = () => {
    return (
        <View>
            <TextInput style={{height: 50, width: 250, borderWidth: 1, marginBottom: 50, borderRadius: 3}}/>

            <TouchableHighlight style={{backgroundColor : "red", height: 100, width: 250, borderRadius: 3, justifyContent: "center"}}>
                <Text style={{textAlign: "center", color: "white", fontSize: 20 }}>
                    Mon bouton
                </Text>
            </TouchableHighlight>
        </View>
    );
}

export default MyComponent;