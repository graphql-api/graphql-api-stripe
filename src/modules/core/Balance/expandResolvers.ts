import { withExpanded } from '../../directives'

const expand = {
  BalanceTransaction: ['source'],
  BalanceTransactionList: ['data.source']
}

export const expandResolvers = {
  'Query.retrieveBalanceTransaction': [
    withExpanded(expand['BalanceTransaction'])
  ],
  'Query.listBalanceHistory': [withExpanded(expand['BalanceTransactionList'])]
}
