import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Gallery } from "../models/gallery.model.js";
import { Event } from "../models/event.model.js";

const addGalleryItem=asyncHandler(async(req, res)=>{
    
    const imgLocalPath=req.file?.path
    if(!imgLocalPath){
        throw new ApiError(400, "No image uploaded")  
    }

    const uploadedImage=await uploadOnCloudinary(imgLocalPath)
    if(!uploadedImage){
        throw new ApiError(500, "Failed to upload image") 
    }

    const event=req.params.eventId
    const { caption }= req.body

    if(!event){
        throw new ApiError(400, "Event ID is required")
    }
    if(!caption){
        throw new ApiError(400, "Caption is required")
    }

    const galleryImageUpload=await Gallery.create({
        event,
        image:uploadedImage.url,
        caption
    })

    return res.status(201).json(
        new ApiResponse(201, galleryImageUpload, "Images uploaded successfully.")
    )

})

const getGalleryItems=asyncHandler(async(req,res)=>{
    const { eventId } = req.params;

    if (!eventId) {
        throw new ApiError(400, "Event ID is required");
    }

    const galleryItems = await Gallery.find({ event: eventId })
        .sort({ createdAt: -1 });

    return res.status(200).json(
        new ApiResponse(200, galleryItems, "Gallery items fetched successfully")
    );
})

const deleteGalleryItem = asyncHandler(async (req, res) => {
    const { galleryId } = req.params;

    if (!galleryId) {
        throw new ApiError(400, "Gallery ID is required");
    }

    const galleryItem = await Gallery.findById(galleryId);
    if (!galleryItem) {
        throw new ApiError(404, "Gallery item not found");
    }

    await Gallery.findByIdAndDelete(galleryId);

    return res.status(200).json(
        new ApiResponse(200, null, "Gallery item deleted successfully")
    );
});


export {
    addGalleryItem,
    getGalleryItems,
    deleteGalleryItem
}