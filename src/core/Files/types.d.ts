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
  Upload: any;
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

export type File = Node &
  Object & {
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: Maybe<Scalars["DateTime"]>;
    /** A filename for the file, suitable for saving to a filesystem. */
    filename: Maybe<Scalars["String"]>;
    /** Unique identifier for the object. */
    id: Scalars["ID"];
    links: Maybe<FileLinkList>;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: Maybe<ObjectType>;
    /** The purpose of the file. Possible values are `business_icon`, `business_logo`,
     * `customer_signature`, `dispute_evidence`, `finance_report_run`,
     * `founders_stock_document`, `identity_document`, `pci_document`,
     * `sigma_scheduled_query`, or `tax_document_user_upload`.
     */
    purpose: Maybe<Purpose>;
    /** The size in bytes of the file object. */
    size: Maybe<Scalars["Float"]>;
    /** A user friendly title for the document. */
    title: Maybe<Scalars["String"]>;
    /** The URL from which the file can be downloaded using your live secret API key. */
    url: Maybe<Scalars["String"]>;
    /** The type of the file returned (e.g., `csv`, `pdf`, `jpg`, or `png`). */
    type: Maybe<FileType>;
  };

export type FileCreateInput = {
  /** A file to upload. The file should follow the specifications of RFC 2388 (which
   * defines file transfers for the multipart/form-data protocol).
   */
  file: Scalars["Upload"];
  /** The purpose of the uploaded file. Possible values are business_icon,
   * business_logo, customer_signature, dispute_evidence, identity_document,
   * pci_document, or tax_document_user_upload
   */
  purpose: Purpose;
};

/** To share the contents of a File object with non-Stripe users, you can create a
 * FileLink. FileLinks contain a URL that can be used to retrieve the contents of
 * the file without authentication.
 *
 * https://stripe.com/docs/api/file_links
 */
export type FileLink = Node &
  Object & {
    /** Unique identifier for the object. */
    id: Scalars["ID"];
    /** String representing the object’s type. Objects of the same type share the same value. */
    object: Maybe<ObjectType>;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: Maybe<Scalars["DateTime"]>;
    /** Whether this link is already expired. */
    expired: Maybe<Scalars["Boolean"]>;
    /** Time at which the link expires. */
    expires_at: Maybe<Scalars["DateTime"]>;
    /** The file object this link points to. */
    file: Maybe<File>;
    /** Has the value true if the object exists in live mode or the value false if the object exists in test mode. */
    livemode: Maybe<Scalars["Boolean"]>;
    /** Set of key-value pairs that you can attach to an object. This can be useful
     * for storing additional information about the object in a structured format.
     */
    metadata: Maybe<Scalars["JSON"]>;
    /** The publicly accessible URL to download the file. */
    url: Maybe<Scalars["String"]>;
  };

export type FileLinkList = Object & {
  object: Maybe<ObjectType>;
  has_more: Maybe<Scalars["Boolean"]>;
  url: Maybe<Scalars["String"]>;
  data: Maybe<Array<Maybe<FileLink>>>;
};

export type FileList = Object & {
  object: Maybe<ObjectType>;
  has_more: Maybe<Scalars["Boolean"]>;
  url: Maybe<Scalars["String"]>;
  data: Maybe<Array<Maybe<File>>>;
};

export type FileType = "csv" | "pdf" | "jpg" | "png";

export type FileWhereInput = {
  /** A filter on the list based on the object created field. The value can be a
   * string with an integer Unix timestamp, or it can be a dictionary.
   */
  created: Maybe<CreatedInput>;
  /** A cursor for use in pagination. ending_before is an object ID that defines
   * your place in the list. For instance, if you make a list request and receive
   * 100 objects, starting with obj_bar, your subsequent call can include
   * ending_before=obj_bar in order to fetch the previous page of the list.
   */
  ending_before: Maybe<Scalars["ID"]>;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
  limit: Maybe<Scalars["Int"]>;
  /** The file purpose to filter queries by. If none is provided, files will not be filtered by purpose. */
  purpose: Maybe<Purpose>;
  /** A cursor for use in pagination. starting_after is an object ID that defines
   * your place in the list. For instance, if you make a list request and receive
   * 100 objects, ending with obj_foo, your subsequent call can include
   * starting_after=obj_foo in order to fetch the next page of the list.
   */
  starting_after: Maybe<Scalars["ID"]>;
};

