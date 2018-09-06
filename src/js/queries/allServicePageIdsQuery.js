const allServicePageIdsQuery = `
  query allServicePages {
    allServicePages {
      edges {
        node {
          id
        }
      }
    }
  }
`;

export default allServicePageIdsQuery;
