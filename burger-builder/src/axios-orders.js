import axios from 'axios';

const instance = axios.create({
	baseUrl: 'https://react-my-burger-macanrox.firebaseio.com/ '
});

export default instance;