import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from '../data/user.json';
import data from '../data/data.json';

const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (<div>
    <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats} />
    <Statistics title="Upload stats" stats={data} />
  </div>);
};

export default App;
