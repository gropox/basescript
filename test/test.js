const global = require("../global");
global.initApp("app", "config.json5");

const log = global.getLogger("test");

log.info(global.CONFIG);

