import { useState } from 'react'
import { StyleSheet, TextInput, View, Button, Modal, Image } from 'react-native'

const InputComponent = ({ closeModal, modalIsVisible, addToDo }) => {
	const [textInput, setTextInput] = useState('')

	const handleChange = (enteredText) => {
		setTextInput(enteredText)
	}

	const handleAddToDo = () => {
		if (textInput !== '') {
			addToDo(textInput)
			setTextInput('')
			closeModal()
		}
	}

	return (
		<Modal visible={modalIsVisible} animationType="slide">
			<View style={styles.container}>
				<View style={styles.iamgeWrapper}>
					<Image style={styles.image} source={require('../assets/images/goal.png')} />
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.textInput}
						onChangeText={handleChange}
						value={textInput}
						placeholder="Type your goal"
						placeholderTextColor="#ffffff"
					></TextInput>
				</View>
				<View style={styles.buttonsWrapper}>
					<View style={styles.button}>
						<Button title="Add goal" onPress={handleAddToDo} />
					</View>
					<View style={styles.button}>
						<Button title="Cancel" onPress={closeModal} />
					</View>
				</View>
			</View>
		</Modal>
	)
}
export default InputComponent

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		height: '100%',
		justifyContent: 'center',
		backgroundColor: '#6c37dd',

		padding: 15,
	},
	iamgeWrapper: {
		display: 'flex',
		alignItems: 'center',
	},
	image: {
		marginHorizontal: 'auto',
		width: 100,
		height: 100,
	},
	inputContainer: {
		flexDirection: 'row',
		paddingVertical: 20,
	},
	textInput: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#cccccc',
		padding: 5,
		paddingLeft: 10,
		color: '#ffffff',
	},
	buttonsWrapper: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	button: {
		width: '40%',
		marginHorizontal: 10,
	},
})
