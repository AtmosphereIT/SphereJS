/**
 * Sphere JS
 * ----------------------------------------
 * Sphere JS is a node.js framework for building
 * scalable, testable and maintainable backend
 * services.
 *
 * @author  Romano Schoonheim <romano@atmosphere.sh>
 * @website https://www.sphere.sh/
 */
import HttpServerInterface from './interfaces/http/server.http.interface';

/**
 * Sphere Application Class
 * ----------------------------------------
 *
 *
 */
export default class Sphere implements HttpServerInterface {
    constructor() {
        console.log('Sphere JS');
    }
}