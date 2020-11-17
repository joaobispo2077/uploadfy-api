require('dotenv/config');
const multer = require('multer');
const MulterAzureStorage = require('multer-azure-storage');

function resolveFileName(file) {
    const fileName = `${Date.now()}-${file.originalname}`;
    return fileName;
}

const azureStorage = new MulterAzureStorage({
    azureStorageAccessKey: process.env.AZURE_STORAGE_ACCESS_KEY,
    azureStorageAccount: process.env.AZURE_STORAGE_ACCOUNT,
    containerName: process.env.AZURE_STORAGE_CONTAINER_NAME,
    containerSecurity: 'blob',
    fileName: resolveFileName,
});

const upload = multer({ storage: azureStorage });

module.exports = upload;