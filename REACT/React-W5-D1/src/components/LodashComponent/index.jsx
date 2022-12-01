import React from 'react'
import _ from 'lodash'

function LodashComponent() {

    const sampleArray = [0,1,2,3,4,5,6,7,8,9,10]
    const copyArray = []
    for(let i = 0; i<=10; i++){
        copyArray.push(sampleArray[i])
    }
    const withLodashArray = _.range(11)

    const dailyExpenses = [4,7,1,8,9,34,5]
    const weeklyExpenses1 = dailyExpenses.reduce(function(a,b){
      return a + b  
    })

    const weeklyExpenses2 = _.sum(dailyExpenses)

    const someArray = []
    const someObject = {}


  return (
    <>
        <h3>Lodash</h3>
        <p>with forloop: {copyArray}</p>
        <p>with lodash: {withLodashArray}</p>
        <hr/>
        <p>with js reduce: {weeklyExpenses1}</p>
        <p>witg lodash: {weeklyExpenses2}</p>
        <hr />
        {someArray.length > 0 ? "Not Empty": "Empty"}
        <br />
        {_.isEmpty(someArray) ? "Not Empty": "Empty"}
        <hr />
        {Object.keys(someObject).length > 0 ? "Not Empty": "Empty"}
        <br />
        {/* {_.isEmpty(someObject) ? "Not Empty": "Empty"} */}

    </>
  )
}

export default LodashComponent