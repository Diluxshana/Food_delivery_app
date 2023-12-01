const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://juice_bar_app:Lachchu1999@cluster0.tw5keoa.mongodb.net/juice_bar_app';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURL, { useNewUrlParser: true });
        console.log('Connected to MongoDB');
        
        const FoodItem = mongoose.model('FoodItem', new mongoose.Schema({
            id: String,
            name: String,
            imageUrl: String
        }, { collection: 'food_items' }));
        
        const data = await FoodItem.find({}).exec();
        
        if (data.length === 0) {
            console.log('No documents found in the collection.');
        } else {
            console.log('Number of documents:', data.length);
            console.log('Fetched data:');
            data.forEach(item => {
                console.log(`ID: ${item.id}, Name: ${item.name}, Image URL: ${item.imageUrl}`);
            });
        }
    } catch (err) {
        console.error('Error fetching data from MongoDB:', err);
    }
};

module.exports = mongoDB;

