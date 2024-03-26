This is a practice repository of TypeScript..

INSTALLING TYPESCRIPT LOCALLY-

Step-1 Installing it globally
npm install -g typescript

Step-2 Make a directory
mkdir node-app
cd node-app

Step-3 Initializing a new Node.js project with default settings
npm init -y

Step-4 Initialize TS (It will initialize a TypeScript project by generating a tsconfig.json file)
npx tsc --init

Step-4 Building Project
tsc -b

***--------------Change tsconfig as per your needs. Usually changing rootDir and outDir is a good idea-------------***
{
	"rootDir": "./src",
	"outDir": "./dist"
}