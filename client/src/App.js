import logo from './logo.svg';
import './App.css';
import ListStudents from './component/ListStudents/ListStudents';
import ListStudentsDB from './component/ListStudentsDB/ListStudentsDB';

function App() {
  return (
   <>
    <h1>This is React Main Component</h1>
    <ListStudentsDB />
   </>
  );
}

export default App;
