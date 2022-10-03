import { Pressable, StyleSheet, Text, View } from 'react-native'

const ToDoItem = ({ item, deleteItem }) => {
	const handleDelete = () => {
		deleteItem(item.id)
	}

	return (
		<View style={styles.goal}>
			<Pressable android_ripple={{ color: '#dddddd' }} onPress={handleDelete}>
				<Text style={styles.text}>{item.text}</Text>
			</Pressable>
		</View>
	)
}
export default ToDoItem

const styles = StyleSheet.create({
	goal: {
		marginVertical: 5,
		backgroundColor: '#20356b',
		borderRadius: 4,
	},
	text: {
		padding: 5,
		color: '#ffffff',
		fontSize: 18,
	},
})
