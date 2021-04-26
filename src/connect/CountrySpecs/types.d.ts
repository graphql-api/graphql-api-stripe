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

export type CountrrySpecWhereInput = {
  /** A cursor for use in pagination. ending_before is an object ID that defines
   * your place in the list. For instance, if you make a list request and receive
   * 100 objects, starting with obj_bar, your subsequent call can include
   * ending_before=obj_bar in order to fetch the previous page of the list.
   */
  ending_before: Maybe<Scalars["ID"]>;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
  limit: Maybe<Scalars["Int"]>;
  /** A cursor for use in pagination. starting_after is an object ID that defines
   * your place in the list. For instance, if you make a list request and receive
   * 100 objects, ending with obj_foo, your subsequent call can include
   * starting_after=obj_foo in order to fetch the next page of the list.
   */
  starting_after: Maybe<Scalars["ID"]>;
};

/** An ISO 3166-1 alpha-2 country code. Available country codes can be listed with the List Country Specs endpoint. */
export type CountryCode =
  | "AF"
  | "AX"
  | "AL"
  | "DZ"
  | "AS"
  | "AD"
  | "AO"
  | "AI"
  | "AQ"
  | "AG"
  | "AR"
  | "AM"
  | "AW"
  | "AU"
  | "AT"
  | "AZ"
  | "BS"
  | "BH"
  | "BD"
  | "BB"
  | "BY"
  | "BE"
  | "BZ"
  | "BJ"
  | "BM"
  | "BT"
  | "BO"
  | "BQ"
  | "BA"
  | "BW"
  | "BV"
  | "BR"
  | "IO"
  | "VG"
  | "BN"
  | "BG"
  | "BF"
  | "BI"
  | "KH"
  | "CM"
  | "CA"
  | "CV"
  | "KY"
  | "CF"
  | "TD"
  | "CL"
  | "CN"
  | "CX"
  | "CC"
  | "CO"
  | "KM"
  | "CK"
  | "CR"
  | "HR"
  | "CU"
  | "CW"
  | "CY"
  | "CZ"
  | "CD"
  | "DK"
  | "DJ"
  | "DM"
  | "DO"
  | "TL"
  | "EC"
  | "EG"
  | "SV"
  | "GQ"
  | "ER"
  | "EE"
  | "ET"
  | "FK"
  | "FO"
  | "FJ"
  | "FI"
  | "FR"
  | "GF"
  | "PF"
  | "TF"
  | "GA"
  | "GM"
  | "GE"
  | "DE"
  | "GH"
  | "GI"
  | "GR"
  | "GL"
  | "GD"
  | "GP"
  | "GU"
  | "GT"
  | "GG"
  | "GN"
  | "GW"
  | "GY"
  | "HT"
  | "HM"
  | "HN"
  | "HK"
  | "HU"
  | "IS"
  | "IN"
  | "ID"
  | "IR"
  | "IQ"
  | "IE"
  | "IM"
  | "IL"
  | "IT"
  | "CI"
  | "JM"
  | "JP"
  | "JE"
  | "JO"
  | "KZ"
  | "KE"
  | "KI"
  | "XK"
  | "KW"
  | "KG"
  | "LA"
  | "LV"
  | "LB"
  | "LS"
  | "LR"
  | "LY"
  | "LI"
  | "LT"
  | "LU"
  | "MO"
  | "MK"
  | "MG"
  | "MW"
  | "MY"
  | "MV"
  | "ML"
  | "MT"
  | "MH"
  | "MQ"
  | "MR"
  | "MU"
  | "YT"
  | "MX"
  | "FM"
  | "MD"
  | "MC"
  | "MN"
  | "ME"
  | "MS"
  | "MA"
  | "MZ"
  | "MM"
  | "NA"
  | "NR"
  | "NP"
  | "NL"
  | "AN"
  | "NC"
  | "NZ"
  | "NI"
  | "NE"
  | "NG"
  | "NU"
  | "NF"
  | "KP"
  | "MP"
  | "NO"
  | "OM"
  | "PK"
  | "PW"
  | "PS"
  | "PA"
  | "PG"
  | "PY"
  | "PE"
  | "PH"
  | "PN"
  | "PL"
  | "PT"
  | "PR"
  | "QA"
  | "CG"
  | "RE"
  | "RO"
  | "RU"
  | "RW"
  | "BL"
  | "SH"
  | "KN"
  | "LC"
  | "MF"
  | "PM"
  | "VC"
  | "WS"
  | "SM"
  | "ST"
  | "SA"
  | "SN"
  | "RS"
  | "CS"
  | "SC"
  | "SL"
  | "SG"
  | "SX"
  | "SK"
  | "SI"
  | "SB"
  | "SO"
  | "ZA"
  | "GS"
  | "KR"
  | "SS"
  | "ES"
  | "LK"
  | "SD"
  | "SR"
  | "SJ"
  | "SZ"
  | "SE"
  | "CH"
  | "SY"
  | "TW"
  | "TJ"
  | "TZ"
  | "TH"
  | "TG"
  | "TK"
  | "TO"
  | "TT"
  | "TN"
  | "TR"
  | "TM"
  | "TC"
  | "TV"
  | "VI"
  | "UG"
  | "UA"
  | "AE"
  | "GB"
  | "US"
  | "UM"
  | "UY"
  | "UZ"
  | "VU"
  | "VA"
  | "VE"
  | "VN"
  | "WF"
  | "EH"
  | "YE"
  | "ZM"
  | "ZW";

/** Stripe needs to collect certain pieces of information about each account
 * created. These requirements can differ depending on the account's country. The
 * Country Specs API makes these rules available to your integration.
 *
 * You can also view the information from this API call as an online guide.
 *
 * https://stripe.com/docs/api/country_specs
 */
