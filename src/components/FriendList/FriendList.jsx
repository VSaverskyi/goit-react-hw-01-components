import PropTypes from "prop-types";
import FriendListItem from "components/FriendListItem/FriendListItem";
import css from 'components/FriendList/FriendList.module.css'

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(item => (
                <li className={css.item} key={item.id}>
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
        friends: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
}