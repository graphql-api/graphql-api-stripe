export const ObjectItemParent = {
  __resolveType: ({ object }) => {
    switch (object) {
      case 'discount':
        return 'Discount'
      case 'sku':
        return 'SKU'
    }
  }
}

export const resolvers = {
  ObjectItemParent
}
