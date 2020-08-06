import React from 'react';

const footerStr = "Copyright @";

function computeFooterMsg() {
    let currentYear = new Date().getFullYear();
    return footerStr + currentYear.toString(); 
}

function Footer() {
    return (<footer><p>{computeFooterMsg()}</p></footer>);
}

export default Footer;