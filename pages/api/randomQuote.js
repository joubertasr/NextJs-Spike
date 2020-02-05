
const quotes = [
    {
        id: 1,
        quote: 'This is not a quote, it is an invoice'
    },
    {
        id: 2,
        quote: 'This is a quote, """"""""""""'
    },
    {
        id: 3,
        quote: 'Keep it random'
    },
    {
        id: 4,
        quote: 'A smile a day is a go away'
    },
    {
        id: 5,
        quote: 'Use nextJS on your next project'
    },
];

export default (req, res) => {
    console.log('randomQuote', {req});
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const t = setTimeout(()=>{
        res.status(200).json(quote);
    }, 2000);
  };