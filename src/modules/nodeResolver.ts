import { GraphQLResolveInfo } from 'graphql'

const NodeResolver = {
  __resolveType: ({ id }, info: GraphQLResolveInfo) => {
    if (id.length === 2 && CountrySpecs.includes(id)) return 'CountrySpec'
    const prefix = id.split('_')[0]
    switch (prefix) {
      case 'ca':
        return 'Application' // Connect Application ?????
      case 'acct':
        return 'Account'
      // case 'acc':
      //   return 'AccountLink'
      // case 'app':
      //   return 'ApplePayDomain'
      case 'fee':
        return 'ApplicationFee'
      // case 'bal':
      //   return 'Balance'
      case 'txn':
        return 'BalanceTransaction'
      case 'ba':
        return 'BankAccount'
      // case 'bit':
      //   return 'BitcoinReceiver'
      // case 'bit':
      //   return 'BitcoinTransaction'
      case 'btok':
        return 'BankAccountToken'
      case 'card':
        return 'Card'
      case 'ch':
        return 'Charge'
      case 'cs':
        return 'CheckoutSession'
      case 'ct':
        return 'AccountToken'
      // case 'cou':
      //   return 'Coupon'
      case 'cus':
        return 'Customer'
      // case 'dis':
      //   return 'Discount'
      case 'dp':
        return 'Dispute'
      // case 'eph':
      //   return 'EphemeralKey'
      case 'evt':
        return 'Event'
      // case 'exc':
      //   return 'ExchangeRate'

      case 'fee': // Application Fee Refound
        return 'ApplicationFee'
      case 'fr':
        return 'FeeRefund'
      case 'file':
        return 'File'
      case 'link':
        return 'FileLink'
      case 'in':
        return 'Invoice'
      case 'ii':
        return 'Invoiceitem'
      // case 'iss':
      //   return 'IssuerFraudRecord'
      case 'iauth':
        return 'IssuingAuthorization'
      case 'ic':
        return 'IssuingCard'
      // case 'iss':
      //   return 'IssuingCardDetails'
      // case 'iss':
      //   return 'IssuingCardPin'
      case 'ich':
        return 'IssuingCardholder'
      case 'idp':
        return 'IssuingDispute'
      // case 'iss':
      //   return 'IssuingSettlement'
      case 'ipi':
        return 'IssuingTransaction'
      // case 'iss':
      //   return 'IssuingVerification'
      // case 'lin':
      //   return 'LineItem'
      // case 'lis':
      //   return 'List'
      // case 'log':
      //   return 'LoginLink'
      case 'mbur':
        return 'UsageRecord'
      case 'or':
        return 'Order'
      // case 'ord':
      //   return 'OrderItem'
      case 'orret':
        return 'OrderReturn'
      case 'pi':
        return 'PaymentIntent'
      case 'pii':
        return 'PIIToken'
      // case 'pay':
      //   return 'PaymentMethod'
      case 'po':
        return 'Payout'
      case 'person':
        return 'Person'
      case 'plan':
        return 'Plan'
      case 'prod':
        return 'Product'
      case 'prv':
        return 'Review'
      case 'py':
        return '' //??????????????????????????????????????????????????????????????????
      case 'rsl':
        return 'RadarValueList'
      case 'rsli':
        return 'RadarValueListItem'
      // case 'rec':
      //   return 'Recipient'
      case 're':
        return 'Refund'
      // case 'rep':
      //   return 'ReportingReportRun'
      // case 'rep':
      //   return 'ReportingReportType'
      // case 'rev':
      //   return 'Review'
      case 'sqr':
        return 'ScheduledQueryRun'
      case 'sku':
        return 'Sku'
      case 'src':
        return 'Source'
      // case 'sou':
      //   return 'SourceMandateNotification'
      // case 'sou':
      //   return 'SourceTransaction'
      case 'sub':
        return 'Subscription'
      case 'si':
        return 'SubscriptionItem'
      case 'sis':
        return 'UsageRecordSummay'
      // case 'sub':
      //   return 'SubscriptionSchedule'
      // case 'sub':
      //   return 'SubscriptionScheduleRevision'
      // case 'ter':
      //   return 'TerminalConnectionToken'
      case 'loc':
        return 'TerminalLocation'
      case 'ds':
        return 'TerminalReader'
      // case 'thr':
      //   return 'ThreeDSecure'
      case 'tok':
        return 'Token'
      case 'tu':
        return 'Topup'
      case 'tr':
        return 'Transfer'
      case 'trr':
        return 'TransferReversal'
      // case 'usa':
      //   return 'UsageRecordSummary'
      case 'we':
        return 'WebhookEndpoint'
      default:
        return 'Coupon'
    }
  }
}

