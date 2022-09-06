import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas 08-imp-exp', () => {
    test('getHeroeById debe retornar un héroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });

    test('getHeroById debe retornar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    });

    test('Debe retornar un arreglo con los héroes de DC', () => {
        const heroes = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ];
        const dcHeroes = getHeroesByOwner('DC');
        expect(dcHeroes).toEqual(heroes);
    })

    test('Debe retornar un arreglo con los héroes de Marvel', () => {

        const marvelHeroes = getHeroesByOwner('Marvel');
        expect(marvelHeroes.length).toBe(2);
        expect(marvelHeroes).toEqual(marvelHeroes.filter(marvelHeroe => marvelHeroe.owner === 'Marvel'));
    })
});