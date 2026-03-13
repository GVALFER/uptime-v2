import { Hono } from "hono";
import createMonitor from "./createMonitor.js";
import deleteMonitor from "./deleteMonitor.js";
import getMonitors from "./getMonitors.js";
import updateMonitors from "./updateMonitors.js";

const routes = new Hono();

routes.route("/monitors", getMonitors);
routes.route("/monitors", createMonitor);
routes.route("/monitors", updateMonitors);
routes.route("/monitors", deleteMonitor);

export default routes;
