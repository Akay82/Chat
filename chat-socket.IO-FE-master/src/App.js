import './App.css';
import MainForm from './components/MainForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatRoom  from './components/ChatRoom';

function App() {
	return ( 
		<div className="bck">
		<div className="container-fluid text-dark d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
			<Router>
				<Routes>
					<Route index element={<MainForm />} />
					<Route path="chat/:roomId" element={<ChatRoom />} />
					<Route path="*" element={<h1>No match</h1>} />
				</Routes>
			</Router>
		</div>
		</div>
		
	);
}

export default App;
