"use strict";
var application_1 = require("../../application/application");
var StateService_1 = require("../services/StateService");
var TemplatingService_1 = require("../services/TemplatingService");
var SystemService_1 = require("../services/SystemService");
var ActionService_1 = require("../services/ActionService");
var emulator = (function () {
    /**
     * Constructs all information needed for the application
     * @method constructor
     */
    function emulator() {
        this._app = new application_1.application();
        this._stateService = new StateService_1.StateService(this._app);
        this._templatingService = new TemplatingService_1.TemplatingService(this._stateService);
        this._systemService = new SystemService_1.SystemService(this._templatingService, this._stateService);
        this._actionService = new ActionService_1.ActionService(this._systemService);
        this._app.injectActionService(this._actionService);
        this._app.startAddingPages();
    }
    /**
     * Starts the emulator to allow the application to be executed
     * @method startEmulator
     */
    emulator.prototype.startEmulator = function () {
        this._systemService.startEmulator();
    };
    return emulator;
}());
exports.emulator = emulator;
var es = new emulator();
es.startEmulator();
//# sourceMappingURL=emulator.js.map