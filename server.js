const app = require("./app");
const PORT = 3000 || process.env.PORT;
const globalErrorHandler = require("./Controllers/errorHandler");

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
