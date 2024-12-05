import { formatJobList } from './';

describe('la fonction formatJobList', ()=>{
//test('Ajouter une virgule à item',()=> 
    it ('should add a comma to a word',()=> {
    const expectedState = 'item2,'
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
})

//test('Ne met pas de virgule ou pour le dernier élément',()=>
    it('Should not add a comma to the last elemnt of the list', ()=> {
    const expectedState= 'item3,'
    expect(formatJobList('item3', 3, 1)).toEqual(expectedState)
})
})