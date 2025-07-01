import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
import dotenv from "dotenv";
import { response } from "express";
dotenv.config();

cloudinary.config({ 
  cloud_name :"dookwgpum", 
  api_key: "468187816834461", 
  api_secret: "CbtfFOH_V_jwAfs41YkQMmjOiaQ"
});

const uploadOnCloudinary = async (localFilePath) => {
 
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        console.log("file is uploaded on cloudinary ");
         fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
     
         console.log(error);
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        
    }
}
const removeFromCloudinary = async(filePath)=>{
  try {
      if (!filePath){
        return null;
      
      }
      const urlArray = filePath.split('/');
      const image =  urlArray[urlArray.length -1];
      const imageName = image.split('.')[0];
      console.log("image name",imageName);

      const res = await cloudinary.uploader.destroy(imageName,{resource_type:'image'});
      console.log("image removed successfully");
      return response;
  } catch (error) {
    console.log(error);
  }
}



export {uploadOnCloudinary,removeFromCloudinary}