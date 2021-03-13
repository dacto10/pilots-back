import mongoose from 'mongoose';

export const connection = await mongoose.connect('mongodb://localhost:27017/airport', {useNewUrlParser: true, useUnifiedTopology: true});