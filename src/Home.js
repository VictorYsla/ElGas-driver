import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//importaciones necesarias para redux
import { connect } from 'react-redux';
import { actions } from './redux';
import { getAllUsers } from './apis/firebase';
import { RFPercentage } from 'react-native-responsive-fontsize';

function Home(props) {
	const probando = async () => {
		await getAllUsers((r) => {
			props.dispatch(actions.actualizarLogin('fafdadfadf'));
		});
	};

	useEffect(() => {
		probando();
	}, []);

	return (
		<View style={styles.container}>
			<Text style={{ fontSize: RFPercentage(2) }}>Hola Mundo</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		flex: 1,
	},
});

const mapStateToProps = (state) => ({
	login: state.login.login,
});
export default connect(mapStateToProps)(Home);
