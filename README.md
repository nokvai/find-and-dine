# Find and Dine

> An easy way to find restaurants and dine nearby

# Requirements

- NodeJS v10.15.2 or newer
- npm v6.4.1 or newer

# Install all npm dependencies for development

- To install all development dependencies of existing project run `npm install` inside the root
  directory of the project.

# Root folders

```
.
├─── src    : source code
├─── server : Node server - handles api request and response
├─── test   : unit and e2e test scripts
└─── tools  : build scripts
```

# 'src' folder

```
.
├─── animation               : angular animation
├─── assets                  : assets
│   ├─── fonts                 : fonts
│   ├─── images                : images
│   └─── scssSprite            : scss that contains images encoded in base64, loaded with PreloadJS
│       └─── images              : images for scssSprite
├─── components              : angular components
├─── controllers             : angular controllers
├─── copy                    : app copy
├─── data                    : loader configuration
├─── directives              : angular directives
├─── mappers                 : api data mapping
├─── sass                    : global scss
│   ├─── global                : global styles shared across the whole app
│   └─── shared                : scss for defining shared scss variables and mixins
├─── services                : angular services
├─── utilities               : app utilities
└─── views                   : app entry views (loader, incompatible browser ...)
```

# NPM tasks

```
npm start                : start dev server and rebuild on file change
npm test                 : run unit tests
npm run start:server     : run api server
```

# Instructions

### Step 1 - Fork this repo

### Step 2 - Create an account on YELP

[Documentation](https://www.yelp.com/developers/documentation/v3/authentication)

### Step 3 - Create a .env file on the root

```
API_SERVER_URL=http://localhost:3200
YELP_API_URL=https://api.yelp.com/v3
YELP_API_KEY=Bearer sNB2jrpPhr4LlEPFJgmsN9vLtZvusxOcr9sBmNsE3e9Qfd5-Uq9gKY73LHpr15TlJPYZ750TPX5v3OnC85iU0NZA0reQqPWvcHKtuW-AFdMF4B4CqTl-E_u-9_nlXHYx
```

[Check API Key](https://www.yelp.com/developers/v3/manage_app)

### Step 4 - Follow the [TASKS.md](TASKS.md) on the root for more details
