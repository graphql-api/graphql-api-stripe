export const resolvers = {
  DisplayItems: {
    __resolveType: ({ object }, context, info) => {
      switch (object) {
        case 'line_item':
          return 'LineItem'
        case 'plan':
          return 'Plan'
        case 'sku':
          return 'SKU'
      }
    }
  }
}
