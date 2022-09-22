import logo from './logo.svg';
import './App.css';
import CreateUser from './Components/CreateUser/CreateUser';
import AllUsers from './AllUsers';
import { useSelector } from 'react-redux';

function App() {
  const { allUsers } = useSelector((state) => state.userReducer);
  return (
    <div className="users">
      <div style={{width: '50%'}}>
        <CreateUser />
        <div className='users'>
          <AllUsers allUsers={allUsers} />
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
