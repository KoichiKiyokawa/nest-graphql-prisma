import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';
import { IntNullableFilter } from '../inputs/IntNullableFilter';
import { StringFilter } from '../inputs/StringFilter';

@TypeGraphQL.InputType({
  isAbstract: true,
})
export class PostScalarWhereInput {
  @TypeGraphQL.Field((_type) => [PostScalarWhereInput], {
    nullable: true,
  })
  AND?: PostScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostScalarWhereInput], {
    nullable: true,
  })
  OR?: PostScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostScalarWhereInput], {
    nullable: true,
  })
  NOT?: PostScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  body?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => IntNullableFilter, {
    nullable: true,
  })
  authorId?: IntNullableFilter | undefined;
}
