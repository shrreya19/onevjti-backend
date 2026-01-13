import { Router } from "express";
import { createMember, listCommitteeMembers, removeMember } from "../controllers/member.controller.js";
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router()
router.use(verifyJWT) // aply login to all who plays with events

router.route("/").post(createMember)
router.route("/").get(listCommitteeMembers)
router.route("/:memberId").delete(removeMember)

export default router