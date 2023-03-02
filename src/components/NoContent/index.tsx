import { Text, View } from "react-native"
import { Icon } from "react-native-elements"
import { styles } from "./styles"

interface INoContent {
    boldText: string
    text: string
}

export default function NoContent(props: INoContent) {
    return (
        <View style={styles.emptyContainer}>
            <Icon
                name='event-note'
                size={80}
            />
            <Text style={styles.textBold}>{props.boldText}</Text>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}