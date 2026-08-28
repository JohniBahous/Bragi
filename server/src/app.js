import express from 'express';
import helmet from 'helmet'
import cors from 'cors';
import cookieParser from "cookie-parser";
import artistRoutes from './routes/artists.routes.js';
import songRoutes from './routes/songs.routes.js';
import adminRoutes from './routes/admin.routes.js';
import uuidRoutes from './routes/uuid.routes.js';
import uploadRoutes from './routes/upload.routes.js';

const app = express();

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);


app.use(cors({
  origin: process.env.CLIENT_URL || 3000,
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE"],
}));


app.use(cookieParser());

app.use(express.json());

app.use('/artists', artistRoutes);
app.use('/songs', songRoutes);
app.use('/admin', adminRoutes);
app.use('/uuids', uuidRoutes);
app.use('/upload', uploadRoutes);


app.use((req, res, next) => {
  res.status(404).send('NOT QUITE WHAT YOU WERE LOOKING FOR')
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('PARDON OUR DUST')
})

app.disable('x-powered-by')

export default app;