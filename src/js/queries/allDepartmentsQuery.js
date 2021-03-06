const allDepartmentsQuery = `
  query allDepartmentsQuery($id:ID) {
    allDepartments(id: $id) {
      edges {
        node {
          id,
          name,
          mission,
          contacts {
            edges {
              node {
                contact {
                  name,
                  phone,
                  location {
                    id,
                    name,
                    street,
                    city,
                    state,
                    country,
                    zip
                  },
                  hours {
                    edges {
                      node {
                        dayOfWeek,
                        startTime,
                        endTime
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`;

export default allDepartmentsQuery;
