import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import NoContent from '../../components/NoContent';
import Task from '../../components/Task';
import { styles } from './styles';

const logo = require('../../../assets/logo.png')

export interface TaskInterface {
  id: string
  content: string
  done: boolean
}

export default function Home() {
    const [inputFocused, setInputFocused] = useState(false)
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState<TaskInterface[]>([])
  
    function handleAddTask () {
      setTasks(prevState => [...prevState, { id: new Date().valueOf().toString(), content: task, done: false }])
      setTask('')
    }
  
    function handleCompleteTask (taskCompleted: TaskInterface) {
      setTasks(prevState => prevState.map(task => {
        if (task.id === taskCompleted.id) {
          task.done = !taskCompleted.done
        }
        return task
      }))
    }
  
    function handleRemoveTask (taskId: string) {
      setTasks(prevState => prevState.filter(task => task.id !== taskId))
    }
  
    function countCompletedTasks() {
      let taskQuantity = 0
      tasks.forEach(task => {
        if (task.done){
          taskQuantity++
        }
      });
      return taskQuantity
    }
  
    return (
      <>
        <View style={styles.containerLogo}>
          <Image source={logo} />
        </View>
        <View style={styles.containerContent}>
          <View style={styles.container}>
            <TextInput
              style={ inputFocused ? styles.inputFocus : styles.inputNotFocus }
              placeholder='Adicione uma nova tarefa'
              placeholderTextColor={'#808080'}
              onFocus={() => setInputFocused(true)}
              onEndEditing={() => setInputFocused(false)}
              onChangeText={setTask}
              value={task}
            />
            <TouchableOpacity onPress={handleAddTask}>
              <Text style={styles.addIcon}>
                <Icon name='control-point' size={20} color='#fff' />
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerTasksStatus}>
            <View style={styles.containerTasksCreated}>
              <Text style={styles.tasksCreated}>Criadas</Text>
              <Text style={styles.tasksQnty}>{tasks.length}</Text>
            </View>
            <View style={styles.containerTasksDone}>
              <Text style={styles.tasksDone}>Concluídas</Text>
              <Text style={styles.tasksQnty}>{countCompletedTasks()}</Text>
            </View>
          </View>
          {
            (tasks.length === 0) ? (
              <View style={styles.containerContentSeparator}>
                <View style={styles.line} />
              </View>
            ) : null
          }
          <FlatList
            style={styles.toDoScroll}
            data= {tasks}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Task key={item.id} task={item} onComplete={() => handleCompleteTask(item)} onRemove={() => handleRemoveTask(item.id)}/>
            )}
            ListEmptyComponent={ () => (
              <NoContent key={'noContent'} boldText={'Você ainda não tem tarefas cadastradas'} text={'Crie tarefas e organize seus itens a fazer'} />
            )
            }
          >
          </FlatList>
        </View>
        <StatusBar
          style='light'
        />
      </>
    );
  }