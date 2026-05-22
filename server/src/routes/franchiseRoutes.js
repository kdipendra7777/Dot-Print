import express from "express";
import {
  applyFranchise,
  getAllFranchise,
  approveFranchise,
  rejectFranchise,
  deleteFranchise,
} from "../controllers/franchiseController.js";

const router = express.Router();

/* ================= CREATE ================= */
router.post("/apply", applyFranchise);

/* ================= READ ================= */
router.get("/all", getAllFranchise);

/* ================= UPDATE ================= */
router.put("/approve/:id", approveFranchise);
router.put("/reject/:id", rejectFranchise);

/* ================= DELETE ================= */
router.delete("/delete/:id", deleteFranchise);

export default router;