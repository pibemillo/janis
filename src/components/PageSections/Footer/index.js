import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import { misc as i18n } from 'js/i18n/definitions';

import WorkInProgress from 'components/WorkInProgress';

import FooterNav from './FooterNav';
import FooterSubNav from './FooterSubNav';

const Footer = ({ footerData, intl }) => (
  <footer className="coa-Footer">
    <FooterNav footerData={footerData} />
    <FooterSubNav />
    <div>
      <div className="container-fluid wrapper">
        <div className="row" />
      </div>
    </div>
    <div className="coa-Footer__work-in-progress">
      <div className="container-fluid wrapper">
        <div className="coa-Footer__work-in-progress--background row">
          <div className="col-md-6 col-md-offset-3">
            <div className="">
              <WorkInProgress />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default injectIntl(Footer);
