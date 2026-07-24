import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import auditRoutes from "./routes/audit.routes";
import { requestId } from "./middleware/requestId";
import { errorHandler } from "./middleware/errorHandler";

import homeRoutes from "./routes/home.routes";
import healthRoutes from "./routes/health.routes";
import pinoHttp from "pino-http";
import { logger } from "./logger/logger";
import { limiter } from "./middleware/rateLimiter";

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(limiter);
app.use(homeRoutes);
app.use(healthRoutes);
app.use(auditRoutes);
app.use(requestId);
app.use(errorHandler);
app.use(
    pinoHttp({
        logger
    })
);


export default app;