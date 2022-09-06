import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {
    test('should ', () => {
        const nombre = "Laura"

        const message = getSaludo(nombre);
        expect(message).toBe(`Hola Laura`);

    })
})