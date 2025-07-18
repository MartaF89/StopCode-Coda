1. npm init
rispondi ad una serie di domande per creare package.json
2.{
  "name": "coda-node",
  "version": "1.0.0",
  "description": "esercizio node js",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
   "dependencies": {
    "@types/node": "^24.0.13",
    "body-parser": "^2.2.0",
    "express": "^5.1.0",
    "nodemon": "^3.1.10",
    "ts-node": "^10.9.2",
    "typescript": "^5.8.3",
    "uuid": "^11.1.0"
  },
  "devDependencies": {
    "@types/body-parser": "^1.19.6",
    "@types/express": "^5.0.3",
    "@types/uuid": "^10.0.0"
  }
}
copia questo codice nel package.json cambiando nome al "name"
fai NPM INSTALL

3. crea file tsconfig.json
{
    "ts-node": {
        "compilerOptions": {"module": "commonjs"}
    },
     "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "lib": ["ES2020"],
    "esModuleInterop": true
  }
}
copia questo coidce nel file

4. crea file ts di e lavora
5.per far partire l'applicazione
npx nodemon "nome file ts"