import FormAddFriend from "./FormAddFriend";
import FriendsList from "./FriendsList";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
import { useState } from "react";

export default function App() {
  const [friends, setFriends] = useState(initialFriends)
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {    
      setShowAddFriend((show) => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends ={friends} />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add friend"}</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}
