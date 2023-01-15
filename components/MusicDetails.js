import { StyleSheet, Text, View, Image } from 'react-native';


const Details = props => {

    return (
        <View style={Styles.achtergrond}>
            <Text style={Styles.title}>
                {props.songTitle}
            </Text>
            <View style={Styles.foto}>
                <Image style={{ width: 350, height: 250, }} source={{ uri: `${props.photo}` }}></Image>
            </View>
            <Text style={Styles.singer}>
                {props.singer}
            </Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    foto: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    achtergrond: {
        backgroundColor: "#232628",
        paddingBottom: 350
    },
    title: {
        color: "#90EE90",
        textAlign: 'left',
        fontSize: "30px",
        margin: 20
    },
    singer: {
        color: "#fff",
        fontSize: "20px",
        textAlign: 'left',
        margin: 20
    }
});

export default Details;
