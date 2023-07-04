import React from "react";
import PropTypes from"prop-types";

const Footer = (props) => {
	return (
        <div class= "footer">
            <h6>{props.title}</h6>
        </div>
    );
};

Footer.propTypes= {
    title: PropTypes.string,
};

export default Footer;