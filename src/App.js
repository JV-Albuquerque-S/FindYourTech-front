import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

function App() {

	return (
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<SignIn/>} />
						<Route path="/sign-up" element={<SignUp/>} />
					</Routes>
				</BrowserRouter>
	);
}

export default App;