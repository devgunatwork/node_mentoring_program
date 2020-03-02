import { Router } from 'express';
import auth from './routes/auth';
import group from './routes/group';
import user from './routes/user';

export default () => {
    const app = Router();

    auth(app);
    user(app);
    group(app);

    return app;
};
