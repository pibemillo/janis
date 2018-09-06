import servicePageFragment from './servicePageFragment';

const getServicePageQuery = `
	query getServicePage($id:ID!) {
	  servicePage(id:$id) {
	    ...servicePageInfo
	  }
	}
	${servicePageFragment}
`;

export default getServicePageQuery;
