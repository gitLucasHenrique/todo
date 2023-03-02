import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { TaskInterface } from "../../screen/Home";
import { styles } from "./styles";

interface TaskProps {
    task: TaskInterface
    onComplete: (task: TaskInterface) => void
    onRemove: (taskId: string) => void
}

export default function Task(props: TaskProps) {
    return (
        <View style={styles.toDoCards}>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={() => props.onComplete(props.task)}>
                <Text>
                    {
                        (props.task.done) ? (
                            <Icon name='check-circle' color={'#5e60ce'} />
                        ) : (
                            <Icon name='radio-button-unchecked' color={'#4ea8de'} />
                        )
                    }
                </Text>
            </TouchableOpacity>
            <Text style={styles.toDoCardText}>
                {props.task.content}
            </Text>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={() => props.onRemove(props.task.id)}>
                <Text>
                    <Icon name='delete-outline' color={'#808080'} />
                </Text>
            </TouchableOpacity>
        </View>
    )
}