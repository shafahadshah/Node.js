const http = require('http');
const renderMenu = () => `
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/form">Form</a></li>
    </ul>
`;


const renderForm = () => `
    <form action="/user" method="GET">
        <label for="username">
            <input type="text" id="username" name="username" placeholder="Enter Username">
        </label>
        <label for="email">
            <input type="email" id="email" name="email" placeholder="Enter Email">
        </label>
        <button type="submit">Submit</button>
    </form>
`;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    switch (req.url) {
        case '/':
            res.write(renderMenu());
            res.end();
            break;
        case '/about':
            res.write(renderMenu());
            res.write('<h1>About Us</h1>');
            res.end();
            break;
        case '/contact':
            res.write(renderMenu());
            res.write('<h1>Contact Us</h1>');
            res.end();
            break;
        case '/form':
            res.write(renderMenu());
            res.write(renderForm());
            res.end();
            break;
        default:
            res.write('<h1>404 - Page Not Found</h1>');
            res.end();
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
