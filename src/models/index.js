// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Content, AdminUser, Company, Filter, ContentUnit } = initSchema(schema);

export {
  User,
  Content,
  AdminUser,
  Company,
  Filter,
  ContentUnit
};