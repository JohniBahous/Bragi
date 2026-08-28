import { getUploadUrl } from '../services/awsS3connect.js'

export async function getPresignedUrl(req, res) {
    const { folderName, fileName, fileType } = req.body
    const signedUrl = await getUploadUrl( folderName, fileName, fileType, 600);
    if(signedUrl) res.json({url:signedUrl});;
}