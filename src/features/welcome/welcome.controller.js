export default class WelcomeController {
    constructor($sanitize, $routeParams, upperCase) {
        this.msg = `Welcome ${upperCase($sanitize($routeParams['name']))}`
    }
}
