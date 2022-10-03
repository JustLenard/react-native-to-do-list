import { useState } from 'react'
import { Button, StyleSheet, View, FlatList } from 'react-native'
import InputComponent from './components/InputComponent'
import ToDoItem from './components/ToDoItem'

const App = () => {
	const [modalIsVisible, setModalIsVisible] = useState(false)
	const [toDos, setToDo] = useState([])

	const addToDo = (textInput) => {
		setToDo((toDos) => [...toDos, { text: textInput, id: Math.random().toString() }])
	}

	const deleteItem = (id) => {
		setToDo((currentToDos) => currentToDos.filter((item) => item.id !== id))
	}

	const makeModalVisible = () => {
		setModalIsVisible(true)
	}

	const closeModal = () => {
		setModalIsVisible(false)
	}

	return (
		<View style={styles.appContainer}>
			<Button title="Add new ToDo" color="red" onPress={makeModalVisible} />
			<InputComponent
				addToDo={addToDo}
				modalIsVisible={modalIsVisible}
				closeModal={closeModal}
			/>
			<FlatList
				data={toDos}
				style={styles.goals}
				keyExtractor={(item) => item.id}
				renderItem={(itemData) => {
					return <ToDoItem deleteItem={deleteItem} item={itemData.item} />
				}}
			/>
		</View>
	)
}

export default App

const styles = StyleSheet.create({
	appContainer: {
		marginTop: 30,
		padding: 30,
		flex: 1,
	},
	goals: {
		paddingHorizontal: 10,
		borderTopWidth: 2,
		borderTopColor: '#cccccc',
	},
})
