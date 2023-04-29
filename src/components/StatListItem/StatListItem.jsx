import PropTypes from "prop-types";

const StatListItem = ({ label, percentage }) => {
    return (
        <>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </>
    )
}

export default StatListItem;

StatListItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}