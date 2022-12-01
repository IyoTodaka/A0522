import { setSnacks } from '../actions/snackAction';
import { setDrinks } from '../actions/drinkAction';

const URL = 'https://jsonblob.com/api/1047595393160069120'

// async function fetchData(dispatch){
//     try{
//         const response = await fetch(URL)
//         const data = response.json()
//         dispatch(setSnacks(data.snacks))
//         dispatch(setDrinks(data.drinks))
//     }catch(err){
//         console.log(err);
//     }
// }
function fetchData(dispatch){
         fetch(URL)
            .then(response => response.json())
            .then(data => {
                dispatch(setSnacks(data.snacks))
                dispatch(setDrinks(data.drinks))
            })
            .catch(error => console.error(`Error fetching data: ${error}`))
}

export default fetchData