import PropTypes from "prop-types";
import css from 'components/FriendListItem/FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <>
            {isOnline ? (<span className={`${css.status} ${css.online}`}></span>) : (<span className={`${css.status} ${css.offline}`}></span>) }
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
        </>
    )
}

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}