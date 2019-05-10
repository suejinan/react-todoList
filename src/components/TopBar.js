import React from 'react';
import '../styles/TodoListTemplate.css';

import ModalContainer from '../containers/ModalContainer';

const TopBar = () => {
    return(
        <div>
            {/* 새 할일 생성 영역 - 팝업 창 연동 */}
            <ModalContainer/>
        </div>
    );
};

export default TopBar;