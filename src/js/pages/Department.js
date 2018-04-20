import React from 'react';
import { get } from 'lodash';
import { cleanContacts } from 'js/helpers/cleanData';
import { withRouteData } from 'react-static';

// TODO: this jsonFileData is temporary. Add it to Wagtail API
import jsonFileData from '__tmpdata/pages';
import SectionHeader from 'js/modules/SectionHeader';
import PageHeader from 'js/modules/PageHeader';
import ContactDetails from 'js/modules/Contact/ContactDetails';

const Department = ({ department }) => {
  const title = get(department, "name", null);
  const body = get(department, "mission", null);
  const contacts = get(department, "contacts", null);
  const image = get(department, "image", null);
  const relatedLinks = get(jsonFileData, "departmentpage.projectsRelated", []);

  //TODO: clean data where sourced
  const contact = cleanContacts(contacts)[0];

  return (
    <div>
      <PageHeader image={image} />

      <div className="wrapper container-fluid">
        <div className="row">
          <div className="coa-main__left col-xs-12 col-lg-8">

            <div className="coa-section">
              <SectionHeader hasHighlight={true}>{title}</SectionHeader>
            </div>

            <div className="coa-section">
              <SectionHeader hasHighlight={true}>Our Mission</SectionHeader>
              <p>{body}</p>
            </div>

          </div>

          <div className="coa-main__right col-xs-12 col-lg-4">

          { contact && <ContactDetails contact={contact} /> }

          </div>
        </div>
      </div>

    </div>
  )
}

export default withRouteData(Department);
