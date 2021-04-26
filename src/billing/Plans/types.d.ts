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

export type AggregateUsage = "lastDuringPeriod" | "lastEver" | "max" | "sum";

export type BillingScheme = "perUnit" | "tiered";

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

export type Plan = Node &
  Object & {
    /** Whether the plan is currently available for new subscriptions. */
    active: Maybe<Scalars["Boolean"]>;
    /** Specifies a usage aggregation strategy for plans of `usage_type=metered`.
     * Allowed values are `sum` for summing up all usage during a period,
     * `last_during_period` for picking the last usage record reported within a
     * period, `last_ever` for picking the last usage record ever (across period
     * bounds) or `max` which picks the usage record with the maximum reported usage
     * during a period. Defaults to `sum`.
     */
    aggregateUsage: Maybe<AggregateUsage>;
    /** The amount in %s to be charged on the interval specified. */
    amount: Maybe<Scalars["Float"]>;
    /** Describes how to compute the price per period. Either `per_unit` or `tiered`.
     * `per_unit` indicates that the fixed amount (specified in `amount`) will be
     * charged per unit in `quantity` (for plans with `usage_type=licensed`), or per
     * unit of total usage (for plans with `usage_type=metered`). `tiered` indicates
     * that the unit pricing will be computed using a tiering strategy as defined
     * using the `tiers` and `tiers_mode` attributes.
     */
    billing_scheme: Maybe<BillingScheme>;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: Maybe<Scalars["DateTime"]>;
    /** Three-letter [ISO currency
     * code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be
     * a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: Maybe<Currency>;
    /** Unique identifier for the object. */
    id: Scalars["ID"];
    /** One of `day`, `week`, `month` or `year`. The frequency with which a subscription should be billed. */
    interval: Maybe<PlanInterval>;
    /** The number of intervals (specified in the `interval` property) between
     * subscription billings. For example, `interval=month` and `interval_count=3`
     * bills every 3 months.
     */
    interval_count: Maybe<Scalars["Int"]>;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: Maybe<Scalars["Boolean"]>;
    /** Set of key-value pairs that you can attach to an object. This can be useful
     * for storing additional information about the object in a structured format.
     */
    metadata: Maybe<Scalars["JSON"]>;
    /** A brief description of the plan, hidden from customers. */
    nickname: Maybe<Scalars["String"]>;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: Maybe<ObjectType>;
    /** The product whose pricing this plan determines. */
    product: Maybe<Product>;
    /** Each element represents a pricing tier. This parameter requires
     * `billing_scheme` to be set to `tiered`. See also the documentation for
     * `billing_scheme`.
     */
    tiers: Maybe<Array<Maybe<PlanTier>>>;
    /** Defines if the tiering price should be `graduated` or `volume` based. In
     * `volume`-based tiering, the maximum quantity within a period determines the
     * per unit price, in `graduated` tiering pricing can successively change as the
     * quantity grows.
     */
    tiers_mode: Maybe<TiersMode>;
    /** Apply a transformation to the reported usage or set quantity before computing
     * the billed price. Cannot be combined with `tiers`.
     */
    transform_usage: Maybe<Scalars["String"]>;
    /** Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan). */
    trial_period_days: Maybe<Scalars["Int"]>;
    /** Configures how the quantity per period should be determined, can be either
     * `metered` or `licensed`. `licensed` will automatically bill the `quantity` set
     * for a plan when adding it to a subscription, `metered` will aggregate the
     * total usage based on usage records. Defaults to `licensed`.
     */
    usage_type: Maybe<UsageType>;
  };

export type PlanInterval = "day" | "month" | "week" | "year";

export type PlanTier = {
  /** Price for the entire tier. */
  flatAmount: Maybe<Scalars["Int"]>;
  /** Per unit price for units relevant to the tier. */
  unitAmount: Maybe<Scalars["Int"]>;
  /** Up to and including to this quantity will be contained in the tier. */
  upTo: Maybe<Scalars["Int"]>;
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

export type Round = "up" | "down";

export type TiersMode = "graduated" | "volume";

export type TransformUsage = {
  /** Divide usage by this number. */
  divide_by: Maybe<Scalars["Int"]>;
  /** After division, either round the result up or down. */
  round: Maybe<Round>;
};

export type UsageType = "licensed" | "metered";
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

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<Scalars["DateTime"], any> {
  name: "DateTime";
}

export interface JsonScalarConfig
  extends GraphQLScalarTypeConfig<Scalars["JSON"], any> {
  name: "JSON";
}

export type NodeResolvers<Context = StripeContext, ParentType = Node> = {
  __resolveType: TypeResolveFn<"Plan" | "Product", ParentType, Context>;
  id: Resolver<Scalars["ID"], ParentType, Context>;
};

export type ObjectResolvers<Context = StripeContext, ParentType = Object> = {
  __resolveType: TypeResolveFn<"Plan" | "Product", ParentType, Context>;
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

export type PlanResolvers<Context = StripeContext, ParentType = Plan> = {
  active: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  aggregateUsage: Resolver<Maybe<AggregateUsage>, ParentType, Context>;
  amount: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  billing_scheme: Resolver<Maybe<BillingScheme>, ParentType, Context>;
  created: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  currency: Resolver<Maybe<Currency>, ParentType, Context>;
  id: Resolver<Scalars["ID"], ParentType, Context>;
  interval: Resolver<Maybe<PlanInterval>, ParentType, Context>;
  interval_count: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  livemode: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  metadata: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  nickname: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  product: Resolver<Maybe<Product>, ParentType, Context>;
  tiers: Resolver<Maybe<Array<Maybe<PlanTier>>>, ParentType, Context>;
  tiers_mode: Resolver<Maybe<TiersMode>, ParentType, Context>;
  transform_usage: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  trial_period_days: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  usage_type: Resolver<Maybe<UsageType>, ParentType, Context>;
};

export type PlanTierResolvers<
  Context = StripeContext,
  ParentType = PlanTier
> = {
  flatAmount: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  unitAmount: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  upTo: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
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

export type TransformUsageResolvers<
  Context = StripeContext,
  ParentType = TransformUsage
> = {
  divide_by: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  round: Resolver<Maybe<Round>, ParentType, Context>;
};

export type Resolvers<Context = StripeContext> = {
  DateTime: GraphQLScalarType;
  JSON: GraphQLScalarType;
  Node: NodeResolvers;
  Object: ObjectResolvers;
  PackageDimensions: PackageDimensionsResolvers<Context>;
  Plan: PlanResolvers<Context>;
  PlanTier: PlanTierResolvers<Context>;
  Product: ProductResolvers<Context>;
  TransformUsage: TransformUsageResolvers<Context>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<Context = StripeContext> = Resolvers<Context>;
export type DirectiveResolvers<Context = StripeContext> = {
  expandable: ExpandableDirectiveResolver<any, any, Context>;
};

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<Context = StripeContext> = DirectiveResolvers<
  Context
>;
