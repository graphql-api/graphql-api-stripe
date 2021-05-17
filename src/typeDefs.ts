import { gql } from 'graphql-tag'
import {
  loadSchemaSync,
  loadTypedefsSync,
  loadDocumentsSync
} from '@graphql-tools/load'
import { mergeTypeDefs } from '@graphql-tools/merge'
import {
  GraphQLFileLoader,
  GraphQLFileLoaderOptions
} from '@graphql-tools/graphql-file-loader'
import { join } from 'path'

// const typeDefs = loadSchemaSync(join(process.cwd(), './packages/api/stripe/src/modules/schema.graphql'), {
//   loaders: [new GraphQLFileLoader()]
// })

const modules = [
  'billing/Invoices/typeDefs.graphql',
  'Query.graphql',
  'core/Customers/typeDefs.graphql',
  'core/Prices/typeDefs.graphql',
  'core/Products/typeDefs.graphql'
]
const loadedTypeDefs = loadTypedefsSync(
  modules.map(
    (path) => join(process.cwd(), 'packages/api/stripe/src/**/*.graphql') //', path)
  ),
  {
    loaders: [new GraphQLFileLoader()],
    noLocation: true
  }
)

console.log(loadedTypeDefs)

const typeDefs = mergeTypeDefs(loadedTypeDefs.map(({ rawSDL }) => rawSDL))

export { typeDefs }
