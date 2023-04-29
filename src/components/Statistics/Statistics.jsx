import PropTypes from "prop-types";
import StatList from "components/StatList/StatList";

const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
            {title && (
                <h2 className="title">{title}</h2>
            )
            }
            <StatList statsData={stats}/> 
        </section>
    )
}

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}