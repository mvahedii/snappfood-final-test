import React from 'react';
import {strings} from '../../utils/constants/strings';
import {digitsToPersian} from '../../utils/digitsToPersian';
import {CardTypes} from '../../types/card';
import './styles.scss';

export const Card: React.FC<CardTypes> = (props) => {
  const fragmentedDescription = props.description.slice(0, 29) + '...';
  const persianNumber = digitsToPersian(props.deliveryFee.toString());
  const deliveryFee = `${persianNumber} ${strings.vendors.tomans}`;
  return (
    <div className="card">
      <div className="head-card">
        <img className="logo" src={props.logoImage} alt={props.title} />
      </div>

      <div className="img-mask">
        <img src={props.coverImage} alt={props.title} />
      </div>

      <div className="card-content">
        <h3 className="title typography">{props.title}</h3>
        {props.description && (
          <h5 className="description typography">{fragmentedDescription}</h5>
        )}
        <span className="price">
          {strings.vendors.express} : {deliveryFee}
        </span>
      </div>
    </div>
  );
};
