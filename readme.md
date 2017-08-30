# Spritesheeter

A gulp-based tool to assemble all your sprites into a single spritesheet that can be referenced by xlink hrefs and styled with CSS.

## Creating a spritesheet

1. Run `npm install`
2. Run `npm start drag` (this creates an input folder and opens it for drag/drop)
3. Throw your svgs into the input folder
4. run `npm start` to create your spritesheet!
5. Create CSS selectors and implement in your HTML or JSX (examples below)

## CSS Example Selectors
```css
/* Icon global attributes */

.icon {
	overflow: hidden;
}


/* Icon sized proportionally with text */

.icon__inline {
	fill: currentColor;
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
}


/* Icon sizing */

.icon__medium {
	width: 30px;
	height: 30px;
}
.icon__large {
	width: 40px;
	height: 40px;
}


/* Icon coloring */

.icon__coral-light {
	fill: #EE6157;
}
.icon__black {
	fill: #000000;
}
```

## Implementation in HTML
```html
<svg class="icon icon__medium icon__coral-light">
  <title>Cool Icon</title>
  <use xlink:href="your/images/directory/spritesheet.svg#original_filename"></use>
</svg>
```

## Implementation in JSX (React v14+)
```html
<svg className="icon icon__large icon__black">
  <title>Cool Icon</title>
  <use xlinkHref="your/images/directory/spritesheet.svg#original_filename"></use>
</svg>
```

6. Enjoy your new spritesheet!

Once uploaded/relocated, run `gulp clean-output` and/or `gulp clean-input` to remove working files respectively.
