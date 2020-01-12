import React from 'react';

import './Loader.scss';

export default React.memo(() => (<div className="loader">
    <div className="loader__container">
        <div className="lds-hourglass loader__container__spinner"></div>
    </div>
</div>));
