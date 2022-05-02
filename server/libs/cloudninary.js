import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
  cloud_name: 'aldas-media',
  api_key: process.env.CLOUDLINARY_API_KEY,
  api_secret: process.env.CLOUDLINARY_API_SECRET
})

export const uploadIamge = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'posts'
  })
}

export const deleteImg = async id => {
  return await cloudinary.uploader.destroy(id)
}