export type CountrySpec = Node &
  Object & {
    /** The default currency for this country. This applies to both payment methods and bank accounts. */
    default_currency: Maybe<Currency>;
    /** Unique identifier for the object. Represented as the ISO country code for this country. */
    id: Scalars["ID"];
    /** String representing the object's type. Objects of the same type share the same value. */
    object: Maybe<ObjectType>;
    /** Currencies that can be accepted in the specific country (for transfers). */
    supported_bank_account_currencies: Maybe<Scalars["JSON"]>;
    /** Currencies that can be accepted in the specified country (for payments). */
    supported_payment_currencies: Maybe<Array<Maybe<Currency>>>;
    /** Payment methods available in the specified country. You may need to enable
     * some payment methods (e.g., [ACH](https://stripe.com/docs/ach)) on your
     * account before they appear in this list. The `stripe` payment method refers to
     * [charging through your
     * platform](https://stripe.com/docs/connect/destination-charges).
     */
    supported_payment_methods: Maybe<Array<Maybe<Scalars["String"]>>>;
    /** Countries that can accept transfers from the specified country. */
    supported_transfer_countries: Maybe<Array<Maybe<CountryCode>>>;
    /** Lists the types of verification data needed to keep an account open. */
    verification_fields: Maybe<VerificationFields>;
  };

export type CountrySpecList = {
  object: Maybe<ObjectType>;
  has_more: Maybe<Scalars["Boolean"]>;
  data: Maybe<Array<Maybe<CountrySpec>>>;
  url: Maybe<Scalars["String"]>;
};

export type CountrySpecWherUniqueInput = {
  /** An ISO 3166-1 alpha-2 country code. Available country codes can be listed with the List Country Specs endpoint. */
  country: CountryCode;
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
  /** Returns a Country Spec for a given Country code. */
  retrieveCountrySpec: Maybe<CountrySpec>;
  /** Lists all Country Spec objects available in the API. */
  listCountrySpec: Maybe<CountrySpecList>;
};

export type QueryRetrieveCountrySpecArgs = {
  where: CountrySpecWherUniqueInput;
};

export type QueryListCountrySpecArgs = {
  where: Maybe<CountrrySpecWhereInput>;
};

/** No description available. */
export type VerificationFieldDetails = {
  /** Additional fields which are only required for some users. */
  additional: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Fields which every account must eventually provide. */
  minimum: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** No description available. */
export type VerificationFields = {
  /** Verification types for company account. */
  company: Maybe<VerificationFieldDetails>;
  /** Verification types for individual account. */
  individual: Maybe<VerificationFieldDetails>;
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

export type CountrySpecResolvers<
  Context = StripeContext,
  ParentType = CountrySpec
> = {
  default_currency: Resolver<Maybe<Currency>, ParentType, Context>;
  id: Resolver<Scalars["ID"], ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  supported_bank_account_currencies: Resolver<
    Maybe<Scalars["JSON"]>,
    ParentType,
    Context
  >;
  supported_payment_currencies: Resolver<
    Maybe<Array<Maybe<Currency>>>,
    ParentType,
    Context
  >;
  supported_payment_methods: Resolver<
    Maybe<Array<Maybe<Scalars["String"]>>>,
    ParentType,
    Context
  >;
  supported_transfer_countries: Resolver<
    Maybe<Array<Maybe<CountryCode>>>,
    ParentType,
    Context
  >;
  verification_fields: Resolver<Maybe<VerificationFields>, ParentType, Context>;
};

export type CountrySpecListResolvers<
  Context = StripeContext,
  ParentType = CountrySpecList
> = {
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  has_more: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  data: Resolver<Maybe<Array<Maybe<CountrySpec>>>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export interface JsonScalarConfig
  extends GraphQLScalarTypeConfig<Scalars["JSON"], any> {
  name: "JSON";
}

export type NodeResolvers<Context = StripeContext, ParentType = Node> = {
  __resolveType: TypeResolveFn<"CountrySpec", ParentType, Context>;
  id: Resolver<Scalars["ID"], ParentType, Context>;
};

export type ObjectResolvers<Context = StripeContext, ParentType = Object> = {
  __resolveType: TypeResolveFn<"CountrySpec", ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
};

export type QueryResolvers<Context = StripeContext, ParentType = Query> = {
  retrieveCountrySpec: Resolver<
    Maybe<CountrySpec>,
    ParentType,
    Context,
    QueryRetrieveCountrySpecArgs
  >;
  listCountrySpec: Resolver<
    Maybe<CountrySpecList>,
    ParentType,
    Context,
    QueryListCountrySpecArgs
  >;
};

export type VerificationFieldDetailsResolvers<
  Context = StripeContext,
  ParentType = VerificationFieldDetails
> = {
  additional: Resolver<
    Maybe<Array<Maybe<Scalars["String"]>>>,
    ParentType,
    Context
  >;
  minimum: Resolver<
    Maybe<Array<Maybe<Scalars["String"]>>>,
    ParentType,
    Context
  >;
};

export type VerificationFieldsResolvers<
  Context = StripeContext,
  ParentType = VerificationFields
> = {
  company: Resolver<Maybe<VerificationFieldDetails>, ParentType, Context>;
  individual: Resolver<Maybe<VerificationFieldDetails>, ParentType, Context>;
};

export type Resolvers<Context = StripeContext> = {
  CountrySpec: CountrySpecResolvers<Context>;
  CountrySpecList: CountrySpecListResolvers<Context>;
  JSON: GraphQLScalarType;
  Node: NodeResolvers;
  Object: ObjectResolvers;
  Query: QueryResolvers<Context>;
  VerificationFieldDetails: VerificationFieldDetailsResolvers<Context>;
  VerificationFields: VerificationFieldsResolvers<Context>;
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
