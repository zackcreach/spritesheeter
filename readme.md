# Spritesheeter

A gulp-based tool to assemble all your SVG sprites into a single spritesheet that can be referenced by xlink hrefs and styled with CSS.

## Creating a spritesheet

0. Clone repository by running `git clone https://github.com/zackcreach/spritesheeter.git`
1. CD into new spritesheeter directory
2. Run `npm install`
3. Run `npm run drag` (this creates an input folder and opens it for drag/drop)
4. Throw your svgs into the input folder
5. run `npm start` to create your spritesheet!
6. Create CSS selectors and implement in your HTML or JSX (examples below)

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

.icon__small {
	width: 20px;
	height: 20px;
}
.icon__medium {
	width: 30px;
	height: 30px;
}
.icon__large {
	width: 40px;
	height: 40px;
}

/* Icon coloring */

.icon__green {
	fill: #BADA55;
}
.icon__black {
	fill: #000000;
}
```

## Implementation in HTML
```html
<svg class="icon icon__inline icon__green">
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

Enjoy your new spritesheet!

Once uploaded/relocated, run `gulp clean-output` and/or `gulp clean-input` to remove working files respectively.
