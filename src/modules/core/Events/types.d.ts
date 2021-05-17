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

export type ApiVersion =
  | "_20110101"
  | "_20110621"
  | "_20110628"
  | "_20110801"
  | "_20110915"
  | "_20111117"
  | "_20120223"
  | "_20120325"
  | "_20120618"
  | "_20120628"
  | "_20120709"
  | "_20120924"
  | "_20121026"
  | "_20121107"
  | "_20130211"
  | "_20130213"
  | "_20130705"
  | "_20130812"
  | "_20130813"
  | "_20131029"
  | "_20131203"
  | "_20140131"
  | "_20140313"
  | "_20140328"
  | "_20140519"
  | "_20140613"
  | "_20140617"
  | "_20140722"
  | "_20140726"
  | "_20140804"
  | "_20140820"
  | "_20140908"
  | "_20141007"
  | "_20141105"
  | "_20141120"
  | "_20141208"
  | "_20141217"
  | "_20141222"
  | "_20150111"
  | "_20150126"
  | "_20150210"
  | "_20150216"
  | "_20150218"
  | "_20150324"
  | "_20150407"
  | "_20150615"
  | "_20150707"
  | "_20150713"
  | "_20150728"
  | "_20150807"
  | "_20150819"
  | "_20150903"
  | "_20150908"
  | "_20150923"
  | "_20151001"
  | "_20151012"
  | "_20151016"
  | "_20160203"
  | "_20160219"
  | "_20160222"
  | "_20160223"
  | "_20160229"
  | "_20160307"
  | "_20160615"
  | "_20160706"
  | "_20161019"
  | "_20170127"
  | "_20170214"
  | "_20170406"
  | "_20170525"
  | "_20170605"
  | "_20170815"
  | "_20171214"
  | "_20180123"
  | "_20180205"
  | "_20180206"
  | "_20180228"
  | "_20180521"
  | "_20180727"
  | "_20180823"
  | "_20180906"
  | "_20180924"
  | "_20181031"
  | "_20181108"
  | "_20190211"
  | "_20190219"
  | "_20190314";

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

/** Events are our way of letting you know when something interesting happens in
 * your account. When an interesting event occurs, we create a new Event object.
 * For example, when a charge succeeds, we create a charge.succeeded event; and
 * when an invoice payment attempt fails, we create an invoice.payment_failed
 * event. Note that many API requests may cause multiple events to be created. For
 * example, if you create a new subscription for a customer, you will receive both
 * a customer.subscription.created event and a charge.succeeded event.
 *
 * Events occur when the state of another API resource changes. The state of that
 * resource at the time of the change is embedded in the event's data field. For
 * example, a charge.succeeded event will contain a charge, and an
 * invoice.payment_failed event will contain an invoice.
 *
 * As with other API resources, you can use endpoints to retrieve an individual
 * event or a list of events from the API. We also have a separate webhooks system
 * for sending the Event objects directly to an endpoint on your server. Webhooks
 * are managed in your account settings, and our Using Webhooks guide will help you get set up.
 *
 * When using Connect, you can also receive notifications of events that occur in
 * connected accounts. For these events, there will be an additional account
 * attribute in the received Event object.
 *
 * NOTE: Right now, access to events through the Retrieve Event API is guaranteed only for 30 days.
 */
export type Event = Node &
  Object & {
    /** Unique identifier for the object. */
    id: Scalars["ID"];
    /** String representing the object’s type. Objects of the same type share the same value. */
    object: Maybe<ObjectType>;
    /** The Stripe API version used to render `data`. *Note: This property is
     * populated only for events on or after October 31, 2014*.
     */
    api_version: Maybe<ApiVersion>;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: Maybe<Scalars["DateTime"]>;
    data: Maybe<EventData>;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: Maybe<Scalars["Boolean"]>;
    /** Number of webhooks that have yet to be successfully delivered (i.e., to return
     * a 20x response) to the URLs you've specified.
     */
    pending_webhooks: Maybe<Scalars["Int"]>;
    /** Information on the API request that instigated the event. */
    request: Maybe<EventRequest>;
    /** Description of the event (e.g., `invoice.created` or `charge.refunded`). */
    type: Maybe<Scalars["String"]>;
  };

export type EventData = {
  /** Object containing the API resource relevant to the event. For example, an
   * `invoice.created` event will have a full [invoice object](#invoice_object) as
   * the value of the object key.
   */
  object: Maybe<Object>;
  /** Object containing the names of the attributes that have changed, and their
   * previous values (sent along only with *.updated events).
   */
  previousAttributes: Maybe<Scalars["String"]>;
};

