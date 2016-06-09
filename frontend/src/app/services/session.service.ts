export class SessionService {
    get(name: string) {
        return (sessionStorage.getItem(name) == null) ? '' : sessionStorage.getItem(name);
    }
    
    delete(name: string) {
        if ( sessionStorage.getItem(name) != null ) {
            sessionStorage.removeItem(name);
        }
    }
    
    set(name: string, value: string) {
        sessionStorage.setItem(name, value);
    }
}