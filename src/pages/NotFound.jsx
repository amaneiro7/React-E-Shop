import React from 'react';
import '../styles/NotFound.scss';

const NotFound = () => {
    return (
        <div className='page404'>
            <header className="header">
                <h2 className="header__title">
                    404 NOT FOUND
                </h2>
            </header>
            <main className="main">
                <picture className="main__image">
                    <img src="../assets/images/Scarecrow.png" alt="Scarecrow" />
                </picture>
                <section className="main__section">
                    <h2 className="main__section__title">
                        I have bad news for you
                    </h2>
                    <p className="main__section__info">
                        The page you are looking for might be removed or is temporarily unavailable
                    </p>
                    <button type="button" className="main__section__btn">
                        <a href="#Home"></a>
                        BACK TO HOMEPAGE
                    </button>
                </section>
            </main>
        </div>
    );
}

export default NotFound;