export type FileWhereUniqueInput = {
  id: Scalars["ID"];
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

export type Purpose =
  | "business_logo"
  | "customer_signature"
  | "dispute_evidence"
  | "identity_document"
  | "pci_document"
  | "tax_document_user_upload";

export type Query = {
  /** Retrieves the details of an existing file object. Supply the unique file ID
   * from a file, and Stripe will return the corresponding file object.
   */
  retrieveFile: Maybe<File>;
  /** Returns a list of the files that your account has access to. The files are
   * returned sorted by creation date, with the most recently created files
   * appearing first.
   */
  listFiles: Maybe<FileList>;
};

export type QueryRetrieveFileArgs = {
  where: FileWhereUniqueInput;
};

export type QueryListFilesArgs = {
  where: Maybe<FileWhereInput>;
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

export type FileResolvers<Context = StripeContext, ParentType = File> = {
  created: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  filename: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  id: Resolver<Scalars["ID"], ParentType, Context>;
  links: Resolver<Maybe<FileLinkList>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  purpose: Resolver<Maybe<Purpose>, ParentType, Context>;
  size: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  title: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  type: Resolver<Maybe<FileType>, ParentType, Context>;
};

export type FileLinkResolvers<
  Context = StripeContext,
  ParentType = FileLink
> = {
  id: Resolver<Scalars["ID"], ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  created: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  expired: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  expires_at: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  file: Resolver<Maybe<File>, ParentType, Context>;
  livemode: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  metadata: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type FileLinkListResolvers<
  Context = StripeContext,
  ParentType = FileLinkList
> = {
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  has_more: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  data: Resolver<Maybe<Array<Maybe<FileLink>>>, ParentType, Context>;
};

export type FileListResolvers<
  Context = StripeContext,
  ParentType = FileList
> = {
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  has_more: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  data: Resolver<Maybe<Array<Maybe<File>>>, ParentType, Context>;
};

export interface JsonScalarConfig
  extends GraphQLScalarTypeConfig<Scalars["JSON"], any> {
  name: "JSON";
}

export type NodeResolvers<Context = StripeContext, ParentType = Node> = {
  __resolveType: TypeResolveFn<"File" | "FileLink", ParentType, Context>;
  id: Resolver<Scalars["ID"], ParentType, Context>;
};

export type ObjectResolvers<Context = StripeContext, ParentType = Object> = {
  __resolveType: TypeResolveFn<
    "File" | "FileLinkList" | "FileLink" | "FileList",
    ParentType,
    Context
  >;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
};

export type QueryResolvers<Context = StripeContext, ParentType = Query> = {
  retrieveFile: Resolver<
    Maybe<File>,
    ParentType,
    Context,
    QueryRetrieveFileArgs
  >;
  listFiles: Resolver<Maybe<FileList>, ParentType, Context, QueryListFilesArgs>;
};

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<Scalars["Upload"], any> {
  name: "Upload";
}

export type Resolvers<Context = StripeContext> = {
  DateTime: GraphQLScalarType;
  File: FileResolvers<Context>;
  FileLink: FileLinkResolvers<Context>;
  FileLinkList: FileLinkListResolvers<Context>;
  FileList: FileListResolvers<Context>;
  JSON: GraphQLScalarType;
  Node: NodeResolvers;
  Object: ObjectResolvers;
  Query: QueryResolvers<Context>;
  Upload: GraphQLScalarType;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<Context = StripeContext> = Resolvers<Context>;
export type DirectiveResolvers<Context = StripeContext> = {
  constraint: ConstraintDirectiveResolver<any, any, Context>;
  expandable: ExpandableDirectiveResolver<any, any, Context>;
};

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<Context = StripeContext> = DirectiveResolvers<
  Context
>;
