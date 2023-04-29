import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <>
        { isOnline ? (<span className="status online"></span>) : (<span className="status offline"></span>) }
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
        </>
    )
}

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}