export type EventList = Object & {
  object: Maybe<ObjectType>;
  has_more: Maybe<Scalars["Boolean"]>;
  url: Maybe<Scalars["String"]>;
  data: Maybe<Array<Maybe<Event>>>;
};

export type EventRequest = {
  /** ID of the API request that caused the event. If null, the event was automatic
   * (e.g., Stripe’s automatic subscription handling). Request logs are available
   * in the dashboard, but currently not in the API.
   */
  id: Maybe<Scalars["ID"]>;
  /** The idempotency key transmitted during the request, if any. Note: This
   * property is populated only for events on or after May 23, 2017.
   */
  idempotency_key: Maybe<Scalars["String"]>;
};

export type EventWhereInput = {
  /** A filter on the list based on the object created field. The value can be a
   * string with an integer Unix timestamp, or it can be a dictionary.
   */
  created: Maybe<CreatedInput>;
  /** Filter events by whether all webhooks were successfully delivered. If false,
   * events which are still pending or have failed all delivery attempts to a
   * webhook endpoint will be returned.
   */
  delivery_success: Maybe<Scalars["Boolean"]>;
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
  /** A string containing a specific event name, or group of events using * as a
   * wildcard. The list will be filtered to include only events with a matching
   * event property.
   */
  type: Maybe<Scalars["String"]>;
  /** An array of up to 20 strings containing specific event names. The list will be
   * filtered to include only events with a matching event property. You may pass
   * either type or types, but not both.
   */
  types: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type EventWhereUniqueInput = {
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

export type Query = {
  /** Retrieves the details of an event. Supply the unique identifier of the event, which you might have received in a webhook. */
  retrieveEvent: Maybe<Event>;
  /** List events, going back up to 30 days. Each event data is rendered according
   * to Stripe API version at its creation time, specified in event object
   * api_version attribute (not according to your current Stripe API version or
   * Stripe-Version header).
   */
  listEvents: Maybe<EventList>;
};

export type QueryRetrieveEventArgs = {
  where: Maybe<EventWhereUniqueInput>;
};

export type QueryListEventsArgs = {
  where: Maybe<EventWhereInput>;
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

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<Scalars["DateTime"], any> {
  name: "DateTime";
}

export type EventResolvers<Context = StripeContext, ParentType = Event> = {
  id: Resolver<Scalars["ID"], ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  api_version: Resolver<Maybe<ApiVersion>, ParentType, Context>;
  created: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  data: Resolver<Maybe<EventData>, ParentType, Context>;
  livemode: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  pending_webhooks: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  request: Resolver<Maybe<EventRequest>, ParentType, Context>;
  type: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type EventDataResolvers<
  Context = StripeContext,
  ParentType = EventData
> = {
  object: Resolver<Maybe<Object>, ParentType, Context>;
  previousAttributes: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type EventListResolvers<
  Context = StripeContext,
  ParentType = EventList
> = {
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  has_more: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  data: Resolver<Maybe<Array<Maybe<Event>>>, ParentType, Context>;
};

export type EventRequestResolvers<
  Context = StripeContext,
  ParentType = EventRequest
> = {
  id: Resolver<Maybe<Scalars["ID"]>, ParentType, Context>;
  idempotency_key: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type NodeResolvers<Context = StripeContext, ParentType = Node> = {
  __resolveType: TypeResolveFn<"Event", ParentType, Context>;
  id: Resolver<Scalars["ID"], ParentType, Context>;
};

export type ObjectResolvers<Context = StripeContext, ParentType = Object> = {
  __resolveType: TypeResolveFn<"Event" | "EventList", ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
};

export type QueryResolvers<Context = StripeContext, ParentType = Query> = {
  retrieveEvent: Resolver<
    Maybe<Event>,
    ParentType,
    Context,
    QueryRetrieveEventArgs
  >;
  listEvents: Resolver<
    Maybe<EventList>,
    ParentType,
    Context,
    QueryListEventsArgs
  >;
};

export type Resolvers<Context = StripeContext> = {
  DateTime: GraphQLScalarType;
  Event: EventResolvers<Context>;
  EventData: EventDataResolvers<Context>;
  EventList: EventListResolvers<Context>;
  EventRequest: EventRequestResolvers<Context>;
  Node: NodeResolvers;
  Object: ObjectResolvers;
  Query: QueryResolvers<Context>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<Context = StripeContext> = Resolvers<Context>;
