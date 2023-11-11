import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: 'https://cloud.appwrite.io/v1',
  projectId: '654d0a59850898febebe',
  databaseId: '654e49b3af52dea94f29',
  storageId: '654e4969082404dc7c40',
  userCollectionId: '654e4ae1e85358358e0a',
  postCollectionId: '654e4a25687531cb3c02',
  savesCollectionId: '654e4c6da0d9c26679bd'
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
