export const config = {
    passport: {
        secret: process.env.JWT_SECRET,
        expiresIn: 10000,
    },
    env: {
        port: process.env.PORT,
        mongoDBUri: process.env.MONGOdb_URL,
        mongoHostName: process.env.ENV === 'prod' ? 'mongodbAtlas' : 'localhost',
    },
};
export const underscoreId = '_id';