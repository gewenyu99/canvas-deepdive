---
title: Which? What? When?
description: How to choose between SVG, CSS, or DOM elements?
prev: true
---

So when should you use Canvas over SVG, CSS or DOM elements?

Well, **Canvas** is lower level than those others so you can have more control over the drawing and use less memory, but at the cost of having to write more code.

Use **SVG** when you have existing shapes that you want to render to the screen, like a map that came out of Adobe Illustrator.

Use **CSS** or **DOM animation** when you have large static areas that you wish to animate, or if you want to use 3D transforms.

For charts, graphs, dynamic diagrams, and of course video games, **Canvas** is a great choice. And later on we will discuss a few libraries to let you do the more vector / object oriented stuff using Canvas.

Before we go any further I want to clarify that when I'm talking about Canvas I mean the **2D API**. There is also a 3D API in the works called WebGL. I'm not going to cover that here because it is still being developed and the browser support is rather poor. Also, it's essentially OpenGL from JavaScript, making it lower level than Canvas and much harder to use. When WebGL becomes more mature we will revisit it in later chapters.
