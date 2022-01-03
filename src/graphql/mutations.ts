/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createContent = /* GraphQL */ `
  mutation CreateContent(
    $input: CreateContentInput!
    $condition: ModelContentConditionInput
  ) {
    createContent(input: $input, condition: $condition) {
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
export const updateContent = /* GraphQL */ `
  mutation UpdateContent(
    $input: UpdateContentInput!
    $condition: ModelContentConditionInput
  ) {
    updateContent(input: $input, condition: $condition) {
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
export const deleteContent = /* GraphQL */ `
  mutation DeleteContent(
    $input: DeleteContentInput!
    $condition: ModelContentConditionInput
  ) {
    deleteContent(input: $input, condition: $condition) {
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
export const createAdminUser = /* GraphQL */ `
  mutation CreateAdminUser(
    $input: CreateAdminUserInput!
    $condition: ModelAdminUserConditionInput
  ) {
    createAdminUser(input: $input, condition: $condition) {
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
export const updateAdminUser = /* GraphQL */ `
  mutation UpdateAdminUser(
    $input: UpdateAdminUserInput!
    $condition: ModelAdminUserConditionInput
  ) {
    updateAdminUser(input: $input, condition: $condition) {
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
export const deleteAdminUser = /* GraphQL */ `
  mutation DeleteAdminUser(
    $input: DeleteAdminUserInput!
    $condition: ModelAdminUserConditionInput
  ) {
    deleteAdminUser(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
export const createFilter = /* GraphQL */ `
  mutation CreateFilter(
    $input: CreateFilterInput!
    $condition: ModelFilterConditionInput
  ) {
    createFilter(input: $input, condition: $condition) {
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
export const updateFilter = /* GraphQL */ `
  mutation UpdateFilter(
    $input: UpdateFilterInput!
    $condition: ModelFilterConditionInput
  ) {
    updateFilter(input: $input, condition: $condition) {
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
export const deleteFilter = /* GraphQL */ `
  mutation DeleteFilter(
    $input: DeleteFilterInput!
    $condition: ModelFilterConditionInput
  ) {
    deleteFilter(input: $input, condition: $condition) {
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
export const createContentUnit = /* GraphQL */ `
  mutation CreateContentUnit(
    $input: CreateContentUnitInput!
    $condition: ModelContentUnitConditionInput
  ) {
    createContentUnit(input: $input, condition: $condition) {
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
export const updateContentUnit = /* GraphQL */ `
  mutation UpdateContentUnit(
    $input: UpdateContentUnitInput!
    $condition: ModelContentUnitConditionInput
  ) {
    updateContentUnit(input: $input, condition: $condition) {
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
export const deleteContentUnit = /* GraphQL */ `
  mutation DeleteContentUnit(
    $input: DeleteContentUnitInput!
    $condition: ModelContentUnitConditionInput
  ) {
    deleteContentUnit(input: $input, condition: $condition) {
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
