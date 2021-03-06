"use strict";
var ActionService = (function () {
    /**
     * Constructs the services provided to the application
     * @method constructor
     * @param  {ISystemService} systemService - retrieves required information
     * @return {[type]}                       - returns service of page request
     */
    function ActionService(systemService) {
        this._systemService = systemService;
    }
    ActionService.prototype.goPage = function (name) {
        this._systemService.goPage(name);
    };
    ActionService.prototype.showNotification = function (words) {
        this._systemService.showNotification(words);
    };
    ActionService.prototype.saveToLocalStorage = function (key, value) {
        localStorage.setItem(key, value);
    };
    ActionService.prototype.getFromLocalStorage = function (key) {
        return localStorage.getItem(key);
    };
    ActionService.prototype.reRenderPage = function (page) {
        this._systemService.renderAllPages(page);
    };
    ActionService.prototype.callYelpSearchAPI = function (keywords, callback) {
        var auth = {
            consumerKey: "sNul62e6H0We5KJLGYP_Bw",
            consumerSecret: "RxvIBp4BxRvNVxjaPlUWuiPFcYg",
            accessToken: "nguVll4te_e1oDcv2EkS4xKC6GOoQhcN",
            accessTokenSecret: "DrumlhFl5Kwb1ksCpRKEtiW6B58",
            serviceProvider: {
                signatureMethod: "HMAC-SHA1"
            }
        };
        var terms = keywords;
        var near = 'Dunedin';
        var category = 'restaurants,food,bars';
        var accessor = {
            consumerSecret: auth.consumerSecret,
            tokenSecret: auth.accessTokenSecret
        };
        var parameters = [];
        parameters.push(['term', terms]);
        parameters.push(['location', near]);
        parameters.push(['category_filter', category]);
        parameters.push(['callback', 'cb']);
        parameters.push(['oauth_consumer_key', auth.consumerKey]);
        parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
        parameters.push(['oauth_token', auth.accessToken]);
        parameters.push(['oauth_signature_method', 'HMAC-SHA1']);
        var message = {
            'action': 'https://api.yelp.com/v2/search',
            'method': 'GET',
            'parameters': parameters
        };
        OAuth.setTimestampAndNonce(message);
        OAuth.SignatureMethod.sign(message, accessor);
        var parameterMap = OAuth.getParameterMap(message.parameters);
        $.ajax({
            'url': message.action,
            'data': parameterMap,
            'dataType': 'jsonp',
            'jsonpCallback': 'cb',
            'cache': true
        })
            .done(function (data, textStatus, jqXHR) {
            callback(data.businesses[0]);
        })
            .fail(function (jqXHR, textStatus, errorThrown) {
            console.log('error[' + errorThrown + '], status[' + textStatus
                + '], jqXHR[' + JSON.stringify(jqXHR) + ']');
        });
    };
    return ActionService;
}());
exports.ActionService = ActionService;
//# sourceMappingURL=ActionService.js.map