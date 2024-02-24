import conf from "../conf/conf";
import {Client,ID,Databases,Storage,Query} from "appwrite"

export class Service{
    client= new Client();
    databases;
    bucket;
constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl) // Your API Endpoint
    .setProject(conf.appwriteProjectId);
 
    this.databases=new Databases(this.client);
    this.bucket=new Storage(this.client);
}

async createPost({title,slug,content,featuredImage,status,userId})
{
    try {
        return await this.databases.createDocument(
            conf.appwriteDatabase_Id,
            conf.appwriteCollection_Id,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId,

            }
        )
        
    } catch (error) {
        console.log("Appwrite service::createPost::error",error);
        
    }
}
async updatePost(slug,{title,content,featuredImage,status})
{
    try {
        return await this.databases.updateDocument(
            conf.appwriteDatabase_Id,
            conf.appwriteCollection_Id,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                

            }
        )
        
    } catch (error) {
        console.log("Appwrite service::updatePost::error",error);
        
    }
}
async deletePost(slug)
{
    try {
           await this.databases.deleteDocument(
            conf.appwriteDatabase_Id,
            conf.appwriteCollection_Id,
            slug
        
        )
        return true
        
    } catch (error) {
        console.log("Appwrite service::deletePost::error",error);
        return false
    }
}
async getPost(slug)
{
    try {
           return await this.databases.getDocument(
            conf.appwriteDatabase_Id,
            conf.appwriteCollection_Id,
            slug
        
        )
        
        
    } catch (error) {
        console.log("Appwrite service::getPost::error",error);
        return false;
    }
}

async getPosts(queries=[Query.equal("status","active")]){
    try {
        return await this.databases.listDocuments(
         conf.appwriteDatabase_Id,
         conf.appwriteCollection_Id,
         queries,
     
     )
     
     
 } catch (error) {
     console.log("Appwrite service::getPosts::error",error);
     return false;
 }
}


// file upload services

async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwriteBucket_Id,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("Appwrite service::uploadFile::error",error);
        return false; 
    }
}
async deleteFile(fileId){
    try {
         await this.bucket.deleteFile(
            conf.appwriteBucket_Id,
            fileId
        )
        return true
    } catch (error) {
        console.log("Appwrite service::deleteFile::error",error);
        return false; 
    }
}
getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucket_Id,
        fileId
    )
}

}
const service=new Service();
export default service;