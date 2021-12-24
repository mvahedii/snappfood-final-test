import React from 'react';
import './styles.scss';

export const Card = () => {
  return (
    <div className="card__wrapper">
      <a className="vendor_card__wrapper">
        <section className="vendor_card">
          <header className="vendor_card__header">
            <div className="vendor_card__headerbar">
              <img
                src="https://static.snapp-food.com/350x233/uploads/images/vendors/covers/5f54c47d39937.jpg"
                alt=""
                className="vendor_card__header_img"
              />
            </div>
            <div>
              <img
                src="https://static.snapp-food.com/media/cache/vendor_logo/uploads/images/vendors/logos/5f03f6a30f682.jpg"
                alt=""
                
              />
            </div>
          </header>
          <div>
            <div>
              <div>
                <h3></h3>
                <div>
                  <div>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </section>
      </a>
    </div>
  );
};
