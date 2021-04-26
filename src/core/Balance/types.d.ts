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

/** https://stripe.com/docs/reporting/balance-transaction-types */
export type AdvancedBalanceTransactionType =
  | "ADJUSTMENT"
  | "ADVANCE"
  | "ADVANCE_FUNDING"
  | "APPLICATION_FEE"
  | "APPLICATION_FEE_REFUND"
  | "CHARGE"
  | "CONNECT_COLLECTION_TRANSFER"
  | "ISSUING_AUTHORIZATION_HOLD"
  | "ISSUING_AUTHORIZATION_RELEASE"
  | "ISSUING_TRANSACTION"
  | "PAYMENT"
  | "PAYMENT_FAILURE_REFUND"
  | "PAYMENT_REFUND"
  | "PAYOUT"
  | "PAYOUT_CANCEL"
  | "PAYOUT_FAILURE"
  | "REFUND"
  | "REFUND_FAILURE"
  | "RESERVE_TRANSACTION"
  | "RESERVED_FUNDS"
  | "STRIPE_FEE"
  | "STRIPE_FX_FEE"
  | "TAX_FEE"
  | "TOPUP"
  | "TOPUP_REVERSAL"
  | "TRANSFER"
  | "TRANSFER_CANCEL"
  | "TRANSFER_FAILURE"
  | "TRANSFER_REFUND";

/** https://stripe.com/docs/api/balance */
export type Balance = Object & {
  /** Funds that are available to be transferred or paid out, whether automatically
   * by Stripe or explicitly via the [Transfers API](#transfers) or [Payouts
   * API](#payouts). The available balance for each currency and payment type can
   * be found in the `source_types` property.
   */
  available: Maybe<Array<Maybe<Fund>>>;
  /** Funds held due to negative balances on connected Custom accounts. The connect
   * reserve balance for each currency and payment type can be found in the
   * source_types property.
   */
  connect_reserverd: Maybe<Array<Maybe<Fund>>>;
  /** Has the value true if the object exists in live mode or the value false if the object exists in test mode. */
  livemode: Maybe<Scalars["Boolean"]>;
  /** Funds that are not yet available in the balance, due to the 7-day rolling pay
   * cycle. The pending balance for each currency, and for each payment type, can
   * be found in the source_types property.
   */
  pending: Maybe<Array<Maybe<Fund>>>;
  /** String representing the object’s type. Objects of the same type share the same value. */
  object: Maybe<ObjectType>;
};

/** https://stripe.com/docs/api/balance/balance_history */
export type BalanceHistoryWhereInput = {
  /** A filter on the list based on the object available_on field. The value can be
   * a string with an integer Unix timestamp, or it can be a dictionary.
   */
  available_on: Maybe<CreatedInput>;
  created: Maybe<CreatedInput>;
  currency: Maybe<Currency>;
  /** A cursor for use in pagination. ending_before is an object ID that defines
   * your place in the list. For instance, if you make a list request and receive
   * 100 objects, starting with obj_bar, your subsequent call can include
   * ending_before=obj_bar in order to fetch the previous page of the list.
   */
  ending_before: Maybe<Scalars["ID"]>;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
  limit: Maybe<Scalars["Int"]>;
  /** For automatic Stripe payouts only, only returns transactions that were paid out on the specified payout ID. */
  payout: Maybe<Scalars["ID"]>;
  /** Only returns the original transaction. */
  source: Maybe<Scalars["ID"]>;
  /** A cursor for use in pagination. starting_after is an object ID that defines
   * your place in the list. For instance, if you make a list request and receive
   * 100 objects, ending with obj_foo, your subsequent call can include
   * starting_after=obj_foo in order to fetch the next page of the list.
   */
  starting_after: Maybe<Scalars["ID"]>;
  type: Maybe<BalanceTransactionType>;
};

