import React from 'react';
import { injectIntl } from 'react-intl';
import I18nLink from 'components/I18n/I18nLink';
import ExternalLink from 'components/ExternalLink';
import TwitterSVG from 'components/SVGs/Twitter';
import FacebookSVG from 'components/SVGs/Facebook';
import GithubSVG from 'components/SVGs/Github';
import citySealImg from 'images/coa_seal.png';

const subNav = [
  { text: 'Contact us', url: '/' },
  { text: 'Privacy Policy', url: '/' },
  { text: 'Site map', url: '/' },
  { text: 'Media Center', url: '/' },
  { text: 'Legal notices', url: '/' },
];

const FooterSubNav = () => (
  <div className="container-fluid wrapper">
    <div className="row">
      <div className="col-sm-12">
        <div className="coa-FooterSubNav">
          <div className="coa-FooterSubNav__seal">
            <img src={citySealImg} />
          </div>
          <ul className="coa-FooterSubNav__list">
            {subNav.map(link => (
              <li key={link.text} className="coa-FooterSubNav__item">
                <I18nLink to={link.url} className="coa-FooterSubNav__link">
                  {link.text}
                </I18nLink>
              </li>
            ))}
          </ul>
          <div className="coa-FooterSubNav__icons">
            <ExternalLink
              to="https://www.facebook.com/austintexasgov"
              noIcon={true}
            >
              <FacebookSVG />
            </ExternalLink>
            <ExternalLink to="https://twitter.com/austintexasgov" noIcon={true}>
              <TwitterSVG />
            </ExternalLink>
            <ExternalLink to="https://github.com/cityofaustin" noIcon={true}>
              <GithubSVG />
            </ExternalLink>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FooterSubNav;
