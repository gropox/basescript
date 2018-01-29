const global = require("../global");
global.initApp("app");

const log = global.getLogger("test");

log.info(global.CONFIG);

