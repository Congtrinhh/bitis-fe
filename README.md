# bitis-fe

Biti's like website with frontend technologies:

-   HTML, CSS, Javascript
-   Responsive design
-   JQuery
-   Bootstrap

## Customize Bootstrap styles

Follow the steps below to customize Bootstrap styles.  
For more details, read https://getbootstrap.com/docs/5.2/customize/sass/

### Initialize npm in our project

```
npm init -y
```

### Install Bootstrap, sass latest version

```
npm install bootstrap@5.3.2 sass --save-dev
```

### Add customized scss file

Add customized scss to /assets/scss/custom-bootstrap.scss. we will override sass variables to create different styles for our Bootstrap components, text utils, spacing utils..

### Configure package.json to compile and watch scss changes

```
"scripts": {
    "sass": "sass assets/scss/custom-bootstrap.scss assets/css/custom-bootstrap.css",
    "sass:watch": "sass --watch assets/scss/custom-bootstrap.scss assets/css/custom-bootstrap.css",
    "sass:build": "sass assets/scss/custom-bootstrap.scss assets/css/custom-bootstrap.css --style compressed"
},
```

Note:

-   `assets/scss/custom-bootstrap.scss` is the location of the scss file we created earlier.
-   `assets/css/custom-bootstrap.css` is the compiled css file we want to create.

### Compile sass to css

```
npm run sass:watch
```
