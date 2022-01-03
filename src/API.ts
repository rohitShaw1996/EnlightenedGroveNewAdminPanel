/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  login_type?: string | null,
  full_name?: string | null,
  email?: string | null,
  phone?: string | null,
  password?: string | null,
  otp?: number | null,
  email_validation_token?: string | null,
  login_with?: string | null,
  email_validation_token_timestamp?: string | null,
  forgot_password_token?: string | null,
  forgot_password_token_timestamp?: string | null,
  selected_filters?: string | null,
  subscription_type?: string | null,
  subscription_date?: string | null,
  subscription_expire?: string | null,
  subscription_id?: string | null,
  is_email_valid?: boolean | null,
  is_phone_valid?: boolean | null,
  status?: boolean | null,
  deleted?: boolean | null,
  created?: string | null,
};

export type ModelUserConditionInput = {
  login_type?: ModelStringInput | null,
  full_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  password?: ModelStringInput | null,
  otp?: ModelIntInput | null,
  email_validation_token?: ModelStringInput | null,
  login_with?: ModelStringInput | null,
  email_validation_token_timestamp?: ModelStringInput | null,
  forgot_password_token?: ModelStringInput | null,
  forgot_password_token_timestamp?: ModelStringInput | null,
  selected_filters?: ModelStringInput | null,
  subscription_type?: ModelStringInput | null,
  subscription_date?: ModelStringInput | null,
  subscription_expire?: ModelStringInput | null,
  subscription_id?: ModelStringInput | null,
  is_email_valid?: ModelBooleanInput | null,
  is_phone_valid?: ModelBooleanInput | null,
  status?: ModelBooleanInput | null,
  deleted?: ModelBooleanInput | null,
  created?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  login_type?: string | null,
  full_name?: string | null,
  email?: string | null,
  phone?: string | null,
  password?: string | null,
  otp?: number | null,
  email_validation_token?: string | null,
  login_with?: string | null,
  email_validation_token_timestamp?: string | null,
  forgot_password_token?: string | null,
  forgot_password_token_timestamp?: string | null,
  selected_filters?: string | null,
  subscription_type?: string | null,
  subscription_date?: string | null,
  subscription_expire?: string | null,
  subscription_id?: string | null,
  is_email_valid?: boolean | null,
  is_phone_valid?: boolean | null,
  status?: boolean | null,
  deleted?: boolean | null,
  created?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  login_type?: string | null,
  full_name?: string | null,
  email?: string | null,
  phone?: string | null,
  password?: string | null,
  otp?: number | null,
  email_validation_token?: string | null,
  login_with?: string | null,
  email_validation_token_timestamp?: string | null,
  forgot_password_token?: string | null,
  forgot_password_token_timestamp?: string | null,
  selected_filters?: string | null,
  subscription_type?: string | null,
  subscription_date?: string | null,
  subscription_expire?: string | null,
  subscription_id?: string | null,
  is_email_valid?: boolean | null,
  is_phone_valid?: boolean | null,
  status?: boolean | null,
  deleted?: boolean | null,
  created?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateContentInput = {
  id?: string | null,
  title?: string | null,
  subject?: string | null,
  keyword?: string | null,
  author?: string | null,
  language?: string | null,
  organization_name?: string | null,
  content_type?: string | null,
  content_name?: string | null,
  content_url?: string | null,
  uploaded_by?: string | null,
  upload_time?: string | null,
  description?: string | null,
  premium?: boolean | null,
  status?: boolean | null,
  deleted?: boolean | null,
  created?: string | null,
};

export type ModelContentConditionInput = {
  title?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  keyword?: ModelStringInput | null,
  author?: ModelStringInput | null,
  language?: ModelStringInput | null,
  organization_name?: ModelStringInput | null,
  content_type?: ModelStringInput | null,
  content_name?: ModelStringInput | null,
  content_url?: ModelStringInput | null,
  uploaded_by?: ModelStringInput | null,
  upload_time?: ModelStringInput | null,
  description?: ModelStringInput | null,
  premium?: ModelBooleanInput | null,
  status?: ModelBooleanInput | null,
  deleted?: ModelBooleanInput | null,
  created?: ModelStringInput | null,
  and?: Array< ModelContentConditionInput | null > | null,
  or?: Array< ModelContentConditionInput | null > | null,
  not?: ModelContentConditionInput | null,
};

export type Content = {
  __typename: "Content",
  id: string,
  title?: string | null,
  subject?: string | null,
  keyword?: string | null,
  author?: string | null,
  language?: string | null,
  organization_name?: string | null,
  content_type?: string | null,
  content_name?: string | null,
  content_url?: string | null,
  uploaded_by?: string | null,
  upload_time?: string | null,
  description?: string | null,
  premium?: boolean | null,
  status?: boolean | null,
  deleted?: boolean | null,
  created?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContentInput = {
  id: string,
  title?: string | null,
  subject?: string | null,
  keyword?: string | null,
  author?: string | null,
  language?: string | null,
  organization_name?: string | null,
  content_type?: string | null,
  content_name?: string | null,
  content_url?: string | null,
  uploaded_by?: string | null,
  upload_time?: string | null,
  description?: string | null,
  premium?: boolean | null,
  status?: boolean | null,
  deleted?: boolean | null,
  created?: string | null,
};

export type DeleteContentInput = {
  id: string,
};

export type CreateAdminUserInput = {
  id?: string | null,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  password?: string | null,
  status?: boolean | null,
  deleted?: boolean | null,
  created?: string | null,
};

export type ModelAdminUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  password?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  deleted?: ModelBooleanInput | null,
  created?: ModelStringInput | null,
  and?: Array< ModelAdminUserConditionInput | null > | null,
  or?: Array< ModelAdminUserConditionInput | null > | null,
  not?: ModelAdminUserConditionInput | null,
};

export type AdminUser = {
  __typename: "AdminUser",
  id: string,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  password?: string | null,
  status?: boolean | null,
  deleted?: boolean | null,
  created?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAdminUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  password?: string | null,
  status?: boolean | null,
  deleted?: boolean | null,
  created?: string | null,
};

export type DeleteAdminUserInput = {
  id: string,
};

export type CreateCompanyInput = {
  id?: string | null,
  name: string,
  status?: boolean | null,
  deleted?: boolean | null,
  created?: string | null,
};

export type ModelCompanyConditionInput = {
  name?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  deleted?: ModelBooleanInput | null,
  created?: ModelStringInput | null,
  and?: Array< ModelCompanyConditionInput | null > | null,
  or?: Array< ModelCompanyConditionInput | null > | null,
  not?: ModelCompanyConditionInput | null,
};

export type Company = {
  __typename: "Company",
  id: string,
  name: string,
  status?: boolean | null,
  deleted?: boolean | null,
  created?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCompanyInput = {
  id: string,
  name?: string | null,
  status?: boolean | null,
  deleted?: boolean | null,
  created?: string | null,
};

export type DeleteCompanyInput = {
  id: string,
};

export type CreateFilterInput = {
  id?: string | null,
  filter: string,
  status?: boolean | null,
  deleted?: boolean | null,
  created?: string | null,
};

export type ModelFilterConditionInput = {
  filter?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  deleted?: ModelBooleanInput | null,
  created?: ModelStringInput | null,
  and?: Array< ModelFilterConditionInput | null > | null,
  or?: Array< ModelFilterConditionInput | null > | null,
  not?: ModelFilterConditionInput | null,
};

export type Filter = {
  __typename: "Filter",
  id: string,
  filter: string,
  status?: boolean | null,
  deleted?: boolean | null,
  created?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFilterInput = {
  id: string,
  filter?: string | null,
  status?: boolean | null,
  deleted?: boolean | null,
  created?: string | null,
};

export type DeleteFilterInput = {
  id: string,
};

export type CreateContentUnitInput = {
  id?: string | null,
  course_id?: string | null,
  unit_no?: number | null,
  title?: string | null,
  keyword?: string | null,
  language?: string | null,
  content_type?: string | null,
  content_name?: string | null,
  content_url?: string | null,
  uploaded_by?: string | null,
  upload_time?: string | null,
  status?: boolean | null,
  deleted?: boolean | null,
  created?: string | null,
};

export type ModelContentUnitConditionInput = {
  course_id?: ModelStringInput | null,
  unit_no?: ModelIntInput | null,
  title?: ModelStringInput | null,
  keyword?: ModelStringInput | null,
  language?: ModelStringInput | null,
  content_type?: ModelStringInput | null,
  content_name?: ModelStringInput | null,
  content_url?: ModelStringInput | null,
  uploaded_by?: ModelStringInput | null,
  upload_time?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  deleted?: ModelBooleanInput | null,
  created?: ModelStringInput | null,
  and?: Array< ModelContentUnitConditionInput | null > | null,
  or?: Array< ModelContentUnitConditionInput | null > | null,
  not?: ModelContentUnitConditionInput | null,
};

export type ContentUnit = {
  __typename: "ContentUnit",
  id: string,
  course_id?: string | null,
  unit_no?: number | null,
  title?: string | null,
  keyword?: string | null,
  language?: string | null,
  content_type?: string | null,
  content_name?: string | null,
  content_url?: string | null,
  uploaded_by?: string | null,
  upload_time?: string | null,
  status?: boolean | null,
  deleted?: boolean | null,
  created?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContentUnitInput = {
  id: string,
  course_id?: string | null,
  unit_no?: number | null,
  title?: string | null,
  keyword?: string | null,
  language?: string | null,
  content_type?: string | null,
  content_name?: string | null,
  content_url?: string | null,
  uploaded_by?: string | null,
  upload_time?: string | null,
  status?: boolean | null,
  deleted?: boolean | null,
  created?: string | null,
};

export type DeleteContentUnitInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  login_type?: ModelStringInput | null,
  full_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  password?: ModelStringInput | null,
  otp?: ModelIntInput | null,
  email_validation_token?: ModelStringInput | null,
  login_with?: ModelStringInput | null,
  email_validation_token_timestamp?: ModelStringInput | null,
  forgot_password_token?: ModelStringInput | null,
  forgot_password_token_timestamp?: ModelStringInput | null,
  selected_filters?: ModelStringInput | null,
  subscription_type?: ModelStringInput | null,
  subscription_date?: ModelStringInput | null,
  subscription_expire?: ModelStringInput | null,
  subscription_id?: ModelStringInput | null,
  is_email_valid?: ModelBooleanInput | null,
  is_phone_valid?: ModelBooleanInput | null,
  status?: ModelBooleanInput | null,
  deleted?: ModelBooleanInput | null,
  created?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelContentFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  keyword?: ModelStringInput | null,
  author?: ModelStringInput | null,
  language?: ModelStringInput | null,
  organization_name?: ModelStringInput | null,
  content_type?: ModelStringInput | null,
  content_name?: ModelStringInput | null,
  content_url?: ModelStringInput | null,
  uploaded_by?: ModelStringInput | null,
  upload_time?: ModelStringInput | null,
  description?: ModelStringInput | null,
  premium?: ModelBooleanInput | null,
  status?: ModelBooleanInput | null,
  deleted?: ModelBooleanInput | null,
  created?: ModelStringInput | null,
  and?: Array< ModelContentFilterInput | null > | null,
  or?: Array< ModelContentFilterInput | null > | null,
  not?: ModelContentFilterInput | null,
};

export type ModelContentConnection = {
  __typename: "ModelContentConnection",
  items?:  Array<Content | null > | null,
  nextToken?: string | null,
};

export type ModelAdminUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  password?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  deleted?: ModelBooleanInput | null,
  created?: ModelStringInput | null,
  and?: Array< ModelAdminUserFilterInput | null > | null,
  or?: Array< ModelAdminUserFilterInput | null > | null,
  not?: ModelAdminUserFilterInput | null,
};

export type ModelAdminUserConnection = {
  __typename: "ModelAdminUserConnection",
  items?:  Array<AdminUser | null > | null,
  nextToken?: string | null,
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  deleted?: ModelBooleanInput | null,
  created?: ModelStringInput | null,
  and?: Array< ModelCompanyFilterInput | null > | null,
  or?: Array< ModelCompanyFilterInput | null > | null,
  not?: ModelCompanyFilterInput | null,
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection",
  items?:  Array<Company | null > | null,
  nextToken?: string | null,
};

export type ModelFilterFilterInput = {
  id?: ModelIDInput | null,
  filter?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  deleted?: ModelBooleanInput | null,
  created?: ModelStringInput | null,
  and?: Array< ModelFilterFilterInput | null > | null,
  or?: Array< ModelFilterFilterInput | null > | null,
  not?: ModelFilterFilterInput | null,
};

export type ModelFilterConnection = {
  __typename: "ModelFilterConnection",
  items?:  Array<Filter | null > | null,
  nextToken?: string | null,
};

export type ModelContentUnitFilterInput = {
  id?: ModelIDInput | null,
  course_id?: ModelStringInput | null,
  unit_no?: ModelIntInput | null,
  title?: ModelStringInput | null,
  keyword?: ModelStringInput | null,
  language?: ModelStringInput | null,
  content_type?: ModelStringInput | null,
  content_name?: ModelStringInput | null,
  content_url?: ModelStringInput | null,
  uploaded_by?: ModelStringInput | null,
  upload_time?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  deleted?: ModelBooleanInput | null,
  created?: ModelStringInput | null,
  and?: Array< ModelContentUnitFilterInput | null > | null,
  or?: Array< ModelContentUnitFilterInput | null > | null,
  not?: ModelContentUnitFilterInput | null,
};

export type ModelContentUnitConnection = {
  __typename: "ModelContentUnitConnection",
  items?:  Array<ContentUnit | null > | null,
  nextToken?: string | null,
};

export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    login_type?: string | null,
    full_name?: string | null,
    email?: string | null,
    phone?: string | null,
    password?: string | null,
    otp?: number | null,
    email_validation_token?: string | null,
    login_with?: string | null,
    email_validation_token_timestamp?: string | null,
    forgot_password_token?: string | null,
    forgot_password_token_timestamp?: string | null,
    selected_filters?: string | null,
    subscription_type?: string | null,
    subscription_date?: string | null,
    subscription_expire?: string | null,
    subscription_id?: string | null,
    is_email_valid?: boolean | null,
    is_phone_valid?: boolean | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    login_type?: string | null,
    full_name?: string | null,
    email?: string | null,
    phone?: string | null,
    password?: string | null,
    otp?: number | null,
    email_validation_token?: string | null,
    login_with?: string | null,
    email_validation_token_timestamp?: string | null,
    forgot_password_token?: string | null,
    forgot_password_token_timestamp?: string | null,
    selected_filters?: string | null,
    subscription_type?: string | null,
    subscription_date?: string | null,
    subscription_expire?: string | null,
    subscription_id?: string | null,
    is_email_valid?: boolean | null,
    is_phone_valid?: boolean | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    login_type?: string | null,
    full_name?: string | null,
    email?: string | null,
    phone?: string | null,
    password?: string | null,
    otp?: number | null,
    email_validation_token?: string | null,
    login_with?: string | null,
    email_validation_token_timestamp?: string | null,
    forgot_password_token?: string | null,
    forgot_password_token_timestamp?: string | null,
    selected_filters?: string | null,
    subscription_type?: string | null,
    subscription_date?: string | null,
    subscription_expire?: string | null,
    subscription_id?: string | null,
    is_email_valid?: boolean | null,
    is_phone_valid?: boolean | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContentMutationVariables = {
  input: CreateContentInput,
  condition?: ModelContentConditionInput | null,
};

export type CreateContentMutation = {
  createContent?:  {
    __typename: "Content",
    id: string,
    title?: string | null,
    subject?: string | null,
    keyword?: string | null,
    author?: string | null,
    language?: string | null,
    organization_name?: string | null,
    content_type?: string | null,
    content_name?: string | null,
    content_url?: string | null,
    uploaded_by?: string | null,
    upload_time?: string | null,
    description?: string | null,
    premium?: boolean | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContentMutationVariables = {
  input: UpdateContentInput,
  condition?: ModelContentConditionInput | null,
};

export type UpdateContentMutation = {
  updateContent?:  {
    __typename: "Content",
    id: string,
    title?: string | null,
    subject?: string | null,
    keyword?: string | null,
    author?: string | null,
    language?: string | null,
    organization_name?: string | null,
    content_type?: string | null,
    content_name?: string | null,
    content_url?: string | null,
    uploaded_by?: string | null,
    upload_time?: string | null,
    description?: string | null,
    premium?: boolean | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContentMutationVariables = {
  input: DeleteContentInput,
  condition?: ModelContentConditionInput | null,
};

export type DeleteContentMutation = {
  deleteContent?:  {
    __typename: "Content",
    id: string,
    title?: string | null,
    subject?: string | null,
    keyword?: string | null,
    author?: string | null,
    language?: string | null,
    organization_name?: string | null,
    content_type?: string | null,
    content_name?: string | null,
    content_url?: string | null,
    uploaded_by?: string | null,
    upload_time?: string | null,
    description?: string | null,
    premium?: boolean | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAdminUserMutationVariables = {
  input: CreateAdminUserInput,
  condition?: ModelAdminUserConditionInput | null,
};

export type CreateAdminUserMutation = {
  createAdminUser?:  {
    __typename: "AdminUser",
    id: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    password?: string | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAdminUserMutationVariables = {
  input: UpdateAdminUserInput,
  condition?: ModelAdminUserConditionInput | null,
};

export type UpdateAdminUserMutation = {
  updateAdminUser?:  {
    __typename: "AdminUser",
    id: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    password?: string | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAdminUserMutationVariables = {
  input: DeleteAdminUserInput,
  condition?: ModelAdminUserConditionInput | null,
};

export type DeleteAdminUserMutation = {
  deleteAdminUser?:  {
    __typename: "AdminUser",
    id: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    password?: string | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCompanyMutationVariables = {
  input: CreateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type CreateCompanyMutation = {
  createCompany?:  {
    __typename: "Company",
    id: string,
    name: string,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCompanyMutationVariables = {
  input: UpdateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type UpdateCompanyMutation = {
  updateCompany?:  {
    __typename: "Company",
    id: string,
    name: string,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCompanyMutationVariables = {
  input: DeleteCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type DeleteCompanyMutation = {
  deleteCompany?:  {
    __typename: "Company",
    id: string,
    name: string,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFilterMutationVariables = {
  input: CreateFilterInput,
  condition?: ModelFilterConditionInput | null,
};

export type CreateFilterMutation = {
  createFilter?:  {
    __typename: "Filter",
    id: string,
    filter: string,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFilterMutationVariables = {
  input: UpdateFilterInput,
  condition?: ModelFilterConditionInput | null,
};

export type UpdateFilterMutation = {
  updateFilter?:  {
    __typename: "Filter",
    id: string,
    filter: string,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFilterMutationVariables = {
  input: DeleteFilterInput,
  condition?: ModelFilterConditionInput | null,
};

export type DeleteFilterMutation = {
  deleteFilter?:  {
    __typename: "Filter",
    id: string,
    filter: string,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContentUnitMutationVariables = {
  input: CreateContentUnitInput,
  condition?: ModelContentUnitConditionInput | null,
};

export type CreateContentUnitMutation = {
  createContentUnit?:  {
    __typename: "ContentUnit",
    id: string,
    course_id?: string | null,
    unit_no?: number | null,
    title?: string | null,
    keyword?: string | null,
    language?: string | null,
    content_type?: string | null,
    content_name?: string | null,
    content_url?: string | null,
    uploaded_by?: string | null,
    upload_time?: string | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContentUnitMutationVariables = {
  input: UpdateContentUnitInput,
  condition?: ModelContentUnitConditionInput | null,
};

export type UpdateContentUnitMutation = {
  updateContentUnit?:  {
    __typename: "ContentUnit",
    id: string,
    course_id?: string | null,
    unit_no?: number | null,
    title?: string | null,
    keyword?: string | null,
    language?: string | null,
    content_type?: string | null,
    content_name?: string | null,
    content_url?: string | null,
    uploaded_by?: string | null,
    upload_time?: string | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContentUnitMutationVariables = {
  input: DeleteContentUnitInput,
  condition?: ModelContentUnitConditionInput | null,
};

export type DeleteContentUnitMutation = {
  deleteContentUnit?:  {
    __typename: "ContentUnit",
    id: string,
    course_id?: string | null,
    unit_no?: number | null,
    title?: string | null,
    keyword?: string | null,
    language?: string | null,
    content_type?: string | null,
    content_name?: string | null,
    content_url?: string | null,
    uploaded_by?: string | null,
    upload_time?: string | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    login_type?: string | null,
    full_name?: string | null,
    email?: string | null,
    phone?: string | null,
    password?: string | null,
    otp?: number | null,
    email_validation_token?: string | null,
    login_with?: string | null,
    email_validation_token_timestamp?: string | null,
    forgot_password_token?: string | null,
    forgot_password_token_timestamp?: string | null,
    selected_filters?: string | null,
    subscription_type?: string | null,
    subscription_date?: string | null,
    subscription_expire?: string | null,
    subscription_id?: string | null,
    is_email_valid?: boolean | null,
    is_phone_valid?: boolean | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      login_type?: string | null,
      full_name?: string | null,
      email?: string | null,
      phone?: string | null,
      password?: string | null,
      otp?: number | null,
      email_validation_token?: string | null,
      login_with?: string | null,
      email_validation_token_timestamp?: string | null,
      forgot_password_token?: string | null,
      forgot_password_token_timestamp?: string | null,
      selected_filters?: string | null,
      subscription_type?: string | null,
      subscription_date?: string | null,
      subscription_expire?: string | null,
      subscription_id?: string | null,
      is_email_valid?: boolean | null,
      is_phone_valid?: boolean | null,
      status?: boolean | null,
      deleted?: boolean | null,
      created?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetContentQueryVariables = {
  id: string,
};

export type GetContentQuery = {
  getContent?:  {
    __typename: "Content",
    id: string,
    title?: string | null,
    subject?: string | null,
    keyword?: string | null,
    author?: string | null,
    language?: string | null,
    organization_name?: string | null,
    content_type?: string | null,
    content_name?: string | null,
    content_url?: string | null,
    uploaded_by?: string | null,
    upload_time?: string | null,
    description?: string | null,
    premium?: boolean | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContentsQueryVariables = {
  filter?: ModelContentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContentsQuery = {
  listContents?:  {
    __typename: "ModelContentConnection",
    items?:  Array< {
      __typename: "Content",
      id: string,
      title?: string | null,
      subject?: string | null,
      keyword?: string | null,
      author?: string | null,
      language?: string | null,
      organization_name?: string | null,
      content_type?: string | null,
      content_name?: string | null,
      content_url?: string | null,
      uploaded_by?: string | null,
      upload_time?: string | null,
      description?: string | null,
      premium?: boolean | null,
      status?: boolean | null,
      deleted?: boolean | null,
      created?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAdminUserQueryVariables = {
  id: string,
};

export type GetAdminUserQuery = {
  getAdminUser?:  {
    __typename: "AdminUser",
    id: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    password?: string | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAdminUsersQueryVariables = {
  filter?: ModelAdminUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdminUsersQuery = {
  listAdminUsers?:  {
    __typename: "ModelAdminUserConnection",
    items?:  Array< {
      __typename: "AdminUser",
      id: string,
      name?: string | null,
      email?: string | null,
      phone?: string | null,
      password?: string | null,
      status?: boolean | null,
      deleted?: boolean | null,
      created?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCompanyQueryVariables = {
  id: string,
};

export type GetCompanyQuery = {
  getCompany?:  {
    __typename: "Company",
    id: string,
    name: string,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCompaniesQueryVariables = {
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompaniesQuery = {
  listCompanies?:  {
    __typename: "ModelCompanyConnection",
    items?:  Array< {
      __typename: "Company",
      id: string,
      name: string,
      status?: boolean | null,
      deleted?: boolean | null,
      created?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetFilterQueryVariables = {
  id: string,
};

export type GetFilterQuery = {
  getFilter?:  {
    __typename: "Filter",
    id: string,
    filter: string,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFiltersQueryVariables = {
  filter?: ModelFilterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFiltersQuery = {
  listFilters?:  {
    __typename: "ModelFilterConnection",
    items?:  Array< {
      __typename: "Filter",
      id: string,
      filter: string,
      status?: boolean | null,
      deleted?: boolean | null,
      created?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetContentUnitQueryVariables = {
  id: string,
};

export type GetContentUnitQuery = {
  getContentUnit?:  {
    __typename: "ContentUnit",
    id: string,
    course_id?: string | null,
    unit_no?: number | null,
    title?: string | null,
    keyword?: string | null,
    language?: string | null,
    content_type?: string | null,
    content_name?: string | null,
    content_url?: string | null,
    uploaded_by?: string | null,
    upload_time?: string | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContentUnitsQueryVariables = {
  filter?: ModelContentUnitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContentUnitsQuery = {
  listContentUnits?:  {
    __typename: "ModelContentUnitConnection",
    items?:  Array< {
      __typename: "ContentUnit",
      id: string,
      course_id?: string | null,
      unit_no?: number | null,
      title?: string | null,
      keyword?: string | null,
      language?: string | null,
      content_type?: string | null,
      content_name?: string | null,
      content_url?: string | null,
      uploaded_by?: string | null,
      upload_time?: string | null,
      status?: boolean | null,
      deleted?: boolean | null,
      created?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetContentByUnitNumberQueryVariables = {
  course_id?: string | null,
  unit_no?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelContentUnitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetContentByUnitNumberQuery = {
  getContentByUnitNumber?:  {
    __typename: "ModelContentUnitConnection",
    items?:  Array< {
      __typename: "ContentUnit",
      id: string,
      course_id?: string | null,
      unit_no?: number | null,
      title?: string | null,
      keyword?: string | null,
      language?: string | null,
      content_type?: string | null,
      content_name?: string | null,
      content_url?: string | null,
      uploaded_by?: string | null,
      upload_time?: string | null,
      status?: boolean | null,
      deleted?: boolean | null,
      created?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    login_type?: string | null,
    full_name?: string | null,
    email?: string | null,
    phone?: string | null,
    password?: string | null,
    otp?: number | null,
    email_validation_token?: string | null,
    login_with?: string | null,
    email_validation_token_timestamp?: string | null,
    forgot_password_token?: string | null,
    forgot_password_token_timestamp?: string | null,
    selected_filters?: string | null,
    subscription_type?: string | null,
    subscription_date?: string | null,
    subscription_expire?: string | null,
    subscription_id?: string | null,
    is_email_valid?: boolean | null,
    is_phone_valid?: boolean | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    login_type?: string | null,
    full_name?: string | null,
    email?: string | null,
    phone?: string | null,
    password?: string | null,
    otp?: number | null,
    email_validation_token?: string | null,
    login_with?: string | null,
    email_validation_token_timestamp?: string | null,
    forgot_password_token?: string | null,
    forgot_password_token_timestamp?: string | null,
    selected_filters?: string | null,
    subscription_type?: string | null,
    subscription_date?: string | null,
    subscription_expire?: string | null,
    subscription_id?: string | null,
    is_email_valid?: boolean | null,
    is_phone_valid?: boolean | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    login_type?: string | null,
    full_name?: string | null,
    email?: string | null,
    phone?: string | null,
    password?: string | null,
    otp?: number | null,
    email_validation_token?: string | null,
    login_with?: string | null,
    email_validation_token_timestamp?: string | null,
    forgot_password_token?: string | null,
    forgot_password_token_timestamp?: string | null,
    selected_filters?: string | null,
    subscription_type?: string | null,
    subscription_date?: string | null,
    subscription_expire?: string | null,
    subscription_id?: string | null,
    is_email_valid?: boolean | null,
    is_phone_valid?: boolean | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContentSubscription = {
  onCreateContent?:  {
    __typename: "Content",
    id: string,
    title?: string | null,
    subject?: string | null,
    keyword?: string | null,
    author?: string | null,
    language?: string | null,
    organization_name?: string | null,
    content_type?: string | null,
    content_name?: string | null,
    content_url?: string | null,
    uploaded_by?: string | null,
    upload_time?: string | null,
    description?: string | null,
    premium?: boolean | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContentSubscription = {
  onUpdateContent?:  {
    __typename: "Content",
    id: string,
    title?: string | null,
    subject?: string | null,
    keyword?: string | null,
    author?: string | null,
    language?: string | null,
    organization_name?: string | null,
    content_type?: string | null,
    content_name?: string | null,
    content_url?: string | null,
    uploaded_by?: string | null,
    upload_time?: string | null,
    description?: string | null,
    premium?: boolean | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContentSubscription = {
  onDeleteContent?:  {
    __typename: "Content",
    id: string,
    title?: string | null,
    subject?: string | null,
    keyword?: string | null,
    author?: string | null,
    language?: string | null,
    organization_name?: string | null,
    content_type?: string | null,
    content_name?: string | null,
    content_url?: string | null,
    uploaded_by?: string | null,
    upload_time?: string | null,
    description?: string | null,
    premium?: boolean | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAdminUserSubscription = {
  onCreateAdminUser?:  {
    __typename: "AdminUser",
    id: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    password?: string | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAdminUserSubscription = {
  onUpdateAdminUser?:  {
    __typename: "AdminUser",
    id: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    password?: string | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAdminUserSubscription = {
  onDeleteAdminUser?:  {
    __typename: "AdminUser",
    id: string,
    name?: string | null,
    email?: string | null,
    phone?: string | null,
    password?: string | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCompanySubscription = {
  onCreateCompany?:  {
    __typename: "Company",
    id: string,
    name: string,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCompanySubscription = {
  onUpdateCompany?:  {
    __typename: "Company",
    id: string,
    name: string,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCompanySubscription = {
  onDeleteCompany?:  {
    __typename: "Company",
    id: string,
    name: string,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFilterSubscription = {
  onCreateFilter?:  {
    __typename: "Filter",
    id: string,
    filter: string,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFilterSubscription = {
  onUpdateFilter?:  {
    __typename: "Filter",
    id: string,
    filter: string,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFilterSubscription = {
  onDeleteFilter?:  {
    __typename: "Filter",
    id: string,
    filter: string,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContentUnitSubscription = {
  onCreateContentUnit?:  {
    __typename: "ContentUnit",
    id: string,
    course_id?: string | null,
    unit_no?: number | null,
    title?: string | null,
    keyword?: string | null,
    language?: string | null,
    content_type?: string | null,
    content_name?: string | null,
    content_url?: string | null,
    uploaded_by?: string | null,
    upload_time?: string | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContentUnitSubscription = {
  onUpdateContentUnit?:  {
    __typename: "ContentUnit",
    id: string,
    course_id?: string | null,
    unit_no?: number | null,
    title?: string | null,
    keyword?: string | null,
    language?: string | null,
    content_type?: string | null,
    content_name?: string | null,
    content_url?: string | null,
    uploaded_by?: string | null,
    upload_time?: string | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContentUnitSubscription = {
  onDeleteContentUnit?:  {
    __typename: "ContentUnit",
    id: string,
    course_id?: string | null,
    unit_no?: number | null,
    title?: string | null,
    keyword?: string | null,
    language?: string | null,
    content_type?: string | null,
    content_name?: string | null,
    content_url?: string | null,
    uploaded_by?: string | null,
    upload_time?: string | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
