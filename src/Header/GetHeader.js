import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';


function GetHeader() {
    return (
        <div className="header">
            <div className="logo"></div>
            <div className="catalogue">
                <input className="search" type="search" placeholder="Search" />
                <button className="collection">Collection <FontAwesomeIcon icon={faChevronDown} /></button>
            </div>
            <div className="sale">
                <h1 className="discountsOn">
                    <span>Summer</span><br/>
                    Collection
                </h1>
                <h2 className="discountAmount"><span>25%</span> OFF</h2>
                <button className="discountsCatalogue">Details <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
            </div>
        </div>
    );
}

export default GetHeader;
