import mongoose from 'mongoose';
import moment from 'moment';

const Schema = mongoose.Schema;

/**
 * Product mongoose schema.
 */
export default mongoose.model('product', new Schema({
    productId: String,
    image: String,
    productName: String,
    price: String,
    description: String,
    isAvailable: Boolean,
    quantity: Number,
    createdDate: { type: String, default: moment().format()}
}));