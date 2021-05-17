const objectToTypename = (object: string) => {
  const parts = object.split('_')
  return parts.map(part => part[0].toUpperCase() + part.slice(1)).join('')
}

interface ObjectResolver {
  object: string
  data?: { object?: string }
}

const ObjectResolver = {
  __resolveType: ({ object, data }: ObjectResolver) => {
    if (object === 'list' && data && data.object) {
      return objectToTypename(data.object) + 'List'
    } else if (object && object.length > 0) {
      return objectToTypename(object)
    }
    return null
  }
}

export default ObjectResolver
