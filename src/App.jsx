import "./App.css";

import Profile from "./components/profile/Profile";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import FriendList from "./components/FinedList/FriendList";

import userData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

function App() {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
