import React from 'react';
import {Button} from '../../components/';
import {useNavigate} from 'react-router-dom';
import {strings} from '../../utils/constants/strings';
import './HomePage.scss';

export const HomePage = () => {
  const navigate = useNavigate();
  const handlePushToVendorPage = () => {
    navigate('/vendors');
  };

  return (
    <div className="homepage__wrapper">
      <Button
        label={strings.homePage.buttonLabel}
        onClick={handlePushToVendorPage}
      />
    </div>
  );
};
