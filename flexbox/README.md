# Flexbox


## Resources:books:
Read or watch:
* [A Complete Guide to Flexbox | CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Flexbox Froggy - A game for learning CSS flexbox](https://flexboxfroggy.com/)
* [Flexbox Defense](http://www.flexboxdefense.com/)
* [Flexbox Cheatsheet](https://yoksel.github.io/flex-cheatsheet/)
* [CSS Flexible Box Layout - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
* [afonsopacifer/awesome-flexbox: A curated list of CSS Flexible Box Layout Module or only Flexbox.](https://github.com/afonsopacifer/awesome-flexbox)
* [Build with Flexbox](https://flexbox.buildwithreact.com/)
* [Flexplorer](https://bennettfeely.com/flexplorer/)
* [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/#flex)
* [FLEX: A simple visual cheatsheet for flexbox](https://flexbox.malven.co/)

---
## Learning Objectives:bulb:
At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), **without the help of Google**:

### General
- What is Flexbox?
- How to convert float positioning to a flex display
- How to horizontally and vertically align elements using Flexbox
- The difference between the main and cross axes
- Properties that work on flex elements vs flex container
- Shorthands for flex
- How to create a new page with flex in mind

---

## Requirements
### General
- Allowed editors: `vi`, `vim`, `emacs`
A `README.md` at the root of the project directory is mandatory
All of your code will be executed on Ubuntu 18.04 using Python 3.7.x
All of your files should end with a new line

---

## Files
### Required images for your HTML files
Download the images linked in the [CSS Advanced](https://intranet.hbtn.io/projects/2063) and place them into an images directory at the root of the project.

### HTML starter file
<details>
<summary>

```
Code in summary
```

</summary>

```
Code in details
```

</details>

---
## Tasks

### [0. Always debugging!](./0-debug_log.scss)
Write a Sass file that prints `Hello world` in the debug output.
```sh
guillaume@ubuntu:~/$ sass 0-debug_log.scss | head -n 0
0-debug_log.scss:2 DEBUG: Hello world
guillaume@ubuntu:~/$
```


### [1. Color variable](./1-color_variable.scss)
Write a Sass file that assigns the text color `#3D3D3D` to the HTML tags `body` and `p`.

    - You must use a Sass variable
```sh
guillaume@ubuntu:~/$ sass 1-color_variable.scss | tail -n +2
body {
  color: #3D3D3D; }

p {
  color: #3D3D3D; }
guillaume@ubuntu:~/$
```



### [2. Colors](./2-color_variables.scss)
Write a Sass file that assigns:

- The text color `#3D3D3D` to the HTML tags `body` and `p`
- The background color `#6D6D6D` to the HTML tags `body` and `h2`
- You must use 2 Sass variables
```sh
guillaume@ubuntu:~/$ sass 2-color_variables.scss | tail -n +2
body {
  color: #3D3D3D;
  background-color: #6D6D6D; }

p {
  color: #3D3D3D; }

h2 {
  background-color: #6D6D6D; }
guillaume@ubuntu:~/$
```


### [3. Nested tag](./3-nested_tag.scss)
Write a Sass file that assigns:

- No margin or padding in `body` tags
- Margin `10px` to all of the `p` tags inside `body` tags
- You must use nested declarations
```sh
guillaume@ubuntu:~/$ sass 3-nested_tag.scss | tail -n +2
body {
  margin: 0px;
  padding: 0px; }
  body p {
    margin: 10px; }
guillaume@ubuntu:~/$
```


### [4. Nested class](./4-nested_class.scss)
Write a Sass file that assigns:

- Text color `#3D3D3D` to elements inside `body` tags
- Text color `#FF0000` to any elements of class `.red` inside `body` tags
- You must use nested declarations
```sh
guillaume@ubuntu:~/$ sass 4-nested_class.scss | tail -n +2
body {
  color: #3D3D3D; }
  body .red {
    color: #FF0000; }
guillaume@ubuntu:~/$
```


### [5. Nested child](./5-nested_child.scss)
Write a Sass file that assigns:

- Text color `#3D3D3D` to elements inside `body` tags
- Text color `#FF0000` to any elements of class `.red` that are the first children of the `body`
- You must use nested declarations
```sh
guillaume@ubuntu:~/$ sass 5-nested_child.scss | tail -n +2
body {
  color: #3D3D3D; }
  body > .red {
    color: #FF0000; }
guillaume@ubuntu:~/$
```


### [6. Nested hover](./6-nested_hover.scss)
Write a Sass file that assigns:

- Text color `#FF0000` to `button` tags
- When the user hovers over `button` tags, text color should change to `#00FF00`
- You must use nested declarations
```sh
guillaume@ubuntu:~/$ sass 6-nested_hover.scss | tail -n +2
button {
  color: #FF0000; }
  button:hover {
    color: #00FF00; }
guillaume@ubuntu:~/$
```


### [7. Nested and nested again](./7-nested_deeper.scss)
Write a Sass file that assigns:

- Font size `14px` to all `body` tags
- Font size `16px` to all `h1` tags inside `body` tags
- Font size `12px` to `h1` tags of class `.smaller` inside `body` tags
- You must use nested declarations
```sh
guillaume@ubuntu:~/$ sass 7-nested_deeper.scss | tail -n +2
body {
  font-size: 14px; }
  body h1 {
    font-size: 16px; }
    body h1.smaller {
      font-size: 12px; }
guillaume@ubuntu:~/$
```


### [8. Margin mixin](./8-mixin_margins.scss)
Write a Sass file that assigns:

- Margin left and right at `10px` to `body` tags
- Margin left and right at `15px` to `div` tags
- You must use a mixin
```sh
guillaume@ubuntu:~/$ sass 8-mixin_margins.scss | tail -n +2
body {
  margin-left: 10px;
  margin-right: 10px; }

div {
  margin-left: 15px;
  margin-right: 15px; }
guillaume@ubuntu:~/$
```


### [9. Extended](./9-extend_list.scss)
Write a Sass file that assigns:

- Font size `12px` to all tags of class .`info`
- Text color `#00FF00` to all tags of class `.success` and extend style of the class `.info`
- Text color `#FF0000` to all tags of class `.warning` and extend style of the class `.info`
```sh
guillaume@ubuntu:~/$ sass 9-extend_list.scss | tail -n +2
.info, .success, .warning {
  font-size: 12px; }

.success {
  color: #00FF00; }

.warning {
  color: #FF0000; }
guillaume@ubuntu:~/$
```


### [10. Import colors](./10-import_colors.scss)
Write a Sass file that assigns:

- Text color `$red` from `10-colors.scss` to the class `.red`
- Text color `$green` from `10-colors.scss` to the class `.green`
- Text color `$blue` from `10-colors.scss` to the class `.blue`
- You must use `@import`
```sh
guillaume@ubuntu:~/$ cat 10-colors.scss
/* All my colors */
$red: #FF0000;
$green: #00FF00;
$blue: #0000FF;
guillaume@ubuntu:~/$ sass 10-import_colors.scss | tail -n +3
.red {
  color: #FF0000; }

.green {
  color: #00FF00; }

.blue {
  color: #0000FF; }
guillaume@ubuntu:~/$
```


### [11. For each](./11-loop_photos.scss)
Write a Sass file that creates a class for each name in the list `$list-names` and assigns the background image based on the name (example below):

- You must use `@import`
- You must use `@each` statement
```sh
guillaume@ubuntu:~/$ cat 11-photos.scss
/* All names */
$list-names: julien john sam damian;
guillaume@ubuntu:~/$ sass 11-loop_photos.scss | tail -n +3
.photo-julien {
  background: image-url("photos/julien.jpg") no-repeat; }

.photo-john {
  background: image-url("photos/john.jpg") no-repeat; }

.photo-sam {
  background: image-url("photos/sam.jpg") no-repeat; }

.photo-damian {
  background: image-url("photos/damian.jpg") no-repeat; }
guillaume@ubuntu:~/$
```


### [12. Loop Headers](./12-loop_header.scss)
Write a Sass file that creates `H*` tags, where ‘*’ is the size of the font used.

- `h1` must have font size equal to `1px`, `h2` must have font size equal to `2px`, etc.
- You must create `H*` tags from 1 to 5
- You must use `@for` statement
```sh
guillaume@ubuntu:~/$ sass 12-loop_header.scss | tail -n +2
h1 {
  font-size: 1px; }

h2 {
  font-size: 2px; }

h3 {
  font-size: 3px; }

h4 {
  font-size: 4px; }

h5 {
  font-size: 5px; }
guillaume@ubuntu:~/$
```




---

## Author
- **Foster Clark** - [fozc](https://github.com/FosterClark48) :octocat:
