import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json'

const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (<div>
    <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats} />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
  </div>);
};

export default App;