module.exports.renderPage = function() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Car</title>
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
<main>
  <form action="/add-car" method="post">
  <p>Make: </p>
    <input type="text" name="make" />
  <p>Model: </p>
    <input type="text" name="model" />
  <p>Year: </p>
    <input type="number" name="year" />
  <p>Color: </p>
    <input type="text" name="color" />
    <button>Add car</button>
  </form>
</main>
</body>
</html>`;
};
