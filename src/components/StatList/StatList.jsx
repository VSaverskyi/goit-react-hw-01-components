import StatListItem from "components/StatListItem/StatListItem";
import PropTypes from "prop-types";

const StatList = ({ statsData }) => {
    return (
        <ul className="stat-list">
            {statsData.map(item => (
                <li className="item" key={item.id}>
                <StatListItem
                    label={item.label}
                    percentage={item.percentage}
                    />
                </li>)
                )}
        </ul>
    )
}

export default StatList;

StatList.propTypes = {
    statsData: PropTypes.array.isRequired
}