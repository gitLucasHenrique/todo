import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    toDoCardText: {
      flex: 6,
      color: '#fff',
      fontSize: 15,
      textAlign: 'left'
    },
    toDoCards:{
      backgroundColor: '#262626',
      flexDirection: 'row',
      marginBottom: 10,
      marginHorizontal: 20,
      height: 50,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#333333',
      alignItems: 'center',
      justifyContent: 'center',
    },
    toDoScroll:{
      width: '100%',
      marginTop: 20
    },
    addIcon: {
      backgroundColor: '#1e6f9f',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      marginLeft: 5
    },
    container: {
      flexDirection: 'row',
      paddingHorizontal: 20,
      marginTop: -20,
      marginBottom: 35
    },
    inputNotFocus: {
      flex: 1,
      paddingLeft: 10,
      backgroundColor: '#262626',
      borderRadius: 5,
      color: '#fff'
    },
    inputFocus: {
      flex: 1,
      paddingLeft: 10,
      backgroundColor: '#262626',
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#5e60ce',
      color: '#fff'
    },
    containerLogo: {
      flex: 2,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerContent: {
      flex: 8,
      backgroundColor: '#191919',
      alignItems: 'center',
    },
    containerContentSeparator: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    containerTasksStatus: {
      marginHorizontal: 30,
      marginBottom: 20,
      flexDirection: 'row',
    },
    containerTasksCreated: {
      flex: 1,
      flexDirection: 'row',
      textAlign: 'left'
    },
    containerTasksDone: {
      flexDirection: 'row',
      textAlign: 'right'
    },
    tasksCreated: {
      color: '#4ea8de'
    },
    tasksDone: {
      color: '#8284fa'
    },
    tasksQnty: {
      backgroundColor: '#333333',
      paddingHorizontal: 8,
      borderRadius: 20,
      marginLeft: 10,
      color: '#fff'
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: '#333333',
      marginHorizontal: 20,
    }
  });
  