const CountrySpecs = [
  'AF',
  'AX',
  'AL',
  'DZ',
  'AS',
  'AD',
  'AO',
  'AI',
  'AQ',
  'AG',
  'AR',
  'AM',
  'AW',
  'AU',
  'AT',
  'AZ',
  'BS',
  'BH',
  'BD',
  'BB',
  'BY',
  'BE',
  'BZ',
  'BJ',
  'BM',
  'BT',
  'BO',
  'BQ',
  'BA',
  'BW',
  'BV',
  'BR',
  'IO',
  'VG',
  'BN',
  'BG',
  'BF',
  'BI',
  'KH',
  'CM',
  'CA',
  'CV',
  'KY',
  'CF',
  'TD',
  'CL',
  'CN',
  'CX',
  'CC',
  'CO',
  'KM',
  'CK',
  'CR',
  'HR',
  'CU',
  'CW',
  'CY',
  'CZ',
  'CD',
  'DK',
  'DJ',
  'DM',
  'DO',
  'TL',
  'EC',
  'EG',
  'SV',
  'GQ',
  'ER',
  'EE',
  'ET',
  'FK',
  'FO',
  'FJ',
  'FI',
  'FR',
  'GF',
  'PF',
  'TF',
  'GA',
  'GM',
  'GE',
  'DE',
  'GH',
  'GI',
  'GR',
  'GL',
  'GD',
  'GP',
  'GU',
  'GT',
  'GG',
  'GN',
  'GW',
  'GY',
  'HT',
  'HM',
  'HN',
  'HK',
  'HU',
  'IS',
  'IN',
  'ID',
  'IR',
  'IQ',
  'IE',
  'IM',
  'IL',
  'IT',
  'CI',
  'JM',
  'JP',
  'JE',
  'JO',
  'KZ',
  'KE',
  'KI',
  'XK',
  'KW',
  'KG',
  'LA',
  'LV',
  'LB',
  'LS',
  'LR',
  'LY',
  'LI',
  'LT',
  'LU',
  'MO',
  'MK',
  'MG',
  'MW',
  'MY',
  'MV',
  'ML',
  'MT',
  'MH',
  'MQ',
  'MR',
  'MU',
  'YT',
  'MX',
  'FM',
  'MD',
  'MC',
  'MN',
  'ME',
  'MS',
  'MA',
  'MZ',
  'MM',
  'NA',
  'NR',
  'NP',
  'NL',
  'AN',
  'NC',
  'NZ',
  'NI',
  'NE',
  'NG',
  'NU',
  'NF',
  'KP',
  'MP',
  'NO',
  'OM',
  'PK',
  'PW',
  'PS',
  'PA',
  'PG',
  'PY',
  'PE',
  'PH',
  'PN',
  'PL',
  'PT',
  'PR',
  'QA',
  'CG',
  'RE',
  'RO',
  'RU',
  'RW',
  'BL',
  'SH',
  'KN',
  'LC',
  'MF',
  'PM',
  'VC',
  'WS',
  'SM',
  'ST',
  'SA',
  'SN',
  'RS',
  'CS',
  'SC',
  'SL',
  'SG',
  'SX',
  'SK',
  'SI',
  'SB',
  'SO',
  'ZA',
  'GS',
  'KR',
  'SS',
  'ES',
  'LK',
  'SD',
  'SR',
  'SJ',
  'SZ',
  'SE',
  'CH',
  'SY',
  'TW',
  'TJ',
  'TZ',
  'TH',
  'TG',
  'TK',
  'TO',
  'TT',
  'TN',
  'TR',
  'TM',
  'TC',
  'TV',
  'VI',
  'UG',
  'UA',
  'AE',
  'GB',
  'US',
  'UM',
  'UY',
  'UZ',
  'VU',
  'VA',
  'VE',
  'VN',
  'WF',
  'EH',
  'YE',
  'ZM',
  'ZW'
]

export default NodeResolver
