const app = require("express")();
const { routes } = require("./routes");

app.use(routes);

const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Server running on port ${port}...`));
