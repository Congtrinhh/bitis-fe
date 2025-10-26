# bitis-fe

Biti's like website with frontend technologies such as

-   HTML, CSS, Javscript
-   JQuery
-   Bootstrap
-   Responsive design

## Custom bootstrap style

For more details, read https://getbootstrap.com/docs/5.0/customize/sass/

### init npm

npm init -y

### instal bootstrap, sass latest version

npm install bootstrap@5.3.2 sass --save-dev

### configure

1. Add customized scss to /assets/scss/custom-bootstrap.scss
2. Configure package.json to compile and watch scss changes

```
"scripts": {
    "sass": "sass assets/scss/custom-bootstrap.scss assets/css/custom-bootstrap.css",
    "sass:watch": "sass --watch assets/scss/custom-bootstrap.scss assets/css/custom-bootstrap.css",
    "sass:build": "sass assets/scss/custom-bootstrap.scss assets/css/custom-bootstrap.css --style compressed"
},
```

### compile sass to css

npm run sass:watch
