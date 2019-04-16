import mongoose from 'mongoose';
import moment from 'moment';

const Schema = mongoose.Schema;

/**
 * Product mongoose schema.
 */
export default mongoose.model('client', new Schema({
    name: String,
    lastName: String,
    nit: String,
    nitName: String,
    address: String,
    phone: Boolean,
    createdDate: { type: String, default: moment().format()}
}));