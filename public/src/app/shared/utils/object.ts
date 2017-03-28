interface Object {
    watch: () => {};
};

export class Watcher {

    public static addWatcher(object: any, property: string, handler: any) {
        if (!object.watch) {
            try {
                let val = object[property];
                let getter = () => {
                    return val;
                };
                let setter = (value) => {
                    val = value;
                    handler.call(value);
                };

                Object.defineProperty(object, 'watch', {
                    enumerable: false,
                    configurable: true,
                    writable: false,
                    value: val
                });

                this._defineAccessors(object, property, getter, handler);
            } catch (error) {
                console.error('Unable to define property!');
            }
        }
    }

    public static removeWatcher(object: any, property: string) {
        delete object.watch;
    }

    private static _defineAccessors(object: any, property: string, getter: any, setter: any) {
        try {
            Object.defineProperty(object, property, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            });
        } catch (error) {
            console.error('Unable to define accessors!');
        }
    };
}
