module.exports = {
    packagerConfig: {
        packageManager: "npm"
    },
    makers: [{
            "name": "@electron-forge/maker-squirrel",
            "config": {
                "name": "gameplan"
            }
        },
        {
            "name": "@electron-forge/maker-zip",
            "platforms": [
                "darwin"
            ]
        },
        {
            "name": "@electron-forge/maker-deb",
            "config": {}
        },
        {
            "name": "@electron-forge/maker-rpm",
            "config": {}
        },
        {
            "name": "@electron-forge/maker-wix",
            "config": {
                "language": 1033,
                "manufacturer": "Jiang"
            }
        }
    ],
    hooks: {
        generateAssets: async () => {
            /* console.log('We should generate some assets here'); */
        },
        postPackage: async () => {
            /* console.log(`Postpackage`); */
        }
    }
}