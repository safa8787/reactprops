import './App.css';
import Profile from './profile/Profile.js';


function App() {
  const handleName=(full)=>{alert(full)};
const users={ image:'image2.jpg', fullname:'Safa' ,bio:'My Bio', profession:'Developer'}
  return (
    <div className="App">
      <Profile image={users.image} fullname={users.fullname } bio={users.bio} profession={users.profession} handleName={handleName}/>
    </div>
  );
}

export default App;
