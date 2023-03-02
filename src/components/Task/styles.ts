import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    toDoCardText: {
      flex: 6,
      color: '#fff',
      fontSize: 15,
      textAlign: 'left'
    },
    doneCardText: {
      flex: 6,
      color: '#808080',
      fontSize: 15,
      textAlign: 'left',
      textDecorationLine: 'line-through',
    },
    toDoCards:{
      backgroundColor: '#262626',
      flexDirection: 'row',
      marginBottom: 10,
      marginHorizontal: 20,
      height: 50,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#333333',
      alignItems: 'center',
      justifyContent: 'center',
    },
    doneCards:{
      backgroundColor: '#262626',
      flexDirection: 'row',
      marginBottom: 10,
      marginHorizontal: 20,
      height: 50,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#262626',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  