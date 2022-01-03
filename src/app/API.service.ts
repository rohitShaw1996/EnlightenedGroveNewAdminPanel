/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUsersInput = {
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
  is_email_valid?: boolean | null,
  is_phone_valid?: boolean | null,
  status?: boolean | null,
  deleted?: boolean | null,
  created?: string | null,
  _version?: number | null,
};

export type ModelUsersConditionInput = {
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
  is_email_valid?: ModelBooleanInput | null,
  is_phone_valid?: ModelBooleanInput | null,
  status?: ModelBooleanInput | null,
  deleted?: ModelBooleanInput | null,
  created?: ModelStringInput | null,
  and?: Array< ModelUsersConditionInput | null > | null,
  or?: Array< ModelUsersConditionInput | null > | null,
  not?: ModelUsersConditionInput | null,
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

export type Users = {
  __typename: "Users",
  id?: string,
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
  is_email_valid?: boolean | null,
  is_phone_valid?: boolean | null,
  status?: boolean | null,
  deleted?: boolean | null,
  created?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateUsersInput = {
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
  is_email_valid?: boolean | null,
  is_phone_valid?: boolean | null,
  status?: boolean | null,
  deleted?: boolean | null,
  created?: string | null,
  _version?: number | null,
};

export type DeleteUsersInput = {
  id: string,
  _version?: number | null,
};

export type ModelUsersFilterInput = {
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
  is_email_valid?: ModelBooleanInput | null,
  is_phone_valid?: ModelBooleanInput | null,
  status?: ModelBooleanInput | null,
  deleted?: ModelBooleanInput | null,
  created?: ModelStringInput | null,
  and?: Array< ModelUsersFilterInput | null > | null,
  or?: Array< ModelUsersFilterInput | null > | null,
  not?: ModelUsersFilterInput | null,
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

export type ModelUsersConnection = {
  __typename: "ModelUsersConnection",
  items?:  Array<Users | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateUsersMutationVariables = {
  input?: CreateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type CreateUsersMutation = {
  createUsers?:  {
    __typename: "Users",
    id: string,
    login_type?: string | null,
    full_name?: string | null,
    email?: string | null,
    phone?: string | null,
    password?: string | null,
    otp?: number | null,
    email_validation_token?: string | null,
    email_validation_token_timestamp?: string | null,
    forgot_password_token?: string | null,
    forgot_password_token_timestamp?: string | null,
    is_email_valid?: boolean | null,
    is_phone_valid?: boolean | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUsersMutationVariables = {
  input?: UpdateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type UpdateUsersMutation = {
  updateUsers?:  {
    __typename: "Users",
    id: string,
    login_type?: string | null,
    full_name?: string | null,
    email?: string | null,
    phone?: string | null,
    password?: string | null,
    otp?: number | null,
    email_validation_token?: string | null,
    email_validation_token_timestamp?: string | null,
    forgot_password_token?: string | null,
    forgot_password_token_timestamp?: string | null,
    is_email_valid?: boolean | null,
    is_phone_valid?: boolean | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUsersMutationVariables = {
  input?: DeleteUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type DeleteUsersMutation = {
  deleteUsers?:  {
    __typename: "Users",
    id: string,
    login_type?: string | null,
    full_name?: string | null,
    email?: string | null,
    phone?: string | null,
    password?: string | null,
    otp?: number | null,
    email_validation_token?: string | null,
    email_validation_token_timestamp?: string | null,
    forgot_password_token?: string | null,
    forgot_password_token_timestamp?: string | null,
    is_email_valid?: boolean | null,
    is_phone_valid?: boolean | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUsersQueryVariables = {
  id?: string,
};

export type GetUsersQuery = {
  getUsers?:  {
    __typename: "Users",
    id: string,
    login_type?: string | null,
    full_name?: string | null,
    email?: string | null,
    phone?: string | null,
    password?: string | null,
    otp?: number | null,
    email_validation_token?: string | null,
    email_validation_token_timestamp?: string | null,
    forgot_password_token?: string | null,
    forgot_password_token_timestamp?: string | null,
    is_email_valid?: boolean | null,
    is_phone_valid?: boolean | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserssQueryVariables = {
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserssQuery = {
  listUserss?:  {
    __typename: "ModelUsersConnection",
    items?:  Array< {
      __typename: "Users",
      id: string,
      login_type?: string | null,
      full_name?: string | null,
      email?: string | null,
      phone?: string | null,
      password?: string | null,
      otp?: number | null,
      email_validation_token?: string | null,
      email_validation_token_timestamp?: string | null,
      forgot_password_token?: string | null,
      forgot_password_token_timestamp?: string | null,
      is_email_valid?: boolean | null,
      is_phone_valid?: boolean | null,
      status?: boolean | null,
      deleted?: boolean | null,
      created?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUsersConnection",
    items?:  Array< {
      __typename: "Users",
      id: string,
      login_type?: string | null,
      full_name?: string | null,
      email?: string | null,
      phone?: string | null,
      password?: string | null,
      otp?: number | null,
      email_validation_token?: string | null,
      email_validation_token_timestamp?: string | null,
      forgot_password_token?: string | null,
      forgot_password_token_timestamp?: string | null,
      is_email_valid?: boolean | null,
      is_phone_valid?: boolean | null,
      status?: boolean | null,
      deleted?: boolean | null,
      created?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUsersSubscription = {
  onCreateUsers?:  {
    __typename: "Users",
    id: string,
    login_type?: string | null,
    full_name?: string | null,
    email?: string | null,
    phone?: string | null,
    password?: string | null,
    otp?: number | null,
    email_validation_token?: string | null,
    email_validation_token_timestamp?: string | null,
    forgot_password_token?: string | null,
    forgot_password_token_timestamp?: string | null,
    is_email_valid?: boolean | null,
    is_phone_valid?: boolean | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUsersSubscription = {
  onUpdateUsers?:  {
    __typename: "Users",
    id: string,
    login_type?: string | null,
    full_name?: string | null,
    email?: string | null,
    phone?: string | null,
    password?: string | null,
    otp?: number | null,
    email_validation_token?: string | null,
    email_validation_token_timestamp?: string | null,
    forgot_password_token?: string | null,
    forgot_password_token_timestamp?: string | null,
    is_email_valid?: boolean | null,
    is_phone_valid?: boolean | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUsersSubscription = {
  onDeleteUsers?:  {
    __typename: "Users",
    id: string,
    login_type?: string | null,
    full_name?: string | null,
    email?: string | null,
    phone?: string | null,
    password?: string | null,
    otp?: number | null,
    email_validation_token?: string | null,
    email_validation_token_timestamp?: string | null,
    forgot_password_token?: string | null,
    forgot_password_token_timestamp?: string | null,
    is_email_valid?: boolean | null,
    is_phone_valid?: boolean | null,
    status?: boolean | null,
    deleted?: boolean | null,
    created?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
