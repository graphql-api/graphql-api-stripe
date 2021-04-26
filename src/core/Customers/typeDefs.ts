export default `type Query {
  retrieveCustomer(where: CustomerWhereUniqueInput!): Customer
  """Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first."""
  listCustomers(where: CustomerWhereInput): ListCustomerPayload
}

type Mutation {
  createCustomer(data: CustomerCreateInput!): Customer!
  updateCustomer(where: CustomerWhereUniqueInput!, data: CustomerUpdateInput!): Customer
  deleteCustomer(where: CustomerWhereUniqueInput!): DeleteCustomerPayload
}

type Customer implements Object {
  id: ID
  """String representing the object’s type. Objects of the same type share the same value."""
  object: ObjectType
  """Current balance, if any, being stored on the customer’s account. If negative, the customer has credit to apply to the next invoice. If positive, the customer has an amount owed that will be added to the next invoice. The balance does not refer to any unpaid invoices; it solely takes into account amounts that have yet to be successfully applied to any invoice. This balance is only taken into account as invoices are finalized. Note that the balance does not include unpaid invoices."""
  account_balance: Int
  """Time at which the object was created. Measured in seconds since the Unix epoch."""
  created: DateTime
  currency: Currency
  """ID of the default source attached to this customer."""
  default_source: Source
  """When the customer’s latest invoice is billed by charging automatically, delinquent is true if the invoice’s latest charge is failed. When the customer’s latest invoice is billed by sending an invoice, delinquent is true if the invoice is not paid by its due date."""
  delinquent: Boolean
  """An arbitrary string attached to the object. Often useful for displaying to users."""
  description: String
  discount: Discount
  """The customer’s email address."""
  email: String
  """The prefix for the customer used to generate unique invoice numbers."""
  invoice_prefix: String
  """The customer’s default invoice settings."""
  invoice_settings: CustomerInvoiceSetting
  """Has the value true if the object exists in live mode or the value false if the object exists in test mode."""
  livemode: Boolean
  """Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format."""
  metadata: JSON
  shipping: CustomerShipping
  sources: CustomerPaymentSource
  """The customer’s current subscriptions, if any."""
  subscriptions: SubscriptionConnection
  """The customer’s tax information. Appears on invoices emailed to this customer."""
  tax_info: CustomerTaxInformation
  """Describes the status of looking up the tax ID provided in tax_info."""
  tax_info_verification: CustomerTaxInformationVerification
}

"""The customer’s tax information. Appears on invoices emailed to this customer."""
type CustomerTaxInformation {
  """The customer’s tax ID number."""
  tax_id: ID
  """The type of ID number."""
  type: TaxType
}

input CustomerTaxInformationInput {
  """The customer’s tax ID number. This can be unset by updating the value to null and then saving."""
  tax_id: ID!
  """The type of ID number. The only possible value is vat"""
  type: TaxType!
}

enum TaxType {
  vat
}

"""Describes the status of looking up the tax ID provided in tax_info."""
type CustomerTaxInformationVerification {
  """The state of verification for this customer"""
  status: VerificationStatus
  """The official name associated with the tax ID returned from the external provider."""
  verified_name: String
}

enum VerificationStatus {
  unverfied
  pending
  verrified
}

"""The customer’s default invoice settings."""
type CustomerInvoiceSetting {
  """Default custom fields to be displayed on invoices for this customer."""
  custom_fields: CustomerInvoiceSettingCustomField
  """Default footer to be displayed on invoices for this customer."""
  footer: String
}

"""Default custom fields to be displayed on invoices for this customer."""
type CustomerInvoiceSettingCustomField {
  """The name of the custom field."""
  name: String!
  """The value of the custom field."""
  value: String!
}

"""Mailing and shipping address for the customer. Appears on invoices emailed to this customer."""
type CustomerShipping {
  """Customer name."""
  name: String
  """Customer phone (including extension)."""
  phone: String
  """Customer shipping address."""
  address: Address
}

"""The customer’s payment sources, if any."""
type CustomerPaymentSource {
  data: [Source]
  """True if this list has another page of items after this one that can be fetched."""
  has_more: Boolean
  """The URL where this list can be accessed."""
  url: String
}

input CustomerWhereUniqueInput {
  id: ID!
}

input CustomerUpdateInput {
  """An integer amount in cents that represents the account balance for your customer. Account balances only affect invoices. A negative amount represents a credit that decreases the amount due on an invoice; a positive amount increases the amount due on an invoice."""
  account_balance: Int
  """If you provide a coupon code, the customer will have a discount applied on all recurring charges. Charges you create through the API will not have the discount. This can be unset by updating the value to null and then saving."""
  coupon: ID
  """ID of the default payment source for the customer."""
  default_source: String
  """An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard. This can be unset by updating the value to null and then saving."""
  description: String
  """Customer’s email address. It’s displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to 512 characters. This can be unset by updating the value to null and then saving."""
  email: String @constraint(format: "email")
  """The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers."""
  invoice_prefix: String
  """Default invoice settings for this customer."""
  invoice_settings: CustomerInvoiceSettingInput
  """A set of key-value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format."""
  metadata: JSON
  """The customer’s shipping information. Appears on invoices emailed to this customer."""
  shipping: CustomerShippingInput
  """A Token’s or a Source’s ID, as returned by Elements. Passing source will create a new source object, make it the new customer default source, and delete the old customer default if one exists. If you want to add additional sources instead of replacing the existing default, use the card creation API. Whenever you attach a card to a customer, Stripe will automatically validate the card."""
  source: String
  """The customer’s tax information. Appears on invoices emailed to this customer."""
  tax_info: CustomerTaxInformationInput
}

input CustomerCreateInput {
  """An integer amount in cents that represents the account balance for your customer. Account balances only affect invoices. A negative amount represents a credit that decreases the amount due on an invoice; a positive amount increases the amount due on an invoice."""
  account_balance: Int
  """The code of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that particular subscription. This can be unset by updating the value to null and then saving."""
  coupon: ID
  default_source: String
  """An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard. This can be unset by updating the value to null and then saving."""
  description: String
  email: String @constraint(format: "email")
  """The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers."""
  invoice_prefix: String
  """Default invoice settings for this customer."""
  invoice_settings: CustomerInvoiceSettingInput
  """Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format."""
  metadata: JSON
  shipping: CustomerShippingInput
  """The source can either be a Token or a Source, as returned by Elements, or a object containing a user’s credit card details (with the options shown below). You must provide a source if the customer does not already have a valid source attached, and you are subscribing the customer to be charged automatically for a plan that is not free. Passing source will create a new source object, make it the customer default source, and delete the old customer default if one exists. If you want to add an additional source, instead use the card creation API to add the card and then the customer update API to set it as the default. Whenever you attach a card to a customer, Stripe will automatically validate the card."""
  source: String
  """The customer’s tax information. Appears on invoices emailed to this customer."""
  tax_info: CustomerTaxInformationInput
}

input CustomerPaymentSourceInput {
  token: String
  soure: String
}

input CustomerShippingInput {
  """Customer shipping address."""
  address: AddressInput!
  """Customer name. This can be unset by updating the value to null and then saving."""
  name: String!
  """Customer phone (including extension). This can be unset by updating the value to null and then saving."""
  phone: String
}

"""Default invoice settings for this customer."""
input CustomerInvoiceSettingInput {
  """Default custom fields to be displayed on invoices for this customer."""
  custom_fields: CustomerInvoiceSettingCustomFieldInput
  """Default footer to be displayed on invoices for this customer."""
  footer: String
}

"""Default custom fields to be displayed on invoices for this customer."""
input CustomerInvoiceSettingCustomFieldInput {
  """The name of the custom field. This may be up to 30 characters."""
  name: String
  """The value of the custom field. This may be up to 30 characters."""
  value: String
}

input CustomerWhereInput {
  created: CreatedInput
  """A filter on the list based on the customer’s email field. The value must be a string."""
  email: String @constraint(format: "email")
  """A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in order to fetch the previous page of the list."""
  ending_before: ID
  """A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10."""
  limit: Int
  """A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list."""
  starting_after: ID
}

type ListCustomerPayload implements Object {
  object: ObjectType
  url: String
  has_more: Boolean
  data: [Customer!]!
}

type DeleteCustomerPayload implements Object {
  id: ID
  object: ObjectType
  deleted: Boolean
}

interface Object {
  object: ObjectType
}

enum ObjectType {
  account
  accountLink
  applePayDomain
  applicationFee
  balance
  balanceTransaction
  balance_ransaction
  bankAccount
  bitcoinReceiver
  bitcoinTransaction
  card
  charge
  checkoutSession
  "checkout.session"
  countrySpec
  coupon
  customer
  discount
  dispute
  ephemeralKey
  event
  exchangeRate
  feeRefund
  file
  fileLink
  invoice
  invoiceitem
  issuerFraudRecord
  issuingAuthorization
  issuingCard
  issuingCardDetails
  issuingCardPin
  issuingCardholder
  issuingDispute
  issuingSettlement
  issuingTransaction
  issuingVerification
  lineItem
  list
  loginLink
  order
  orderItem
  orderReturn
  paymentIntent
  paymentMethod
  payout
  person
  plan
  product
  radarValueList
  radarValueListItem
  recipient
  refund
  reportingReportRun
  reportingReportType
  review
  scheduledQueryRun
  sku
  source
  sourceMandateNotification
  sourceTransaction
  subscription
  subscriptionItem
  subscriptionSchedule
  subscriptionScheduleRevision
  terminalConnectionToken
  terminalLocation
  terminalReader
  threeDSecure
  token
  topup
  transfer
  transferReversal
  usageRecord
  usageRecordSummary
  webhookEndpoint
}

scalar DateTime

"""Three-letter <a href="https://stripe.com/docs/currencies">ISO code for the currency</a> the customer can be charged in for recurring billing purposes."""
enum Currency {
  usd
  aed
  afn
  all
  amd
  ang
  aoa
  ars
  aud
  awg
  azn
  bam
  bbd
  bdt
  bgn
  bif
  bmd
  bnd
  bob
  brl
  bsd
  bwp
  bzd
  cad
  cdf
  chf
  clp
  cny
  cop
  crc
  cve
  czk
  djf
  dkk
  dop
  dzd
  egp
  etb
  eur
  fjd
  fkp
  gbp
  gel
  gip
  gmd
  gnf
  gtq
  gyd
  hkd
  hnl
  hrk
  htg
  huf
  idr
  ils
  inr
  isk
  jmd
  jpy
  kes
  kgs
  khr
  kmf
  krw
  kyd
  kzt
  lak
  lbp
  lkr
  lrd
  lsl
  mad
  mdl
  mga
  mkd
  mmk
  mnt
  mop
  mro
  mur
  mvr
  mwk
  mxn
  myr
  mzn
  nad
  ngn
  nio
  nok
  npr
  nzd
  pab
  pen
  pgk
  php
  pkr
  pln
  pyg
  qar
  ron
  rsd
  rub
  rwf
  sar
  sbd
  scr
  sek
  sgd
  shp
  sll
  sos
  srd
  std
  szl
  thb
  tjs
  top
  try
  ttd
  twd
  tzs
  uah
  ugx
  uyu
  uzs
  vnd
  vuv
  wst
  xaf
  xcd
  xof
  xpf
  yer
  zar
  zmw
}

"""https://stripe.com/docs/api/sources"""
type Source implements Node & Object {
  """Unique identifier for the object."""
  id: ID!
  """String representing the object’s type. Objects of the same type share the same value."""
  object: ObjectType
  """A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount associated with the source. This is the amount for which the source will be chargeable once ready. Required for single_use sources."""
  amount: Int
  """The client secret of the source. Used for client-side retrieval using a publishable key."""
  client_secret: String
  """Information related to the code verification flow. Present if the source is authenticated by a verification code (flow is code_verification)."""
  code_verification: CodeVerification
  """Time at which the object was created. Measured in seconds since the Unix epoch."""
  created: DateTime
  """Three-letter ISO code for the currency associated with the source. This is the currency for which the source will be chargeable once ready. Required for single_use sources."""
  currency: Currency
  """The ID of the customer to which this source is attached. This will not be present when the source has not been attached to a customer."""
  customer: ID
  """The authentication flow of the source. flow is one of redirect, receiver, code_verification, none."""
  flow: Flow
  """Has the value true if the object exists in live mode or the value false if the object exists in test mode."""
  livemode: Boolean
  """Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format."""
  metadata: JSON
  """Information about the owner of the payment instrument that may be used or required by particular source types."""
  owner: Owner
  """Information related to the receiver flow. Present if the source is a receiver (flow is receiver)."""
  receiver: Receiver
  """Information related to the redirect flow. Present if the source is authenticated by a redirect (flow is redirect)."""
  redirect: Redirect
  """Extra information about a source. This will appear on your customer’s statement every time you charge the source."""
  statement_descriptor: String
  """The status of the source, one of canceled, chargeable, consumed, failed, or pending. Only chargeable sources can be used to create a charge."""
  status: SourceStatus
  """Either reusable or single_use. Whether this source should be reusable or not. Some source types may or may not be reusable by construction, while others may leave the option at creation. If an incompatible value is passed, an error will be returned."""
  usage: SourceUsage
  """The type of the source. The type is a payment method, one of ach_credit_transfer, ach_debit, alipay, bancontact, card, card_present, eps, giropay, ideal, multibanco, p24, paper_check, sepa_credit_transfer, sepa_debit, sofort, three_d_secure, or wechat. An additional hash is included on the source with a name matching this value. It contains additional information specific to the payment method used."""
  type: SourceType
  """https://stripe.com/docs/sources/ach-credit-transfer"""
  ach_credit_transfer: AchCreditTransfer
  alipay: Alipay
  bancontact: Bancontact
  card: Card
  eps: EPS
  giropay: Giropay
  ideal: iDEAL
  multibanco: Multibanco
  p24: Przelewy24
  sepa_debit: SEPADirectDebit
  sofort: SOFORT
  wechat: WeChatPay
}

type Discount {
  coupon: Coupon
  customer: ID
  end: DateTime
  start: DateTime
  """The subscription that this coupon is applied to, if it is applied to a particular subscription."""
  subscription: String
}

scalar JSON

type SubscriptionConnection {
  data: [SubscriptionObject]
  has_more: Boolean
  url: String
}

type Address {
  city: String
  """2-letter country code."""
  country: CountryCode
  """Address line 1 (Street address/PO Box/Company name)."""
  line1: String
  """Address line 2 (Apartment/Suite/Unit/Building)."""
  line2: String
  """ZIP or postal code."""
  postal_code: String
  """State/County/Province/Region."""
  state: String
}

directive @constraint(minLength: Int, maxLength: Int, startsWith: String, endsWith: String, contains: String, notContains: String, pattern: String, format: String, min: Float, max: Float, exclusiveMin: Float, exclusiveMax: Float, multipleOf: Float) on INPUT_FIELD_DEFINITION

input AddressInput {
  """Address line 1 (Street address/PO Box/Company name)."""
  line1: String!
  city: String
  country: CountryCode
  """Address line 2 (Apartment/Suite/Unit/Building)."""
  line2: String
  """ZIP or postal code."""
  postal_code: String
  """State/County/Province/Region."""
  state: String
}

"""A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options:"""
input CreatedInput {
  """Return results where the created field is greater than this value."""
  gt: Int
  """Return results where the created field is greater than or equal to this value."""
  gte: Int
  """Return results where the created field is less than this value."""
  lt: Int
  """Return results where the created field is less than or equal to this value."""
  lte: Int
}

"""https://stripe.com/docs/api/cards/object"""
type Card implements Node & Object {
  """
  The account this card belongs to. This attribute will not be in the card
  object if the card belongs to a customer or recipient instead.
  """
  account: String @expandable
  """City/District/Suburb/Town/Village."""
  address_city: String
  """Billing address country, if provided when creating card."""
  address_country: String
  """Address line 1 (Street address/PO Box/Company name)."""
  address_line1: String
  """If \`address_line1\` was provided, results of the check: \`pass\`, \`fail\`, \`unavailable\`, or \`unchecked\`."""
  address_line1_check: Check
  """Address line 2 (Apartment/Suite/Unit/Building)."""
  address_line2: String
  """State/County/Province/Region."""
  address_state: String
  """ZIP or postal code."""
  address_zip: String
  """If \`address_zip\` was provided, results of the check: \`pass\`, \`fail\`, \`unavailable\`, or \`unchecked\`."""
  address_zip_check: Check
  """
  A set of available payout methods for this card. Will be either \`["standard"]\`
  or \`["standard", "instant"]\`. Only values from this set should be passed as
  the \`method\` when creating a transfer.
  """
  available_payout_methods: [AvailablePayoutMethods]
  """Card brand. Can be \`American Express\`, \`Diners Club\`, \`Discover\`, \`JCB\`, \`MasterCard\`, \`UnionPay\`, \`Visa\`, or \`Unknown\`."""
  brand: Brand
  """
  Two-letter ISO code representing the country of the card. You could use this
  attribute to get a sense of the international breakdown of cards you've collected.
  """
  country: CountryCode
  """Three-letter ISO code for currency. Only applicable on accounts (not customers or recipients). The card can be used as a transfer destination for funds in this currency."""
  currency: Currency
  """
  The customer that this card belongs to. This attribute will not be in the card
  object if the card belongs to an account or recipient instead.
  """
  customer: String @expandable
  """If a CVC was provided, results of the check: \`pass\`, \`fail\`, \`unavailable\`, or \`unchecked\`."""
  cvc_check: Check
  """(For tokenized numbers only.) The last four digits of the device account number."""
  dynamic_last4: String
  """Two-digit number representing the card's expiration month."""
  exp_month: Int
  """Four-digit number representing the card's expiration year."""
  exp_year: Int
  """
  Uniquely identifies this particular card number. You can use this attribute to
  check whether two customers who've signed up with you are using the same card
  number, for example.
  """
  fingerprint: String
  """Card funding type. Can be \`credit\`, \`debit\`, \`prepaid\`, or \`unknown\`."""
  funding: Funding
  """Unique identifier for the object."""
  id: ID!
  """The last four digits of the card."""
  last4: String
  """
  Set of key-value pairs that you can attach to an object. This can be useful
  for storing additional information about the object in a structured format.
  """
  metadata: JSON
  """Cardholder name."""
  name: String
  """String representing the object's type. Objects of the same type share the same value."""
  object: ObjectType
  """
  The recipient that this card belongs to. This attribute will not be in the
  card object if the card belongs to a customer or account instead.
  """
  recipient: String @expandable
  """If the card number is tokenized, this is the method that was used. Can be \`apple_pay\` or \`google_pay\`."""
  tokenizationMethod: TokenizationMethod
}

interface Node {
  id: ID!
}

type CodeVerification {
  """The number of attempts remaining to authenticate the source object with a verification code."""
  attemps_remainig: Int
  """The status of the code verification, either pending (awaiting verification, attempts_remaining should be greater than 0), succeeded (successful verification) or failed (failed verification, cannot be verified anymore as attempts_remaining should be 0)."""
  status: CodeVerificationStatus
}

"""The authentication flow of the source."""
enum Flow {
  redirect
  receiver
  code_verification
  none
}

type Owner {
  """Owner’s address."""
  address: Address
  """Owner’s email address."""
  email: String
  """Owner’s full name."""
  name: String
  """Owner’s phone number (including extension)."""
  phone: String
  """Verified owner’s address. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated."""
  verified_address: Address
  """Verified owner’s email address. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated."""
  verified_email: String
  """Verified owner’s full name. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated."""
  verified_name: String
  """Verified owner’s phone number (including extension). Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated."""
  verified_phone: String
}

type Receiver {
  """The address of the receiver source. This is the value that should be communicated to the customer to send their funds to."""
  address: String
  """The total amount that was charged by you. The amount charged is expressed in the source’s currency."""
  amount_charged: Int
  """The total amount received by the receiver source. amount_received = amount_returned + amount_charged is true at all time. The amount received is expressed in the source’s currency."""
  amount_received: Int
  """The total amount that was returned to the customer. The amount returned is expressed in the source’s currency."""
  amount_returned: Int
  """Type of refund attribute method, one of email, manual, or none."""
  refund_attributes_method: RefundAttributesMethod
  """Type of refund attribute status, one of missing, requested, or available."""
  refund_attributes_status: RefundAttributesStatus
}

""""""
type Redirect {
  """The failure reason for the redirect, either user_abort (the customer aborted or dropped out of the redirect flow), declined (the authentication failed or the transaction was declined), or processing_error (the redirect failed due to a technical error). Present only if the redirect status is failed."""
  failure_reason: FailureReason
  """The URL you provide to redirect the customer to after they authenticated their payment."""
  return_url: String
  """The status of the redirect, either pending (ready to be used by your customer to authenticate the transaction), succeeded (succesful authentication, cannot be reused) or not_required (redirect should not be used) or failed (failed authentication, cannot be reused)."""
  status: RedirectStatus
  """The URL provided to you to redirect a customer to as part of a redirect authentication flow."""
  url: String
}

"""The status of the source, one of canceled, chargeable, consumed, failed, or pending. Only chargeable sources can be used to create a charge."""
enum SourceStatus {
  CANCELED
  CHARGEABLE
  CONSUMED
  FAILED
  PENDING
}

enum SourceUsage {
  reusable
  single_use
}

enum SourceType {
  ach_credit_transfer
  ach_debit
  alipay
  bancontact
  card
  card_present
  eps
  giropay
  ideal
  multibanco
  p24
  paper_check
  sepa_credit_transfer
  sepa_debit
  sofort
  three_d_secure
  wechat
}

"""https://stripe.com/docs/sources/ach-credit-transfer"""
type AchCreditTransfer {
  account_number: String
  routing_number: Int
  fingerprint: String
  bank_name: String
  swift_code: String
}

"""https://stripe.com/docs/sources/alipay"""
type Alipay {
  statement_descriptor: String
  native_url: String
}

"""https://stripe.com/docs/sources/bancontact"""
type Bancontact {
  bank_code: String
  bic: String
  bank_name: String
  iban_last4: Int
  statement_descriptor: String
  preferred_language: String
}

"""https://stripe.com/docs/sources/eps"""
type EPS {
  reference: String
  statement_descriptor: String
}

"""https://stripe.com/docs/sources/giropay"""
type Giropay {
  bank_code: String
  bic: String
  bank_name: String
  statement_descriptor: String
}

"""https://stripe.com/docs/sources/ideal"""
type iDEAL {
  bank: String
  bic: String
  iban_last4: Int
  statement_descriptor: String
}

"""https://stripe.com/docs/sources/multibanco"""
type Multibanco {
  reference: Int
  entity: Int
}

"""https://stripe.com/docs/sources/p24"""
type Przelewy24 {
  reference: String
}

"""https://stripe.com/docs/sources/sepa-debit"""
type SEPADirectDebit {
  bank_code: Int
  country: CountryCode
  fingerprint: String
  last4: Int
  mandate_reference: String
  mandate_url: String
}

"""https://stripe.com/docs/sources/sofort"""
type SOFORT {
  country: CountryCode
  bank_code: String
  bic: String
  bank_name: String
  iban_last4: Int
  preferred_language: String
  statement_descriptor: String
}

"""https://stripe.com/docs/sources/wechat-pay"""
type WeChatPay {
  qr_code_url: String
}

"""https://stripe.com/docs/api/coupons/object"""
type Coupon {
  """Unique identifier for the object."""
  id: ID!
  """Amount (in the currency specified) that will be taken off the subtotal of any invoices for this customer."""
  amount_off: Int
  created: DateTime
  currency: Currency
  """Describes how long a customer who applies this coupon will get the discount."""
  duration: Duration
  """If duration is repeating, the number of months the coupon applies. Null if coupon duration is forever or once."""
  duration_in_months: Int
  livemode: Boolean
  """Maximum number of times this coupon can be redeemed, in total, across all customers, before it is no longer valid."""
  max_redemptions: Int
  metadata: JSON
  """Name of the coupon displayed to customers on for instance invoices or receipts."""
  name: String
  """Percent that will be taken off the subtotal of any invoices for this customer for the duration of the coupon. For example, a coupon with percent_off of 50 will make a $100 invoice $50 instead."""
  percent_off: Float
  """Date after which the coupon can no longer be redeemed."""
  redeem_by: DateTime
  """Number of times this coupon has been applied to a customer."""
  times_redeemed: Int
  valid: Boolean
}

"""https://stripe.com/docs/api/subscriptions"""
type SubscriptionObject {
  id: ID
}

"""An ISO 3166-1 alpha-2 country code. Available country codes can be listed with the List Country Specs endpoint."""
enum CountryCode {
  AF
  AX
  AL
  DZ
  AS
  AD
  AO
  AI
  AQ
  AG
  AR
  AM
  AW
  AU
  AT
  AZ
  BS
  BH
  BD
  BB
  BY
  BE
  BZ
  BJ
  BM
  BT
  BO
  BQ
  BA
  BW
  BV
  BR
  IO
  VG
  BN
  BG
  BF
  BI
  KH
  CM
  CA
  CV
  KY
  CF
  TD
  CL
  CN
  CX
  CC
  CO
  KM
  CK
  CR
  HR
  CU
  CW
  CY
  CZ
  CD
  DK
  DJ
  DM
  DO
  TL
  EC
  EG
  SV
  GQ
  ER
  EE
  ET
  FK
  FO
  FJ
  FI
  FR
  GF
  PF
  TF
  GA
  GM
  GE
  DE
  GH
  GI
  GR
  GL
  GD
  GP
  GU
  GT
  GG
  GN
  GW
  GY
  HT
  HM
  HN
  HK
  HU
  IS
  IN
  ID
  IR
  IQ
  IE
  IM
  IL
  IT
  CI
  JM
  JP
  JE
  JO
  KZ
  KE
  KI
  XK
  KW
  KG
  LA
  LV
  LB
  LS
  LR
  LY
  LI
  LT
  LU
  MO
  MK
  MG
  MW
  MY
  MV
  ML
  MT
  MH
  MQ
  MR
  MU
  YT
  MX
  FM
  MD
  MC
  MN
  ME
  MS
  MA
  MZ
  MM
  NA
  NR
  NP
  NL
  AN
  NC
  NZ
  NI
  NE
  NG
  NU
  NF
  KP
  MP
  NO
  OM
  PK
  PW
  PS
  PA
  PG
  PY
  PE
  PH
  PN
  PL
  PT
  PR
  QA
  CG
  RE
  RO
  RU
  RW
  BL
  SH
  KN
  LC
  MF
  PM
  VC
  WS
  SM
  ST
  SA
  SN
  RS
  CS
  SC
  SL
  SG
  SX
  SK
  SI
  SB
  SO
  ZA
  GS
  KR
  SS
  ES
  LK
  SD
  SR
  SJ
  SZ
  SE
  CH
  SY
  TW
  TJ
  TZ
  TH
  TG
  TK
  TO
  TT
  TN
  TR
  TM
  TC
  TV
  VI
  UG
  UA
  AE
  GB
  US
  UM
  UY
  UZ
  VU
  VA
  VE
  VN
  WF
  EH
  YE
  ZM
  ZW
}

directive @expandable on FIELD_DEFINITION

enum Check {
  pass
  fail
  unavailable
  unchecked
}

enum AvailablePayoutMethods {
  standard
  instant
}

enum Brand {
  AmericanExpress
  DinersClub
  Discover
  JCB
  MasterCard
  UnionPay
  Visa
  Unknown
}

enum Funding {
  credit
  debit
  prepaid
  unknown
}

enum TokenizationMethod {
  apple_pay
  google_pay
}

"""The status of the code verification, either pending (awaiting verification, attempts_remaining should be greater than 0), succeeded (successful verification) or failed (failed verification, cannot be verified anymore as attempts_remaining should be 0)."""
enum CodeVerificationStatus {
  PENDING
  SUCCEEDED
  FAILED
}

"""Type of refund attribute method."""
enum RefundAttributesMethod {
  email
  manual
  none
}

"""Type of refund attribute status."""
enum RefundAttributesStatus {
  MISSING
  REQUESTED
  AVAILABLE
}

"""The failure reason for the redirect."""
enum FailureReason {
  USER_ABORT
  DECLINED
  PROCESSING_ERROR
}

"""The status of the redirect."""
enum RedirectStatus {
  PENDING
  SUCCEEDED
  NOT_REQUIRED
  FAILED
}

enum Duration {
  FOREVER
  ONCE
  REPEATING
}
`