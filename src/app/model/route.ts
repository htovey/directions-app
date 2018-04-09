export class Route {
    route: Route;

    public start: string;
    public end: string;
    public lat: number;
    public lng: number;
    public hide: boolean;
   
    constructor() {}
   
    toggle() {
        this.hide = !this.hide;
      }
}