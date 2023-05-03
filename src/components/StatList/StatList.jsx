import StatListItem from "components/StatListItem/StatListItem";
import PropTypes from "prop-types";
import css from 'components/StatList/StatList.module.css';
import useGenerateRandomColor from "./useGenerateRandomColor";

// const setBg = () => {
//   return (Math.floor(Math.random()*16777215).toString(16));
//     }

const StatList = ({ statsData }) => {
    const { generateColor } = useGenerateRandomColor();

    return (
        <ul className={css.statList}>
            {statsData.map(item => (
                <li className={css.item} key={item.id} style={{ backgroundColor: "#" + generateColor, }}
                 >
                <StatListItem
                    label={item.label}
                    percentage={item.percentage}
                    />
                </li>
                )
                )}
        </ul>
    )
}

export default StatList;

StatList.propTypes = {
    statsData: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired}))
}