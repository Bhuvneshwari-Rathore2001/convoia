import ChatList from "./ChatList";
import UserInfo from "./UserInfo";
const List = () => {
  return (
    <div className='flex flex-col border-r-2 pb-10 border-[#dddddd35] w-1/4 py-3'>
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default List;
