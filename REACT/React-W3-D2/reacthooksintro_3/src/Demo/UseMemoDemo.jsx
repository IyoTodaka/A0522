import React, { useState, useEffect, useMemo } from "react";

const UseMemoDemo = () => {
  const [forFun, setForFun] = useState(true);

  //bad example
  const [currentYear] = useState(2022);
  const [birthYear] = useState(1999);

  const getAge = useMemo(() => userAge(currentYear, birthYear), []);

  //good example
  const [pokemons, setPokemons] = useState([])
  const allPokemonNames = useMemo(() => extractAllNamesOf904Pokemons(pokemons.results || []), [pokemons])

  useEffect(() => {
    fetch('http://pokeapi.co/api/v2/pokemon')
        .then(resp => resp.json())
        .then(setPokemons)
  }, []) 


//   console.log("Parent rendering...")
  return (
    <>
      Age is {getAge}
      <br />
      <ul>
        {allPokemonNames.map((p, i) => <li key={i}>{p.name}</li>)}
      </ul>
      <button onClick={() => setForFun(!forFun)}>
        Toggle : {forFun ? "TRUE" : "FALSE"}
      </button>
    </>
  );
};

export default UseMemoDemo;

function userAge(currY, birthY) {
    console.log('userAge rendering...')
  return currY - birthY;
}

function extractAllNamesOf904Pokemons(pokemons){
    console.log('remapping pokemon names...')
    return pokemons.map(pokemon => {
        return { name: pokemon.name }
    })
}
