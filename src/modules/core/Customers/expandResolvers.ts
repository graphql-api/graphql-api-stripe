import { withExpanded } from '../../directives'

const expand = {
  Customer: ['default_source'],
  CustomerList: ['data.default_source']
}

export const expandResolvers = {
  'Query.retrieveCustomer': [withExpanded(expand['Customer'])],
  'Query.listCustomers': [withExpanded(expand['CustomerList'])],
  'Mutation.createCustomer': [withExpanded(expand['Customer'])],
  'Mutation.updateCustomer': [withExpanded(expand['Customer'])]
}
