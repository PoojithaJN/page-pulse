import NodeCache from "node-cache";
import { config } from "../config/config";

export const cache = new NodeCache({
    stdTTL: config.cacheTTL
});