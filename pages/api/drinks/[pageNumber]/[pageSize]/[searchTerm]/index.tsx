import Drinks from '../../../../../../services/drinks';

export default async (req, res) => {
    const {pageNumber, pageSize, searchTerm} = req.query;
    const drinksRes = await Drinks.getDrinksFromAPI({pageNumber, pageSize, searchTerm});
    console.log('   ?', {pageNumber, pageSize, searchTerm});
    console.log('   !', drinksRes);
    res.status(200).json(drinksRes);
}