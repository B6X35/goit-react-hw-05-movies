import {memo} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const PopularMovieItem = ({title})=> {
    return (
        <Link to={`/`}>
            <li>
                <h4>{title}</h4>
            </li>
        </Link>
    )
}

export default memo(PopularMovieItem);

PopularMovieItem.propTypes = {
    title: PropTypes.string.isRequired,
}