module.exports.renderPage = function() {
    const text = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
<header>
    <nav>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/add-car">add car</a>
            </li>
            <li>
                <a href="/car">Last added car</a>
            </li>
        </ul>
    </nav>
</header>
<main>Welcome to the "CAR" app "Home" page!</main>
</body>
</html>`
    return text;
};
