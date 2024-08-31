/*
What is the DOM?
When a web page is loaded in a browser, the browser creates a DOM tree that represents the HTML document. 
This tree-like structure is made up of nodes, where:

    * Each HTML element (like <div>, <p>, <a>, etc.) becomes an element node.
    * The text inside an element becomes a text node.
    * The entire document itself is represented as the document node (the root of the tree).

<!DOCTYPE html>
<html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Welcome to My Page</h1>
    <p>This is a paragraph.</p>
    <div>
      <p>Another paragraph inside a div.</p>
    </div>
  </body>
</html>
-------------------------------------   DOM Tree
Document
  └── html
      ├── head
      │   └── title
      │       └── "My Web Page"
      └── body
          ├── h1
          │   └── "Welcome to My Page"
          ├── p
          │   └── "This is a paragraph."
          └── div
              └── p
                  └── "Another paragraph inside a div."


Key Concepts in the DOM
Nodes and Node Types:

* Element Nodes: Represent HTML elements (like <html>, <body>, <div>, etc.).
* Text Nodes: Represent the text inside elements. Every piece of text in the HTML is a text node, and 
  they are always children of element nodes.
* Attribute Nodes: Represent the attributes of HTML elements (like class, id, etc.). However, in modern JavaScript,
 you usually access them directly from the element node.                  

*/