/** https://stripe.com/docs/api/balance/balance_transaction */
export type BalanceTransaction = Node &
  Object & {
    id: Scalars["ID"];
    amount: Maybe<Scalars["Int"]>;
    available_on: Maybe<Scalars["DateTime"]>;
    created: Maybe<Scalars["DateTime"]>;
    currency: Maybe<Currency>;
    description: Maybe<Scalars["String"]>;
    exchange_rate: Maybe<Scalars["Float"]>;
    /** Fees (in cents) paid for this transaction. */
    fee: Maybe<Scalars["Int"]>;
    /** Detailed breakdown of fees (in cents) paid for this transaction. */
    fee_details: Maybe<Array<Maybe<FeeDetail>>>;
    /** Net amount of the transaction, in cents. */
    net: Maybe<Scalars["Int"]>;
    object: Maybe<ObjectType>;
    /** The Stripe object to which this transaction is related. */
    source: Maybe<Scalars["String"]>;
    /** If the transaction’s net funds are available in the Stripe balance yet. Either available or pending. */
    status: Maybe<BalanceTransactionStatus>;
    /** https://stripe.com/docs/reporting/balance-transaction-types
     *
     * Transaction type: `adjustment`, `advance`, `advance_funding`,
     * `application_fee`, `application_fee_refund`, `charge`,
     * `connect_collection_transfer`, `issuing_authorization_hold`,
     * `issuing_authorization_release`, `issuing_transaction`, `payment`,
     * `payment_failure_refund`, `payment_refund`, `payout`, `payout_cancel`,
     * `payout_failure`, `refund`, `refund_failure`, `reserve_transaction`,
     * `reserved_funds`, `stripe_fee`, `stripe_fx_fee`, `tax_fee`, `topup`,
     * `topup_reversal`, `transfer`, `transfer_cancel`, `transfer_failure`, or
     * `transfer_refund`. [Learn
     * more](https://stripe.com/docs/reporting/balance-transaction-types) about
     * balance transaction types and what they represent.
     */
    type: Maybe<BalanceTransactionType>;
  };

export type BalanceTransactionStatus = "AVAILABLE" | "PENDING";

export type BalanceTransactionType =
  | "CHARGE"
  | "REFUND"
  | "ADJUSTMENT"
  | "APPLICATION_FEE"
  | "APPLICATION_FEE_REFUND"
  | "TRANSFER"
  | "PAYMENT"
  | "PAYOUT"
  | "PAYOUT_FAILURE"
  | "STRIPE_FEE"
  | "NETWORK_COST";

