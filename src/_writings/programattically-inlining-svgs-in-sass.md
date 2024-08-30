---
layout: writing
title: "Programattically Encoding SVGs for Inlining in SCSS"
summary: Sometimes you just need to inline a SVG in your stylesheets. Why? There could be any number of reasons. One could be that you want to be able to use it as a background icon in a select element. Another could be that you're using it as a decorative, non-informative icon in a button. I don't judge, as long as you're not using a SVG that should have alternative text for the user.
date: 2024-08-30 11:07:50 -0400
categories: programming, software development
---

Sometimes you just need to inline a SVG in your stylesheets. Why? There could be any number of reasons. One could be that you want to be able to use it as a background icon in a select element. Another could be that you're using it as a decorative, non-informative icon in a button. I don't judge, as long as you're not using a SVG that should have alternative text for the user.

So how do we inline SVGs in CSS? The first thing we need to do is <a href="https://www.urlencoder.io/learn/" rel="noopener noreferrer" target="blank">urlencode</a> and optimize the svg. We urlencode because we're going to be referring to the SVG as a <a href="https://developer.mozilla.org/en-US/docs/Web/URI/Schemes/data" rel="noopener noreferrer" target="blank">data URI</a> in CSS. We optimize to ensure that we're using the most efficient version of the SVG possible, which will help our page speed. Optimization collapses unnecessary white spaces, encoding ensures that any special characters like `<`, `>`, `#`, `&`, and other non ASCII characters aren't going to cause problems by swapping them out for safer , and ensures that we're using the correct quote style (single, not double).

## Why in the world would I want to do this?

Cross-browser compatibility is the main reason. I know, it's not 2015 anymore, but encoding your svgs is still the safest way to ensure that they will work in every browser when you're using them in stylesheets.

## How do I do this in SCSS?

In case of <abbr title="too long, didn't read">TL;DR</abbr>, all of the code here, from the basics to the extra credit, is up in <a href="https://codepen.io/tinabellvance/pen/ExBeyEr" rel="noopener noreferrer" target="blank">CodePen</a> form.

### Ready yourself

You should start with the most optimized SVG code you can. This means going to a tool like <a href="https://jakearchibald.github.io/svgomg/" rel="noopener noreferrer" target="blank">SVGOMG</a>, pasting and optimizing your code (or opening the SVG), and copying it back. It's extra steps, but it is worth it.

### Are there any entities with us today?

The first thing you do is create your list of entities to encode.

```scss
$entities-list: (
  ('"', "'"),
  ("%", "%25"),
  ("}", "%7D"),
  ("{", "%7B"),
  ("<", "%3C"),
  (">", "%3E"),
  ("#", "%23"),
  ("&", "%26")
);
```

There is a specific order to this. I transform double quotes to single quotes first, and then encode any percent symbols next. Percent symbols are among the first encoded because you want to do them _before_ you start encoding anything else. Otherwise, you're encoding any percent symbols used in encoding other entities and that becomes a whole mess.

After that, we do curly braces, angle brackets, hash symbols, and ampersands. This provides a list of entities that will be encoded for our function to loop through.

### Search and replace

Next we write the function that's going to look for the designated entity and replace it with a safe encoding:

```scss
// Replace `$search` with `$replace` in `$string`
//
// @param {String} $string - Initial string
// @param {String} $search - Substring to replace
// @param {String} $replace ('') - New value
// @return {String} - Updated string
@function str-replace($string, $search, $replace: "") {
  $index: str-index($string, $search);

  @if $index {
    @return str-slice($string, 1, $index - 1) + $replace +
      str-replace(
        str-slice($string, $index + str-length($search)),
        $search,
        $replace
      );
  }

  @return $string;
}
```

This searches through your entire svg string for a single character (the entities that we have listed in our object from earlier) and replaces that character with its safe counterpart.

### Encode

Now we have the part that goes through everything. This loops through every item in `$entity-list` and calls the search and replace function on our svg string. It then returns the cleaned up string to use in our CSS/SCSS.

```scss
// Encode SVG
//
// @param {String} $svg
// @return {String}
@function svg-encode($svg) {
  @each $char, $entity in $entity-list {
    $svg: str-replace($svg, $char, $entity);
  }
  @return "data:image/svg+xml," + $svg;
}
```

### Enjoy

Here's how you'd use this in a stylesheet:

