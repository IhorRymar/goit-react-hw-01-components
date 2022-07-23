import user from '../components/01_User/user.json';
import Profile from '../components/01_User/Profile';
import data from '../components/02_Statistics/data.json';
import Statistics from '../components/02_Statistics/Statistics';
import FriendList from './03_Friend List/FriendList';
import friends from '../components/03_Friend List/friends.json';
import TransactionHistory from './04_Transactions/TransactionHistory';
import transactions from '../components/04_Transactions/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
