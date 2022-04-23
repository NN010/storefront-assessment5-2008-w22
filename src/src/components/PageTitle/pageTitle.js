import React from 'react';

import Styles from './styles.module.css'

function PageTitle ({children, ...props}) {
    return (
        <header className=''>
            <h1>{title || "uiTitle"}</h1>
            <p>{tagline || "uiTagline"}</p>
        </header>
    )
}

export default PageTitle