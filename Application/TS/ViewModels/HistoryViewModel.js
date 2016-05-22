"use strict";
var Category_1 = require('../../../Emulator/TS/Services/Category');
/**
 * (description)
 *
 * @export
 * @class HistoryViewModel
 */
var HistoryViewModel = (function () {
    /**
     * Creates an instance of HistoryViewModel.
     *
     * @param {IStorageService} storageService (description)
     */
    function HistoryViewModel(storageService) {
        this._myStorage = storageService;
        if (this._myStorage.contain(Category_1.Category.History.toString())) {
        }
        this._list = this.getHistoryList();
    }
    /**
     * (description)
     *
     * @returns {IListItem[]} (description)
     */
    HistoryViewModel.prototype.getHistoryList = function () {
        return this._myStorage.get(Category_1.Category.History.toString());
    };
    return HistoryViewModel;
}());
exports.HistoryViewModel = HistoryViewModel;
