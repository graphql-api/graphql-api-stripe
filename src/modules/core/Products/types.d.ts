type Maybe<T> = T | undefined;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date | number;
  JSON: { [x: string]: string | number };
};

/** A filter on the list based on the object field. The value can be a string with
 * an integer Unix timestamp, or it can be a dictionary with the following options:
 */
export type CreatedInput = {
  /** Return results where the field is greater than this value. */
  gt: Maybe<Scalars["Int"]>;
  /** Return results where the field is greater than or equal to this value. */
  gte: Maybe<Scalars["Int"]>;
  /** Return results where the field is less than this value. */
  lt: Maybe<Scalars["Int"]>;
  /** Return results where the field is less than or equal to this value. */
  lte: Maybe<Scalars["Int"]>;
};

export type Mutation = {
  /** Creates a new product object. To create a product for use with subscriptions, see Subscriptions Products. */
  createProduct: Maybe<Product>;
  /** Updates the specific product by setting the values of the parameters passed.
   * Any parameters not provided will be left unchanged.
   *
   * Note that a product’s attributes are not editable. Instead, you would need to
   * deactivate the existing product and create a new one with the new attribute values.
   */
  updateProduct: Maybe<Product>;
  /** Delete a product. Deleting a product with type=good is only possible if it has
   * no SKUs associated with it. Deleting a product with type=service is only
   * possible if it has no plans associated with it.
   */
  deleteProduct: Maybe<Product>;
};

export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};

export type MutationUpdateProductArgs = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateInput;
};

export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};

export type Node = {
  id: Scalars["ID"];
};

export type Object = {
  object: Maybe<ObjectType>;
};

export type ObjectType =
  | "account"
  | "account_link"
  | "apple_pay_domain"
  | "application_fee"
  | "balance"
  | "balance_ransaction"
  | "bank_account"
  | "bitcoin_receiver"
  | "bitcoin_transaction"
  | "card"
  | "charge"
  /** checkout.session */
  | "country_spec"
  | "coupon"
  | "customer"
  | "discount"
  | "dispute"
  | "ephemeralKey"
  | "event"
  | "exchangeRate"
  | "feeRefund"
  | "file"
  | "fileLink"
  | "invoice"
  | "invoiceitem"
  | "issuerFraudRecord"
  | "issuingAuthorization"
  | "issuingCard"
  | "issuingCardDetails"
  | "issuingCardPin"
  | "issuingCardholder"
  | "issuingDispute"
  | "issuingSettlement"
  | "issuingTransaction"
  | "issuingVerification"
  | "lineItem"
  | "list"
  | "loginLink"
  | "order"
  | "orderItem"
  | "orderReturn"
  | "paymentIntent"
  | "paymentMethod"
  | "payout"
  | "person"
  | "plan"
  | "product"
  | "radarValueList"
  | "radarValueListItem"
  | "recipient"
  | "refund"
  | "reportingReportRun"
  | "reportingReportType"
  | "review"
  | "scheduledQueryRun"
  | "sku"
  | "source"
  | "sourceMandateNotification"
  | "sourceTransaction"
  | "subscription"
  | "subscriptionItem"
  | "subscriptionSchedule"
  | "subscriptionScheduleRevision"
  | "terminalConnectionToken"
  | "terminalLocation"
  | "terminalReader"
  | "threeDSecure"
  | "token"
  | "topup"
  | "transfer"
  | "transferReversal"
  | "usageRecord"
  | "usageRecordSummary"
  | "webhookEndpoint";

export type PackageDimensions = {
  /** Height, in inches. */
  height: Maybe<Scalars["Float"]>;
  /** Length, in inches. */
  length: Maybe<Scalars["Float"]>;
  /** Weight, in ounces. */
  weight: Maybe<Scalars["Float"]>;
  /** Width, in inches. */
  width: Maybe<Scalars["Float"]>;
};

/** The dimensions of this product for shipping purposes. A SKU associated with this
 * product can override this value by having its own `package_dimensions`. May only
 * be set if type=`good`.
 */
export type PackageDimensionsInput = {
  /** Height, in inches. Maximum precision is 2 decimal places. */
  height: Scalars["Float"];
  /** Length, in inches. Maximum precision is 2 decimal places. */
  length: Scalars["Float"];
  /** Weight, in ounces. Maximum precision is 2 decimal places. */
  weight: Scalars["Float"];
  /** Weight, in ounces. Maximum precision is 2 decimal places. */
  width: Scalars["Float"];
};

/** Store representations of products you sell in Product objects, used in
 * conjunction with SKUs. Products may be physical goods, to be shipped, or digital.
 *
 * Documentation on Products for use with Subscriptions can be found at Subscription Products.
 * https://stripe.com/docs/api/products?lang=node
 */
