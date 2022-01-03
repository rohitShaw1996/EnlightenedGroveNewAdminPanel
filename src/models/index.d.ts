import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ContentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AdminUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CompanyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FilterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ContentUnitMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly login_type?: string;
  readonly full_name?: string;
  readonly email?: string;
  readonly phone?: string;
  readonly password?: string;
  readonly otp?: number;
  readonly email_validation_token?: string;
  readonly login_with?: string;
  readonly email_validation_token_timestamp?: string;
  readonly forgot_password_token?: string;
  readonly forgot_password_token_timestamp?: string;
  readonly selected_filters?: string;
  readonly subscription_type?: string;
  readonly subscription_date?: string;
  readonly subscription_expire?: string;
  readonly subscription_id?: string;
  readonly is_email_valid?: boolean;
  readonly is_phone_valid?: boolean;
  readonly status?: boolean;
  readonly deleted?: boolean;
  readonly created?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Content {
  readonly id: string;
  readonly title?: string;
  readonly subject?: string;
  readonly keyword?: string;
  readonly author?: string;
  readonly language?: string;
  readonly organization_name?: string;
  readonly content_type?: string;
  readonly content_name?: string;
  readonly content_url?: string;
  readonly uploaded_by?: string;
  readonly upload_time?: string;
  readonly description?: string;
  readonly premium?: boolean;
  readonly status?: boolean;
  readonly deleted?: boolean;
  readonly created?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Content, ContentMetaData>);
  static copyOf(source: Content, mutator: (draft: MutableModel<Content, ContentMetaData>) => MutableModel<Content, ContentMetaData> | void): Content;
}

export declare class AdminUser {
  readonly id: string;
  readonly name?: string;
  readonly email?: string;
  readonly phone?: string;
  readonly password?: string;
  readonly status?: boolean;
  readonly deleted?: boolean;
  readonly created?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<AdminUser, AdminUserMetaData>);
  static copyOf(source: AdminUser, mutator: (draft: MutableModel<AdminUser, AdminUserMetaData>) => MutableModel<AdminUser, AdminUserMetaData> | void): AdminUser;
}

export declare class Company {
  readonly id: string;
  readonly name: string;
  readonly status?: boolean;
  readonly deleted?: boolean;
  readonly created?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Company, CompanyMetaData>);
  static copyOf(source: Company, mutator: (draft: MutableModel<Company, CompanyMetaData>) => MutableModel<Company, CompanyMetaData> | void): Company;
}

export declare class Filter {
  readonly id: string;
  readonly filter: string;
  readonly status?: boolean;
  readonly deleted?: boolean;
  readonly created?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Filter, FilterMetaData>);
  static copyOf(source: Filter, mutator: (draft: MutableModel<Filter, FilterMetaData>) => MutableModel<Filter, FilterMetaData> | void): Filter;
}

export declare class ContentUnit {
  readonly id: string;
  readonly course_id?: string;
  readonly unit_no?: number;
  readonly title?: string;
  readonly keyword?: string;
  readonly language?: string;
  readonly content_type?: string;
  readonly content_name?: string;
  readonly content_url?: string;
  readonly uploaded_by?: string;
  readonly upload_time?: string;
  readonly status?: boolean;
  readonly deleted?: boolean;
  readonly created?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ContentUnit, ContentUnitMetaData>);
  static copyOf(source: ContentUnit, mutator: (draft: MutableModel<ContentUnit, ContentUnitMetaData>) => MutableModel<ContentUnit, ContentUnitMetaData> | void): ContentUnit;
}