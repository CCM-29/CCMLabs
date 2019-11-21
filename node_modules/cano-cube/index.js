'use strict'

/**
 * @class Cube is an abstract class for adding any extra functionality to Cano
 * @classdesc A Cube class is like a sugar cube that you add to your coffee to give it more taste, all the Cubes
 * has a life cycle consisting of 3 steps, validate -> prepare -> startup
 * @author Antonio Mejias
 */
class Cube {
    /**
     * @constructs
     * @author Antonio Mejias
     */
    constructor(cano) {
        if (!cano) throw new Error('You must to provide an instance of Cano to create a new Cube');
        this.cano = cano;
    }

    /**
     * @method validate
     * @description sometimes is necesary validate things before initialize
     * a quark, for such things is this method, for example if the connection
     * of a database is necesary for the execution of this quark, in this
     * method the validation must be executed
     * @abstract
     * @return {Promise} true
     * @author Luis Hernandez
     */
    validate() {
        return Promise.resolve(true);
    }

    /**
     * @method prepare
     * @description sometimes you may need prepare some things in your cube class before you start it,
     * this method give you that functionality
     * @abstract
     * @return {Promise} true
     * @author Antonio Mejias
     */
    prepare() {
        return Promise.resolve(true);
    }

    /**
     * @method up
     * @description In this method is where you should put all your main logic for use the cube, because of that,
     * it always needs to be implemented, otherwise it will return a error.
     * @abstract
     * @return {Error} Error will be returned if this method is not implement by a child class
     * @author Antonio Mejias
     */
    up() {
        throw new Error('The up method always must be implemented');
    }

    /**
     * @method bindToApp
     * @description This method let you bind some object to the main core of the Cano app through the cube class
     * @author Antonio Mejias
     */
    bindToApp(base,name,value) {
        this.cano.app[base][name] = value;
    }

    bindToCano(middleware) {
        this.cano.use(middleware);
    }

}

module.exports = Cube;
