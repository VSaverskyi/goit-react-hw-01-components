import PropTypes from "prop-types";
import StatList from "components/StatList/StatList";
import css from 'components/Statistics/Statistics.module.css'

const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && (
                <h2 className={css.title}>{title}</h2>
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