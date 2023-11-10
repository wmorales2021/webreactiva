export class Clientes{
    endpoint = "https://65245f63ea560a22a4e9cca8.mockapi.io/alumnos";
    async consultar(){
        const response = await fetch(this.endpoint);
        const result = await response.json()
        return result;
    }
}