"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./src/app");
const PORT = 3001;
app_1.server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
