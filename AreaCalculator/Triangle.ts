class Triangle {
    private ajaxWrapper: IAjaxWrapper;
    private base: number;

    constructor(base: number, ajaxWrapper: IAjaxWrapper) {
        this.base = base;
        this.ajaxWrapper = ajaxWrapper;
    }

    calculateArea(): number {
        var height = this.ajaxWrapper.performAjaxCall();
        return (1/2) * this.base * height;
    }
}

interface IAjaxWrapper {
    performAjaxCall(): number;
}

class AjaxWrapper implements IAjaxWrapper {
    performAjaxCall(): number { throw new Error("Not implemented"); }
}