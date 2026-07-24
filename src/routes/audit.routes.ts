import { Router } from "express";
import { auditController } from "../controllers/audit.controller";

const router = Router();

router.post("/audit", auditController);

export default router;