# rosemi.lk
Shopify / React built using [js-buy-sdk](https://github.com/Shopify/js-buy-sdk).This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Development 
### Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Yarn](https://yarnpkg.com/en/)

### Installation

* `git clone git@github.com:isaac-martin/rosemillk.git` this repository
* `cd rosemillk`
* `yarn install`

### Configuring API Access

Get information from shopify admin

```js
const config = new Config({
  storefrontAccessToken: 'your-storefront-access-token',
  domain: 'your-shop-name.myshopify.com',
});
```

### Running

Start a local server:

```
yarn start
```

* Visit your app at [http://localhost:3000](http://localhost:3000).

### Deployment 

Netlify will automatically when a PR is merged into master branch. 
