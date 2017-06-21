export default class WelcomeController {
    constructor($routeParams) {
        this.name = $routeParams['name'];
    }
}