export type Product = Node &
  Object & {
    /** Whether the product is currently available for purchase. */
    active: Maybe<Scalars["Boolean"]>;
    /** A list of up to 5 attributes that each SKU can provide values for (e.g.,
     * \`["color", "size"]\`). Only applicable to products of `type=good`.
     */
    attributes: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** A short one-line description of the product, meant to be displayable to the
     * customer. Only applicable to products of `type=good`.
     */
    caption: Maybe<Scalars["String"]>;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: Maybe<Scalars["DateTime"]>;
    /** An array of connect application identifiers that cannot purchase this product. Only applicable to products of `type=good`. */
    deactivate_on: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** The product's description, meant to be displayable to the customer. Only applicable to products of `type=good`. */
    description: Maybe<Scalars["String"]>;
    /** Unique identifier for the object. */
    id: Scalars["ID"];
    /** A list of up to 8 URLs of images for this product, meant to be displayable to
     * the customer. Only applicable to products of `type=good`.
     */
    images: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: Maybe<Scalars["Boolean"]>;
    /** Set of key-value pairs that you can attach to an object. This can be useful
     * for storing additional information about the object in a structured format.
     */
    metadata: Maybe<Scalars["JSON"]>;
    /** The product's name, meant to be displayable to the customer. Applicable to both `service` and `good` types. */
    name: Maybe<Scalars["String"]>;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: Maybe<ObjectType>;
    /** The dimensions of this product for shipping purposes. A SKU associated with
     * this product can override this value by having its own `package_dimensions`.
     * Only applicable to products of `type=good`.
     */
    package_dimensions: Maybe<PackageDimensions>;
    /** Whether this product is a shipped good. Only applicable to products of `type=good`. */
    shippable: Maybe<Scalars["Boolean"]>;
    /** Extra information about a product which will appear on your customer's credit
     * card statement. In the case that multiple products are billed at once, the
     * first statement descriptor will be used. Only available on products of
     * type=`service`.
     */
    statement_descriptor: Maybe<Scalars["String"]>;
    /** The type of the product. The product is either of type `good`, which is
     * eligible for use with Orders and SKUs, or `service`, which is eligible for use
     * with Subscriptions and Plans.
     */
    type: Maybe<ProductType>;
    /** A label that represents units of this product, such as seat(s), in Stripe and
     * on customers’ receipts and invoices. Only available on products of
     * type=`service`.
     */
    unit_label: Maybe<Scalars["String"]>;
    updated: Maybe<Scalars["DateTime"]>;
    /** A URL of a publicly-accessible webpage for this product. Only applicable to products of `type=good`. */
    url: Maybe<Scalars["String"]>;
  };

export type ProductCreateInput = {
  /** Whether the product is currently available for purchase. Defaults to `true`. */
  active: Maybe<Scalars["Boolean"]>;
  /** A list of up to 5 alphanumeric attributes. Applicable to both `service` and `good` types. */
  attributes: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** A short one-line description of the product, meant to be displayable to the customer. May only be set if type=`good`. */
  caption: Maybe<Scalars["String"]>;
  /** An array of Connect application names or identifiers that should not be able
   * to order the SKUs for this product. May only be set if type=`good`.
   */
  deactivate_on: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The product's description, meant to be displayable to the customer. May only be set if type=`good`. */
  description: Maybe<Scalars["String"]>;
  /** An identifier will be randomly generated by Stripe. You can optionally
   * override this ID, but the ID must be unique across all products in your Stripe
   * account. Applicable to both `service` and `good` types.
   */
  id: Maybe<Scalars["ID"]>;
  /** A list of up to 8 URLs of images for this product, meant to be displayable to
   * the customer. May only be set if type=`good`.
   */
  images: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** A set of key-value pairs that you can attach to a product object. It can be
   * useful for storing additional information about the product in a structured
   * format. Applicable to both `service` and `good` types.
   */
  metadata: Maybe<Scalars["JSON"]>;
  /** The product's name, meant to be displayable to the customer. Applicable to both `service` and `good` types. */
  name: Scalars["String"];
  /** The dimensions of this product for shipping purposes. A SKU associated with
   * this product can override this value by having its own `package_dimensions`.
   * May only be set if type=`good`.
   */
  package_dimensions: Maybe<PackageDimensionsInput>;
  /** Whether this product is shipped (i.e., physical goods). Defaults to `true`. May only be set if type=`good`. */
  shippable: Maybe<Scalars["Boolean"]>;
  /** The type of the product. The product is either of type `service`, which is
   * eligible for use with Subscriptions and Plans or `good`, which is eligible for
   * use with Orders and SKUs.
   */
  type: ProductType;
  /** A URL of a publicly-accessible webpage for this product. May only be set if type=`good`. */
  url: Maybe<Scalars["String"]>;
};

