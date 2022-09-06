import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('Pruebas en 02-template-string', () => {
  test('should getUser', () => {
    const user = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    expect(getUser()).toEqual(user)
  })

  test('should getUsuarioActivo', () => {
    const name = "Anaru"
    const user = {
      uid: 'ABC567',
      username: 'Anaru'
    }
    expect(getUsuarioActivo(name)).toEqual(user)
  })
})