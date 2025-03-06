### User Management System

1) Why EJS Was Chosen

- I chose EJS (Embedded JavaScript) as my templating engine for this project due to its simplicity and its ability to be easily integrated into Express.js. 
- The primary reasons for choosing EJS are:

    > Familiar Syntax: EJS employs plain JavaScript syntax, making it simple for developers who already know JavaScript to comprehend and develop with.

    > Ease of Integration: Since EJS is tailored for Express.js, it doesn't require a lot of configuration and works extremely well with Express controllers and routes.

    > Dynamic Rendering: EJS supports in-place embedding of JavaScript code in the template, and it is also optimized to easily render dynamic user data.

    > Support for Layouts & Partials: EJS supports partials and reusable components support, making it easy to maintain an organized and clean UI.

    > Performance: EJS is light and free of unnecessary complexity, leading to efficient server-side rendering.

2) Comparison with Handlebars

- Handlebars is another widely used templating engine, but there are some differences with EJS.

- EJS permits inline usage of JavaScript in templates, and hence is more flexible for handling intricate logic. Handlebars, on the other hand, requires a logic-less approach and leaves implementation of custom logic to helpers. This results in Handlebars being more ordered but occasionally constrictive in handling dynamic material.

- Both from syntax standpoint and from functionality, EJS prefers <%= %> for output and <% %> for logic so that JavaScript experts can easily understand it. Handlebars, on the other hand, relies on {{}} statements, resulting in improved readability but limiting outright execution of JavaScript within a template.

- Both motors support partials and layouts support for reusable components. EJS is better integrated with Express.js, with minimal setup needed. Handlebars natively supports layouts, so it's an acceptable choice for strict separation of presentation and logic.

- Performance-wise, EJS is faster because it doesn't include additional processing for logic-less templates. Handlebars, being slower, ensures maintainable templates with more data and UI rendering separation.

3) Conclusion

- EJS was chosen over Handlebars for its simplicity of use, flexibility, and simplicity of integration with Express.js. It supports dynamic content rendering with less configuration and readability and efficacy in template handling.