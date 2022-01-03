/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      login_type
      full_name
      email
      phone
      password
      otp
      email_validation_token
      login_with
      email_validation_token_timestamp
      forgot_password_token
      forgot_password_token_timestamp
      selected_filters
      subscription_type
      subscription_date
      subscription_expire
      subscription_id
      is_email_valid
      is_phone_valid
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        login_type
        full_name
        email
        phone
        password
        otp
        email_validation_token
        login_with
        email_validation_token_timestamp
        forgot_password_token
        forgot_password_token_timestamp
        selected_filters
        subscription_type
        subscription_date
        subscription_expire
        subscription_id
        is_email_valid
        is_phone_valid
        status
        deleted
        created
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContent = /* GraphQL */ `
  query GetContent($id: ID!) {
    getContent(id: $id) {
      id
      title
      subject
      keyword
      author
      language
      organization_name
      content_type
      content_name
      content_url
      uploaded_by
      upload_time
      description
      premium
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
export const listContents = /* GraphQL */ `
  query ListContents(
    $filter: ModelContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        subject
        keyword
        author
        language
        organization_name
        content_type
        content_name
        content_url
        uploaded_by
        upload_time
        description
        premium
        status
        deleted
        created
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAdminUser = /* GraphQL */ `
  query GetAdminUser($id: ID!) {
    getAdminUser(id: $id) {
      id
      name
      email
      phone
      password
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
export const listAdminUsers = /* GraphQL */ `
  query ListAdminUsers(
    $filter: ModelAdminUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdminUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        password
        status
        deleted
        created
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      name
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        status
        deleted
        created
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFilter = /* GraphQL */ `
  query GetFilter($id: ID!) {
    getFilter(id: $id) {
      id
      filter
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
export const listFilters = /* GraphQL */ `
  query ListFilters(
    $filter: ModelFilterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFilters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        filter
        status
        deleted
        created
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContentUnit = /* GraphQL */ `
  query GetContentUnit($id: ID!) {
    getContentUnit(id: $id) {
      id
      course_id
      unit_no
      title
      keyword
      language
      content_type
      content_name
      content_url
      uploaded_by
      upload_time
      status
      deleted
      created
      createdAt
      updatedAt
    }
  }
`;
export const listContentUnits = /* GraphQL */ `
  query ListContentUnits(
    $filter: ModelContentUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContentUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        course_id
        unit_no
        title
        keyword
        language
        content_type
        content_name
        content_url
        uploaded_by
        upload_time
        status
        deleted
        created
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContentByUnitNumber = /* GraphQL */ `
  query GetContentByUnitNumber(
    $course_id: String
    $unit_no: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelContentUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getContentByUnitNumber(
      course_id: $course_id
      unit_no: $unit_no
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        course_id
        unit_no
        title
        keyword
        language
        content_type
        content_name
        content_url
        uploaded_by
        upload_time
        status
        deleted
        created
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