```scss
// I generally store my svg in a variable for readability purposes.

$squirrel-icon-svg: '<svg version="1.1" width="128" height="128" viewBox="0 0 16 16" class="octicon octicon-squirrel" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#4433ee"><path fill-rule="evenodd" d="M3.499.75a.75.75 0 011.5 0v.996C5.9 2.903 6.793 3.65 7.662 4.376l.24.202c-.036-.694.055-1.422.426-2.163C9.1.873 10.794-.045 12.622.26 14.408.558 16 1.94 16 4.25c0 1.278-.954 2.575-2.44 2.734l.146.508.065.22c.203.701.412 1.455.476 2.226.142 1.707-.4 3.03-1.487 3.898C11.714 14.671 10.27 15 8.75 15h-6a.75.75 0 010-1.5h1.376a4.489 4.489 0 01-.563-1.191 3.833 3.833 0 01-.05-2.063 4.636 4.636 0 01-2.025-.293.75.75 0 11.525-1.406c1.357.507 2.376-.006 2.698-.318l.009-.01a.748.748 0 011.06 0 .75.75 0 01-.012 1.074c-.912.92-.992 1.835-.768 2.586.221.74.745 1.337 1.196 1.621H8.75c1.343 0 2.398-.296 3.074-.836.635-.507 1.036-1.31.928-2.602-.05-.603-.216-1.224-.422-1.93l-.064-.221c-.12-.407-.246-.84-.353-1.29a2.404 2.404 0 01-.507-.441 3.063 3.063 0 01-.633-1.248.75.75 0 011.455-.364c.046.185.144.436.31.627.146.168.353.305.712.305.738 0 1.25-.615 1.25-1.25 0-1.47-.95-2.315-2.123-2.51-1.172-.196-2.227.387-2.706 1.345-.46.92-.27 1.774.019 3.062l.042.19a.753.753 0 01.01.05c.348.443.666.949.94 1.553a.75.75 0 11-1.365.62c-.553-1.217-1.32-1.94-2.3-2.768a85.08 85.08 0 00-.317-.265c-.814-.68-1.75-1.462-2.692-2.619a3.74 3.74 0 00-1.023.88c-.406.495-.663 1.036-.722 1.508.116.122.306.21.591.239.388.038.797-.06 1.032-.19a.75.75 0 01.728 1.31c-.515.287-1.23.439-1.906.373-.682-.067-1.473-.38-1.879-1.193L.75 5.677V5.5c0-.984.48-1.94 1.077-2.664.46-.559 1.05-1.055 1.673-1.353V.75z"/></svg>';

.decorative-icon {
  background-color: transparent;
  background-image: url(svg-encode($squirrel-icon-svg));
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 2em 2em;
  border: 1px solid #ee5544;
  display: block;
  height: 3em;
  width: 3em;
}
```

## Bonus points: reusable functions and colors!

If encoding SVGs isn't enough, we can make common SVGs reusable by turning them into a function themselves! We can also add a function to add a color, so that we can specify colors whenever we call our reusable function.

### First, color:

This requires getting your hands a little dirty. In order to have nice things, we have to do a little work. In this case, that means that we need to go through our SVG code and replace the color with a variable.

#### Here's an example of how to format your SVG:

```scss
$icon: '<svg version="1.1" width="128" height="128" viewBox="0 0 16 16" class="octicon octicon-squirrel" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="' + $color + '"><path fill-rule="evenodd" d="M3.499.75a.75.75 0 011.5 0v.996C5.9 2.903 6.793 3.65 7.662 4.376l.24.202c-.036-.694.055-1.422.426-2.163C9.1.873 10.794-.045 12.622.26 14.408.558 16 1.94 16 4.25c0 1.278-.954 2.575-2.44 2.734l.146.508.065.22c.203.701.412 1.455.476 2.226.142 1.707-.4 3.03-1.487 3.898C11.714 14.671 10.27 15 8.75 15h-6a.75.75 0 010-1.5h1.376a4.489 4.489 0 01-.563-1.191 3.833 3.833 0 01-.05-2.063 4.636 4.636 0 01-2.025-.293.75.75 0 11.525-1.406c1.357.507 2.376-.006 2.698-.318l.009-.01a.748.748 0 011.06 0 .75.75 0 01-.012 1.074c-.912.92-.992 1.835-.768 2.586.221.74.745 1.337 1.196 1.621H8.75c1.343 0 2.398-.296 3.074-.836.635-.507 1.036-1.31.928-2.602-.05-.603-.216-1.224-.422-1.93l-.064-.221c-.12-.407-.246-.84-.353-1.29a2.404 2.404 0 01-.507-.441 3.063 3.063 0 01-.633-1.248.75.75 0 011.455-.364c.046.185.144.436.31.627.146.168.353.305.712.305.738 0 1.25-.615 1.25-1.25 0-1.47-.95-2.315-2.123-2.51-1.172-.196-2.227.387-2.706 1.345-.46.92-.27 1.774.019 3.062l.042.19a.753.753 0 01.01.05c.348.443.666.949.94 1.553a.75.75 0 11-1.365.62c-.553-1.217-1.32-1.94-2.3-2.768a85.08 85.08 0 00-.317-.265c-.814-.68-1.75-1.462-2.692-2.619a3.74 3.74 0 00-1.023.88c-.406.495-.663 1.036-.722 1.508.116.122.306.21.591.239.388.038.797-.06 1.032-.19a.75.75 0 01.728 1.31c-.515.287-1.23.439-1.906.373-.682-.067-1.473-.38-1.879-1.193L.75 5.677V5.5c0-.984.48-1.94 1.077-2.664.46-.559 1.05-1.055 1.673-1.353V.75z"/></svg>';
```

