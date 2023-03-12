import React from 'react';
import './Footer.scss';
import walletLogo from '../../../logo/black-wallet.svg'
import gridLogo from '../../../logo/grid.svg'
import swapLogo from '../../../logo/swap.svg'
import exploreLogo from '../../../logo/explore.svg'
import settingLogo from '../../../logo/setting.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="tab">
        <img src={walletLogo} alt="icon1" />
      </div>
      <div className="tab">
        <img src={gridLogo} alt="icon2" />
      </div>
      <div className="tab">
        <img src={swapLogo} alt="icon3" />
      </div>
      <div className="tab">
        <img src={exploreLogo} alt="icon4" />
      </div>
      <div className="tab">
        <img src={settingLogo} alt="icon5" />
      </div>
    </div>
  );
};

export default Footer;
