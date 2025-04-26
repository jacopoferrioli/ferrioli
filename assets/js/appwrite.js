import { Client, Account, Databases, Storage } from 'appwrite';

// Configurazione Appwrite
const client = new Client();
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('680c9ede00072e23888c');

const account = new Account(client);
const databases = new Databases(client, 'ferriolieu_db');
const storage = new Storage(client);

// Amministratori
const ADMIN_EMAILS = [
    "jacopo@ferrioli.eu",
    "postmaster@ferrioli.eu",
    "amministrazione.generale@cas.ferrioli.eu"
];

export { client, account, databases, storage, ADMIN_EMAILS };
