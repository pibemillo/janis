import React from 'react';
import { injectIntl } from 'react-intl';
import I18nLink from 'components/I18n/I18nLink';

class FooterNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }

  handleToggle = (i, e) => {
    e.preventDefault();
    this.setState({
      activeIndex: i,
    });
  };

  render() {
    return (
      <div className="coa-FooterNav">
        <div className="container-fluid wrapper">
          <div className="row">
            {this.props.footerData.map((section, i) => (
              <div key={section.title} className="col-md-3 col-xs-12">
                <div>
                  <h4 className="coa-FooterNav__title">
                    <a onClick={this.handleToggle.bind(this, i)}>
                      {section.title}
                    </a>
                  </h4>
                  <ul
                    className={
                      this.state.activeIndex === i
                        ? 'coa-FooterNav__list coa-FooterNav__list--open'
                        : 'coa-FooterNav__list coa-FooterNav__list--closed'
                    }
                  >
                    {section.links.map(links => (
                      <li className="coa-FooterNav__item" key={links.text}>
                        <I18nLink
                          to={links.url}
                          className="coa-FooterNav__link"
                        >
                          {links.text}
                        </I18nLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default injectIntl(FooterNav);
