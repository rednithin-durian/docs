const themeOptions = require('gatsby-theme-apollo-docs/theme-options');

module.exports = {
  pathPrefix: "/docs/api",
  siteMetadata: {
    title: `Durianpay API Docs`,
    siteUrl: `https://durianpay.id/docs/api`,
    description: `Durianpay Documentation | Payment solutions built for Indonesia`,
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        ...themeOptions,
        access_key: process.env.ACCESS_KEY,
        order_url: process.env.ORDER_BASE_URL,
        environment: process.env.ENVIRONMENT,
        durian_script: process.env.DURIANPAY_SCRIPT,
        root: __dirname, // root is mandatory
        ffWidgetId: '',
        baseUrl: 'https://durianpay.id/docs/api',
        twitterHandle: 'durianpay',
        youtubeUrl: '',
        logoLink: 'https://durianpay.id/docs/api',
        baseDir: 'docs/api',
        contentDir: 'source',
        siteName: 'Durianpay API Docs',
        pageTitle: 'Durianpay API Documentation',
        menuTitle: 'Durianpay Platform',
        description: "An example of how to set up Apollo's documentation theme",
        sidebarCategories: {
          // null is used to render top-level (no category) pages
          null: [
            'index', 
            'authentication',
            'security',
            'sandbox',
            '[Webhooks and Callbacks](https://durianpay.id/docs/afterpayments/webhooks/)'
          ],
          'Orders': [
            'orders/overview',
            'orders/create',
            'orders/fetch',
            'orders/fetch-one',
            'orders/create-link',
          ],
          'Payments': [
            'payments/overview',
            'payments/fetch',
            'payments/fetch-one',
            'payments/charge',
            'payments/status',
            'payments/verify',
            'payments/cancel',
            'payments/mdr-calculations',
          ],
          'Promos': [
            'promos/create',
            'promos/fetch',
            'promos/fetch-one',
            'promos/delete',
            'promos/update',
          ],
          'Disbursements': [
            'disbursements/fetch-banks',
            'disbursements/topup',
            'disbursements/topup-detail',
            'disbursements/balance',
            'disbursements/submit',
            'disbursements/approve',
            'disbursements/fetch-items',
            'disbursements/fetch-one',
            'disbursements/delete',
            'disbursements/validate',
          ],
          'Settlements': [
            'settlements/settlements-fetch-list',
            'settlements/settlements-fetch-details',
            'settlements/settlements-fetch-by-payment-id',
            'settlements/settlements-fetch-by-id',
          ],
          'Refunds': [
            'refunds/create',
            'refunds/fetch',
            'refunds/fetch-one'
          ],
          'Subscriptions': [
            'subscriptions/create-subscription-link',
            'subscriptions/fetch',
            'subscriptions/fetch-one',
            'subscriptions/cancel',
          ],
          'E-Wallet Account': [
            'ewallet/link',
            'ewallet/unlink',
            'ewallet/details'
          ],
          'Customers API': [
            'customers/customers-api'
          ],
          'Static VA API (deprecated)': [
            'static-virtual-account/overview',
            'static-virtual-account/create',
            'static-virtual-account/fetch',
            'static-virtual-account/fetch-one',
            'static-virtual-account/patch-one',
            'static-virtual-account/simulate',
          ],
          'Virtual Accounts API (beta)': [
            'virtual-accounts/overview',
            'virtual-accounts/webhooks',
            'virtual-accounts/create',
            'virtual-accounts/fetch',
            'virtual-accounts/fetch-one',
            'virtual-accounts/patch-one',
            'virtual-accounts/simulate',
          ]
        },
        footerNavConfig: {
          Website: {
            href: 'https://durianpay.id/',
            target: '_blank',
            rel: 'noopener noreferrer'
          },
          Blog: {
            href: 'https://blog.durianpay.id/',
            target: '_blank',
            rel: 'noopener noreferrer'
          },
        },
        navConfig: {
          'Durian Checkout': {
            category: 'Accept Money',
            url: '/docs/orders/overview',
            description:
              'Learn about fastest way to accept money seamlessly using modern pre-built checkout',
          },
          'Custom Checkout': {
            category: 'Accept Money',
            shortName: 'API Integration',
            url: '/docs/custom/overview',
            description:
              "Manage the entirety of your checkout flow and seamlessly integrate with Durianpay for all payment methods"
          },
          'iOS Native SDK': {
            category: 'Mobile SDKs',
            shortName: 'iOS',
            url: '/docs/mobile/ios-native',
            description:
              "Use Durianpay iOS SDK to get started with online payments in your iOS app"
          },
          'Android Native SDK': {
            category: 'Mobile SDKs',
            shortName: 'Android',
            url: '/docs/mobile/android-native',
            description:
              "Use Durianpay Android native SDK to get started with online payments in your android app"
          },
          'Server SDKs': {
            category: 'Backend',
            url: '/docs/server/overview',
            description:
              'Multiple ways to get started with Durianpay APIs on your server/backend'
          },
          'Flutter SDK': {
            category: 'Mobile SDKs',
            url: '/docs/mobile/flutter',
            description: 'Flutter SDK to quickly get started with Durian Checkout'
          },
          'API Reference': {
            category: 'Tools',
            url: '/docs/api/',
            description:
              'Read through our API documentation and reference'
          }
        }
      }
    }
  ],
};
