import Drinks from '../../../../../services/drinks';

export default async (req, res) => {
    const {pageNumber, pageSize} = req.query;
    const drinksRes = await Drinks.getDrinksFromAPI({pageNumber, pageSize, searchTerm: null});
    console.log('   ?', {pageNumber, pageSize});
    console.log('   !', drinksRes);
    res.status(200).json(drinksRes);
}