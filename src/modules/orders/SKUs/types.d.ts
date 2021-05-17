type Maybe<T> = T | undefined;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: { [x: string]: string | number };
  DateTime: Date | number;
};

/** Three-letter <a href="https://stripe.com/docs/currencies">ISO code for the
 * currency</a> the customer can be charged in for recurring billing purposes.
 */
export type Currency =
  | "usd"
  | "aed"
  | "afn"
  | "all"
  | "amd"
  | "ang"
  | "aoa"
  | "ars"
  | "aud"
  | "awg"
  | "azn"
  | "bam"
  | "bbd"
  | "bdt"
  | "bgn"
  | "bif"
  | "bmd"
  | "bnd"
  | "bob"
  | "brl"
  | "bsd"
  | "bwp"
  | "bzd"
  | "cad"
  | "cdf"
  | "chf"
  | "clp"
  | "cny"
  | "cop"
  | "crc"
  | "cve"
  | "czk"
  | "djf"
  | "dkk"
  | "dop"
  | "dzd"
  | "egp"
  | "etb"
  | "eur"
  | "fjd"
  | "fkp"
  | "gbp"
  | "gel"
  | "gip"
  | "gmd"
  | "gnf"
  | "gtq"
  | "gyd"
  | "hkd"
  | "hnl"
  | "hrk"
  | "htg"
  | "huf"
  | "idr"
  | "ils"
  | "inr"
  | "isk"
  | "jmd"
  | "jpy"
  | "kes"
  | "kgs"
  | "khr"
  | "kmf"
  | "krw"
  | "kyd"
  | "kzt"
  | "lak"
  | "lbp"
  | "lkr"
  | "lrd"
  | "lsl"
  | "mad"
  | "mdl"
  | "mga"
  | "mkd"
  | "mmk"
  | "mnt"
  | "mop"
  | "mro"
  | "mur"
  | "mvr"
  | "mwk"
  | "mxn"
  | "myr"
  | "mzn"
  | "nad"
  | "ngn"
  | "nio"
  | "nok"
  | "npr"
  | "nzd"
  | "pab"
  | "pen"
  | "pgk"
  | "php"
  | "pkr"
  | "pln"
  | "pyg"
  | "qar"
  | "ron"
  | "rsd"
  | "rub"
  | "rwf"
  | "sar"
  | "sbd"
  | "scr"
  | "sek"
  | "sgd"
  | "shp"
  | "sll"
  | "sos"
  | "srd"
  | "std"
  | "szl"
  | "thb"
  | "tjs"
  | "top"
  | "try"
  | "ttd"
  | "twd"
  | "tzs"
  | "uah"
  | "ugx"
  | "uyu"
  | "uzs"
  | "vnd"
  | "vuv"
  | "wst"
  | "xaf"
  | "xcd"
  | "xof"
  | "xpf"
  | "yer"
  | "zar"
  | "zmw";

export type Inventory = {
  /** The count of inventory available. Will be present if and only if [type] is [finite]. */
  quantity: Maybe<Scalars["Int"]>;
  /** Inventory type. Possible values are [finite], [bucket] (not quantified), and [infinite]. */
  type: Maybe<InventoryType>;
  /** An indicator of the inventory available. Possible values are [in_stock],
   * [limited], and [out_of_stock]. Will be present if and only if [type] is [bucket].
   */
  value: Maybe<Scalars["String"]>;
};

/** Description of the SKU's inventory. */
export type InventoryInput = {
  quantity: Maybe<Scalars["Int"]>;
  type: Maybe<InventoryType>;
  value: Maybe<InventoryStatus>;
};

export type InventoryStatus = "in_stock" | "limited" | "out_of_stock";

export type InventoryType = "finite" | "bucket" | "infinite";

export type Mutation = {
  createSKU: Maybe<Sku>;
  /** Updates the specific SKU by setting the values of the parameters passed. Any
   * parameters not provided will be left unchanged.
   *
   * Note that a SKU’s attributes are not editable. Instead, you would need to
   * deactivate the existing SKU and create a new one with the new attribute values.
   */
  updateSKU: Maybe<Sku>;
  deleteSKU: Maybe<SkuDeletePayload>;
};

