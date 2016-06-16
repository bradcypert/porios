export class CookieService {
    get(name: string) {
        let ca: Array<string> = document.cookie.split(';');
        let caLen: number = ca.length;
        let cookieName = name + "=";
        let c: string;
        for (let i: number = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s\+/g, "").trim();
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return "";
    }
    
    delete(name: string) {
        this.set(name, "", -1)
    }
    
    set(name: string, value: string, expireDays: number, path: string = "") {
        let d: Date = new Date();
        let expires: string = "expires=" + d.toUTCString();

        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + value + "; " + expires + (path.length > 0 ? "; path=" + path : "");
    }
}