/** https://stripe.com/docs/api/balance/balance_transaction_retrieve */
export type BalanceTransactionWhereUniqueInput = {
  /** The ID of the desired balance transaction, as found on any API object that
   * affects the balance (e.g., a charge or transfer).
   */
  id: Scalars["ID"];
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

export type FeeDetail = {
  id: Maybe<Scalars["ID"]>;
  amount: Maybe<Scalars["Int"]>;
  application: Maybe<Scalars["String"]>;
  currency: Maybe<Currency>;
  description: Maybe<Scalars["String"]>;
  type: Maybe<FeeDetailType>;
};

export type FeeDetailType = "APPLICATION_FEE" | "STRIPE_FEE" | "TAX";

/** https://stripe.com/docs/api/balance */
export type Fund = {
  /** Balance amount. */
  amount: Maybe<Scalars["Float"]>;
  /** Three-letter [ISO currency
   * code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be
   * a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: Maybe<Currency>;
  /** Breakdown of balance by source types. */
  source_types: Maybe<SourceTypes>;
};

export type ListBalanceHistoryPayload = {
  data: Maybe<Array<Maybe<BalanceTransaction>>>;
  /** True if this list has another page of items after this one that can be fetched. */
  hasMore: Maybe<Scalars["Boolean"]>;
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Maybe<ObjectType>;
  /** The URL where this list can be accessed. */
  url: Maybe<Scalars["String"]>;
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

export type Query = {
  node: Maybe<Node>;
  retrieveBalance: Maybe<Balance>;
  retrieveBalanceTransaction: Maybe<Balance>;
  /** Returns a list of transactions that have contributed to the Stripe account
   * balance (e.g., charges, transfers, and so forth). The transactions are
   * returned in sorted order, with the most recent transactions appearing first.
   */
  listBalanceHistory: Maybe<ListBalanceHistoryPayload>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"];
};

export type QueryRetrieveBalanceTransactionArgs = {
  where: Maybe<BalanceTransactionWhereUniqueInput>;
};

export type QueryListBalanceHistoryArgs = {
  where: Maybe<BalanceHistoryWhereInput>;
};

export type SourceTypes = {
  /** Amount for bank account. */
  bank_account: Maybe<Scalars["Float"]>;
  /** Amount for card. */
  card: Maybe<Scalars["Float"]>;
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

export type BalanceResolvers<Context = StripeContext, ParentType = Balance> = {
  available: Resolver<Maybe<Array<Maybe<Fund>>>, ParentType, Context>;
  connect_reserverd: Resolver<Maybe<Array<Maybe<Fund>>>, ParentType, Context>;
  livemode: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  pending: Resolver<Maybe<Array<Maybe<Fund>>>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
};

export type BalanceTransactionResolvers<
  Context = StripeContext,
  ParentType = BalanceTransaction
> = {
  id: Resolver<Scalars["ID"], ParentType, Context>;
  amount: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  available_on: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  created: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  currency: Resolver<Maybe<Currency>, ParentType, Context>;
  description: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  exchange_rate: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  fee: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  fee_details: Resolver<Maybe<Array<Maybe<FeeDetail>>>, ParentType, Context>;
  net: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  source: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  status: Resolver<Maybe<BalanceTransactionStatus>, ParentType, Context>;
  type: Resolver<Maybe<BalanceTransactionType>, ParentType, Context>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<Scalars["DateTime"], any> {
  name: "DateTime";
}

export type FeeDetailResolvers<
  Context = StripeContext,
  ParentType = FeeDetail
> = {
  id: Resolver<Maybe<Scalars["ID"]>, ParentType, Context>;
  amount: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  application: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  currency: Resolver<Maybe<Currency>, ParentType, Context>;
  description: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  type: Resolver<Maybe<FeeDetailType>, ParentType, Context>;
};

export type FundResolvers<Context = StripeContext, ParentType = Fund> = {
  amount: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  currency: Resolver<Maybe<Currency>, ParentType, Context>;
  source_types: Resolver<Maybe<SourceTypes>, ParentType, Context>;
};

export type ListBalanceHistoryPayloadResolvers<
  Context = StripeContext,
  ParentType = ListBalanceHistoryPayload
> = {
  data: Resolver<Maybe<Array<Maybe<BalanceTransaction>>>, ParentType, Context>;
  hasMore: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type NodeResolvers<Context = StripeContext, ParentType = Node> = {
  __resolveType: TypeResolveFn<"BalanceTransaction", ParentType, Context>;
  id: Resolver<Scalars["ID"], ParentType, Context>;
};

export type ObjectResolvers<Context = StripeContext, ParentType = Object> = {
  __resolveType: TypeResolveFn<
    "Balance" | "BalanceTransaction",
    ParentType,
    Context
  >;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
};

export type QueryResolvers<Context = StripeContext, ParentType = Query> = {
  node: Resolver<Maybe<Node>, ParentType, Context, QueryNodeArgs>;
  retrieveBalance: Resolver<Maybe<Balance>, ParentType, Context>;
  retrieveBalanceTransaction: Resolver<
    Maybe<Balance>,
    ParentType,
    Context,
    QueryRetrieveBalanceTransactionArgs
  >;
  listBalanceHistory: Resolver<
    Maybe<ListBalanceHistoryPayload>,
    ParentType,
    Context,
    QueryListBalanceHistoryArgs
  >;
};

export type SourceTypesResolvers<
  Context = StripeContext,
  ParentType = SourceTypes
> = {
  bank_account: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  card: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type Resolvers<Context = StripeContext> = {
  Balance: BalanceResolvers<Context>;
  BalanceTransaction: BalanceTransactionResolvers<Context>;
  DateTime: GraphQLScalarType;
  FeeDetail: FeeDetailResolvers<Context>;
  Fund: FundResolvers<Context>;
  ListBalanceHistoryPayload: ListBalanceHistoryPayloadResolvers<Context>;
  Node: NodeResolvers;
  Object: ObjectResolvers;
  Query: QueryResolvers<Context>;
  SourceTypes: SourceTypesResolvers<Context>;
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