export type MutationCreateSkuArgs = {
  data: SkuCreateInput;
};

export type MutationUpdateSkuArgs = {
  where: SkuWhereUniqueInput;
  data: SkuUpdateInput;
};

export type MutationDeleteSkuArgs = {
  where: SkuWhereUniqueInput;
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

export type PackageDimensionsInput = {
  /** Height, in inches. */
  height: Maybe<Scalars["Float"]>;
  /** Length, in inches. */
  length: Maybe<Scalars["Float"]>;
  /** Weight, in ounces. */
  weight: Maybe<Scalars["Float"]>;
  /** Width, in inches. */
  width: Maybe<Scalars["Float"]>;
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

export type ProductType = "good" | "service";

export type Query = {
  /** Retrieves the details of an existing SKU. Supply the unique SKU identifier
   * from either a SKU creation request or from the product, and Stripe will return
   * the corresponding SKU information.
   */
  retrieveSKU: Maybe<Sku>;
  listSKUs: Maybe<SkuList>;
};

export type QueryRetrieveSkuArgs = {
  where: SkuWhereUniqueInput;
};

export type QueryListSkUsArgs = {
  where: Maybe<SkuWhereInput>;
};

/** Stores representations of stock keeping units. SKUs describe specific product
 * variations, taking into account any combination of: attributes, currency, and
 * cost. For example, a product may be a t- shirt, whereas a specific SKU
 * represents the size: large, color: red version of that shirt.
 *
 * Can also be used to manage inventory.
 */
export type Sku = Node &
  Object & {
    /** Unique identifier for the object. */
    id: Scalars["ID"];
    /** String representing the object’s type. Objects of the same type share the same value. */
    object: Maybe<ObjectType>;
    /** Whether the SKU is available for purchase. */
    active: Maybe<Scalars["Boolean"]>;
    /** A dictionary of attributes and values for the attributes defined by the
     * product. If, for example, a product’s attributes are ['size', 'gender'], a
     * valid SKU has the following dictionary of attributes: {'size': 'Medium',
     * 'gender': 'Unisex'}.
     */
    attributes: Maybe<Scalars["JSON"]>;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: Maybe<Scalars["DateTime"]>;
    /** Three-letter ISO currency code, in lowercase. Must be a supported currency. */
    currency: Maybe<Currency>;
    /** The URL of an image for this SKU, meant to be displayable to the customer. */
    image: Maybe<Scalars["String"]>;
    /** Description of the SKU’s inventory. */
    inventory: Maybe<Inventory>;
    /** Has the value [true] if the object exists in live mode or the value [false] if the object exists in test mode. */
    livemode: Maybe<Scalars["Boolean"]>;
    /** Set of key-value pairs that you can attach to an object. This can be useful
     * for storing additional information about the object in a structured format.
     */
    metadata: Maybe<Scalars["JSON"]>;
    /** The dimensions of this SKU for shipping purposes. */
    package_dimensions: Maybe<PackageDimensions>;
    /** The cost of the item as a positive integer in the smallest currency unit (that
     * is, 100 cents to charge $1.00, or 100 to charge ¥100, Japanese Yen being a
     * zero-decimal currency).
     */
    price: Maybe<Scalars["Int"]>;
    /** The ID of the product this SKU is associated with. The product must be currently active. */
    product: Maybe<Product>;
    updated: Maybe<Scalars["DateTime"]>;
  };

export type SkuCreateInput = {
  /** Whether the SKU is available for purchase. Default to [true]. */
  active: Maybe<Scalars["Boolean"]>;
  /** A dictionary of attributes and values for the attributes defined by the
   * product. If, for example, a product's attributes are [["size", "gender"]], a
   * valid SKU has the following dictionary of attributes: [{"size": "Medium",
   * "gender": "Unisex"}].
   */
  attributes: Maybe<Scalars["JSON"]>;
  /** Three-letter [ISO currency
   * code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be
   * a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: Currency;
  /** The identifier for the SKU. Must be unique. If not provided, an identifier will be randomly generated. */
  id: Maybe<Scalars["ID"]>;
  /** The URL of an image for this SKU, meant to be displayable to the customer. */
  image: Maybe<Scalars["String"]>;
  /** Description of the SKU's inventory. */
  inventory: InventoryInput;
  /** A set of key-value pairs that you can attach to a SKU object. It can be useful
   * for storing additional information about the SKU in a structured format.
   */
  metadata: Maybe<Scalars["JSON"]>;
  /** The dimensions of this SKU for shipping purposes. */
  packageDimensions: Maybe<PackageDimensionsInput>;
  /** The cost of the item as a nonnegative integer in the smallest currency unit
   * (that is, 100 cents to charge $1.00, or 100 to charge ¥100, Japanese Yen being
   * a zero-decimal currency).
   */
  price: Scalars["Int"];
  /** The ID of the product this SKU is associated with. Must be a product with type [good]. */
  product: Scalars["ID"];
};

export type SkuDeletePayload = Object & {
  object: Maybe<ObjectType>;
  id: Scalars["ID"];
  deleted: Maybe<Scalars["Boolean"]>;
};

export type SkuList = Object & {
  object: Maybe<ObjectType>;
  data: Maybe<Array<Maybe<Sku>>>;
  has_more: Maybe<Scalars["Boolean"]>;
  url: Maybe<Scalars["String"]>;
};

export type SkuUpdateInput = {
  /** Whether this SKU is available for purchase. */
  active: Maybe<Scalars["Boolean"]>;
  /** A dictionary of attributes and values for the attributes defined by the
   * product. When specified, [attributes] will partially update the existing
   * attributes dictionary on the product, with the postcondition that a value must
   * be present for each attribute key on the product.
   */
  attributes: Maybe<Scalars["JSON"]>;
  /** Three-letter [ISO currency
   * code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be
   * a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: Maybe<Currency>;
  /** The URL of an image for this SKU, meant to be displayable to the customer. */
  image: Maybe<Scalars["String"]>;
  /** Description of the SKU's inventory. */
  inventory: Maybe<InventoryInput>;
  /** A set of key-value pairs that you can attach to a SKU object. It can be useful
   * for storing additional information about the SKU in a structured format.
   */
  metadata: Maybe<Scalars["JSON"]>;
  /** The dimensions of this SKU for shipping purposes. */
  packageDimensions: Maybe<PackageDimensionsInput>;
  /** The cost of the item as a positive integer in the smallest currency unit (that
   * is, 100 cents to charge $1.00, or 100 to charge ¥100, Japanese Yen being a
   * zero-decimal currency).
   */
  price: Maybe<Scalars["Int"]>;
  /** The ID of the product that this SKU should belong to. The product must exist,
   * have the same set of attribute names as the SKU's current product, and be of type [good].
   */
  product: Maybe<Scalars["ID"]>;
};

export type SkuWhereInput = {
  /** Only return SKUs that are active or inactive (e.g., pass [false] to list all inactive products). */
  active: Maybe<Scalars["Boolean"]>;
  /** Only return SKUs that have the specified key-value pairs in this partially
   * constructed dictionary. Can be specified only if [product] is also supplied.
   * For instance, if the associated product has attributes [["color", "size"]],
   * passing in [attributes[color]=red] returns all the SKUs for this product
   * that have [color] set to [red].
   */
  attributes: Maybe<Scalars["JSON"]>;
  /** A cursor for use in pagination. [ending_before] is an object ID that defines
   * your place in the list. For instance, if you make a list request and receive
   * 100 objects, starting with [obj_bar], your subsequent call can include
   * [ending_before=obj_bar] in order to fetch the previous page of the list.
   */
  ending_before: Maybe<Scalars["ID"]>;
  /** Only return SKUs with the given IDs. */
  ids: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** Only return SKUs that are either in stock or out of stock (e.g., pass
   * [false] to list all SKUs that are out of stock). If no value is provided,
   * all SKUs are returned.
   */
  in_stock: Maybe<Scalars["Boolean"]>;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
  limit: Maybe<Scalars["Int"]>;
  /** The ID of the product whose SKUs will be retrieved. Must be a product with type [good]. */
  product: Maybe<Scalars["ID"]>;
  /** A cursor for use in pagination. [starting_after] is an object ID that
   * defines your place in the list. For instance, if you make a list request and
   * receive 100 objects, ending with [obj_foo], your subsequent call can include
   * [starting_after=obj_foo] in order to fetch the next page of the list.
   */
  starting_after: Maybe<Scalars["ID"]>;
};

export type SkuWhereUniqueInput = {
  id: Scalars["ID"];
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

export type ExpandableDirectiveResolver<
  Result,
  Parent,
  Context = StripeContext,
  Args = {}
> = DirectiveResolverFn<Result, Parent, Context, Args>;

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

export type InventoryResolvers<
  Context = StripeContext,
  ParentType = Inventory
> = {
  quantity: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  type: Resolver<Maybe<InventoryType>, ParentType, Context>;
  value: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export interface JsonScalarConfig
  extends GraphQLScalarTypeConfig<Scalars["JSON"], any> {
  name: "JSON";
}

export type MutationResolvers<
  Context = StripeContext,
  ParentType = Mutation
> = {
  createSKU: Resolver<Maybe<Sku>, ParentType, Context, MutationCreateSkuArgs>;
  updateSKU: Resolver<Maybe<Sku>, ParentType, Context, MutationUpdateSkuArgs>;
  deleteSKU: Resolver<
    Maybe<SkuDeletePayload>,
    ParentType,
    Context,
    MutationDeleteSkuArgs
  >;
};

export type NodeResolvers<Context = StripeContext, ParentType = Node> = {
  __resolveType: TypeResolveFn<"SKU" | "Product", ParentType, Context>;
  id: Resolver<Scalars["ID"], ParentType, Context>;
};

export type ObjectResolvers<Context = StripeContext, ParentType = Object> = {
  __resolveType: TypeResolveFn<
    "SKU" | "Product" | "SKUList" | "SKUDeletePayload",
    ParentType,
    Context
  >;
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

export type QueryResolvers<Context = StripeContext, ParentType = Query> = {
  retrieveSKU: Resolver<Maybe<Sku>, ParentType, Context, QueryRetrieveSkuArgs>;
  listSKUs: Resolver<Maybe<SkuList>, ParentType, Context, QueryListSkUsArgs>;
};

export type SkuResolvers<Context = StripeContext, ParentType = Sku> = {
  id: Resolver<Scalars["ID"], ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  active: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  attributes: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  created: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  currency: Resolver<Maybe<Currency>, ParentType, Context>;
  image: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  inventory: Resolver<Maybe<Inventory>, ParentType, Context>;
  livemode: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  metadata: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  package_dimensions: Resolver<Maybe<PackageDimensions>, ParentType, Context>;
  price: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  product: Resolver<Maybe<Product>, ParentType, Context>;
  updated: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
};

export type SkuDeletePayloadResolvers<
  Context = StripeContext,
  ParentType = SkuDeletePayload
> = {
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  id: Resolver<Scalars["ID"], ParentType, Context>;
  deleted: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
};

export type SkuListResolvers<Context = StripeContext, ParentType = SkuList> = {
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  data: Resolver<Maybe<Array<Maybe<Sku>>>, ParentType, Context>;
  has_more: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Resolvers<Context = StripeContext> = {
  DateTime: GraphQLScalarType;
  Inventory: InventoryResolvers<Context>;
  JSON: GraphQLScalarType;
  Mutation: MutationResolvers<Context>;
  Node: NodeResolvers;
  Object: ObjectResolvers;
  PackageDimensions: PackageDimensionsResolvers<Context>;
  Product: ProductResolvers<Context>;
  Query: QueryResolvers<Context>;
  SKU: SkuResolvers<Context>;
  SKUDeletePayload: SkuDeletePayloadResolvers<Context>;
  SKUList: SkuListResolvers<Context>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<Context = StripeContext> = Resolvers<Context>;
export type DirectiveResolvers<Context = StripeContext> = {
  expandable: ExpandableDirectiveResolver<any, any, Context>;
  constraint: ConstraintDirectiveResolver<any, any, Context>;
};

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<Context = StripeContext> = DirectiveResolvers<
  Context
>;
