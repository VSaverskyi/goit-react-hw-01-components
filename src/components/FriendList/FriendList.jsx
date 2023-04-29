import PropTypes from "prop-types";
import FriendListItem from "components/FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(item => (
                <li className="item" key={item.id}>
                    <FriendListItem
                        isOnline={item.isOnline}
                        avatar={item.avatar}
                        name={item.name}
                    />
                </li>)
            )}
        </ul>
    )
}

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}