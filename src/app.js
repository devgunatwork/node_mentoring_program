import express from 'express';
import Loaders from './loaders';
import Logger from './loaders/logger';
import config from './config';

const startServer = async () => {
    const app = express();

    process
        .on('uncaughtException', (error, origin) => {
            Logger.info(`Caught exception: ${error}, Exception origin: ${origin}`);
        });

    process.on('unhandledRejection', (reason, promise) => {
        Logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
    });

    await Loaders({ expressApp: app });

    app.listen(config.port, err => {
        if (err) {
            Logger.error(err);
            process.exit(1);
            return;
        }

        Logger.info(`
            ################################################
            🛡️  Server listening on port: ${config.port} 🛡️ 
            ################################################
        `);
    });
};

startServer();