export type ProductListPayload = {
  data: Maybe<Array<Maybe<Product>>>;
  /** True if this list has another page of items after this one that can be fetched. */
  hasMore: Maybe<Scalars["Boolean"]>;
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Maybe<ObjectType>;
  /** The URL where this list can be accessed. */
  url: Maybe<Scalars["String"]>;
};

export type ProductsWhereInput = {
  /** Only return products that are active or inactive (e.g., pass `false` to list all inactive products). */
  active: Maybe<Scalars["Boolean"]>;
  /** Only return products that were created during the given date interval. */
  created: Maybe<CreatedInput>;
  /** A cursor for use in pagination. `ending_before` is an object ID that defines
   * your place in the list. For instance, if you make a list request and receive
   * 100 objects, starting with `obj_bar`, your subsequent call can include
   * `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore: Maybe<Scalars["ID"]>;
  /** Only return products with the given IDs. */
  ids: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
  limit: Maybe<Scalars["Int"]>;
  /** Only return products that can be shipped (i.e., physical, not digital products). */
  shippable: Maybe<Scalars["Boolean"]>;
  /** A cursor for use in pagination. `starting_after` is an object ID that
   * defines your place in the list. For instance, if you make a list request and
   * receive 100 objects, ending with `obj_foo`, your subsequent call can include
   * `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter: Maybe<Scalars["ID"]>;
  /** Only return products of this type. */
  type: Maybe<ProductType>;
  /** Only return products with the given url. */
  url: Maybe<Scalars["String"]>;
};

export type ProductType = "good" | "service";

export type ProductUpdateInput = {
  /** Whether the product is available for purchase. */
  active: Maybe<Scalars["Boolean"]>;
  /** A list of up to 5 alphanumeric attributes that each SKU can provide values for
   * (e.g., `["color", "size"]`). If a value for `attributes` is specified, the
   * list specified will replace the existing attributes list on this product. Any
   * attributes not present after the update will be deleted from the SKUs for this product.
   */
  attributes: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** A short one-line description of the product, meant to be displayable to the customer. */
  caption: Maybe<Scalars["String"]>;
  /** An array of Connect application names or identifiers that should not be able to order the SKUs for this product. */
  deactivate_on: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The product's description, meant to be displayable to the customer. */
  description: Maybe<Scalars["String"]>;
  /** A list of up to 8 URLs of images for this product, meant to be displayable to the customer. */
  images: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** A set of key-value pairs that you can attach to a product object. It can be
   * useful for storing additional information about the product in a structured format.
   */
  metadata: Maybe<Scalars["JSON"]>;
  /** The product's name, meant to be displayable to the customer. Applicable to both `service` and `good` types. */
  name: Maybe<Scalars["String"]>;
  /** The dimensions of this product for shipping purposes. A SKU associated with
   * this product can override this value by having its own `package_dimensions`.
   */
  package_dimensions: Maybe<PackageDimensionsInput>;
  /** Whether this product is shipped (i.e., physical goods). Defaults to `true`. May only be set if type=`good`. */
  shippable: Maybe<Scalars["Boolean"]>;
  /** An arbitrary string to be displayed on your customer's credit card statement.
   * This may be up to 22 characters. The statement description may not include
   * <>\"\' characters, and will appear on your customer's statement in capital
   * letters. Non-ASCII characters are automatically stripped. While most banks
   * display this information consistently, some may display it incorrectly or not
   * at all. It must contain at least one letter. May only be set if
   * type=\`service\`.
   */
  statement_descriptor: Maybe<Scalars["String"]>;
  /** A label that represents units of this product, such as seat(s), in Stripe and
   * on customers’ receipts and invoices. Only available on products of
   * type=`service`.
   */
  unit_label: Maybe<Scalars["String"]>;
  /** A URL of a publicly-accessible webpage for this product. May only be set if type=`good`. */
  url: Maybe<Scalars["String"]>;
};

export type ProductWhereUniqueInput = {
  id: Scalars["ID"];
};

export type Query = {
  /** Retrieves the details of an existing product. Supply the unique product ID
   * from either a product creation request or the product list, and Stripe will
   * return the corresponding product information.
   */
  retrieveProduct: Maybe<Product>;
  /** Returns a list of your products. The products are returned sorted by creation
   * date, with the most recently created products appearing first.
   */
  listProducts: Maybe<ProductListPayload>;
};

export type QueryRetrieveProductArgs = {
  where: ProductWhereUniqueInput;
};

