import {memo} from "react";
import PropTypes from "prop-types";

const SearchMovieItem = ({title})=> {
    return (
            <li>
                <h4>{title}</h4>
            </li>
    )
}

export default memo(SearchMovieItem);

SearchMovieItem.propTypes = {
    title: PropTypes.string.isRequired,
}