#### And here's the function to switch the color out:

**NOTE: This method works best with single-color SVGs. You will have to do some extra work to get this working for multiple colors**

```scss
// Set icon color or default black option
//
// @param {String, Boolean} $icon-color - Color value or false
// @return {String} - Updated string
@function sort-color($icon-color) {
  $system-black: #000000;

  @if $icon-color {
    @return $icon-color;
  } @else {
    @return $system-black;
  }
}
```

#### And here's a function that pulls it all together:

```scss
@function squirrel-icon($icon-color: false) {
  $color: sort-color($icon-color);
  $icon: '<svg version="1.1" width="128" height="128" viewBox="0 0 16 16" class="octicon octicon-squirrel" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="' + $color + '"><path fill-rule="evenodd" d="M3.499.75a.75.75 0 011.5 0v.996C5.9 2.903 6.793 3.65 7.662 4.376l.24.202c-.036-.694.055-1.422.426-2.163C9.1.873 10.794-.045 12.622.26 14.408.558 16 1.94 16 4.25c0 1.278-.954 2.575-2.44 2.734l.146.508.065.22c.203.701.412 1.455.476 2.226.142 1.707-.4 3.03-1.487 3.898C11.714 14.671 10.27 15 8.75 15h-6a.75.75 0 010-1.5h1.376a4.489 4.489 0 01-.563-1.191 3.833 3.833 0 01-.05-2.063 4.636 4.636 0 01-2.025-.293.75.75 0 11.525-1.406c1.357.507 2.376-.006 2.698-.318l.009-.01a.748.748 0 011.06 0 .75.75 0 01-.012 1.074c-.912.92-.992 1.835-.768 2.586.221.74.745 1.337 1.196 1.621H8.75c1.343 0 2.398-.296 3.074-.836.635-.507 1.036-1.31.928-2.602-.05-.603-.216-1.224-.422-1.93l-.064-.221c-.12-.407-.246-.84-.353-1.29a2.404 2.404 0 01-.507-.441 3.063 3.063 0 01-.633-1.248.75.75 0 011.455-.364c.046.185.144.436.31.627.146.168.353.305.712.305.738 0 1.25-.615 1.25-1.25 0-1.47-.95-2.315-2.123-2.51-1.172-.196-2.227.387-2.706 1.345-.46.92-.27 1.774.019 3.062l.042.19a.753.753 0 01.01.05c.348.443.666.949.94 1.553a.75.75 0 11-1.365.62c-.553-1.217-1.32-1.94-2.3-2.768a85.08 85.08 0 00-.317-.265c-.814-.68-1.75-1.462-2.692-2.619a3.74 3.74 0 00-1.023.88c-.406.495-.663 1.036-.722 1.508.116.122.306.21.591.239.388.038.797-.06 1.032-.19a.75.75 0 01.728 1.31c-.515.287-1.23.439-1.906.373-.682-.067-1.473-.38-1.879-1.193L.75 5.677V5.5c0-.984.48-1.94 1.077-2.664.46-.559 1.05-1.055 1.673-1.353V.75z"/></svg>';

  @return svg-encode($icon);
}
```

Using this in your styles, you would write:

```scss
.decorative-icon {
  background-color: transparent;
    background-image: url(squirrel-icon(#EE5544));
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 2em 2em;
    border: 1px solid #4433ee;
    display: block;
    height: 3em;
    margin-top: 2em;
    width: 3em;
}
```
