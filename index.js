import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import ejs from 'ejs';

const app = express();
const PORT = 3000;
const link = 'http://api.quotable.io/quotes/random?limit=5'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',async (req, res) => {
    try {
        const response = await axios.get(link);
        const quoteJSON = response.data;

        res.render('index.ejs', { quote: quoteJSON});
    } catch (error) {
        res.status(500).send('Error fetching quotes');
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});