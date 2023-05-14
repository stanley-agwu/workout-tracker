'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const db_1 = __importDefault(require('./db/db'));
const routes_1 = __importDefault(require('./routes'));
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// routes
app.use('/api/workouts', routes_1.default);
// connect to database
(0, db_1.default)();
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
