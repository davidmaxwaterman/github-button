![GitHub issues](https://img.shields.io/github/issues/CICCIOSGAMINO/github-button)
[![npm version](https://badgen.net/npm/v/@cicciosgamino/github-button)](https://www.npmjs.com/package/@cicciosgamino/gihub-button)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/cicciosgamino/github-button)

# \<github-button\>

Simple github button that can be use only to link github, users, projects and other stuff. Active only on https://github.com domain. With the link attribute you can set the path into the github.com world you want link to. Best use case to link the open-source project is inserted to.
      
<p align="center">
  <a href="#examples">examples</a> •
  <a href="#usage">usage</a> •
  <a href="#api">api</a> •
  <a href="#accessibility">accessibility</a> •
  <a href="#todo">todo</a> •
</p>

# 🕹️ Examples

![Github Button](https://raw.githubusercontent.com/CICCIOSGAMINO/web.cicciosgamino.github.io/master/public/images/githubButton.gif)

```html
<style>
  color-scheme-button {
      width: 128px;
      height: 128px;

      --icon-color: #333;
      --background-color: red;
    }
</style>

<!-- Relative link -->
<github-button
  link="CICCIOSGAMINO/github-button.git">
</github-button>

<!-- Absolute link -->
<github-button
  link="https://github.com/CICCIOSGAMINO/github-button.git">
</github-button>

<!-- Open in new window (default is 'current') -->
<github-button
  link="CICCIOSGAMINO/github-button.git"
  target-window="new">
</github-button>
```


# 🚀 Usage

1. Install package
```bash
npm install --save @cicciosgamino/github-button
```

2. Import
```html
<!-- Import Js Module -->
<script type="module">
  // Importing this module registers <progress-ring> as an element that you
  // can use in this page.
  //
  // Note this import is a bare module specifier, so it must be converted
  // to a path using a server such as @web/dev-server.
  import '@cicciosgamino/github-button'
</script>
```

3. Place in your HTML
```html
<github-button
  link="https://github.com/CICCIOSGAMINO/github-button.git">
</github-button>
```

# 🐝 API

## 📒 Properties/Attributes

|  Attribute     |  Property    |  Type   |  Default     |  Description
| -------------- | ------------ | ------- | ------------ | --------------
|  link          | link         | String  |  `''`        | Github Absolute / Relative path to user / project
|  target-window | targetWindow | String  |  `'current'` | Open

## Methods
*None*

## Events
*None*

## 🧁 CSS Custom Properties

|       Name           | Default       | Description
| -------------------- | ------------- | --------------------
| `--icon-color`       | `#000`        | SVG fill attribute
| `--background-color` | `transparent` | Background color of element

## 💪 Accessibility
Acessibility is guaranted with the use of a button with the *title* and *aria-label* set on it. SVG icons inside the inner button are set *role=img*,*aria-hidden="true"*,*focusable="false"* .

## 🔧 TODO
- [ ] Better Documentation

## 🧑‍💻 Author
| [![@cicciosgamino](https://raw.githubusercontent.com/CICCIOSGAMINO/cicciosgamino.github.io/master/images/justme%40412x412_round.png)](https://www.linkedin.com/in/marco-canali-859b6a52/) 	|
|:------------------------------------------------------------------------------------------:	|
|                                    **@cicciosgamino**                                      	|

## Support
Reach out to me at one of the following places:

- [Github](https://github.com/CICCIOSGAMINO)
- [Twitter](https://twitter.com/cicciosgamino)

## Donate
Donate help and contibutions!

## License
[GNU General Public License v3.0](https://github.com/CICCIOSGAMINO/init/blob/master/LICENSE)

Made 🧑‍💻 by [@cicciosgamino](https://cicciosgamino.web.app)
