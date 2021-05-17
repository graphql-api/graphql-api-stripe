import {
  GraphQLResolveInfo,
  Kind,
  DirectiveLocation,
  GraphQLDirective,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLString,
  GraphQLSchema
} from 'graphql'
import { SchemaDirectiveVisitor } from 'graphql-tools'
import * as ConstraintDirective from 'graphql-constraint-directive'
import { HeaderOptions } from 'stripe'

export const schemaDirectives = { constraint: ConstraintDirective }

/*
 *
 *
 */
type Expand = (string | number | symbol)[]

type ExpandArgument = { expand: Expand } | undefined

const checkExpanded = (
  expand: Expand,
  {
    fieldNodes: [
      {
        selectionSet: { selections }
      }
    ]
  }: GraphQLResolveInfo,
  list?: string[] | undefined,
  preField: string = ''
): ExpandArgument => {
  let expandField
  if (!!list) {
    const field = list.pop()
    const fieldNode = selections.find(
      selectionField =>
        selectionField.kind === Kind.FIELD &&
        selectionField.name.value === field
    )
    if (!!fieldNode) {
      expandField = fieldNode.selectionSet.selections.filter(
        ({ name: { value } }) => expand.includes(value)
      )
      preField = `${field}.`
    }
  } else {
    expandField = selections.filter(({ name: { value } }) =>
      expand.includes(value)
    )
  }
  if (Array.isArray(expandField) && expandField.length > 0) {
    return {
      expand: expandField.map(({ name: { value } }) => preField + value)
    }
  }
  return undefined
}

/*
 *
 *
 */

const convertToExpanded = <P extends {}>(expand: Array<keyof P>, data: P) =>
  expand.reduce((prev, curr) => {
    if (data[curr] !== undefined && typeof data[curr] === 'string') {
      return { [curr]: { id: data[curr] }, ...prev }
    }
    return prev
  }, data)

/*
 *
 *
 */

export const withExpanded = <T extends {}>(expand: Array<keyof T>) => <
  T = undefined
>(
  args: T,
  info: GraphQLResolveInfo,
  list?: string[] | undefined
): T & HeaderOptions => {
  const expanded = checkExpanded(expand, info, list)
  return { ...args, ...expanded } as any
}

/*
 *
 *
 */
