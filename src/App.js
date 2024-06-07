import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import Delete from './components/Delete';
import ViewAllStudent from './components/ViewAllStudent';

function App() {
  return (
    <div >
      <AddStudent/>
      <SearchStudent/>
      <Delete/>
      <ViewAllStudent/>
    </div>
  );
}

export default App;
