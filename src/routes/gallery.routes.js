import { Router } from express;
import { addGalleryItem, getGalleryItems, deleteGalleryItem } from "../controllers/gallery.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import {verifyJWT} from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/gallery/:eventId").post(
    verifyJWT,
    upload.single("image"),
    addGalleryItem
)

router.route("/gallery/:eventId").get(getGalleryItems)

router.route("/gallery/:galleryId")
.delete(
    verifyJWT,
    deleteGalleryItem
)

export default router;