export type QueryListProductsArgs = {
  where: ProductsWhereInput;
};
import { StripeContext } from "../../../types";

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export type ConstraintDirectiveResolver<
  Result,
  Parent,
  Context = StripeContext,
  Args = {
    minLength: Maybe<Maybe<Scalars["Int"]>>;
    maxLength: Maybe<Maybe<Scalars["Int"]>>;
    startsWith: Maybe<Maybe<Scalars["String"]>>;
    endsWith: Maybe<Maybe<Scalars["String"]>>;
    contains: Maybe<Maybe<Scalars["String"]>>;
    notContains: Maybe<Maybe<Scalars["String"]>>;
    pattern: Maybe<Maybe<Scalars["String"]>>;
    format: Maybe<Maybe<Scalars["String"]>>;
    min: Maybe<Maybe<Scalars["Float"]>>;
    max: Maybe<Maybe<Scalars["Float"]>>;
    exclusiveMin: Maybe<Maybe<Scalars["Float"]>>;
    exclusiveMax: Maybe<Maybe<Scalars["Float"]>>;
    multipleOf: Maybe<Maybe<Scalars["Float"]>>;
  }
> = DirectiveResolverFn<Result, Parent, Context, Args>;

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<Scalars["DateTime"], any> {
  name: "DateTime";
}

export interface JsonScalarConfig
  extends GraphQLScalarTypeConfig<Scalars["JSON"], any> {
  name: "JSON";
}

export type MutationResolvers<
  Context = StripeContext,
  ParentType = Mutation
> = {
  createProduct: Resolver<
    Maybe<Product>,
    ParentType,
    Context,
    MutationCreateProductArgs
  >;
  updateProduct: Resolver<
    Maybe<Product>,
    ParentType,
    Context,
    MutationUpdateProductArgs
  >;
  deleteProduct: Resolver<
    Maybe<Product>,
    ParentType,
    Context,
    MutationDeleteProductArgs
  >;
};

export type NodeResolvers<Context = StripeContext, ParentType = Node> = {
  __resolveType: TypeResolveFn<"Product", ParentType, Context>;
  id: Resolver<Scalars["ID"], ParentType, Context>;
};

export type ObjectResolvers<Context = StripeContext, ParentType = Object> = {
  __resolveType: TypeResolveFn<"Product", ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
};

export type PackageDimensionsResolvers<
  Context = StripeContext,
  ParentType = PackageDimensions
> = {
  height: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  length: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  weight: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  width: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type ProductResolvers<Context = StripeContext, ParentType = Product> = {
  active: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  attributes: Resolver<
    Maybe<Array<Maybe<Scalars["String"]>>>,
    ParentType,
    Context
  >;
  caption: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  created: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  deactivate_on: Resolver<
    Maybe<Array<Maybe<Scalars["String"]>>>,
    ParentType,
    Context
  >;
  description: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  id: Resolver<Scalars["ID"], ParentType, Context>;
  images: Resolver<Maybe<Array<Maybe<Scalars["String"]>>>, ParentType, Context>;
  livemode: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  metadata: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  name: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  package_dimensions: Resolver<Maybe<PackageDimensions>, ParentType, Context>;
  shippable: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  statement_descriptor: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  type: Resolver<Maybe<ProductType>, ParentType, Context>;
  unit_label: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  updated: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type ProductListPayloadResolvers<
  Context = StripeContext,
  ParentType = ProductListPayload
> = {
  data: Resolver<Maybe<Array<Maybe<Product>>>, ParentType, Context>;
  hasMore: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type QueryResolvers<Context = StripeContext, ParentType = Query> = {
  retrieveProduct: Resolver<
    Maybe<Product>,
    ParentType,
    Context,
    QueryRetrieveProductArgs
  >;
  listProducts: Resolver<
    Maybe<ProductListPayload>,
    ParentType,
    Context,
    QueryListProductsArgs
  >;
};

export type Resolvers<Context = StripeContext> = {
  DateTime: GraphQLScalarType;
  JSON: GraphQLScalarType;
  Mutation: MutationResolvers<Context>;
  Node: NodeResolvers;
  Object: ObjectResolvers;
  PackageDimensions: PackageDimensionsResolvers<Context>;
  Product: ProductResolvers<Context>;
  ProductListPayload: ProductListPayloadResolvers<Context>;
  Query: QueryResolvers<Context>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<Context = StripeContext> = Resolvers<Context>;
export type DirectiveResolvers<Context = StripeContext> = {
  constraint: ConstraintDirectiveResolver<any, any, Context>;
};

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<Context = StripeContext> = DirectiveResolvers<
  Context
>;
