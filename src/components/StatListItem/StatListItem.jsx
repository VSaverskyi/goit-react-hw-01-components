import PropTypes from "prop-types";
import css from 'components/StatListItem/StateListItem.module.css'

const StatListItem = ({ label, percentage }) => {
    return (
        <>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </>
    )
}

export default StatListItem;

StatListItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}