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

export type Account = {
  id: Maybe<Scalars["ID"]>;
  object: Maybe<ObjectType>;
  /** Optional information related to the business. */
  businessProfile: Maybe<BusinessProfile>;
  capabilities: Maybe<AccountCapabilities>;
  /** Whether the account can create live charges. */
  charges_enabled: Maybe<Scalars["Boolean"]>;
  /** The account’s country */
  country: Maybe<CountryCode>;
  /** Three-letter ISO currency code representing the default currency for the
   * account. This must be a currency that [Stripe supports in the account's
   * country](https://stripe.com/docs/payouts).
   */
  default_currency: Maybe<Currency>;
  /** Whether account details have been submitted. Standard accounts cannot receive payouts before this is true. */
  details_submitted: Maybe<Scalars["Boolean"]>;
  /** The primary user’s email address. */
  email: Maybe<Scalars["String"]>;
  /** Set of key-value pairs that you can attach to an object. This can be useful
   * for storing additional information about the object in a structured format.
   */
  metadata: Maybe<Scalars["JSON"]>;
  /** Whether Stripe can send payouts to this account. */
  payouts_enabled: Maybe<Scalars["Boolean"]>;
  /** Account options for customizing how the account functions within Stripe. */
  settings: Maybe<AccountSettings>;
  /** The Stripe account type. Can be standard, express, or custom. */
  type: Maybe<AccountType>;
};

/** A hash containing the set of capabilities that was requested for this account
 * and their associated states. Keys may be card_payments, legacy_payments, or
 * platform_payments. Values may be active, inactive, or pending.
 */
export type AccountCapabilities = {
  /** The status of the card payments capability of the account, or whether the
   * account can directly process credit and debit card charges.
   */
  card_payments: Maybe<CapabilitiesPayments>;
  /** The status of the legacy payments capability of the account. */
  legacyPayments: Maybe<CapabilitiesPayments>;
  /** The status of the platform payments capability of the account, or whether your
   * platform can process charges on behalf of the account.
   */
  platformPayments: Maybe<CapabilitiesPayments>;
};

export type AccountList = Object & {
  object: Maybe<ObjectType>;
  data: Maybe<Array<Maybe<Account>>>;
  has_more: Maybe<Scalars["Boolean"]>;
  url: Maybe<Scalars["String"]>;
};

