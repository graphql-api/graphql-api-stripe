const reversalsExpand = [
  'balance_transaction',
  'destination_payment_refund',
  'source_refund',
  'transfer'
].map(e => 'reversals.data.' + e)

export const expand = [
  'balance_transaction',
  'destination',
  'destination_payment',
  'source_transaction',
  ...reversalsExpand
]
