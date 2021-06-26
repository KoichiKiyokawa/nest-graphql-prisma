import * as TypeGraphQL from 'type-graphql';

export enum UserScalarFieldEnum {
  id = 'id',
  name = 'name',
  birthday = 'birthday',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
  description: undefined,
});