export type AccountRequirements = {
  /** The date the fields in `currently_due` must be collected by to keep payouts
   * enabled for the account. These fields might block payouts sooner if the next
   * threshold is reached before these fields are collected.
   */
  current_deadline: Maybe<Scalars["DateTime"]>;
  /** The fields that need to be collected to keep the account enabled. If not
   * collected by the `current_deadline`, these fields will appear in `past_due` as
   * well, and the account will be disabled.
   */
  currently_due: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** If the account is disabled, this string describes why the account can’t create
   * charges or receive payouts. Can be `requirements.past_due`,
   * `requirements.pending_verification`, `rejected.fraud`,
   * `rejected.terms_of_service`, `rejected.listed`, `rejected.other`, `listed`,
   * `under_review`, or `other`.
   */
  disabled_reason: Maybe<Scalars["String"]>;
  /** The fields that need to be collected assuming all volume thresholds are
   * reached. As they become required, these fields will appear in `currently_due`
   * as well, and the `current_deadline` will be set.
   */
  eventually_due: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The fields that weren't collected by the `current_deadline`. These fields need to be collected to re-enable the account. */
  past_due: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type AccountSettings = {
  /** Settings used to apply the account’s branding to email receipts, invoices, Checkout, and other products. */
  branding: Maybe<AccountSettingsBranding>;
  /** Settings specific to card charging on the account. */
  card_payments: Maybe<AccountSettingsCardPayments>;
  /** Settings that apply across payment methods for charging on the account. */
  payments: Maybe<AccountSettingsPayments>;
  /** Settings specific to the account’s payouts. */
  payouts: Maybe<AccountSettingsPayouts>;
};

export type AccountSettingsBranding = {
  icon: Maybe<File>;
  logo: Maybe<File>;
  primary_color: Maybe<Scalars["String"]>;
};

export type AccountSettingsCardPayments = {
  /** Automatically declines certain charge types regardless of whether the card issuer accepted or declined the charge. */
  decline_on: Maybe<AccountSettingsCardPaymentsDeclineOn>;
  /** The default text that appears on credit card statements when a charge is made.
   * This field prefixes any dynamic statement_descriptor specified on the charge.
   * statement_descriptor_prefix is useful for maximizing descriptor space for the
   * dynamic portion.
   */
  statement_descriptor_prefix: Maybe<Scalars["String"]>;
};

export type AccountSettingsCardPaymentsDeclineOn = {
  /** Whether Stripe automatically declines charges with an incorrect ZIP or postal
   * code. This setting only applies when a ZIP or postal code is provided and they
   * fail bank verification.
   */
  avs_failure: Maybe<Scalars["Boolean"]>;
  /** Whether Stripe automatically declines charges with an incorrect CVC. This
   * setting only applies when a CVC is provided and it fails bank verification.
   */
  cvc_failure: Maybe<Scalars["Boolean"]>;
};

export type AccountSettingsPayments = {
  /** The default text that appears on credit card statements when a charge is made.
   * This field prefixes any dynamic statement_descriptor specified on the charge.
   */
  statement_descriptor: Maybe<Scalars["String"]>;
};

export type AccountSettingsPayouts = {
  /** A Boolean indicating if Stripe should try to reclaim negative balances from an
   * attached bank account. See our Understanding Connect Account Balances
   * documentation for details. Default value is true for Express accounts and
   * false for Custom accounts.
   */
  debit_negative_balances: Maybe<Scalars["Boolean"]>;
  /** Details on when funds from charges are available, and when they are paid out
   * to an external account. See our Setting Bank and Debit Card Payouts
   * documentation for details.
   */
  schedule: Maybe<AccountSettingsPayoutsSchedule>;
  /** The text that appears on the bank account statement for payouts. If not set,
   * this defaults to the platform’s bank descriptor as set in the Dashboard.
   */
  statement_descriptor: Maybe<Scalars["String"]>;
};

export type AccountSettingsPayoutsSchedule = {
  /** The number of days charges for the account will be held before being paid out. */
  delay_days: Maybe<Scalars["Int"]>;
  /** How frequently funds will be paid out. One of manual (payouts only created via API call), daily, weekly, or monthly. */
  interval: Maybe<Interval>;
  /** The day of the month funds will be paid out. Only shown if interval is
   * monthly. Payouts scheduled between the 29th and 31st of the month are sent on
   * the last day of shorter months.
   */
  monthly_anchor: Maybe<Scalars["Int"]>;
  /** The day of the week funds will be paid out, of the style ‘monday’, ‘tuesday’, etc. Only shown if interval is weekly. */
  weekly_anchor: Maybe<Scalars["String"]>;
};

export type AccountTosAcceptance = {
  /** The Unix timestamp marking when the Stripe Services Agreement was accepted by the account representative */
  date: Maybe<Scalars["Int"]>;
  /** The IP address from which the Stripe Services Agreement was accepted by the account representative */
  ip: Maybe<Scalars["String"]>;
  /** The user agent of the browser from which the Stripe Services Agreement was accepted by the account representative */
  userAgent: Maybe<Scalars["String"]>;
};

export type AccountType = "standard" | "express" | "custom";

/** https://stripe.com/docs/sources/ach-credit-transfer */
export type AchCreditTransfer = {
  account_number: Maybe<Scalars["String"]>;
  routing_number: Maybe<Scalars["Int"]>;
  fingerprint: Maybe<Scalars["String"]>;
  bank_name: Maybe<Scalars["String"]>;
  swift_code: Maybe<Scalars["String"]>;
};

export type Address = {
  city: Maybe<Scalars["String"]>;
  /** 2-letter country code. */
  country: Maybe<CountryCode>;
  /** Address line 1 (Street address/PO Box/Company name). */
  line1: Maybe<Scalars["String"]>;
  /** Address line 2 (Apartment/Suite/Unit/Building). */
  line2: Maybe<Scalars["String"]>;
  /** ZIP or postal code. */
  postal_code: Maybe<Scalars["String"]>;
  /** State/County/Province/Region. */
  state: Maybe<Scalars["String"]>;
};

export type AggregateUsage = "lastDuringPeriod" | "lastEver" | "max" | "sum";

/** https://stripe.com/docs/sources/alipay */
export type Alipay = {
  statement_descriptor: Maybe<Scalars["String"]>;
  native_url: Maybe<Scalars["String"]>;
};

export type AvailablePayoutMethods = "standard" | "instant";

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

/** https://stripe.com/docs/sources/bancontact */
export type Bancontact = {
  bank_code: Maybe<Scalars["String"]>;
  bic: Maybe<Scalars["String"]>;
  bank_name: Maybe<Scalars["String"]>;
  iban_last4: Maybe<Scalars["Int"]>;
  statement_descriptor: Maybe<Scalars["String"]>;
  preferred_language: Maybe<Scalars["String"]>;
};

export type BankAccount = ExternalAccount &
  Node &
  Object & {
    account: Maybe<Scalars["String"]>;
    /** The name of the person or business that owns the bank account. */
    account_holder_name: Maybe<Scalars["String"]>;
    /** The type of entity that holds the account. This can be either `individual` or `company`. */
    account_holder_type: Maybe<BusinessType>;
    /** Name of the bank associated with the routing number (e.g., `WELLS FARGO`). */
    bank_name: Maybe<Scalars["String"]>;
    /** Two-letter ISO code representing the country the bank account is located in. */
    country: Maybe<CountryCode>;
    /** Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account. */
    currency: Maybe<Currency>;
    customer: Maybe<Scalars["String"]>;
    /** Whether this bank account is the default external account for its currency. */
    default_for_currency: Maybe<Scalars["Boolean"]>;
    /** Uniquely identifies this particular bank account. You can use this attribute
     * to check whether two bank accounts are the same.
     */
    fingerprint: Maybe<Scalars["ID"]>;
    /** Unique identifier for the object. */
    id: Scalars["ID"];
    last4: Maybe<Scalars["String"]>;
    /** Set of key-value pairs that you can attach to an object. This can be useful
     * for storing additional information about the object in a structured format.
     */
    metadata: Maybe<Scalars["JSON"]>;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: Maybe<ObjectType>;
    /** The routing transit number for the bank account. */
    routing_number: Maybe<Scalars["String"]>;
    /** For bank accounts, possible values are `new`, `validated`, `verified`,
     * `verification_failed`, or `errored`. A bank account that hasn't had any
     * activity or validation performed is `new`. If Stripe can determine that the
     * bank account exists, its status will be `validated`. Note that there often
     * isn’t enough information to know (e.g., for smaller credit unions), and the
     * validation is not always run. If customer bank account verification has
     * succeeded, the bank account status will be `verified`. If the verification
     * failed for any reason, such as microdeposit failure, the status will be
     * `verification_failed`. If a transfer sent to this bank account fails, we'll
     * set the status to `errored` and will not continue to send transfers until the
     * bank details are updated.
     *
     * For external accounts, possible values are `new` and `errored`. Validations
     * aren't run against external accounts because they're only used for payouts.
     * This means the other statuses don't apply. If a transfer fails, the status is
     * set to `errored` and transfers are stopped until account details are updated.
     */
    status: Maybe<BankAccountStatus>;
  };

export type BankAccountObjectType = "bank_account";

export type BankAccountStatus =
  | "new"
  | "validated"
  | "verified"
  | "verification_failed"
  | "errored";

export type BillingScheme = "perUnit" | "tiered";

/** https://stripe.com/docs/api/subscriptions */
export type BillingSubscription = Node &
  Object & {
    /** A non-negative decimal between 0 and 100, with at most two decimal places.
     * This represents the percentage of the subscription invoice subtotal that will
     * be transferred to the application owner's Stripe account.
     */
    application_fee_percent: Maybe<Scalars["Float"]>;
    /** Either `charge_automatically`, or `send_invoice`. When charging automatically,
     * Stripe will attempt to pay this subscription at the end of the cycle using the
     * default source attached to the customer. When sending an invoice, Stripe will
     * email your customer an invoice with payment instructions.
     */
    billing: Maybe<BillingSubscriptionBilling>;
    /** Determines the date of the first full invoice, and, for plans with `month` or
     * `year` intervals, the day of the month for subsequent invoices.
     */
    billing_cycle_anchor: Maybe<Scalars["DateTime"]>;
    /** Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period */
    billing_thresholds: Maybe<BillingSubscriptionBillingThresholds>;
    /** If the subscription has been canceled with the `at_period_end` flag set to
     * `true`, `cancel_at_period_end` on the subscription will be true. You can use
     * this attribute to determine whether a subscription that has a status of active
     * is scheduled to be canceled at the end of the current period.
     */
    cancel_at_period_end: Maybe<Scalars["Boolean"]>;
    /** If the subscription has been canceled, the date of that cancellation. If the
     * subscription was canceled with `cancel_at_period_end`, `canceled_at` will
     * still reflect the date of the initial cancellation request, not the end of the
     * subscription period when the subscription is automatically moved to a canceled state.
     */
    canceled_at: Maybe<Scalars["DateTime"]>;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: Maybe<Scalars["DateTime"]>;
    /** End of the current period that the subscription has been invoiced for. At the
     * end of this period, a new invoice will be created.
     */
    current_period_end: Maybe<Scalars["DateTime"]>;
    /** Start of the current period that the subscription has been invoiced for. */
    current_period_start: Maybe<Scalars["DateTime"]>;
    /** ID of the customer who owns the subscription. */
    customer: Maybe<Customer>;
    /** Number of days a customer has to pay invoices generated by this subscription.
     * This value will be `null` for subscriptions where
     * `billing=charge_automatically`.
     */
    days_until_due: Maybe<Scalars["Int"]>;
    /** ID of the default payment source for the subscription. It must belong to the
     * customer associated with the subscription and be in a chargeable state. If not
     * set, defaults to the customer's default source.
     */
    default_source: Maybe<Source>;
    /** Describes the current discount applied to this subscription, if there is one.
     * When billing, a discount applied to a subscription overrides a discount
     * applied on a customer-wide basis.
     */
    discount: Maybe<Discount>;
    /** If the subscription has ended, the date the subscription ended. */
    ended_at: Maybe<Scalars["DateTime"]>;
    /** Unique identifier for the object. */
    id: Scalars["ID"];
    /** List of subscription items, each with an attached plan. */
    items: Maybe<BillingSubscriptionItemList>;
    /** The most recent invoice this subscription has generated. */
    latest_invoice: Maybe<Invoice>;
    /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
    livemode: Maybe<Scalars["Boolean"]>;
    /** Set of key-value pairs that you can attach to an object. This can be useful
     * for storing additional information about the object in a structured format.
     */
    metadata: Maybe<Scalars["JSON"]>;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: Maybe<ObjectType>;
    /** Hash describing the plan the customer is subscribed to. Only set if the subscription contains a single plan. */
    plan: Maybe<Plan>;
    /** The quantity of the plan to which the customer is subscribed. For example, if
     * your plan is $10/user/month, and your customer has 5 users, you could pass 5
     * as the quantity to have the customer charged $50 (5 x $10) monthly. Only set
     * if the subscription contains a single plan.
     */
    quantity: Maybe<Scalars["Int"]>;
    /** Date of the last substantial change to this subscription. For example, a
     * change to the items array, or a change of status, will reset this timestamp.
     */
    start: Maybe<Scalars["DateTime"]>;
    /** Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, or `unpaid`.
     *
     * For `billing=charge_automatically` a subscription moves into `incomplete` if
     * the initial payment attempt fails. A subscription in this state can only have
     * metadata and default_source updated. Once the first invoice is paid, the
     * subscription moves into an `active` state. If the first invoice is not paid
     * within 23 hours, the subscription transitions to `incomplete_expired`. This is
     * a terminal state, the open invoice will be voided and no further invoices will be generated.
     *
     * A subscription that is currently in a trial period is `trialing` and moves to `active` when the trial period is over.
     *
     * If subscription `billing=charge_automatically` it becomes `past_due` when
     * payment to renew it fails and `canceled` or `unpaid` (depending on your
     * subscriptions settings) when Stripe has exhausted all payment retry attempts.
     *
     * If subscription `billing=send_invoice` it becomes `past_due` when its invoice
     * is not paid by the due date, and `canceled` or `unpaid` if it is still not
     * paid by an additional deadline after that. Note that when a subscription has a
     * status of `unpaid`, no subsequent invoices will be attempted (invoices will be
     * created, but then immediately automatically closed). After receiving updated
     * payment information from a customer, you may choose to reopen and pay their
     * closed invoices.
     */
    status: Maybe<BillingSubscriptionStatus>;
    /** If the subscription has a trial, the end of that trial. */
    trialEnd: Maybe<Scalars["DateTime"]>;
    /** If the subscription has a trial, the beginning of that trial. */
    trialStart: Maybe<Scalars["DateTime"]>;
  };

export type BillingSubscriptionBilling = "chargeAutomatically" | "sendInvoice";

/** Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period */
export type BillingSubscriptionBillingThresholds = {
  /** Monetary threshold that triggers the subscription to create an invoice */
  amount_gte: Maybe<Scalars["Float"]>;
  /** Indicates if the billing_cycle_anchor should be reset when a threshold is
   * reached. If true, billing_cycle_anchor will be updated to the date/time the
   * threshold was last reached; otherwise, the value will remain unchanged. This
   * value may not be true if the subscription contains items with plans that have
   * aggregate_usage=last_ever.
   */
  reset_billing_cycle_anchor: Maybe<Scalars["Boolean"]>;
};

/** https://stripe.com/docs/api/subscription_items */
export type BillingSubscriptionItem = Node &
  Object & {
    /** Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period */
    billing_thresholds: Maybe<BillingSubscriptionItemBillingThresholds>;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: Maybe<Scalars["DateTime"]>;
    /** Unique identifier for the object. */
    id: Scalars["ID"];
    /** Set of key-value pairs that you can attach to an object. This can be useful
     * for storing additional information about the object in a structured format.
     */
    metadata: Maybe<Scalars["JSON"]>;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: Maybe<ObjectType>;
    plan: Maybe<Plan>;
    /** The [quantity](https://stripe.com/docs/subscriptions/quantities) of the plan to which the customer should be subscribed. */
    quantity: Maybe<Scalars["Int"]>;
    /** The \`subscription\` this \`subscription_item\` belongs to. */
    subscription: Maybe<Scalars["ID"]>;
  };

/** Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period */
export type BillingSubscriptionItemBillingThresholds = {
  /** Usage threshold that triggers the subscription to create an invoice */
  usage_gte: Maybe<Scalars["Float"]>;
};

/** List of subscription items, each with an attached plan. */
export type BillingSubscriptionItemList = Object & {
  data: Maybe<Array<Maybe<BillingSubscriptionItem>>>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more: Maybe<Scalars["Boolean"]>;
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Maybe<ObjectType>;
  /** The URL where this list can be accessed. */
  url: Maybe<Scalars["String"]>;
};

export type BillingSubscriptionList = Object & {
  /** String representing the object’s type. Objects of the same type share the same value. Always has the value list. */
  object: Maybe<ObjectType>;
  data: Maybe<Array<Maybe<BillingSubscription>>>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more: Maybe<Scalars["Boolean"]>;
  /** The URL where this list can be accessed. */
  url: Maybe<Scalars["String"]>;
};

export type BillingSubscriptionStatus =
  | "active"
  | "canceled"
  | "incomplete"
  | "incompleteExpired"
  | "pastDue"
  | "trialing"
  | "unpaid";

export type Brand =
  | "AmericanExpress"
  | "DinersClub"
  | "Discover"
  | "JCB"
  | "MasterCard"
  | "UnionPay"
  | "Visa"
  | "Unknown";

export type BusinessProfile = {
  /** The merchant category code for the account. MCCs are used to classify
   * businesses based on the goods or services they provide. This can be unset by
   * updating the value to null and then saving.
   */
  mcc: Maybe<Scalars["String"]>;
  /** The customer-facing business name. This can be unset by updating the value to null and then saving. */
  name: Maybe<Scalars["String"]>;
  /** Internal-only description of the product sold by, or service provided by, the
   * business. Used by Stripe for risk and underwriting purposes. This can be unset
   * by updating the value to null and then saving.
   */
  product_description: Maybe<Scalars["String"]>;
  /** A publicly available mailing address for sending support issues to. */
  support_address: Maybe<Address>;
  /** A publicly available email address for sending support issues to. */
  support_email: Maybe<Scalars["String"]>;
  /** A publicly available phone number to call with support issues. */
  support_phone: Maybe<Scalars["String"]>;
  /** A publicly available website for handling support issues. */
  support_url: Maybe<Scalars["String"]>;
  /** The business’s publicly available website. This can be unset by updating the value to null and then saving. */
  url: Maybe<Scalars["String"]>;
};

export type BusinessType = "individual" | "company";

export type CapabilitiesPayments = "active" | "inactive" | "pending";

/** https://stripe.com/docs/api/cards/object */
export type Card = ExternalAccount &
  Node &
  Object & {
    /** The account this card belongs to. This attribute will not be in the card
     * object if the card belongs to a customer or recipient instead.
     */
    account: Maybe<Scalars["String"]>;
    /** City/District/Suburb/Town/Village. */
    address_city: Maybe<Scalars["String"]>;
    /** Billing address country, if provided when creating card. */
    address_country: Maybe<Scalars["String"]>;
    /** Address line 1 (Street address/PO Box/Company name). */
    address_line1: Maybe<Scalars["String"]>;
    /** If `address_line1` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. */
    address_line1_check: Maybe<Check>;
    /** Address line 2 (Apartment/Suite/Unit/Building). */
    address_line2: Maybe<Scalars["String"]>;
    /** State/County/Province/Region. */
    address_state: Maybe<Scalars["String"]>;
    /** ZIP or postal code. */
    address_zip: Maybe<Scalars["String"]>;
    /** If `address_zip` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. */
    address_zip_check: Maybe<Check>;
    /** A set of available payout methods for this card. Will be either `["standard"]`
     * or `["standard", "instant"]`. Only values from this set should be passed as
     * the `method` when creating a transfer.
     */
    available_payout_methods: Maybe<Array<Maybe<AvailablePayoutMethods>>>;
    /** Card brand. Can be `American Express`, `Diners Club`, `Discover`, `JCB`, `MasterCard`, `UnionPay`, `Visa`, or `Unknown`. */
    brand: Maybe<Brand>;
    /** Two-letter ISO code representing the country of the card. You could use this
     * attribute to get a sense of the international breakdown of cards you've collected.
     */
    country: Maybe<CountryCode>;
    /** Three-letter ISO code for currency. Only applicable on accounts (not customers
     * or recipients). The card can be used as a transfer destination for funds in this currency.
     */
    currency: Maybe<Currency>;
    /** The customer that this card belongs to. This attribute will not be in the card
     * object if the card belongs to an account or recipient instead.
     */
    customer: Maybe<Scalars["String"]>;
    /** If a CVC was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. */
    cvc_check: Maybe<Check>;
    /** Whether this card is the default external account for its currency. */
    default_for_currency: Maybe<Scalars["Boolean"]>;
    /** (For tokenized numbers only.) The last four digits of the device account number. */
    dynamic_last4: Maybe<Scalars["String"]>;
    /** Two-digit number representing the card's expiration month. */
    exp_month: Maybe<Scalars["Int"]>;
    /** Four-digit number representing the card's expiration year. */
    exp_year: Maybe<Scalars["Int"]>;
    /** Uniquely identifies this particular card number. You can use this attribute to
     * check whether two customers who've signed up with you are using the same card
     * number, for example.
     */
    fingerprint: Maybe<Scalars["String"]>;
    /** Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`. */
    funding: Maybe<Funding>;
    /** Unique identifier for the object. */
    id: Scalars["ID"];
    /** The last four digits of the card. */
    last4: Maybe<Scalars["String"]>;
    /** Set of key-value pairs that you can attach to an object. This can be useful
     * for storing additional information about the object in a structured format.
     */
    metadata: Maybe<Scalars["JSON"]>;
    /** Cardholder name. */
    name: Maybe<Scalars["String"]>;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: Maybe<ObjectType>;
    /** The recipient that this card belongs to. This attribute will not be in the
     * card object if the card belongs to a customer or account instead.
     */
    recipient: Maybe<Scalars["String"]>;
    /** If the card number is tokenized, this is the method that was used. Can be `apple_pay` or `google_pay`. */
    tokenizationMethod: Maybe<TokenizationMethod>;
  };

/** To charge a credit or a debit card, you create a Charge object. You can retrieve
 * and refund individual charges as well as list all charges. Charges are
 * identified by a unique, random ID.
 */
export type Charge = Node &
  Object & {
    /** Unique identifier for the object. */
    id: Scalars["ID"];
    /** String representing the object’s type. Objects of the same type share the same value. */
    object: ObjectType;
    /** A positive integer in the smallest currency unit (e.g., 100 cents to charge
     * $1.00 or 100 to charge ¥100, a zero-decimal currency) representing how much to
     * charge. The minimum amount is $0.50 US or equivalent in charge currency.
     */
    amount: Maybe<Scalars["Float"]>;
    /** Amount in cents refunded (can be less than the amount attribute on the charge if a partial refund was issued). */
    amount_refunded: Maybe<Scalars["Int"]>;
    application: Maybe<Scalars["String"]>;
    application_fee: Maybe<Scalars["String"]>;
    application_fee_amount: Maybe<Scalars["Int"]>;
    balance_transaction: Maybe<Scalars["String"]>;
    captured: Maybe<Scalars["Boolean"]>;
    created: Maybe<Scalars["DateTime"]>;
    currency: Maybe<Currency>;
    /** ID of the customer this charge is for if one exists. */
    customer: Maybe<Customer>;
    description: Maybe<Scalars["String"]>;
    destination: Maybe<Scalars["String"]>;
    dispute: Maybe<Scalars["String"]>;
    failure_code: Maybe<Scalars["String"]>;
    failure_message: Maybe<Scalars["String"]>;
    fraud_details: Maybe<FraudDetails>;
    invoice: Maybe<Scalars["ID"]>;
    livemode: Maybe<Scalars["Boolean"]>;
    metadata: Maybe<Scalars["JSON"]>;
    /** The account (if any) the charge was made on behalf of without triggering an
     * automatic transfer. See the Connect documentation for details.
     */
    on_behalf_of: Maybe<Scalars["String"]>;
    order: Maybe<Scalars["ID"]>;
    outcome: Maybe<ChargeOutcome>;
    paid: Maybe<Scalars["Boolean"]>;
    payment_intent: Maybe<Scalars["ID"]>;
    receipt_email: Maybe<Scalars["String"]>;
    receipt_number: Maybe<Scalars["String"]>;
    refunded: Maybe<Scalars["Boolean"]>;
    refunds: Maybe<RefundList>;
    review: Maybe<Scalars["String"]>;
    shipping: Maybe<ChargeShipping>;
    source: Maybe<Card>;
    source_transfer: Maybe<Scalars["String"]>;
    statement_descriptor: Maybe<Scalars["String"]>;
    status: Maybe<ChargeStatus>;
    transfer: Maybe<Scalars["ID"]>;
    transfer_data: Maybe<TransferData>;
    /** A string that identifies this transaction as part of a group. See the Connect documentation for details. */
    transfer_group: Maybe<Scalars["String"]>;
  };

export type ChargeList = Object & {
  object: Maybe<ObjectType>;
  url: Maybe<Scalars["String"]>;
  has_more: Maybe<Scalars["Boolean"]>;
  data: Maybe<Array<Maybe<Charge>>>;
};

export type ChargeOutcome = {
  network_status: Maybe<NetworkStatus>;
  reason: Maybe<Scalars["String"]>;
  risk_level: Maybe<Scalars["String"]>;
  risk_score: Maybe<Scalars["Int"]>;
  rule: Maybe<Scalars["String"]>;
  seller_message: Maybe<Scalars["String"]>;
  type: Maybe<ChargeOutcomeType>;
};

export type ChargeOutcomeType =
  | "authhorized"
  | "manual_review"
  | "issuer_declined"
  | "blocked"
  | "invalid";

export type ChargeShipping = {
  address: Maybe<Address>;
  carrier: Maybe<Scalars["String"]>;
  name: Maybe<Scalars["String"]>;
  phone: Maybe<Scalars["String"]>;
  tracking_number: Maybe<Scalars["String"]>;
};

export type ChargeStatus = "succeeded" | "pending" | "faile";

export type Check = "pass" | "fail" | "unavailable" | "unchecked";

export type CodeVerification = {
  /** The number of attempts remaining to authenticate the source object with a verification code. */
  attemps_remainig: Maybe<Scalars["Int"]>;
  /** The status of the code verification, either pending (awaiting verification,
   * attempts_remaining should be greater than 0), succeeded (successful
   * verification) or failed (failed verification, cannot be verified anymore as
   * attempts_remaining should be 0).
   */
  status: Maybe<CodeVerificationStatus>;
};

/** The status of the code verification, either pending (awaiting verification,
 * attempts_remaining should be greater than 0), succeeded (successful
 * verification) or failed (failed verification, cannot be verified anymore as
 * attempts_remaining should be 0).
 */
export type CodeVerificationStatus = "PENDING" | "SUCCEEDED" | "FAILED";

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

/** https://stripe.com/docs/api/coupons/object */
export type Coupon = Object & {
  /** Unique identifier for the object. */
  id: Scalars["ID"];
  /** String representing the object’s type. Objects of the same type share the same value. */
  object: Maybe<ObjectType>;
  /** Amount (in the currency specified) that will be taken off the subtotal of any invoices for this customer. */
  amount_off: Maybe<Scalars["Int"]>;
  created: Maybe<Scalars["DateTime"]>;
  currency: Maybe<Currency>;
  /** Describes how long a customer who applies this coupon will get the discount. */
  duration: Maybe<Duration>;
  /** If duration is repeating, the number of months the coupon applies. Null if coupon duration is forever or once. */
  duration_in_months: Maybe<Scalars["Int"]>;
  livemode: Maybe<Scalars["Boolean"]>;
  /** Maximum number of times this coupon can be redeemed, in total, across all customers, before it is no longer valid. */
  max_redemptions: Maybe<Scalars["Int"]>;
  metadata: Maybe<Scalars["JSON"]>;
  /** Name of the coupon displayed to customers on for instance invoices or receipts. */
  name: Maybe<Scalars["String"]>;
  /** Percent that will be taken off the subtotal of any invoices for this customer
   * for the duration of the coupon. For example, a coupon with percent_off of 50
   * will make a $100 invoice $50 instead.
   */
  percent_off: Maybe<Scalars["Float"]>;
  /** Date after which the coupon can no longer be redeemed. */
  redeem_by: Maybe<Scalars["DateTime"]>;
  /** Number of times this coupon has been applied to a customer. */
  times_redeemed: Maybe<Scalars["Int"]>;
  valid: Maybe<Scalars["Boolean"]>;
};

export type CouponList = Object & {
  object: Maybe<ObjectType>;
  data: Maybe<Array<Maybe<Coupon>>>;
  has_more: Maybe<Scalars["Boolean"]>;
  url: Maybe<Scalars["String"]>;
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

export type CustomAccount = Account &
  Node &
  Object & {
    id: Scalars["ID"];
    object: Maybe<ObjectType>;
    /** Optional information related to the business. */
    businessProfile: Maybe<BusinessProfile>;
    capabilities: Maybe<AccountCapabilities>;
    /** Whether the account can create live charges. */
    charges_enabled: Maybe<Scalars["Boolean"]>;
    /** The account’s country */
    country: Maybe<CountryCode>;
    /** Three-letter ISO currency code representing the default currency for the
     * account. This must be a currency that [Stripe supports in the account's
     * country](https://stripe.com/docs/payouts).
     */
    default_currency: Maybe<Currency>;
    /** Whether account details have been submitted. Standard accounts cannot receive payouts before this is true. */
    details_submitted: Maybe<Scalars["Boolean"]>;
    /** The primary user’s email address. */
    email: Maybe<Scalars["String"]>;
    /** Set of key-value pairs that you can attach to an object. This can be useful
     * for storing additional information about the object in a structured format.
     */
    metadata: Maybe<Scalars["JSON"]>;
    /** Whether Stripe can send payouts to this account. */
    payouts_enabled: Maybe<Scalars["Boolean"]>;
    /** Account options for customizing how the account functions within Stripe. */
    settings: Maybe<AccountSettings>;
    /** The Stripe account type. Can be standard, express, or custom. */
    type: Maybe<AccountType>;
    /** Information about the company or business. This field is null unless business_type is set to company. */
    company: Maybe<LegalEntityCompany>;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: Maybe<Scalars["DateTime"]>;
    /** External accounts (bank accounts and debit cards) currently attached to this account */
    external_accounts: Maybe<ExternalAccountList>;
    /** Information about the person represented by the account. This field is null unless business_type is set to individual. */
    individual: Maybe<Person>;
    /** Information about the requirements for the account, including what information needs to be collected, and by when. */
    requirements: Maybe<AccountRequirements>;
    /** Details on the acceptance of the Stripe Services Agreement */
    tos_acceptance: Maybe<AccountTosAcceptance>;
  };

export type Customer = Object & {
  id: Maybe<Scalars["ID"]>;
  /** String representing the object’s type. Objects of the same type share the same value. */
  object: Maybe<ObjectType>;
  /** Current balance, if any, being stored on the customer’s account. If negative,
   * the customer has credit to apply to the next invoice. If positive, the
   * customer has an amount owed that will be added to the next invoice. The
   * balance does not refer to any unpaid invoices; it solely takes into account
   * amounts that have yet to be successfully applied to any invoice. This balance
   * is only taken into account as invoices are finalized. Note that the balance
   * does not include unpaid invoices.
   */
  account_balance: Maybe<Scalars["Int"]>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created: Maybe<Scalars["DateTime"]>;
  currency: Maybe<Currency>;
  /** ID of the default source attached to this customer. */
  default_source: Maybe<Source>;
  /** When the customer’s latest invoice is billed by charging automatically,
   * delinquent is true if the invoice’s latest charge is failed. When the
   * customer’s latest invoice is billed by sending an invoice, delinquent is true
   * if the invoice is not paid by its due date.
   */
  delinquent: Maybe<Scalars["Boolean"]>;
  /** An arbitrary string attached to the object. Often useful for displaying to users. */
  description: Maybe<Scalars["String"]>;
  discount: Maybe<Discount>;
  /** The customer’s email address. */
  email: Maybe<Scalars["String"]>;
  /** The prefix for the customer used to generate unique invoice numbers. */
  invoice_prefix: Maybe<Scalars["String"]>;
  /** The customer’s default invoice settings. */
  invoice_settings: Maybe<CustomerInvoiceSetting>;
  /** Has the value true if the object exists in live mode or the value false if the object exists in test mode. */
  livemode: Maybe<Scalars["Boolean"]>;
  /** Set of key-value pairs that you can attach to an object. This can be useful
   * for storing additional information about the object in a structured format.
   */
  metadata: Maybe<Scalars["JSON"]>;
  shipping: Maybe<CustomerShipping>;
  sources: Maybe<CustomerPaymentSource>;
  /** The customer’s current subscriptions, if any. */
  subscriptions: Maybe<BillingSubscriptionList>;
  /** The customer’s tax information. Appears on invoices emailed to this customer. */
  tax_info: Maybe<CustomerTaxInformation>;
  /** Describes the status of looking up the tax ID provided in tax_info. */
  tax_info_verification: Maybe<CustomerTaxInformationVerification>;
};

/** The customer’s default invoice settings. */
export type CustomerInvoiceSetting = {
  /** Default custom fields to be displayed on invoices for this customer. */
  custom_fields: Maybe<CustomerInvoiceSettingCustomField>;
  /** Default footer to be displayed on invoices for this customer. */
  footer: Maybe<Scalars["String"]>;
};

/** Default custom fields to be displayed on invoices for this customer. */
export type CustomerInvoiceSettingCustomField = {
  /** The name of the custom field. */
  name: Scalars["String"];
  /** The value of the custom field. */
  value: Scalars["String"];
};

export type CustomerList = Object & {
  object: Maybe<ObjectType>;
  url: Maybe<Scalars["String"]>;
  has_more: Maybe<Scalars["Boolean"]>;
  data: Maybe<Array<Maybe<Customer>>>;
};

/** The customer’s payment sources, if any. */
export type CustomerPaymentSource = {
  data: Maybe<Array<Maybe<Source>>>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more: Maybe<Scalars["Boolean"]>;
  /** The URL where this list can be accessed. */
  url: Maybe<Scalars["String"]>;
};

/** Mailing and shipping address for the customer. Appears on invoices emailed to this customer. */
export type CustomerShipping = {
  /** Customer name. */
  name: Maybe<Scalars["String"]>;
  /** Customer phone (including extension). */
  phone: Maybe<Scalars["String"]>;
  /** Customer shipping address. */
  address: Maybe<Address>;
};

/** The customer’s tax information. Appears on invoices emailed to this customer. */
export type CustomerTaxInformation = {
  /** The customer’s tax ID number. */
  tax_id: Maybe<Scalars["ID"]>;
  /** The type of ID number. */
  type: Maybe<TaxType>;
};

/** Describes the status of looking up the tax ID provided in tax_info. */
export type CustomerTaxInformationVerification = {
  /** The state of verification for this customer */
  status: Maybe<VerificationStatus>;
  /** The official name associated with the tax ID returned from the external provider. */
  verified_name: Maybe<Scalars["String"]>;
};

export type DateOfBirth = {
  /** The day of birth, between 1 and 31. */
  day: Maybe<Scalars["Int"]>;
  /** The month of birth, between 1 and 12. */
  month: Maybe<Scalars["Int"]>;
  /** The four-digit year of birth. */
  year: Maybe<Scalars["Int"]>;
};

export type DeleteCustomerPayload = Object & {
  id: Maybe<Scalars["ID"]>;
  object: Maybe<ObjectType>;
  deleted: Maybe<Scalars["Boolean"]>;
};

export type Discount = Object & {
  /** String representing the object’s type. Objects of the same type share the same value. */
  object: Maybe<ObjectType>;
  /** Hash describing the coupon applied to create this discount. */
  coupon: Maybe<Coupon>;
  customer: Maybe<Customer>;
  /** If the coupon has a duration of repeating, the date that this discount will
   * end. If the coupon has a duration of once or forever, this attribute will be null.
   */
  end: Maybe<Scalars["DateTime"]>;
  /** Date that the coupon was applied. */
  start: Maybe<Scalars["DateTime"]>;
  /** The subscription that this coupon is applied to, if it is applied to a particular subscription. */
  subscription: Maybe<Scalars["String"]>;
};

export type DocumentDetailsCode =
  | "document_corrupt"
  | "document_failed_copy"
  | "document_not_readable"
  | "document_failed_greyscale"
  | "document_not_uploaded"
  | "document_id_type_not_supported"
  | "document_id_country_not_supported"
  | "document_failed_other"
  | "document_fraudulent"
  | "document_invalid"
  | "document_manipulated"
  | "document_missing_back"
  | "document_missing_front"
  | "document_photo_mismatch"
  | "document_too_large"
  | "document_failed_test_mode";

export type Duration = "forever" | "once" | "repeating";

/** https://stripe.com/docs/sources/eps */
export type Eps = {
  reference: Maybe<Scalars["String"]>;
  statement_descriptor: Maybe<Scalars["String"]>;
};

export type ExpressAccount = Account &
  Node &
  Object & {
    id: Scalars["ID"];
    object: Maybe<ObjectType>;
    /** Optional information related to the business. */
    businessProfile: Maybe<BusinessProfile>;
    capabilities: Maybe<AccountCapabilities>;
    /** Whether the account can create live charges. */
    charges_enabled: Maybe<Scalars["Boolean"]>;
    /** The account’s country */
    country: Maybe<CountryCode>;
    /** Three-letter ISO currency code representing the default currency for the
     * account. This must be a currency that [Stripe supports in the account's
     * country](https://stripe.com/docs/payouts).
     */
    default_currency: Maybe<Currency>;
    /** Whether account details have been submitted. Standard accounts cannot receive payouts before this is true. */
    details_submitted: Maybe<Scalars["Boolean"]>;
    /** The primary user’s email address. */
    email: Maybe<Scalars["String"]>;
    /** Set of key-value pairs that you can attach to an object. This can be useful
     * for storing additional information about the object in a structured format.
     */
    metadata: Maybe<Scalars["JSON"]>;
    /** Whether Stripe can send payouts to this account. */
    payouts_enabled: Maybe<Scalars["Boolean"]>;
    /** Account options for customizing how the account functions within Stripe. */
    settings: Maybe<AccountSettings>;
    /** The Stripe account type. Can be standard, express, or custom. */
    type: Maybe<AccountType>;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: Maybe<Scalars["DateTime"]>;
    /** External accounts (bank accounts and debit cards) currently attached to this account */
    external_accounts: Maybe<ExternalAccountList>;
    /** Information about the requirements for the account, including what information needs to be collected, and by when. */
    requirements: Maybe<AccountRequirements>;
  };

export type ExternalAccount = {
  /** Whether this bank account is the default external account for its currency. */
  default_for_currency: Maybe<Scalars["Boolean"]>;
};

export type ExternalAccountList = Object & {
  /** The list contains all external accounts that have been attached to the Stripe
   * account. These may be bank accounts or cards.
   */
  data: Maybe<Array<Maybe<ExternalAccount>>>;
  /** True if this list has another page of items after this one that can be fetched. */
  hasMore: Maybe<Scalars["Boolean"]>;
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Maybe<ObjectType>;
  /** The URL where this list can be accessed. */
  url: Maybe<Scalars["String"]>;
};

export type FailureReason =
  | "lost_or_stolen_card"
  | "expired_or_canceled_card"
  | "unknown";

export type FeeDetail = {
  id: Maybe<Scalars["ID"]>;
  amount: Maybe<Scalars["Int"]>;
  application: Maybe<Scalars["String"]>;
  currency: Maybe<Currency>;
  description: Maybe<Scalars["String"]>;
  type: Maybe<FeeDetailType>;
};

export type FeeDetailType = "APPLICATION_FEE" | "STRIPE_FEE" | "TAX";

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

/** The authentication flow of the source. */
export type Flow = "redirect" | "receiver" | "code_verification" | "none";

export type FraudDetails = {
  stripe_report: Maybe<Scalars["String"]>;
  user_report: Maybe<Scalars["String"]>;
};

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

export type Funding = "credit" | "debit" | "prepaid" | "unknown";

/** https://stripe.com/docs/sources/giropay */
export type Giropay = {
  bank_code: Maybe<Scalars["String"]>;
  bic: Maybe<Scalars["String"]>;
  bank_name: Maybe<Scalars["String"]>;
  statement_descriptor: Maybe<Scalars["String"]>;
};

/** https://stripe.com/docs/sources/ideal */
export type IDeal = {
  bank: Maybe<Scalars["String"]>;
  bic: Maybe<Scalars["String"]>;
  iban_last4: Maybe<Scalars["Int"]>;
  statement_descriptor: Maybe<Scalars["String"]>;
};

export type Interval = "manual" | "daily" | "weekly" | "monthly";

/** Invoices are statements of amounts owed by a customer, and are either generated
 * one-off, or generated periodically from a subscription.
 *
 * They contain invoice items, and proration adjustments that may be caused by subscription upgrades/downgrades (if necessary).
 *
 * If your invoice is configured to be billed through automatic charges, Stripe
 * automatically finalizes your invoice and attempts payment. Note that finalizing
 * the invoice, when automatic, does not happen immediately as the invoice is
 * created. Stripe waits until one hour after the last webhook was successfully
 * sent (or the last webhook timed out after failing). If you (and the platforms
 * you may have connected to) have no webhooks configured, Stripe waits one hour
 * after creation to finalize the invoice.
 *
 * If your invoice is configured to be billed by sending an email, then based on
 * your email settings, Stripe will email the invoice to your customer and await
 * payment. These emails can contain a link to a hosted page to pay the invoice.
 *
 * Stripe applies any customer credit on the account before determining the amount
 * due for the invoice (i.e., the amount that will be actually charged). If the
 * amount due for the invoice is less than Stripe's minimum allowed charge per
 * currency, the invoice is automatically marked paid, and we add the amount due to
 * the customer's running account balance which is applied to the next invoice.
 *
 * More details on the customer's account balance are here.
 */
export type Invoice = Node &
  Object & {
    /** Final amount due at this time for this invoice. If the invoice's total is
     * smaller than the minimum charge amount, for example, or if there is account
     * credit that can be applied to the invoice, the \`amount_due\` may be 0. If there
     * is a positive \`starting_balance\` for the invoice (the customer owes money),
     * the \`amount_due\` will also take that into account. The charge that gets
     * generated for the invoice will be for the amount specified in \`amount_due\`.
     */
    amount_due: Maybe<Scalars["Int"]>;
    /** The amount, in %s, that was paid. */
    amount_paid: Maybe<Scalars["Int"]>;
    /** The amount remaining, in %s, that is due. */
    amount_remaining: Maybe<Scalars["Int"]>;
    /** The fee in %s that will be applied to the invoice and transferred to the
     * application owner's Stripe account when the invoice is paid.
     */
    application_fee_amount: Maybe<Scalars["Int"]>;
    /** Number of payment attempts made for this invoice, from the perspective of the
     * payment retry schedule. Any payment attempt counts as the first attempt, and
     * subsequently only automatic retries increment the attempt count. In other
     * words, manual payment attempts after the first attempt do not affect the retry schedule.
     */
    attempt_count: Maybe<Scalars["Int"]>;
    /** Whether an attempt has been made to pay the invoice. An invoice is not
     * attempted until 1 hour after the \`invoice.created\` webhook, for example, so
     * you might not want to display that invoice as unpaid to your users.
     */
    attempted: Maybe<Scalars["Boolean"]>;
    /** Controls whether Stripe will perform [automatic
     * collection](https://stripe.com/docs/billing/invoices/workflow/#auto_advance)
     * of the invoice. When \`false\`, the invoice's state will not automatically
     * advance without an explicit action.
     */
    auto_advance: Maybe<Scalars["Boolean"]>;
    /** Either \`charge_automatically\`, or \`send_invoice\`. When charging automatically,
     * Stripe will attempt to pay this invoice using the default source attached to
     * the customer. When sending an invoice, Stripe will email this invoice to the
     * customer with payment instructions.
     */
    billing: Maybe<InvoiceBilling>;
    /** Indicates the reason why the invoice was created. \`subscription_cycle\`
     * indicates an invoice created by a subscription advancing into a new period.
     * \`subscription_create\` indicates an invoice created due to creating a
     * subscription. \`subscription_update\` indicates an invoice created due to
     * updating a subscription. \`subscription\` is set for all old invoices to
     * indicate either a change to a subscription or a period advancement. \`manual\`
     * is set for all invoices unrelated to a subscription (for example: created via
     * the invoice editor). The \`upcoming\` value is reserved for simulated invoices
     * per the upcoming invoice endpoint. \`subscription_threshold\` indicates an
     * invoice created due to a billing threshold being reached.
     */
    billing_reason: Maybe<InvoiceBillingReason>;
    /** ID of the latest charge generated for this invoice, if any. */
    charge: Maybe<Charge>;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: Maybe<Scalars["DateTime"]>;
    /** Three-letter [ISO currency
     * code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be
     * a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: Maybe<Currency>;
    /** Custom fields displayed on the invoice. */
    custom_fields: Maybe<Array<Maybe<InvoiceSettingCustomField>>>;
    customer: Maybe<Customer>;
    /** ID of the default payment source for the invoice. It must belong to the
     * customer associated with the invoice and be in a chargeable state. If not set,
     * defaults to the subscription's default source, if any, or to the customer's
     * default source.
     */
    default_source: Maybe<Source>;
    /** An arbitrary string attached to the object. Often useful for displaying to users. Referenced as 'memo' in the Dashboard. */
    description: Maybe<Scalars["String"]>;
    discount: Maybe<Discount>;
    /** The date on which payment for this invoice is due. This value will be \`null\`
     * for invoices where \`billing=charge_automatically\`.
     */
    due_date: Maybe<Scalars["DateTime"]>;
    /** Ending customer balance after the invoice is finalized. Invoices are finalized
     * approximately an hour after successful webhook delivery or when payment
     * collection is attempted for the invoice. If the invoice has not been finalized
     * yet, this will be null.
     */
    ending_balance: Maybe<Scalars["Int"]>;
    /** Footer displayed on the invoice. */
    footer: Maybe<Scalars["String"]>;
    /** The URL for the hosted invoice page, which allows customers to view and pay an
     * invoice. If the invoice has not been finalized yet, this will be null.
     */
    hosted_invoice_url: Maybe<Scalars["String"]>;
    /** Unique identifier for the object. */
    id: Scalars["ID"];
    /** The link to download the PDF for the invoice. If the invoice has not been finalized yet, this will be null. */
    invoice_pdf: Maybe<Scalars["String"]>;
    /** The individual line items that make up the invoice. \`lines\` is sorted as
     * follows: invoice items in reverse chronological order, followed by the
     * subscription, if any.
     */
    lines: Maybe<Lines>;
    /** Has the value \`true\` if the object exists in live mode or the value \`false\` if the object exists in test mode. */
    livemode: Maybe<Scalars["Boolean"]>;
    /** Set of key-value pairs that you can attach to an object. This can be useful
     * for storing additional information about the object in a structured format.
     */
    metadata: Maybe<Scalars["JSON"]>;
    /** The time at which payment will next be attempted. This value will be \`null\` for invoices where \`billing=send_invoice\`. */
    nextPaymentAttempt: Maybe<Scalars["Int"]>;
    /** A unique, identifying string that appears on emails sent to the customer for
     * this invoice. This starts with the customer's unique invoice_prefix if it is specified.
     */
    number: Maybe<Scalars["String"]>;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: Maybe<ObjectType>;
    /** Whether payment was successfully collected for this invoice. An invoice can be
     * paid (most commonly) with a charge or with credit from the customer's account balance.
     */
    paid: Maybe<Scalars["Boolean"]>;
    /** End of the usage period during which invoice items were added to this invoice. */
    period_end: Maybe<Scalars["DateTime"]>;
    /** Start of the usage period during which invoice items were added to this invoice. */
    period_start: Maybe<Scalars["DateTime"]>;
    /** This is the transaction number that appears on email receipts sent for this invoice. */
    receipt_number: Maybe<Scalars["String"]>;
    /** Starting customer balance before the invoice is finalized. If the invoice has
     * not been finalized yet, this will be the current customer balance.
     */
    starting_balance: Maybe<Scalars["Float"]>;
    /** Extra information about an invoice for the customer's credit card statement. */
    statement_descriptor: Maybe<Scalars["String"]>;
    /** The status of the invoice, one of \`draft\`, \`open\`, \`paid\`, \`uncollectible\`, or \`void\`. */
    status: Maybe<InvoiceStatus>;
    status_transitions: Maybe<InvoicesStatusTransitions>;
    /** The subscription that this invoice was prepared for, if any. */
    subscription: Maybe<BillingSubscription>;
    /** Only set for upcoming invoices that preview prorations. The time used to calculate prorations. */
    subscription_proration_date: Maybe<Scalars["Int"]>;
    /** Total of all subscriptions, invoice items, and prorations on the invoice before any discount is applied. */
    subtotal: Maybe<Scalars["Int"]>;
    /** The amount of tax included in the total, calculated from \`tax_percent\` and the
     * subtotal. If no \`tax_percent\` is defined, this value will be null.
     */
    tax: Maybe<Scalars["Int"]>;
    /** This percentage of the subtotal has been added to the total amount of the
     * invoice, including invoice line items and discounts. This field is inherited
     * from the subscription's \`tax_percent\` field, but can be changed before the
     * invoice is paid. This field defaults to null.
     */
    tax_percent: Maybe<Scalars["Float"]>;
    /** If billing_reason is set to subscription_threshold this returns more
     * information on which threshold rules triggered the invoice.
     */
    threshold_reason: Maybe<InvoiceThresholdReason>;
    /** Total after discount. */
    total: Maybe<Scalars["Int"]>;
    /** The time at which webhooks for this invoice were successfully delivered (if
     * the invoice had no webhooks to deliver, this will match \`created\`). Invoice
     * payment is delayed until webhooks are delivered, or until all webhook delivery
     * attempts have been exhausted.
     */
    webhooks_delivered_at: Maybe<Scalars["DateTime"]>;
  };

export type InvoiceBilling = "chargeAutomatically" | "sendInvoice";

export type InvoiceBillingReason =
  | "automaticPendingInvoiceItemInvoice"
  | "manual"
  | "subscription"
  | "subscriptionCreate"
  | "subscriptionCycle"
  | "subscriptionThreshold"
  | "subscriptionUpdate"
  | "upcoming";

export type InvoiceDeletePayload = Object & {
  object: Maybe<ObjectType>;
  deleted: Maybe<Scalars["Boolean"]>;
};

/** Sometimes you want to add a charge or credit to a customer, but actually charge
 * or credit the customer's card only at the end of a regular billing cycle. This
 * is useful for combining several charges (to minimize per-transaction fees), or
 * for having Stripe tabulate your usage-based billing totals.
 */
export type InvoiceItem = Node &
  Object & {
    /** Amount (in the [currency] specified) of the invoice item. This should always be equal to [unit_amount * quantity`. */
    amount: Maybe<Scalars["Int"]>;
    /** Three-letter [ISO currency
     * code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be
     * a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: Maybe<Scalars["String"]>;
    /** The ID of the customer who will be billed when this invoice item is billed. */
    customer: Maybe<Customer>;
    date: Maybe<Scalars["Int"]>;
    /** An arbitrary string attached to the object. Often useful for displaying to users. */
    description: Maybe<Scalars["String"]>;
    /** If true, discounts will apply to this invoice item. Always false for prorations. */
    discountable: Maybe<Scalars["Boolean"]>;
    /** Unique identifier for the object. */
    id: Scalars["ID"];
    /** The ID of the invoice this invoice item belongs to. */
    invoice: Maybe<Invoice>;
    /** Has the value [true] if the object exists in live mode or the value [false] if the object exists in test mode. */
    livemode: Maybe<Scalars["Boolean"]>;
    /** Set of key-value pairs that you can attach to an object. This can be useful
     * for storing additional information about the object in a structured format.
     */
    metadata: Maybe<Scalars["JSON"]>;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: Maybe<ObjectType>;
    period: Maybe<Period>;
    /** If the invoice item is a proration, the plan of the subscription that the proration was computed for. */
    plan: Maybe<Plan>;
    /** Whether the invoice item was created automatically as a proration adjustment when the customer switched plans. */
    proration: Maybe<Scalars["Boolean"]>;
    /** Quantity of units for the invoice item. If the invoice item is a proration,
     * the quantity of the subscription that the proration was computed for.
     */
    quantity: Maybe<Scalars["Int"]>;
    /** The subscription that this invoice item has been created for, if any. */
    subscription: Maybe<BillingSubscription>;
    subscription_item: Maybe<Scalars["ID"]>;
    /** Unit Amount (in the [currency] specified) of the invoice item. */
    unit_amount: Maybe<Scalars["Int"]>;
  };

export type InvoiceItemDeletePayload = Object & {
  object: Maybe<ObjectType>;
  deleted: Maybe<Scalars["Boolean"]>;
};

export type InvoiceItemList = Object & {
  data: Maybe<Array<Maybe<InvoiceItem>>>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more: Maybe<Scalars["Boolean"]>;
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Maybe<ObjectType>;
  /** The URL where this list can be accessed. */
  url: Maybe<Scalars["String"]>;
};

export type InvoiceItemThresholdReason = {
  /** The IDs of the line items that triggered the threshold invoice. */
  line_item_ids: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** The quantity threshold boundary that applied to the given line item. */
  usage_gte: Maybe<Scalars["Int"]>;
};

export type InvoiceLineItemPeriod = {
  /** End of the line item's billing period */
  end: Maybe<Scalars["Int"]>;
  /** Start of the line item's billing period */
  start: Maybe<Scalars["Int"]>;
};

export type InvoiceList = Object & {
  object: Maybe<ObjectType>;
  has_more: Maybe<Scalars["Boolean"]>;
  url: Maybe<Scalars["String"]>;
  data: Maybe<Array<Maybe<Invoice>>>;
};

export type InvoiceSettingCustomField = {
  /** The name of the custom field. */
  name: Maybe<Scalars["String"]>;
  /** The value of the custom field. */
  value: Maybe<Scalars["String"]>;
};

export type InvoicesStatusTransitions = {
  /** The time that the invoice draft was finalized. */
  finalized_at: Maybe<Scalars["DateTime"]>;
  /** The time that the invoice was marked uncollectible. */
  marked_uncollectible_at: Maybe<Scalars["DateTime"]>;
  /** The time that the invoice was paid. */
  paid_at: Maybe<Scalars["DateTime"]>;
  /** The time that the invoice was voided. */
  voided_at: Maybe<Scalars["DateTime"]>;
};

export type InvoiceStatus =
  | "deleted"
  | "draft"
  | "open"
  | "paid"
  | "uncollectible"
  | "void";

export type InvoiceThresholdReason = {
  /** The total invoice amount threshold boundary if it triggered the threshold invoice. */
  amount_gte: Maybe<Scalars["Int"]>;
  /** Indicates which line items triggered a threshold invoice. */
  item_reasons: Maybe<Array<Maybe<InvoiceItemThresholdReason>>>;
};

export type InvoiceType = "invoiceitem" | "subscription";

export type JapaneseAddress = {
  city: Maybe<Scalars["String"]>;
  /** 2-letter country code. */
  country: Maybe<CountryCode>;
  /** Block/Building number. */
  line1: Maybe<Scalars["String"]>;
  /** Building details. */
  line2: Maybe<Scalars["String"]>;
  /** ZIP or postal code. */
  postal_code: Maybe<Scalars["String"]>;
  /** Prefecture. */
  state: Maybe<Scalars["String"]>;
  /** Town/cho-me. */
  town: Maybe<Scalars["String"]>;
};

export type LegalEntityCompany = {
  address: Maybe<Address>;
  /** The Kana variation of the company's primary address (Japan only). */
  address_kana: Maybe<JapaneseAddress>;
  /** The Kanji variation of the company's primary address (Japan only). */
  address_kanji: Maybe<JapaneseAddress>;
  /** Whether information was collected from the company's directors. */
  directors_provided: Maybe<Scalars["Boolean"]>;
  /** The company's legal name. */
  name: Maybe<Scalars["String"]>;
  /** The Kana variation of the company's legal name Japan only). */
  name_kana: Maybe<Scalars["String"]>;
  /** The Kanji variation of the company's legal name (Japan only). */
  name_kanji: Maybe<Scalars["String"]>;
  /** Whether the company's owners have been provided. */
  owners_provided: Maybe<Scalars["Boolean"]>;
  /** The company's phone number (used for verification). */
  phone: Maybe<Scalars["String"]>;
  /** Whether the company's business ID number was provided. */
  tax_id_provided: Maybe<Scalars["Boolean"]>;
  /** The jurisdiction in which the `tax_id` is registered (Germany-based companies only). */
  tax_id_registrar: Maybe<Scalars["String"]>;
  /** Whether the company's business VAT number was provided. */
  vat_id_provided: Maybe<Scalars["Boolean"]>;
};

export type LegalEntityVerification = {
  details: Maybe<Scalars["String"]>;
  /** A machine-readable code specifying the verification state for this legal entity. */
  details_code: Maybe<LegalEntityVerificationDetailsCode>;
  /** An identifying document for the person, either a passport or local ID card. */
  document: Maybe<VerificationDocument>;
  /** The state of verification for this legal entity. */
  status: Maybe<LegalEntityVerificationStatus>;
};

export type LegalEntityVerificationDetailsCode =
  | "scan_name_mismatch"
  | "failed_keyed_identity"
  | "failed_other";

export type LegalEntityVerificationStatus =
  | "unverified"
  | "pending"
  | "verified";

export type LineItem = Node &
  Object & {
    /** The amount, in %s. */
    amount: Maybe<Scalars["Float"]>;
    /** Three-letter [ISO currency
     * code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be
     * a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: Maybe<Currency>;
    /** An arbitrary string attached to the object. Often useful for displaying to users. */
    description: Maybe<Scalars["String"]>;
    /** If true, discounts will apply to this line item. Always false for prorations. */
    discountable: Maybe<Scalars["Boolean"]>;
    /** Unique identifier for the object. */
    id: Scalars["ID"];
    invoiceItem: Maybe<Scalars["String"]>;
    /** Whether this is a test line item. */
    livemode: Maybe<Scalars["Boolean"]>;
    /** Set of key-value pairs that you can attach to an object. This can be useful
     * for storing additional information about the object in a structured format.
     * Note that for line items with \`type=subscription\` this will reflect the
     * metadata of the subscription that caused the line item to be created.
     */
    metadata: Maybe<Scalars["JSON"]>;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: Maybe<ObjectType>;
    period: Maybe<InvoiceLineItemPeriod>;
    /** The plan of the subscription, if the line item is a subscription or a proration. */
    plan: Maybe<Plan>;
    /** Whether this is a proration. */
    proration: Maybe<Scalars["Boolean"]>;
    /** The quantity of the subscription, if the line item is a subscription or a proration. */
    quantity: Maybe<Scalars["Int"]>;
    /** The subscription that the invoice item pertains to, if any. */
    subscription: Maybe<Scalars["String"]>;
    /** The subscription item that generated this invoice item. Left empty if the line
     * item is not an explicit result of a subscription.
     */
    subscription_item: Maybe<Scalars["String"]>;
    /** A string identifying the type of the source of this line item, either an \`invoiceitem\` or a \`subscription\`. */
    type: Maybe<InvoiceType>;
  };

export type LineItemList = Object & {
  object: Maybe<ObjectType>;
  has_more: Maybe<Scalars["Boolean"]>;
  url: Maybe<Scalars["String"]>;
  data: Maybe<Array<Maybe<LineItem>>>;
};

/** The individual line items that make up the invoice. \`lines\` is sorted as
 * follows: invoice items in reverse chronological order, followed by the
 * subscription, if any.
 */
export type Lines = Object & {
  data: Maybe<Array<Maybe<LineItem>>>;
  /** True if this list has another page of items after this one that can be fetched. */
  hasMore: Maybe<Scalars["Boolean"]>;
  /** String representing the object's type. Objects of the same type share the same value. Always has the value \`list\`. */
  object: Maybe<ObjectType>;
  /** The URL where this list can be accessed. */
  url: Maybe<Scalars["String"]>;
};

/** No description available. */
export type ListBankAccountPayload = Object & {
  data: Maybe<Array<Maybe<BankAccount>>>;
  /** True if this list has another page of items after this one that can be fetched. */
  hasMore: Maybe<Scalars["Boolean"]>;
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Maybe<ObjectType>;
  /** The URL where this list can be accessed. */
  url: Maybe<Scalars["String"]>;
};

export type LoginLink = Object & {
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created: Maybe<Scalars["DateTime"]>;
  /** String representing the object’s type. Objects of the same type share the same value. */
  object: Maybe<ObjectType>;
  /** The URL for the login link. */
  url: Maybe<Scalars["String"]>;
};

/** https://stripe.com/docs/sources/multibanco */
export type Multibanco = {
  reference: Maybe<Scalars["Int"]>;
  entity: Maybe<Scalars["Int"]>;
};

export type Mutation = {
  /** To send funds to your own bank account, you create a new payout object. Your
   * Stripe balance must be able to cover the payout amount, or you’ll receive an
   * “Insufficient Funds” error.
   *
   * If your API key is in test mode, money won’t actually be sent, though everything else will occur as if in live mode.
   *
   * If you are creating a manual payout on a Stripe account that uses multiple
   * payment source types, you’ll need to specify the source type balance that the
   * payout should draw from. The balance object details available and pending
   * amounts by source type.
   */
  createPayout: Maybe<Payout>;
  /** Updates the specified payout by setting the values of the parameters passed.
   * Any parameters not provided will be left unchanged. This request accepts only
   * the metadata as arguments.
   */
  updatePayout: Maybe<Payout>;
  /** A previously created payout can be canceled if it has not yet been paid out.
   * Funds will be refunded to your available balance. You may not cancel automatic
   * Stripe payouts.
   */
  cancelPayout: Maybe<Payout>;
};

export type MutationCreatePayoutArgs = {
  data: PayoutCreateInput;
};

export type MutationUpdatePayoutArgs = {
  where: PayoutWhereUniqueInput;
  data: PayoutUpdateInput;
};

export type MutationCancelPayoutArgs = {
  where: PayoutWhereUniqueInput;
};

export type NetworkStatus =
  | "approved_by_network"
  | "declined_by_network"
  | "not_sent_to_network"
  | "reversed_after_approval";

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

export type Owner = {
  /** Owner’s address. */
  address: Maybe<Address>;
  /** Owner’s email address. */
  email: Maybe<Scalars["String"]>;
  /** Owner’s full name. */
  name: Maybe<Scalars["String"]>;
  /** Owner’s phone number (including extension). */
  phone: Maybe<Scalars["String"]>;
  /** Verified owner’s address. Verified values are verified or provided by the
   * payment method directly (and if supported) at the time of authorization or
   * settlement. They cannot be set or mutated.
   */
  verified_address: Maybe<Address>;
  /** Verified owner’s email address. Verified values are verified or provided by
   * the payment method directly (and if supported) at the time of authorization or
   * settlement. They cannot be set or mutated.
   */
  verified_email: Maybe<Scalars["String"]>;
  /** Verified owner’s full name. Verified values are verified or provided by the
   * payment method directly (and if supported) at the time of authorization or
   * settlement. They cannot be set or mutated.
   */
  verified_name: Maybe<Scalars["String"]>;
  /** Verified owner’s phone number (including extension). Verified values are
   * verified or provided by the payment method directly (and if supported) at the
   * time of authorization or settlement. They cannot be set or mutated.
   */
  verified_phone: Maybe<Scalars["String"]>;
};

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

/** A Payout object is created when you receive funds from Stripe, or when you
 * initiate a payout to either a bank account or debit card of a connected Stripe
 * account. You can retrieve individual payouts, as well as list all payouts.
 * Payouts are made on varying schedules, depending on your country and industry.
 * https://stripe.com/docs/api/payouts/object
 */
export type Payout = Node &
  Object & {
    /** Unique identifier for the object. */
    id: Scalars["ID"];
    /** String representing the object’s type. Objects of the same type share the same value. */
    object: Maybe<ObjectType>;
    /** Amount (in cents) to be transferred to your bank account or debit card. */
    amount: Maybe<Scalars["Int"]>;
    /** Date the payout is expected to arrive in the bank. This factors in delays like weekends or bank holidays. */
    arrival_date: Maybe<Scalars["DateTime"]>;
    /** Returns true if the payout was created by an automated payout schedule, and false if it was requested manually. */
    automatic: Maybe<Scalars["Boolean"]>;
    /** ID of the balance transaction that describes the impact of this payout on your account balance. */
    balance_transaction: Maybe<BalanceTransaction>;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: Maybe<Scalars["DateTime"]>;
    /** Three-letter ISO currency code, in lowercase. Must be a supported currency. */
    currency: Maybe<Currency>;
    /** An arbitrary string attached to the object. Often useful for displaying to users. */
    description: Maybe<Scalars["String"]>;
    /** ID of the bank account or card the payout was sent to. */
    destination: Maybe<PayoutDestination>;
    /** If the payout failed or was canceled, this will be the ID of the balance
     * transaction that reversed the initial balance transaction, and puts the funds
     * from the failed payout back in your balance.
     */
    failure_balance_transaction: Maybe<BalanceTransaction>;
    /** Error code explaining reason for payout failure if available. See Types of payout failures for a list of failure codes. */
    failure_code: Maybe<PayoutFailureCode>;
    /** Message to user further explaining reason for payout failure if available. */
    failure_message: Maybe<Scalars["String"]>;
    /** Has the value true if the object exists in live mode or the value false if the object exists in test mode. */
    livemode: Maybe<Scalars["Boolean"]>;
    /** Set of key-value pairs that you can attach to an object. This can be useful
     * for storing additional information about the object in a structured format.
     */
    metadata: Maybe<Scalars["JSON"]>;
    /** The method used to send this payout, which can be standard or instant. instant
     * is only supported for payouts to debit cards. (See Instant payouts for
     * marketplaces for more information.)
     */
    method: Maybe<PayoutMethod>;
    /** The source balance this payout came from. One of card, financing, bank_account, or alipay_account.
     * https://stripe.com/docs/api/payouts/object?lang=node#payout_object-source_type
     */
    source_type: Maybe<PayoutSourceType>;
    /** Extra information about a payout to be displayed on the user’s bank statement.
     * https://stripe.com/docs/api/payouts/object?lang=node#payout_object-statement_descriptor
     */
    statement_descriptor: Maybe<Scalars["String"]>;
    /** Current status of the payout (paid, pending, in_transit, canceled or failed).
     * A payout will be pending until it is submitted to the bank, at which point it
     * becomes in_transit. It will then change to paid if the transaction goes
     * through. If it does not go through successfully, its status will change to
     * failed or canceled.
     * https://stripe.com/docs/api/payouts/object?lang=node#payout_object-status
     */
    status: Maybe<PayoutStatus>;
    /** Can be bank_account or card.
     * https://stripe.com/docs/api/payouts/object?lang=node#payout_object-type
     */
    type: Maybe<PayoutType>;
  };

export type PayoutCreateInput = {
  /** A positive integer in cents representing how much to payout. */
  amount: Scalars["Int"];
  /** Three-letter [ISO currency
   * code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be
   * a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: Scalars["String"];
  /** An arbitrary string attached to the object. Often useful for displaying to users. */
  description: Maybe<Scalars["String"]>;
  /** The ID of a bank account or a card to send the payout to. If no destination is
   * supplied, the default external account for the specified currency will be used.
   */
  destination: Maybe<Scalars["String"]>;
  /** A set of key-value pairs that you can attach to a payout object. It can be
   * useful for storing additional information about the payout in a structured format.
   */
  metadata: Maybe<Scalars["JSON"]>;
  /** The method used to send this payout, which can be `standard` or `instant`.
   * `instant` is only supported for payouts to debit cards. (See [Instant payouts
   * for marketplaces for more
   * information](https://stripe.com/blog/instant-payouts-for-marketplaces).)
   */
  method: Maybe<PayoutMethod>;
  /** The source balance to draw this payout from. Balances for different payment
   * sources are kept separately. You can find the amounts with the balances API.
   * Valid options are: **alipay_account**, **bank_account**, and **card**.
   */
  sourceType: Maybe<PayoutSourceType>;
  /** A string to be displayed on the recipient's bank or card statement. This may
   * be at most 22 characters. Attempting to use a `statement_descriptor` longer
   * than 22 characters will return an error. Note: Most banks will truncate this
   * information and/or display it inconsistently. Some may not display it at all.
   */
  statementDescriptor: Maybe<Scalars["String"]>;
};

export type PayoutDestination = Card | BankAccount;

/** Error code explaining reason for payout failure if available. See Types of payout failures for a list of failure codes.
 * https://stripe.com/docs/api/payouts/failures
 */
export type PayoutFailureCode =
  /** The bank account has been closed. */
  | "account_closed"
  /** The bank account has been frozen. */
  | "account_frozen"
  /** The bank account has restrictions on either the type, or the number, of
   * payouts allowed. This normally indicates that the bank account is a savings or
   * other non-checking account.
   */
  | "bank_account_restricted"
  /** The destination bank account is no longer valid because its branch has changed ownership. */
  | "bank_ownership_changed"
  /** The bank could not process this payout. */
  | "could_not_process"
  /** Debit transactions are not approved on the bank account. (Stripe requires bank
   * accounts to be set up for both credit and debit payouts.)
   */
  | "debit_not_authorized"
  /** The bank has declined this transfer. Please contact the bank before retrying. */
  | "declined"
  /** Your Stripe account has insufficient funds to cover the payout. */
  | "insufficient_funds"
  /** The routing number seems correct, but the account number is invalid. */
  | "invalid_account_number"
  /** Your bank notified us that the bank account holder name on file is incorrect. */
  | "incorrect_account_holder_name"
  /** The bank was unable to process this payout because of its currency. This is
   * probably because the bank account cannot accept payments in that currency.
   */
  | "invalid_currency"
  /** The bank account details on file are probably incorrect. No bank account could be located with those details. */
  | "no_account"
  /** The bank no longer supports payouts to this card. */
  | "unsupported_card";

export type PayoutList = Object & {
  object: Maybe<ObjectType>;
  has_more: Maybe<Scalars["Boolean"]>;
  url: Maybe<Scalars["String"]>;
  data: Maybe<Array<Maybe<Payout>>>;
};

/** The method used to send this payout, which can be standard or instant. instant
 * is only supported for payouts to debit cards. (See Instant payouts for
 * marketplaces for more information.)
 * https://stripe.com/docs/api/payouts/object?lang=node#payout_object-method
 */
export type PayoutMethod = "standard" | "instant";

/** The source balance this payout came from. One of card, financing, bank_account, or alipay_account.
 * https://stripe.com/docs/api/payouts/object?lang=node#payout_object-source_type
 */
export type PayoutSourceType = "card" | "bank_account";

/** Current status of the payout (paid, pending, in_transit, canceled or failed). A
 * payout will be pending until it is submitted to the bank, at which point it
 * becomes in_transit. It will then change to paid if the transaction goes through.
 * If it does not go through successfully, its status will change to failed or canceled.
 * https://stripe.com/docs/api/payouts/object?lang=node#payout_object-status
 */
export type PayoutStatus =
  | "paid"
  | "pending"
  | "in_transit"
  | "canceled"
  | "failed";

export type PayoutStatusInput = "pending" | "paid" | "failed" | "canceled";

export type PayoutType = "bank_account" | "card";

export type PayoutUpdateInput = {
  /** A set of key-value pairs that you can attach to a payout object. It can be
   * useful for storing additional information about the payout in a structured format.
   */
  metadata: Maybe<Scalars["JSON"]>;
};

export type PayoutWhereInput = {
  /** A filter on the list based on the object arrival_date field. The value can be
   * a string with an integer Unix timestamp, or it can be a dictionary with the
   * following options:
   */
  arrivalDate: Maybe<CreatedInput>;
  /** A filter on the list based on the object created field. The value can be a
   * string with an integer Unix timestamp, or it can be a dictionary
   */
  created: Maybe<CreatedInput>;
  /** The ID of an external account - only return payouts sent to this external account. */
  destination: Maybe<Scalars["String"]>;
  /** A cursor for use in pagination. `ending_before` is an object ID that defines
   * your place in the list. For instance, if you make a list request and receive
   * 100 objects, starting with `obj_bar`, your subsequent call can include
   * `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore: Maybe<Scalars["ID"]>;
  /** A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10. */
  limit: Maybe<Scalars["Int"]>;
  /** A cursor for use in pagination. `starting_after` is an object ID that
   * defines your place in the list. For instance, if you make a list request and
   * receive 100 objects, ending with `obj_foo`, your subsequent call can include
   * `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter: Maybe<Scalars["ID"]>;
  /** Only return payouts that have the given status: `pending`, `paid`, `failed`, or `canceled`. */
  status: Maybe<PayoutStatusInput>;
};

export type PayoutWhereUniqueInput = {
  id: Scalars["ID"];
};

/** The period associated with this invoice item. */
export type Period = {
  /** The end of the period, which must be greater than or equal to the start. */
  end: Maybe<Scalars["DateTime"]>;
  /** The start of the period. */
  start: Maybe<Scalars["DateTime"]>;
};

export type Person = Node &
  Object & {
    account: Maybe<Scalars["String"]>;
    address: Maybe<Address>;
    address_kana: Maybe<JapaneseAddress>;
    address_kanji: Maybe<JapaneseAddress>;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: Maybe<Scalars["DateTime"]>;
    dob: Maybe<DateOfBirth>;
    email: Maybe<Scalars["String"]>;
    first_mame: Maybe<Scalars["String"]>;
    first_name_kana: Maybe<Scalars["String"]>;
    first_name_kanji: Maybe<Scalars["String"]>;
    gender: Maybe<Scalars["String"]>;
    /** Unique identifier for the object. */
    id: Scalars["ID"];
    id_number_provided: Maybe<Scalars["Boolean"]>;
    last_name: Maybe<Scalars["String"]>;
    last_name_kana: Maybe<Scalars["String"]>;
    last_name_kanji: Maybe<Scalars["String"]>;
    maiden_name: Maybe<Scalars["String"]>;
    /** Set of key-value pairs that you can attach to an object. This can be useful
     * for storing additional information about the object in a structured format.
     */
    metadata: Maybe<Scalars["JSON"]>;
    /** String representing the object's type. Objects of the same type share the same value. */
    object: Maybe<ObjectType>;
    phone: Maybe<Scalars["String"]>;
    relationship: Maybe<PersonRelationship>;
    requirements: Maybe<PersonRequirements>;
    ssn_last_4_provided: Maybe<Scalars["Boolean"]>;
    verification: Maybe<LegalEntityVerification>;
  };

export type PersonRelationship = {
  /** Whether the person opened the account. This person provides information about
   * themselves, and general information about the account.
   */
  account_opener: Maybe<Scalars["Boolean"]>;
  /** Whether the person is a director of the account's legal entity. */
  director: Maybe<Scalars["Boolean"]>;
  /** Whether the person is an owner of the account’s legal entity. */
  owner: Maybe<Scalars["Boolean"]>;
  /** The percent owned by the person of the account's legal entity. */
  percent_ownership: Maybe<Scalars["Float"]>;
  /** The person's title (e.g., CEO, Support Engineer). */
  title: Maybe<Scalars["String"]>;
};

export type PersonRequirements = {
  /** Fields that need to be collected to keep the person’s account enabled. If not
   * collected by the account’s current_deadline, these fields are moved to
   * past_due and the account is disabled.
   */
  currently_due: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Fields that need to be collected assuming all volume thresholds are reached.
   * As fields are needed, they are moved to currently_due and the account’s
   * current_deadline is set.
   */
  eventually_due: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Fields that weren’t collected by the account’s current_deadline. These fields
   * need to be collected to enable payouts for the person’s account.
   */
  past_due: Maybe<Array<Maybe<Scalars["String"]>>>;
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

/** https://stripe.com/docs/sources/p24 */
export type Przelewy24 = {
  reference: Maybe<Scalars["String"]>;
};

export type Purpose =
  | "business_logo"
  | "customer_signature"
  | "dispute_evidence"
  | "identity_document"
  | "pci_document"
  | "tax_document_user_upload";

export type Query = {
  /** Retrieves the details of an existing payout. Supply the unique payout ID from
   * either a payout creation request or the payout list, and Stripe will return
   * the corresponding payout information.
   */
  retrievePayout: Maybe<Payout>;
  /** Returns a list of existing payouts sent to third-party bank accounts or that
   * Stripe has sent you. The payouts are returned in sorted order, with the most
   * recently created payouts appearing first.
   */
  listPayouts: Maybe<PayoutList>;
};

export type QueryRetrievePayoutArgs = {
  where: PayoutWhereUniqueInput;
};

export type QueryListPayoutsArgs = {
  where: Maybe<PayoutWhereInput>;
};

export type Receiver = {
  /** The address of the receiver source. This is the value that should be communicated to the customer to send their funds to. */
  address: Maybe<Scalars["String"]>;
  /** The total amount that was charged by you. The amount charged is expressed in the source’s currency. */
  amount_charged: Maybe<Scalars["Int"]>;
  /** The total amount received by the receiver source. amount_received =
   * amount_returned + amount_charged is true at all time. The amount received is
   * expressed in the source’s currency.
   */
  amount_received: Maybe<Scalars["Int"]>;
  /** The total amount that was returned to the customer. The amount returned is expressed in the source’s currency. */
  amount_returned: Maybe<Scalars["Int"]>;
  /** Type of refund attribute method, one of email, manual, or none. */
  refund_attributes_method: Maybe<RefundAttributesMethod>;
  /** Type of refund attribute status, one of missing, requested, or available. */
  refund_attributes_status: Maybe<RefundAttributesStatus>;
};

export type Redirect = {
  /** The failure reason for the redirect, either user_abort (the customer aborted
   * or dropped out of the redirect flow), declined (the authentication failed or
   * the transaction was declined), or processing_error (the redirect failed due to
   * a technical error). Present only if the redirect status is failed.
   */
  failure_reason: Maybe<FailureReason>;
  /** The URL you provide to redirect the customer to after they authenticated their payment. */
  return_url: Maybe<Scalars["String"]>;
  /** The status of the redirect, either pending (ready to be used by your customer
   * to authenticate the transaction), succeeded (succesful authentication, cannot
   * be reused) or not_required (redirect should not be used) or failed (failed
   * authentication, cannot be reused).
   */
  status: Maybe<RedirectStatus>;
  /** The URL provided to you to redirect a customer to as part of a redirect authentication flow. */
  url: Maybe<Scalars["String"]>;
};

/** The status of the redirect. */
export type RedirectStatus =
  | "PENDING"
  | "SUCCEEDED"
  | "NOT_REQUIRED"
  | "FAILED";

export type Refund = Node &
  Object & {
    /** Unique identifier for the object. */
    id: Scalars["ID"];
    /** String representing the object’s type. Objects of the same type share the same value. */
    object: Maybe<ObjectType>;
    /** Amount, in cents. */
    amount: Maybe<Scalars["Float"]>;
    /** Balance transaction that describes the impact on your account balance. */
    balance_transaction: Maybe<BalanceTransaction>;
    /** ID of the charge that was refunded. */
    charge: Maybe<Scalars["ID"]>;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: Maybe<Scalars["DateTime"]>;
    /** Three-letter ISO currency code, in lowercase. Must be a supported currency. */
    currency: Maybe<Currency>;
    /** An arbitrary string attached to the object. Often useful for displaying to users. (Available on non-card refunds only) */
    description: Maybe<Scalars["String"]>;
    /** If the refund failed, this balance transaction describes the adjustment made
     * on your account balance that reverses the initial balance transaction.
     */
    failure_balance_transaction: Maybe<BalanceTransaction>;
    /** If the refund failed, the reason for refund failure if known. Possible values
     * are `lost_or_stolen_card`, `expired_or_canceled_card`, or `unknown`.
     */
    failure_reason: Maybe<FailureReason>;
    /** Set of key-value pairs that you can attach to an object. This can be useful
     * for storing additional information about the object in a structured format.
     */
    metadata: Maybe<Scalars["JSON"]>;
    /** Reason for the refund. If set, possible values are duplicate, fraudulent, and requested_by_customer */
    reason: Maybe<RefundReason>;
    /** This is the transaction number that appears on email receipts sent for this refund. */
    receipt_number: Maybe<Scalars["String"]>;
    /** The transfer reversal that is associated with the refund. Only present if the
     * charge came from another Stripe account. See the Connect documentation for details.
     */
    source_transfer_reversal: Maybe<Scalars["String"]>;
    /** Status of the refund. For credit card refunds, this can be succeeded or
     * failed. For other types of refunds, it can be pending, succeeded, failed, or
     * canceled. Refer to our refunds documentation for more details.
     */
    status: Maybe<RefundStatus>;
    /** If the accompanying transfer was reversed, the transfer reversal object. Only
     * applicable if the charge was created using the destination parameter.
     */
    transfer_reversal: Maybe<Scalars["String"]>;
  };

/** Type of refund attribute method. */
export type RefundAttributesMethod = "email" | "manual" | "none";

/** Type of refund attribute status. */
export type RefundAttributesStatus = "MISSING" | "REQUESTED" | "AVAILABLE";

export type RefundList = {
  data: Maybe<Array<Maybe<Refund>>>;
  has_more: Maybe<Scalars["Boolean"]>;
  url: Maybe<Scalars["String"]>;
};

export type RefundReason = "duplicate" | "fraudulent" | "requested_by_customer";

export type RefundStatus = "pending" | "succeeded" | "failed" | "canceled";

/** https://stripe.com/docs/sources/sepa-debit */
export type SepaDirectDebit = {
  bank_code: Maybe<Scalars["Int"]>;
  country: Maybe<CountryCode>;
  fingerprint: Maybe<Scalars["String"]>;
  last4: Maybe<Scalars["Int"]>;
  mandate_reference: Maybe<Scalars["String"]>;
  mandate_url: Maybe<Scalars["String"]>;
};

/** https://stripe.com/docs/sources/sofort */
export type Sofort = {
  country: Maybe<CountryCode>;
  bank_code: Maybe<Scalars["String"]>;
  bic: Maybe<Scalars["String"]>;
  bank_name: Maybe<Scalars["String"]>;
  iban_last4: Maybe<Scalars["Int"]>;
  preferred_language: Maybe<Scalars["String"]>;
  statement_descriptor: Maybe<Scalars["String"]>;
};

/** https://stripe.com/docs/api/sources */
export type Source = Node &
  Object & {
    /** Unique identifier for the object. */
    id: Scalars["ID"];
    /** String representing the object’s type. Objects of the same type share the same value. */
    object: Maybe<ObjectType>;
    /** A positive integer in the smallest currency unit (that is, 100 cents for
     * $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing
     * the total amount associated with the source. This is the amount for which the
     * source will be chargeable once ready. Required for single_use sources.
     */
    amount: Maybe<Scalars["Int"]>;
    /** The client secret of the source. Used for client-side retrieval using a publishable key. */
    client_secret: Maybe<Scalars["String"]>;
    /** Information related to the code verification flow. Present if the source is
     * authenticated by a verification code (flow is code_verification).
     */
    code_verification: Maybe<CodeVerification>;
    /** Time at which the object was created. Measured in seconds since the Unix epoch. */
    created: Maybe<Scalars["DateTime"]>;
    /** Three-letter ISO code for the currency associated with the source. This is the
     * currency for which the source will be chargeable once ready. Required for
     * single_use sources.
     */
    currency: Maybe<Currency>;
    /** The ID of the customer to which this source is attached. This will not be
     * present when the source has not been attached to a customer.
     */
    customer: Maybe<Scalars["ID"]>;
    /** The authentication flow of the source. flow is one of redirect, receiver, code_verification, none. */
    flow: Maybe<Flow>;
    /** Has the value true if the object exists in live mode or the value false if the object exists in test mode. */
    livemode: Maybe<Scalars["Boolean"]>;
    /** Set of key-value pairs that you can attach to an object. This can be useful
     * for storing additional information about the object in a structured format.
     */
    metadata: Maybe<Scalars["JSON"]>;
    /** Information about the owner of the payment instrument that may be used or required by particular source types. */
    owner: Maybe<Owner>;
    /** Information related to the receiver flow. Present if the source is a receiver (flow is receiver). */
    receiver: Maybe<Receiver>;
    /** Information related to the redirect flow. Present if the source is authenticated by a redirect (flow is redirect). */
    redirect: Maybe<Redirect>;
    /** Extra information about a source. This will appear on your customer’s statement every time you charge the source. */
    statement_descriptor: Maybe<Scalars["String"]>;
    /** The status of the source, one of canceled, chargeable, consumed, failed, or
     * pending. Only chargeable sources can be used to create a charge.
     */
    status: Maybe<SourceStatus>;
    /** Either reusable or single_use. Whether this source should be reusable or not.
     * Some source types may or may not be reusable by construction, while others may
     * leave the option at creation. If an incompatible value is passed, an error
     * will be returned.
     */
    usage: Maybe<SourceUsage>;
    /** The type of the source. The type is a payment method, one of
     * ach_credit_transfer, ach_debit, alipay, bancontact, card, card_present, eps,
     * giropay, ideal, multibanco, p24, paper_check, sepa_credit_transfer,
     * sepa_debit, sofort, three_d_secure, or wechat. An additional hash is included
     * on the source with a name matching this value. It contains additional
     * information specific to the payment method used.
     */
    type: Maybe<SourceType>;
    /** https://stripe.com/docs/sources/ach-credit-transfer */
    ach_credit_transfer: Maybe<AchCreditTransfer>;
    alipay: Maybe<Alipay>;
    bancontact: Maybe<Bancontact>;
    card: Maybe<Card>;
    eps: Maybe<Eps>;
    giropay: Maybe<Giropay>;
    ideal: Maybe<IDeal>;
    multibanco: Maybe<Multibanco>;
    p24: Maybe<Przelewy24>;
    sepa_debit: Maybe<SepaDirectDebit>;
    sofort: Maybe<Sofort>;
    wechat: Maybe<WeChatPay>;
  };

/** The status of the source, one of canceled, chargeable, consumed, failed, or
 * pending. Only chargeable sources can be used to create a charge.
 */
export type SourceStatus =
  | "CANCELED"
  | "CHARGEABLE"
  | "CONSUMED"
  | "FAILED"
  | "PENDING";

export type SourceType =
  | "ach_credit_transfer"
  | "ach_debit"
  | "alipay"
  | "bancontact"
  | "card"
  | "card_present"
  | "eps"
  | "giropay"
  | "ideal"
  | "multibanco"
  | "p24"
  | "paper_check"
  | "sepa_credit_transfer"
  | "sepa_debit"
  | "sofort"
  | "three_d_secure"
  | "wechat";

export type SourceTypes = {
  /** Amount for bank account. */
  bank_account: Maybe<Scalars["Float"]>;
  /** Amount for card. */
  card: Maybe<Scalars["Float"]>;
};

export type SourceUsage = "reusable" | "single_use";

export type StandardAccount = Account &
  Node &
  Object & {
    id: Scalars["ID"];
    object: Maybe<ObjectType>;
    /** Optional information related to the business. */
    businessProfile: Maybe<BusinessProfile>;
    capabilities: Maybe<AccountCapabilities>;
    /** Whether the account can create live charges. */
    charges_enabled: Maybe<Scalars["Boolean"]>;
    /** The account’s country */
    country: Maybe<CountryCode>;
    /** Three-letter ISO currency code representing the default currency for the
     * account. This must be a currency that [Stripe supports in the account's
     * country](https://stripe.com/docs/payouts).
     */
    default_currency: Maybe<Currency>;
    /** Whether account details have been submitted. Standard accounts cannot receive payouts before this is true. */
    details_submitted: Maybe<Scalars["Boolean"]>;
    /** The primary user’s email address. */
    email: Maybe<Scalars["String"]>;
    /** Set of key-value pairs that you can attach to an object. This can be useful
     * for storing additional information about the object in a structured format.
     */
    metadata: Maybe<Scalars["JSON"]>;
    /** Whether Stripe can send payouts to this account. */
    payouts_enabled: Maybe<Scalars["Boolean"]>;
    /** Account options for customizing how the account functions within Stripe. */
    settings: Maybe<AccountSettings>;
    /** The Stripe account type. Can be standard, express, or custom. */
    type: Maybe<AccountType>;
  };

export type TaxType = "vat";

export type TiersMode = "graduated" | "volume";

export type TokenizationMethod = "apple_pay" | "google_pay";

export type TransferData = {
  /** The account (if any) the charge was made on behalf of, with an automatic
   * transfer. See the Connect documentation for details.
   */
  destination: Maybe<Scalars["ID"]>;
};

export type UsageType = "licensed" | "metered";

export type VerificationDocument = {
  /** The back of an ID returned by a file upload with a purpose value of identity_document. */
  back: Maybe<File>;
  /** A user-displayable string describing the verification state of this document.
   * For example, if a document is uploaded and the picture is too fuzzy, this may
   * say “Identity document is too unclear to read”.
   */
  details: Maybe<Scalars["String"]>;
  /** One of document_corrupt, document_failed_copy, document_not_readable,
   * document_failed_greyscale, document_not_uploaded,
   * document_id_type_not_supported, document_id_country_not_supported,
   * document_failed_other, document_fraudulent, document_invalid,
   * document_manipulated, document_missing_back, document_missing_front,
   * document_photo_mismatch, document_too_large, or document_failed_test_mode. A
   * machine-readable code specifying the verification state for this document.
   */
  details_code: Maybe<DocumentDetailsCode>;
  /** The front of an ID returned by a file upload with a purpose value of identity_document. */
  front: Maybe<File>;
};

export type VerificationStatus = "unverfied" | "pending" | "verrified";

/** https://stripe.com/docs/sources/wechat-pay */
export type WeChatPay = {
  qr_code_url: Maybe<Scalars["String"]>;
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

export type AccountResolvers<Context = StripeContext, ParentType = Account> = {
  __resolveType: TypeResolveFn<
    "StandardAccount" | "ExpressAccount" | "CustomAccount",
    ParentType,
    Context
  >;
  id: Resolver<Maybe<Scalars["ID"]>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  businessProfile: Resolver<Maybe<BusinessProfile>, ParentType, Context>;
  capabilities: Resolver<Maybe<AccountCapabilities>, ParentType, Context>;
  charges_enabled: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  country: Resolver<Maybe<CountryCode>, ParentType, Context>;
  default_currency: Resolver<Maybe<Currency>, ParentType, Context>;
  details_submitted: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  email: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  metadata: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  payouts_enabled: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  settings: Resolver<Maybe<AccountSettings>, ParentType, Context>;
  type: Resolver<Maybe<AccountType>, ParentType, Context>;
};

export type AccountCapabilitiesResolvers<
  Context = StripeContext,
  ParentType = AccountCapabilities
> = {
  card_payments: Resolver<Maybe<CapabilitiesPayments>, ParentType, Context>;
  legacyPayments: Resolver<Maybe<CapabilitiesPayments>, ParentType, Context>;
  platformPayments: Resolver<Maybe<CapabilitiesPayments>, ParentType, Context>;
};

export type AccountListResolvers<
  Context = StripeContext,
  ParentType = AccountList
> = {
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  data: Resolver<Maybe<Array<Maybe<Account>>>, ParentType, Context>;
  has_more: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type AccountRequirementsResolvers<
  Context = StripeContext,
  ParentType = AccountRequirements
> = {
  current_deadline: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  currently_due: Resolver<
    Maybe<Array<Maybe<Scalars["String"]>>>,
    ParentType,
    Context
  >;
  disabled_reason: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  eventually_due: Resolver<
    Maybe<Array<Maybe<Scalars["String"]>>>,
    ParentType,
    Context
  >;
  past_due: Resolver<
    Maybe<Array<Maybe<Scalars["String"]>>>,
    ParentType,
    Context
  >;
};

export type AccountSettingsResolvers<
  Context = StripeContext,
  ParentType = AccountSettings
> = {
  branding: Resolver<Maybe<AccountSettingsBranding>, ParentType, Context>;
  card_payments: Resolver<
    Maybe<AccountSettingsCardPayments>,
    ParentType,
    Context
  >;
  payments: Resolver<Maybe<AccountSettingsPayments>, ParentType, Context>;
  payouts: Resolver<Maybe<AccountSettingsPayouts>, ParentType, Context>;
};

export type AccountSettingsBrandingResolvers<
  Context = StripeContext,
  ParentType = AccountSettingsBranding
> = {
  icon: Resolver<Maybe<File>, ParentType, Context>;
  logo: Resolver<Maybe<File>, ParentType, Context>;
  primary_color: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type AccountSettingsCardPaymentsResolvers<
  Context = StripeContext,
  ParentType = AccountSettingsCardPayments
> = {
  decline_on: Resolver<
    Maybe<AccountSettingsCardPaymentsDeclineOn>,
    ParentType,
    Context
  >;
  statement_descriptor_prefix: Resolver<
    Maybe<Scalars["String"]>,
    ParentType,
    Context
  >;
};

export type AccountSettingsCardPaymentsDeclineOnResolvers<
  Context = StripeContext,
  ParentType = AccountSettingsCardPaymentsDeclineOn
> = {
  avs_failure: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  cvc_failure: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
};

export type AccountSettingsPaymentsResolvers<
  Context = StripeContext,
  ParentType = AccountSettingsPayments
> = {
  statement_descriptor: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type AccountSettingsPayoutsResolvers<
  Context = StripeContext,
  ParentType = AccountSettingsPayouts
> = {
  debit_negative_balances: Resolver<
    Maybe<Scalars["Boolean"]>,
    ParentType,
    Context
  >;
  schedule: Resolver<
    Maybe<AccountSettingsPayoutsSchedule>,
    ParentType,
    Context
  >;
  statement_descriptor: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type AccountSettingsPayoutsScheduleResolvers<
  Context = StripeContext,
  ParentType = AccountSettingsPayoutsSchedule
> = {
  delay_days: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  interval: Resolver<Maybe<Interval>, ParentType, Context>;
  monthly_anchor: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  weekly_anchor: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type AccountTosAcceptanceResolvers<
  Context = StripeContext,
  ParentType = AccountTosAcceptance
> = {
  date: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  ip: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  userAgent: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type AchCreditTransferResolvers<
  Context = StripeContext,
  ParentType = AchCreditTransfer
> = {
  account_number: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  routing_number: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  fingerprint: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  bank_name: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  swift_code: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type AddressResolvers<Context = StripeContext, ParentType = Address> = {
  city: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  country: Resolver<Maybe<CountryCode>, ParentType, Context>;
  line1: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  line2: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  postal_code: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  state: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type AlipayResolvers<Context = StripeContext, ParentType = Alipay> = {
  statement_descriptor: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  native_url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

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

export type BancontactResolvers<
  Context = StripeContext,
  ParentType = Bancontact
> = {
  bank_code: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  bic: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  bank_name: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  iban_last4: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  statement_descriptor: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  preferred_language: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type BankAccountResolvers<
  Context = StripeContext,
  ParentType = BankAccount
> = {
  account: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  account_holder_name: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  account_holder_type: Resolver<Maybe<BusinessType>, ParentType, Context>;
  bank_name: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  country: Resolver<Maybe<CountryCode>, ParentType, Context>;
  currency: Resolver<Maybe<Currency>, ParentType, Context>;
  customer: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  default_for_currency: Resolver<
    Maybe<Scalars["Boolean"]>,
    ParentType,
    Context
  >;
  fingerprint: Resolver<Maybe<Scalars["ID"]>, ParentType, Context>;
  id: Resolver<Scalars["ID"], ParentType, Context>;
  last4: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  metadata: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  routing_number: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  status: Resolver<Maybe<BankAccountStatus>, ParentType, Context>;
};

export type BillingSubscriptionResolvers<
  Context = StripeContext,
  ParentType = BillingSubscription
> = {
  application_fee_percent: Resolver<
    Maybe<Scalars["Float"]>,
    ParentType,
    Context
  >;
  billing: Resolver<Maybe<BillingSubscriptionBilling>, ParentType, Context>;
  billing_cycle_anchor: Resolver<
    Maybe<Scalars["DateTime"]>,
    ParentType,
    Context
  >;
  billing_thresholds: Resolver<
    Maybe<BillingSubscriptionBillingThresholds>,
    ParentType,
    Context
  >;
  cancel_at_period_end: Resolver<
    Maybe<Scalars["Boolean"]>,
    ParentType,
    Context
  >;
  canceled_at: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  created: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  current_period_end: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  current_period_start: Resolver<
    Maybe<Scalars["DateTime"]>,
    ParentType,
    Context
  >;
  customer: Resolver<Maybe<Customer>, ParentType, Context>;
  days_until_due: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  default_source: Resolver<Maybe<Source>, ParentType, Context>;
  discount: Resolver<Maybe<Discount>, ParentType, Context>;
  ended_at: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  id: Resolver<Scalars["ID"], ParentType, Context>;
  items: Resolver<Maybe<BillingSubscriptionItemList>, ParentType, Context>;
  latest_invoice: Resolver<Maybe<Invoice>, ParentType, Context>;
  livemode: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  metadata: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  plan: Resolver<Maybe<Plan>, ParentType, Context>;
  quantity: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  start: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  status: Resolver<Maybe<BillingSubscriptionStatus>, ParentType, Context>;
  trialEnd: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  trialStart: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
};

export type BillingSubscriptionBillingThresholdsResolvers<
  Context = StripeContext,
  ParentType = BillingSubscriptionBillingThresholds
> = {
  amount_gte: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  reset_billing_cycle_anchor: Resolver<
    Maybe<Scalars["Boolean"]>,
    ParentType,
    Context
  >;
};

export type BillingSubscriptionItemResolvers<
  Context = StripeContext,
  ParentType = BillingSubscriptionItem
> = {
  billing_thresholds: Resolver<
    Maybe<BillingSubscriptionItemBillingThresholds>,
    ParentType,
    Context
  >;
  created: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  id: Resolver<Scalars["ID"], ParentType, Context>;
  metadata: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  plan: Resolver<Maybe<Plan>, ParentType, Context>;
  quantity: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  subscription: Resolver<Maybe<Scalars["ID"]>, ParentType, Context>;
};

export type BillingSubscriptionItemBillingThresholdsResolvers<
  Context = StripeContext,
  ParentType = BillingSubscriptionItemBillingThresholds
> = {
  usage_gte: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type BillingSubscriptionItemListResolvers<
  Context = StripeContext,
  ParentType = BillingSubscriptionItemList
> = {
  data: Resolver<
    Maybe<Array<Maybe<BillingSubscriptionItem>>>,
    ParentType,
    Context
  >;
  has_more: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type BillingSubscriptionListResolvers<
  Context = StripeContext,
  ParentType = BillingSubscriptionList
> = {
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  data: Resolver<Maybe<Array<Maybe<BillingSubscription>>>, ParentType, Context>;
  has_more: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type BusinessProfileResolvers<
  Context = StripeContext,
  ParentType = BusinessProfile
> = {
  mcc: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  name: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  product_description: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  support_address: Resolver<Maybe<Address>, ParentType, Context>;
  support_email: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  support_phone: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  support_url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type CardResolvers<Context = StripeContext, ParentType = Card> = {
  account: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  address_city: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  address_country: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  address_line1: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  address_line1_check: Resolver<Maybe<Check>, ParentType, Context>;
  address_line2: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  address_state: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  address_zip: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  address_zip_check: Resolver<Maybe<Check>, ParentType, Context>;
  available_payout_methods: Resolver<
    Maybe<Array<Maybe<AvailablePayoutMethods>>>,
    ParentType,
    Context
  >;
  brand: Resolver<Maybe<Brand>, ParentType, Context>;
  country: Resolver<Maybe<CountryCode>, ParentType, Context>;
  currency: Resolver<Maybe<Currency>, ParentType, Context>;
  customer: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  cvc_check: Resolver<Maybe<Check>, ParentType, Context>;
  default_for_currency: Resolver<
    Maybe<Scalars["Boolean"]>,
    ParentType,
    Context
  >;
  dynamic_last4: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  exp_month: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  exp_year: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  fingerprint: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  funding: Resolver<Maybe<Funding>, ParentType, Context>;
  id: Resolver<Scalars["ID"], ParentType, Context>;
  last4: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  metadata: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  name: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  recipient: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  tokenizationMethod: Resolver<Maybe<TokenizationMethod>, ParentType, Context>;
};

export type ChargeResolvers<Context = StripeContext, ParentType = Charge> = {
  id: Resolver<Scalars["ID"], ParentType, Context>;
  object: Resolver<ObjectType, ParentType, Context>;
  amount: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  amount_refunded: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  application: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  application_fee: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  application_fee_amount: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  balance_transaction: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  captured: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  created: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  currency: Resolver<Maybe<Currency>, ParentType, Context>;
  customer: Resolver<Maybe<Customer>, ParentType, Context>;
  description: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  destination: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  dispute: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  failure_code: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  failure_message: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  fraud_details: Resolver<Maybe<FraudDetails>, ParentType, Context>;
  invoice: Resolver<Maybe<Scalars["ID"]>, ParentType, Context>;
  livemode: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  metadata: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  on_behalf_of: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  order: Resolver<Maybe<Scalars["ID"]>, ParentType, Context>;
  outcome: Resolver<Maybe<ChargeOutcome>, ParentType, Context>;
  paid: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  payment_intent: Resolver<Maybe<Scalars["ID"]>, ParentType, Context>;
  receipt_email: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  receipt_number: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  refunded: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  refunds: Resolver<Maybe<RefundList>, ParentType, Context>;
  review: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  shipping: Resolver<Maybe<ChargeShipping>, ParentType, Context>;
  source: Resolver<Maybe<Card>, ParentType, Context>;
  source_transfer: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  statement_descriptor: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  status: Resolver<Maybe<ChargeStatus>, ParentType, Context>;
  transfer: Resolver<Maybe<Scalars["ID"]>, ParentType, Context>;
  transfer_data: Resolver<Maybe<TransferData>, ParentType, Context>;
  transfer_group: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type ChargeListResolvers<
  Context = StripeContext,
  ParentType = ChargeList
> = {
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  has_more: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  data: Resolver<Maybe<Array<Maybe<Charge>>>, ParentType, Context>;
};

export type ChargeOutcomeResolvers<
  Context = StripeContext,
  ParentType = ChargeOutcome
> = {
  network_status: Resolver<Maybe<NetworkStatus>, ParentType, Context>;
  reason: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  risk_level: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  risk_score: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  rule: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  seller_message: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  type: Resolver<Maybe<ChargeOutcomeType>, ParentType, Context>;
};

export type ChargeShippingResolvers<
  Context = StripeContext,
  ParentType = ChargeShipping
> = {
  address: Resolver<Maybe<Address>, ParentType, Context>;
  carrier: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  name: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  phone: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  tracking_number: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type CodeVerificationResolvers<
  Context = StripeContext,
  ParentType = CodeVerification
> = {
  attemps_remainig: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  status: Resolver<Maybe<CodeVerificationStatus>, ParentType, Context>;
};

export type CouponResolvers<Context = StripeContext, ParentType = Coupon> = {
  id: Resolver<Scalars["ID"], ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  amount_off: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  created: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  currency: Resolver<Maybe<Currency>, ParentType, Context>;
  duration: Resolver<Maybe<Duration>, ParentType, Context>;
  duration_in_months: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  livemode: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  max_redemptions: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  metadata: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  name: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  percent_off: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  redeem_by: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  times_redeemed: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  valid: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
};

export type CouponListResolvers<
  Context = StripeContext,
  ParentType = CouponList
> = {
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  data: Resolver<Maybe<Array<Maybe<Coupon>>>, ParentType, Context>;
  has_more: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type CustomAccountResolvers<
  Context = StripeContext,
  ParentType = CustomAccount
> = {
  id: Resolver<Scalars["ID"], ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  businessProfile: Resolver<Maybe<BusinessProfile>, ParentType, Context>;
  capabilities: Resolver<Maybe<AccountCapabilities>, ParentType, Context>;
  charges_enabled: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  country: Resolver<Maybe<CountryCode>, ParentType, Context>;
  default_currency: Resolver<Maybe<Currency>, ParentType, Context>;
  details_submitted: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  email: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  metadata: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  payouts_enabled: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  settings: Resolver<Maybe<AccountSettings>, ParentType, Context>;
  type: Resolver<Maybe<AccountType>, ParentType, Context>;
  company: Resolver<Maybe<LegalEntityCompany>, ParentType, Context>;
  created: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  external_accounts: Resolver<Maybe<ExternalAccountList>, ParentType, Context>;
  individual: Resolver<Maybe<Person>, ParentType, Context>;
  requirements: Resolver<Maybe<AccountRequirements>, ParentType, Context>;
  tos_acceptance: Resolver<Maybe<AccountTosAcceptance>, ParentType, Context>;
};

export type CustomerResolvers<
  Context = StripeContext,
  ParentType = Customer
> = {
  id: Resolver<Maybe<Scalars["ID"]>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  account_balance: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  created: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  currency: Resolver<Maybe<Currency>, ParentType, Context>;
  default_source: Resolver<Maybe<Source>, ParentType, Context>;
  delinquent: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  description: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  discount: Resolver<Maybe<Discount>, ParentType, Context>;
  email: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  invoice_prefix: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  invoice_settings: Resolver<
    Maybe<CustomerInvoiceSetting>,
    ParentType,
    Context
  >;
  livemode: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  metadata: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  shipping: Resolver<Maybe<CustomerShipping>, ParentType, Context>;
  sources: Resolver<Maybe<CustomerPaymentSource>, ParentType, Context>;
  subscriptions: Resolver<Maybe<BillingSubscriptionList>, ParentType, Context>;
  tax_info: Resolver<Maybe<CustomerTaxInformation>, ParentType, Context>;
  tax_info_verification: Resolver<
    Maybe<CustomerTaxInformationVerification>,
    ParentType,
    Context
  >;
};

export type CustomerInvoiceSettingResolvers<
  Context = StripeContext,
  ParentType = CustomerInvoiceSetting
> = {
  custom_fields: Resolver<
    Maybe<CustomerInvoiceSettingCustomField>,
    ParentType,
    Context
  >;
  footer: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type CustomerInvoiceSettingCustomFieldResolvers<
  Context = StripeContext,
  ParentType = CustomerInvoiceSettingCustomField
> = {
  name: Resolver<Scalars["String"], ParentType, Context>;
  value: Resolver<Scalars["String"], ParentType, Context>;
};

export type CustomerListResolvers<
  Context = StripeContext,
  ParentType = CustomerList
> = {
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  has_more: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  data: Resolver<Maybe<Array<Maybe<Customer>>>, ParentType, Context>;
};

export type CustomerPaymentSourceResolvers<
  Context = StripeContext,
  ParentType = CustomerPaymentSource
> = {
  data: Resolver<Maybe<Array<Maybe<Source>>>, ParentType, Context>;
  has_more: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type CustomerShippingResolvers<
  Context = StripeContext,
  ParentType = CustomerShipping
> = {
  name: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  phone: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  address: Resolver<Maybe<Address>, ParentType, Context>;
};

export type CustomerTaxInformationResolvers<
  Context = StripeContext,
  ParentType = CustomerTaxInformation
> = {
  tax_id: Resolver<Maybe<Scalars["ID"]>, ParentType, Context>;
  type: Resolver<Maybe<TaxType>, ParentType, Context>;
};

export type CustomerTaxInformationVerificationResolvers<
  Context = StripeContext,
  ParentType = CustomerTaxInformationVerification
> = {
  status: Resolver<Maybe<VerificationStatus>, ParentType, Context>;
  verified_name: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type DateOfBirthResolvers<
  Context = StripeContext,
  ParentType = DateOfBirth
> = {
  day: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  month: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  year: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<Scalars["DateTime"], any> {
  name: "DateTime";
}

export type DeleteCustomerPayloadResolvers<
  Context = StripeContext,
  ParentType = DeleteCustomerPayload
> = {
  id: Resolver<Maybe<Scalars["ID"]>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  deleted: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
};

export type DiscountResolvers<
  Context = StripeContext,
  ParentType = Discount
> = {
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  coupon: Resolver<Maybe<Coupon>, ParentType, Context>;
  customer: Resolver<Maybe<Customer>, ParentType, Context>;
  end: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  start: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  subscription: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type EpsResolvers<Context = StripeContext, ParentType = Eps> = {
  reference: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  statement_descriptor: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type ExpressAccountResolvers<
  Context = StripeContext,
  ParentType = ExpressAccount
> = {
  id: Resolver<Scalars["ID"], ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  businessProfile: Resolver<Maybe<BusinessProfile>, ParentType, Context>;
  capabilities: Resolver<Maybe<AccountCapabilities>, ParentType, Context>;
  charges_enabled: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  country: Resolver<Maybe<CountryCode>, ParentType, Context>;
  default_currency: Resolver<Maybe<Currency>, ParentType, Context>;
  details_submitted: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  email: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  metadata: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  payouts_enabled: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  settings: Resolver<Maybe<AccountSettings>, ParentType, Context>;
  type: Resolver<Maybe<AccountType>, ParentType, Context>;
  created: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  external_accounts: Resolver<Maybe<ExternalAccountList>, ParentType, Context>;
  requirements: Resolver<Maybe<AccountRequirements>, ParentType, Context>;
};

export type ExternalAccountResolvers<
  Context = StripeContext,
  ParentType = ExternalAccount
> = {
  __resolveType: TypeResolveFn<"Card" | "BankAccount", ParentType, Context>;
  default_for_currency: Resolver<
    Maybe<Scalars["Boolean"]>,
    ParentType,
    Context
  >;
};

export type ExternalAccountListResolvers<
  Context = StripeContext,
  ParentType = ExternalAccountList
> = {
  data: Resolver<Maybe<Array<Maybe<ExternalAccount>>>, ParentType, Context>;
  hasMore: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

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

export type FraudDetailsResolvers<
  Context = StripeContext,
  ParentType = FraudDetails
> = {
  stripe_report: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  user_report: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type FundResolvers<Context = StripeContext, ParentType = Fund> = {
  amount: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  currency: Resolver<Maybe<Currency>, ParentType, Context>;
  source_types: Resolver<Maybe<SourceTypes>, ParentType, Context>;
};

export type GiropayResolvers<Context = StripeContext, ParentType = Giropay> = {
  bank_code: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  bic: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  bank_name: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  statement_descriptor: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type IDealResolvers<Context = StripeContext, ParentType = IDeal> = {
  bank: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  bic: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  iban_last4: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  statement_descriptor: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type InvoiceResolvers<Context = StripeContext, ParentType = Invoice> = {
  amount_due: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  amount_paid: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  amount_remaining: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  application_fee_amount: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  attempt_count: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  attempted: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  auto_advance: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  billing: Resolver<Maybe<InvoiceBilling>, ParentType, Context>;
  billing_reason: Resolver<Maybe<InvoiceBillingReason>, ParentType, Context>;
  charge: Resolver<Maybe<Charge>, ParentType, Context>;
  created: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  currency: Resolver<Maybe<Currency>, ParentType, Context>;
  custom_fields: Resolver<
    Maybe<Array<Maybe<InvoiceSettingCustomField>>>,
    ParentType,
    Context
  >;
  customer: Resolver<Maybe<Customer>, ParentType, Context>;
  default_source: Resolver<Maybe<Source>, ParentType, Context>;
  description: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  discount: Resolver<Maybe<Discount>, ParentType, Context>;
  due_date: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  ending_balance: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  footer: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  hosted_invoice_url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  id: Resolver<Scalars["ID"], ParentType, Context>;
  invoice_pdf: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  lines: Resolver<Maybe<Lines>, ParentType, Context>;
  livemode: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  metadata: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  nextPaymentAttempt: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  number: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  paid: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  period_end: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  period_start: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  receipt_number: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  starting_balance: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  statement_descriptor: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  status: Resolver<Maybe<InvoiceStatus>, ParentType, Context>;
  status_transitions: Resolver<
    Maybe<InvoicesStatusTransitions>,
    ParentType,
    Context
  >;
  subscription: Resolver<Maybe<BillingSubscription>, ParentType, Context>;
  subscription_proration_date: Resolver<
    Maybe<Scalars["Int"]>,
    ParentType,
    Context
  >;
  subtotal: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  tax: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  tax_percent: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  threshold_reason: Resolver<
    Maybe<InvoiceThresholdReason>,
    ParentType,
    Context
  >;
  total: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  webhooks_delivered_at: Resolver<
    Maybe<Scalars["DateTime"]>,
    ParentType,
    Context
  >;
};

export type InvoiceDeletePayloadResolvers<
  Context = StripeContext,
  ParentType = InvoiceDeletePayload
> = {
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  deleted: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
};

export type InvoiceItemResolvers<
  Context = StripeContext,
  ParentType = InvoiceItem
> = {
  amount: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  currency: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  customer: Resolver<Maybe<Customer>, ParentType, Context>;
  date: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  description: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  discountable: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  id: Resolver<Scalars["ID"], ParentType, Context>;
  invoice: Resolver<Maybe<Invoice>, ParentType, Context>;
  livemode: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  metadata: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  period: Resolver<Maybe<Period>, ParentType, Context>;
  plan: Resolver<Maybe<Plan>, ParentType, Context>;
  proration: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  quantity: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  subscription: Resolver<Maybe<BillingSubscription>, ParentType, Context>;
  subscription_item: Resolver<Maybe<Scalars["ID"]>, ParentType, Context>;
  unit_amount: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
};

export type InvoiceItemDeletePayloadResolvers<
  Context = StripeContext,
  ParentType = InvoiceItemDeletePayload
> = {
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  deleted: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
};

export type InvoiceItemListResolvers<
  Context = StripeContext,
  ParentType = InvoiceItemList
> = {
  data: Resolver<Maybe<Array<Maybe<InvoiceItem>>>, ParentType, Context>;
  has_more: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type InvoiceItemThresholdReasonResolvers<
  Context = StripeContext,
  ParentType = InvoiceItemThresholdReason
> = {
  line_item_ids: Resolver<
    Maybe<Array<Maybe<Scalars["ID"]>>>,
    ParentType,
    Context
  >;
  usage_gte: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
};

export type InvoiceLineItemPeriodResolvers<
  Context = StripeContext,
  ParentType = InvoiceLineItemPeriod
> = {
  end: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  start: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
};

export type InvoiceListResolvers<
  Context = StripeContext,
  ParentType = InvoiceList
> = {
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  has_more: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  data: Resolver<Maybe<Array<Maybe<Invoice>>>, ParentType, Context>;
};

export type InvoiceSettingCustomFieldResolvers<
  Context = StripeContext,
  ParentType = InvoiceSettingCustomField
> = {
  name: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  value: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type InvoicesStatusTransitionsResolvers<
  Context = StripeContext,
  ParentType = InvoicesStatusTransitions
> = {
  finalized_at: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  marked_uncollectible_at: Resolver<
    Maybe<Scalars["DateTime"]>,
    ParentType,
    Context
  >;
  paid_at: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  voided_at: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
};

export type InvoiceThresholdReasonResolvers<
  Context = StripeContext,
  ParentType = InvoiceThresholdReason
> = {
  amount_gte: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  item_reasons: Resolver<
    Maybe<Array<Maybe<InvoiceItemThresholdReason>>>,
    ParentType,
    Context
  >;
};

export type JapaneseAddressResolvers<
  Context = StripeContext,
  ParentType = JapaneseAddress
> = {
  city: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  country: Resolver<Maybe<CountryCode>, ParentType, Context>;
  line1: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  line2: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  postal_code: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  state: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  town: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export interface JsonScalarConfig
  extends GraphQLScalarTypeConfig<Scalars["JSON"], any> {
  name: "JSON";
}

export type LegalEntityCompanyResolvers<
  Context = StripeContext,
  ParentType = LegalEntityCompany
> = {
  address: Resolver<Maybe<Address>, ParentType, Context>;
  address_kana: Resolver<Maybe<JapaneseAddress>, ParentType, Context>;
  address_kanji: Resolver<Maybe<JapaneseAddress>, ParentType, Context>;
  directors_provided: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  name: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  name_kana: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  name_kanji: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  owners_provided: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  phone: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  tax_id_provided: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  tax_id_registrar: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  vat_id_provided: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
};

export type LegalEntityVerificationResolvers<
  Context = StripeContext,
  ParentType = LegalEntityVerification
> = {
  details: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  details_code: Resolver<
    Maybe<LegalEntityVerificationDetailsCode>,
    ParentType,
    Context
  >;
  document: Resolver<Maybe<VerificationDocument>, ParentType, Context>;
  status: Resolver<Maybe<LegalEntityVerificationStatus>, ParentType, Context>;
};

export type LineItemResolvers<
  Context = StripeContext,
  ParentType = LineItem
> = {
  amount: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  currency: Resolver<Maybe<Currency>, ParentType, Context>;
  description: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  discountable: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  id: Resolver<Scalars["ID"], ParentType, Context>;
  invoiceItem: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  livemode: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  metadata: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  period: Resolver<Maybe<InvoiceLineItemPeriod>, ParentType, Context>;
  plan: Resolver<Maybe<Plan>, ParentType, Context>;
  proration: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  quantity: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  subscription: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  subscription_item: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  type: Resolver<Maybe<InvoiceType>, ParentType, Context>;
};

export type LineItemListResolvers<
  Context = StripeContext,
  ParentType = LineItemList
> = {
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  has_more: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  data: Resolver<Maybe<Array<Maybe<LineItem>>>, ParentType, Context>;
};

export type LinesResolvers<Context = StripeContext, ParentType = Lines> = {
  data: Resolver<Maybe<Array<Maybe<LineItem>>>, ParentType, Context>;
  hasMore: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type ListBankAccountPayloadResolvers<
  Context = StripeContext,
  ParentType = ListBankAccountPayload
> = {
  data: Resolver<Maybe<Array<Maybe<BankAccount>>>, ParentType, Context>;
  hasMore: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type LoginLinkResolvers<
  Context = StripeContext,
  ParentType = LoginLink
> = {
  created: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type MultibancoResolvers<
  Context = StripeContext,
  ParentType = Multibanco
> = {
  reference: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  entity: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
};

export type MutationResolvers<
  Context = StripeContext,
  ParentType = Mutation
> = {
  createPayout: Resolver<
    Maybe<Payout>,
    ParentType,
    Context,
    MutationCreatePayoutArgs
  >;
  updatePayout: Resolver<
    Maybe<Payout>,
    ParentType,
    Context,
    MutationUpdatePayoutArgs
  >;
  cancelPayout: Resolver<
    Maybe<Payout>,
    ParentType,
    Context,
    MutationCancelPayoutArgs
  >;
};

export type NodeResolvers<Context = StripeContext, ParentType = Node> = {
  __resolveType: TypeResolveFn<
    | "Payout"
    | "BalanceTransaction"
    | "Card"
    | "BankAccount"
    | "Source"
    | "BillingSubscription"
    | "BillingSubscriptionItem"
    | "Plan"
    | "Product"
    | "Invoice"
    | "Charge"
    | "Refund"
    | "LineItem"
    | "StandardAccount"
    | "File"
    | "FileLink"
    | "ExpressAccount"
    | "CustomAccount"
    | "Person"
    | "InvoiceItem",
    ParentType,
    Context
  >;
  id: Resolver<Scalars["ID"], ParentType, Context>;
};

export type ObjectResolvers<Context = StripeContext, ParentType = Object> = {
  __resolveType: TypeResolveFn<
    | "Payout"
    | "BalanceTransaction"
    | "Card"
    | "BankAccount"
    | "PayoutList"
    | "Source"
    | "BillingSubscription"
    | "Customer"
    | "Discount"
    | "Coupon"
    | "BillingSubscriptionList"
    | "BillingSubscriptionItemList"
    | "BillingSubscriptionItem"
    | "Plan"
    | "Product"
    | "Invoice"
    | "Charge"
    | "Refund"
    | "Lines"
    | "LineItem"
    | "StandardAccount"
    | "File"
    | "FileLinkList"
    | "FileLink"
    | "ExpressAccount"
    | "ExternalAccountList"
    | "CustomAccount"
    | "Person"
    | "InvoiceItem"
    | "CustomerList"
    | "DeleteCustomerPayload"
    | "CouponList"
    | "InvoiceDeletePayload"
    | "InvoiceList"
    | "LineItemList"
    | "ChargeList"
    | "LoginLink"
    | "AccountList"
    | "ListBankAccountPayload"
    | "FileList"
    | "Balance"
    | "InvoiceItemList"
    | "InvoiceItemDeletePayload",
    ParentType,
    Context
  >;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
};

export type OwnerResolvers<Context = StripeContext, ParentType = Owner> = {
  address: Resolver<Maybe<Address>, ParentType, Context>;
  email: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  name: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  phone: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  verified_address: Resolver<Maybe<Address>, ParentType, Context>;
  verified_email: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  verified_name: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  verified_phone: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
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

export type PayoutResolvers<Context = StripeContext, ParentType = Payout> = {
  id: Resolver<Scalars["ID"], ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  amount: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  arrival_date: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  automatic: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  balance_transaction: Resolver<Maybe<BalanceTransaction>, ParentType, Context>;
  created: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  currency: Resolver<Maybe<Currency>, ParentType, Context>;
  description: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  destination: Resolver<Maybe<PayoutDestination>, ParentType, Context>;
  failure_balance_transaction: Resolver<
    Maybe<BalanceTransaction>,
    ParentType,
    Context
  >;
  failure_code: Resolver<Maybe<PayoutFailureCode>, ParentType, Context>;
  failure_message: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  livemode: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  metadata: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  method: Resolver<Maybe<PayoutMethod>, ParentType, Context>;
  source_type: Resolver<Maybe<PayoutSourceType>, ParentType, Context>;
  statement_descriptor: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  status: Resolver<Maybe<PayoutStatus>, ParentType, Context>;
  type: Resolver<Maybe<PayoutType>, ParentType, Context>;
};

export type PayoutDestinationResolvers<
  Context = StripeContext,
  ParentType = PayoutDestination
> = {
  __resolveType: TypeResolveFn<"Card" | "BankAccount", ParentType, Context>;
};

export type PayoutListResolvers<
  Context = StripeContext,
  ParentType = PayoutList
> = {
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  has_more: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  data: Resolver<Maybe<Array<Maybe<Payout>>>, ParentType, Context>;
};

export type PeriodResolvers<Context = StripeContext, ParentType = Period> = {
  end: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  start: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
};

export type PersonResolvers<Context = StripeContext, ParentType = Person> = {
  account: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  address: Resolver<Maybe<Address>, ParentType, Context>;
  address_kana: Resolver<Maybe<JapaneseAddress>, ParentType, Context>;
  address_kanji: Resolver<Maybe<JapaneseAddress>, ParentType, Context>;
  created: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  dob: Resolver<Maybe<DateOfBirth>, ParentType, Context>;
  email: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  first_mame: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  first_name_kana: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  first_name_kanji: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  gender: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  id: Resolver<Scalars["ID"], ParentType, Context>;
  id_number_provided: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  last_name: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  last_name_kana: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  last_name_kanji: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  maiden_name: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  metadata: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  phone: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  relationship: Resolver<Maybe<PersonRelationship>, ParentType, Context>;
  requirements: Resolver<Maybe<PersonRequirements>, ParentType, Context>;
  ssn_last_4_provided: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  verification: Resolver<Maybe<LegalEntityVerification>, ParentType, Context>;
};

export type PersonRelationshipResolvers<
  Context = StripeContext,
  ParentType = PersonRelationship
> = {
  account_opener: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  director: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  owner: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  percent_ownership: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  title: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type PersonRequirementsResolvers<
  Context = StripeContext,
  ParentType = PersonRequirements
> = {
  currently_due: Resolver<
    Maybe<Array<Maybe<Scalars["String"]>>>,
    ParentType,
    Context
  >;
  eventually_due: Resolver<
    Maybe<Array<Maybe<Scalars["String"]>>>,
    ParentType,
    Context
  >;
  past_due: Resolver<
    Maybe<Array<Maybe<Scalars["String"]>>>,
    ParentType,
    Context
  >;
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

export type Przelewy24Resolvers<
  Context = StripeContext,
  ParentType = Przelewy24
> = {
  reference: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type QueryResolvers<Context = StripeContext, ParentType = Query> = {
  retrievePayout: Resolver<
    Maybe<Payout>,
    ParentType,
    Context,
    QueryRetrievePayoutArgs
  >;
  listPayouts: Resolver<
    Maybe<PayoutList>,
    ParentType,
    Context,
    QueryListPayoutsArgs
  >;
};

export type ReceiverResolvers<
  Context = StripeContext,
  ParentType = Receiver
> = {
  address: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  amount_charged: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  amount_received: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  amount_returned: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  refund_attributes_method: Resolver<
    Maybe<RefundAttributesMethod>,
    ParentType,
    Context
  >;
  refund_attributes_status: Resolver<
    Maybe<RefundAttributesStatus>,
    ParentType,
    Context
  >;
};

export type RedirectResolvers<
  Context = StripeContext,
  ParentType = Redirect
> = {
  failure_reason: Resolver<Maybe<FailureReason>, ParentType, Context>;
  return_url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  status: Resolver<Maybe<RedirectStatus>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type RefundResolvers<Context = StripeContext, ParentType = Refund> = {
  id: Resolver<Scalars["ID"], ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  amount: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  balance_transaction: Resolver<Maybe<BalanceTransaction>, ParentType, Context>;
  charge: Resolver<Maybe<Scalars["ID"]>, ParentType, Context>;
  created: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  currency: Resolver<Maybe<Currency>, ParentType, Context>;
  description: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  failure_balance_transaction: Resolver<
    Maybe<BalanceTransaction>,
    ParentType,
    Context
  >;
  failure_reason: Resolver<Maybe<FailureReason>, ParentType, Context>;
  metadata: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  reason: Resolver<Maybe<RefundReason>, ParentType, Context>;
  receipt_number: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  source_transfer_reversal: Resolver<
    Maybe<Scalars["String"]>,
    ParentType,
    Context
  >;
  status: Resolver<Maybe<RefundStatus>, ParentType, Context>;
  transfer_reversal: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type RefundListResolvers<
  Context = StripeContext,
  ParentType = RefundList
> = {
  data: Resolver<Maybe<Array<Maybe<Refund>>>, ParentType, Context>;
  has_more: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type SepaDirectDebitResolvers<
  Context = StripeContext,
  ParentType = SepaDirectDebit
> = {
  bank_code: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  country: Resolver<Maybe<CountryCode>, ParentType, Context>;
  fingerprint: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  last4: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  mandate_reference: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  mandate_url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type SofortResolvers<Context = StripeContext, ParentType = Sofort> = {
  country: Resolver<Maybe<CountryCode>, ParentType, Context>;
  bank_code: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  bic: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  bank_name: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  iban_last4: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  preferred_language: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  statement_descriptor: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type SourceResolvers<Context = StripeContext, ParentType = Source> = {
  id: Resolver<Scalars["ID"], ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  amount: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
  client_secret: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  code_verification: Resolver<Maybe<CodeVerification>, ParentType, Context>;
  created: Resolver<Maybe<Scalars["DateTime"]>, ParentType, Context>;
  currency: Resolver<Maybe<Currency>, ParentType, Context>;
  customer: Resolver<Maybe<Scalars["ID"]>, ParentType, Context>;
  flow: Resolver<Maybe<Flow>, ParentType, Context>;
  livemode: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  metadata: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  owner: Resolver<Maybe<Owner>, ParentType, Context>;
  receiver: Resolver<Maybe<Receiver>, ParentType, Context>;
  redirect: Resolver<Maybe<Redirect>, ParentType, Context>;
  statement_descriptor: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  status: Resolver<Maybe<SourceStatus>, ParentType, Context>;
  usage: Resolver<Maybe<SourceUsage>, ParentType, Context>;
  type: Resolver<Maybe<SourceType>, ParentType, Context>;
  ach_credit_transfer: Resolver<Maybe<AchCreditTransfer>, ParentType, Context>;
  alipay: Resolver<Maybe<Alipay>, ParentType, Context>;
  bancontact: Resolver<Maybe<Bancontact>, ParentType, Context>;
  card: Resolver<Maybe<Card>, ParentType, Context>;
  eps: Resolver<Maybe<Eps>, ParentType, Context>;
  giropay: Resolver<Maybe<Giropay>, ParentType, Context>;
  ideal: Resolver<Maybe<IDeal>, ParentType, Context>;
  multibanco: Resolver<Maybe<Multibanco>, ParentType, Context>;
  p24: Resolver<Maybe<Przelewy24>, ParentType, Context>;
  sepa_debit: Resolver<Maybe<SepaDirectDebit>, ParentType, Context>;
  sofort: Resolver<Maybe<Sofort>, ParentType, Context>;
  wechat: Resolver<Maybe<WeChatPay>, ParentType, Context>;
};

export type SourceTypesResolvers<
  Context = StripeContext,
  ParentType = SourceTypes
> = {
  bank_account: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
  card: Resolver<Maybe<Scalars["Float"]>, ParentType, Context>;
};

export type StandardAccountResolvers<
  Context = StripeContext,
  ParentType = StandardAccount
> = {
  id: Resolver<Scalars["ID"], ParentType, Context>;
  object: Resolver<Maybe<ObjectType>, ParentType, Context>;
  businessProfile: Resolver<Maybe<BusinessProfile>, ParentType, Context>;
  capabilities: Resolver<Maybe<AccountCapabilities>, ParentType, Context>;
  charges_enabled: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  country: Resolver<Maybe<CountryCode>, ParentType, Context>;
  default_currency: Resolver<Maybe<Currency>, ParentType, Context>;
  details_submitted: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  email: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  metadata: Resolver<Maybe<Scalars["JSON"]>, ParentType, Context>;
  payouts_enabled: Resolver<Maybe<Scalars["Boolean"]>, ParentType, Context>;
  settings: Resolver<Maybe<AccountSettings>, ParentType, Context>;
  type: Resolver<Maybe<AccountType>, ParentType, Context>;
};

export type TransferDataResolvers<
  Context = StripeContext,
  ParentType = TransferData
> = {
  destination: Resolver<Maybe<Scalars["ID"]>, ParentType, Context>;
};

export type VerificationDocumentResolvers<
  Context = StripeContext,
  ParentType = VerificationDocument
> = {
  back: Resolver<Maybe<File>, ParentType, Context>;
  details: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  details_code: Resolver<Maybe<DocumentDetailsCode>, ParentType, Context>;
  front: Resolver<Maybe<File>, ParentType, Context>;
};

export type WeChatPayResolvers<
  Context = StripeContext,
  ParentType = WeChatPay
> = {
  qr_code_url: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
};

export type Resolvers<Context = StripeContext> = {
  Account: AccountResolvers;
  AccountCapabilities: AccountCapabilitiesResolvers<Context>;
  AccountList: AccountListResolvers<Context>;
  AccountRequirements: AccountRequirementsResolvers<Context>;
  AccountSettings: AccountSettingsResolvers<Context>;
  AccountSettingsBranding: AccountSettingsBrandingResolvers<Context>;
  AccountSettingsCardPayments: AccountSettingsCardPaymentsResolvers<Context>;
  AccountSettingsCardPaymentsDeclineOn: AccountSettingsCardPaymentsDeclineOnResolvers<
    Context
  >;
  AccountSettingsPayments: AccountSettingsPaymentsResolvers<Context>;
  AccountSettingsPayouts: AccountSettingsPayoutsResolvers<Context>;
  AccountSettingsPayoutsSchedule: AccountSettingsPayoutsScheduleResolvers<
    Context
  >;
  AccountTosAcceptance: AccountTosAcceptanceResolvers<Context>;
  AchCreditTransfer: AchCreditTransferResolvers<Context>;
  Address: AddressResolvers<Context>;
  Alipay: AlipayResolvers<Context>;
  Balance: BalanceResolvers<Context>;
  BalanceTransaction: BalanceTransactionResolvers<Context>;
  Bancontact: BancontactResolvers<Context>;
  BankAccount: BankAccountResolvers<Context>;
  BillingSubscription: BillingSubscriptionResolvers<Context>;
  BillingSubscriptionBillingThresholds: BillingSubscriptionBillingThresholdsResolvers<
    Context
  >;
  BillingSubscriptionItem: BillingSubscriptionItemResolvers<Context>;
  BillingSubscriptionItemBillingThresholds: BillingSubscriptionItemBillingThresholdsResolvers<
    Context
  >;
  BillingSubscriptionItemList: BillingSubscriptionItemListResolvers<Context>;
  BillingSubscriptionList: BillingSubscriptionListResolvers<Context>;
  BusinessProfile: BusinessProfileResolvers<Context>;
  Card: CardResolvers<Context>;
  Charge: ChargeResolvers<Context>;
  ChargeList: ChargeListResolvers<Context>;
  ChargeOutcome: ChargeOutcomeResolvers<Context>;
  ChargeShipping: ChargeShippingResolvers<Context>;
  CodeVerification: CodeVerificationResolvers<Context>;
  Coupon: CouponResolvers<Context>;
  CouponList: CouponListResolvers<Context>;
  CustomAccount: CustomAccountResolvers<Context>;
  Customer: CustomerResolvers<Context>;
  CustomerInvoiceSetting: CustomerInvoiceSettingResolvers<Context>;
  CustomerInvoiceSettingCustomField: CustomerInvoiceSettingCustomFieldResolvers<
    Context
  >;
  CustomerList: CustomerListResolvers<Context>;
  CustomerPaymentSource: CustomerPaymentSourceResolvers<Context>;
  CustomerShipping: CustomerShippingResolvers<Context>;
  CustomerTaxInformation: CustomerTaxInformationResolvers<Context>;
  CustomerTaxInformationVerification: CustomerTaxInformationVerificationResolvers<
    Context
  >;
  DateOfBirth: DateOfBirthResolvers<Context>;
  DateTime: GraphQLScalarType;
  DeleteCustomerPayload: DeleteCustomerPayloadResolvers<Context>;
  Discount: DiscountResolvers<Context>;
  EPS: EpsResolvers<Context>;
  ExpressAccount: ExpressAccountResolvers<Context>;
  ExternalAccount: ExternalAccountResolvers;
  ExternalAccountList: ExternalAccountListResolvers<Context>;
  FeeDetail: FeeDetailResolvers<Context>;
  File: FileResolvers<Context>;
  FileLink: FileLinkResolvers<Context>;
  FileLinkList: FileLinkListResolvers<Context>;
  FileList: FileListResolvers<Context>;
  FraudDetails: FraudDetailsResolvers<Context>;
  Fund: FundResolvers<Context>;
  Giropay: GiropayResolvers<Context>;
  iDEAL: IDealResolvers<Context>;
  Invoice: InvoiceResolvers<Context>;
  InvoiceDeletePayload: InvoiceDeletePayloadResolvers<Context>;
  InvoiceItem: InvoiceItemResolvers<Context>;
  InvoiceItemDeletePayload: InvoiceItemDeletePayloadResolvers<Context>;
  InvoiceItemList: InvoiceItemListResolvers<Context>;
  InvoiceItemThresholdReason: InvoiceItemThresholdReasonResolvers<Context>;
  InvoiceLineItemPeriod: InvoiceLineItemPeriodResolvers<Context>;
  InvoiceList: InvoiceListResolvers<Context>;
  InvoiceSettingCustomField: InvoiceSettingCustomFieldResolvers<Context>;
  InvoicesStatusTransitions: InvoicesStatusTransitionsResolvers<Context>;
  InvoiceThresholdReason: InvoiceThresholdReasonResolvers<Context>;
  JapaneseAddress: JapaneseAddressResolvers<Context>;
  JSON: GraphQLScalarType;
  LegalEntityCompany: LegalEntityCompanyResolvers<Context>;
  LegalEntityVerification: LegalEntityVerificationResolvers<Context>;
  LineItem: LineItemResolvers<Context>;
  LineItemList: LineItemListResolvers<Context>;
  Lines: LinesResolvers<Context>;
  ListBankAccountPayload: ListBankAccountPayloadResolvers<Context>;
  LoginLink: LoginLinkResolvers<Context>;
  Multibanco: MultibancoResolvers<Context>;
  Mutation: MutationResolvers<Context>;
  Node: NodeResolvers;
  Object: ObjectResolvers;
  Owner: OwnerResolvers<Context>;
  PackageDimensions: PackageDimensionsResolvers<Context>;
  Payout: PayoutResolvers<Context>;
  PayoutDestination: PayoutDestinationResolvers;
  PayoutList: PayoutListResolvers<Context>;
  Period: PeriodResolvers<Context>;
  Person: PersonResolvers<Context>;
  PersonRelationship: PersonRelationshipResolvers<Context>;
  PersonRequirements: PersonRequirementsResolvers<Context>;
  Plan: PlanResolvers<Context>;
  PlanTier: PlanTierResolvers<Context>;
  Product: ProductResolvers<Context>;
  Przelewy24: Przelewy24Resolvers<Context>;
  Query: QueryResolvers<Context>;
  Receiver: ReceiverResolvers<Context>;
  Redirect: RedirectResolvers<Context>;
  Refund: RefundResolvers<Context>;
  RefundList: RefundListResolvers<Context>;
  SEPADirectDebit: SepaDirectDebitResolvers<Context>;
  SOFORT: SofortResolvers<Context>;
  Source: SourceResolvers<Context>;
  SourceTypes: SourceTypesResolvers<Context>;
  StandardAccount: StandardAccountResolvers<Context>;
  TransferData: TransferDataResolvers<Context>;
  VerificationDocument: VerificationDocumentResolvers<Context>;
  WeChatPay: WeChatPayResolvers<Context>;
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
