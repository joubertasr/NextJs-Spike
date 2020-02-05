import Drinks from '../../../../services/drinks';

export default async (req, res) => {
    const {pageNumber} = req.query;
    const drinksRes = await Drinks.getDrinksFromAPI({pageNumber, pageSize: null, searchTerm: null});
    res.status(200).json(drinksRes);
}