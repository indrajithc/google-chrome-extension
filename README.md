### First Google Chrome Extension

contents copied from https://www.sitepoint.com/create-chrome-extension-10-minutes-flat/

#### What is a Chrome Extension?

Before we get started building our extension, it’s probably a good idea to have a basic understanding of what a Chrome extension is and how Chrome extensions work.

At a very basic level, a Chrome extension is just some HTML, CSS and JavaScript that allows you to add some functionality to Chrome through some of the JavaScript APIs Chrome exposes. An extension is basically just a web page that is hosted within Chrome and can access some additional APIs.

In this tutorial, I’m going to show you how to create a basic Chrome extension called a Browser Action extension. This kind of extension puts a button in the Chrome toolbar that will show an HTML page when clicked and optionally execute some JavaScript.

Chrome extensions can also be created to work only on certain pages through the use of Page Actions, they can run code in the background using Background Pages, and they can even modify an existing page loaded in the browser using Content Scripts. But for this tutorial we are going to keep things simple.
