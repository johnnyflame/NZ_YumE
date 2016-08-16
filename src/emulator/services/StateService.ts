import {IStateService} from "../models/serviceModels/IStateService";
import {IPage} from "../models/dataModels/IPage";
import {IApp} from "../models/dataModels/IApp";
import {IElement} from "../models/dataModels/IElement";


export class StateService implements IStateService {
    _app: IApp;

    /**
     * [constructor description]
     * @method constructor
     * @param  {IApp}      app [description]
     * @return {[type]}        [description]
     */
    constructor(app: IApp) {
        this._app = app;
    }

    getStartPageName(): string {
        return this._app.startPageName;
    }

    getCurrentPageName(): string {
        return this._app.currentPageName;
    }

    setCurrentPageName(name: string) {
        this._app.currentPageName = name;
    }

    getCurrentPage(): IPage {
        let targetName: string = this._app.currentPageName;
        let returnPage: IPage;
        for (let page of this._app.pages) {
            if (page.name === targetName) {
                returnPage = page;
                break;
            }
        }
        return returnPage;
    }

    getPage(name: string): IPage {
        let returnPage: IPage;
        for (let page of this._app.pages) {
            if (page.name === name) {
                returnPage = page;
                break;
            }
        }
        return returnPage;
    }

    getPages(): Array<IPage> {
        return this._app.pages;
    }

<<<<<<< HEAD
    emulatorCentralCallBack(element: IElement, targetElementInfo?: string)  {
        //console.log("i am here");
        if (targetElementInfo){
            this._app.CentralCallbackFunc(element.name, targetElementInfo);
=======
    emulatorCentralCallBack(element: IElement, targetElementInfo?: string) {
        let currentPageName:string = this.getStartPageName();
        if (targetElementInfo) {
            this._app.CentralCallbackFunc(currentPageName, element.name, targetElementInfo);
>>>>>>> master
        } else {
            this._app.CentralCallbackFunc(currentPageName, element.name);
        }
    }

    getAppCallBack(): (pageName: string, elementID?: string) => void {
        return this._app.CentralCallbackFunc;
    }
}
