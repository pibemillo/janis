import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import ExternalLink from 'components/ExternalLink';

const WorkInProgress = ({ isClipped }) =>
  isClipped ? (
    <FormattedMessage
      id="misc.workInProgressClipped"
      values={{
        citySiteLink: (
          <ExternalLink to="http://austintexas.gov">
            austintexas.gov
          </ExternalLink>
        ),
      }}
      defaultMessage="Alpha.austin.gov is a new website and a work in progress. For the full City of Austin website, visit {citySiteLink}."
    />
  ) : (
    <div>
      <h4>
        <FormattedMessage
          id="misc.workInProgress"
          defaultMessage="alpha.austin.gov is a new website and a work in progress."
        />
      </h4>
      <p>
        <FormattedMessage
          id="misc.workInProgressCoA"
          values={{
            citySiteLink: (
              <ExternalLink to="http://austintexas.gov">
                austintexas.gov
              </ExternalLink>
            ),
            projectsSiteLink: (
              <ExternalLink to="http://projects.austintexas.io/projects/austin-digital-services-discovery/about/what-we-are-doing/">
                projects.austintexas.io
              </ExternalLink>
            ),
          }}
          defaultMessage="For the full City of Austin website, visit {citySiteLink}."
        />
      </p>
      <p>
        <FormattedMessage
            id="misc.workInProgressProjects"
            values={{
              projectsSiteLink: (
                <ExternalLink to="http://projects.austintexas.io/projects/austin-digital-services-discovery/about/what-we-are-doing/">
                  projects.austintexas.io
                </ExternalLink>
              )
            }}
            defaultMessage="Learn more about the new website at {projectsSiteLink}."
          />
      </p>
    </div>
  );

WorkInProgress.propTypes = {
  isClipped: PropTypes.bool,
};

export default WorkInProgress;
