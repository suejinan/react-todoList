import React from 'react';
import GroupContainer from '../containers/GroupContainer';
import {NavLink} from 'react-router-dom';

const MenuBar = () => {
    return(
        <div className="nav nav-pills flex-column sidebar">        
            <div className="nav-item">
                <NavLink exact to="/today" activeClassName="active">today</NavLink>
            </div>
            <div className="nav-item">
                <NavLink exact to="/nextSevenDay">next 7 days</NavLink>
            </div>
            <div className="nav-item">
                <NavLink exact to="/myGroups">my groups
                    <GroupContainer />
                </NavLink>        
            </div>
        </div>
    );
};

export default MenuBar;