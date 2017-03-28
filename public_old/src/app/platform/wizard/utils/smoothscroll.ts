/**
 * Function for smooth horizontal scroll_frame
 */
export function smoothScroll(element: Element, distance: number, duration: number): Promise<any> {
    distance = Math.round(distance);
    duration = Math.round(duration);
    if (duration < 0) {
        return Promise.reject("Bad Duration");
    }
    if (duration === 0) {
        return Promise.resolve();
    }

    let start_time = Date.now();
    let end_time = start_time + duration;

    let start_left = element.scrollLeft; 

    return new Promise(function(resolve, reject) {
        let previous_top = element.scrollLeft;

        let scroll_frame = function() {
            if(element.scrollLeft != previous_top) {
                resolve();
                return;
            }

            let now = Date.now();
            let point = smooth_step(start_time, end_time, now);
            let frameTop = Math.round(start_left + (distance * point));
            element.scrollLeft = frameTop;

            if(now >= end_time) {
                resolve();
                return;
            }

            if(element.scrollLeft === previous_top
                && element.scrollLeft !== frameTop) {
                resolve();
                return;
            }
            previous_top = element.scrollLeft;

            setTimeout(scroll_frame, 0);
        }

        setTimeout(scroll_frame, 0);
    });
}

function smooth_step(start: number, end: number, point: number) {
    if (point <= start) {
        return 0;
    }
    if (point >= end) {
        return 1;
    }
    let x = (point - start) / (end - start);
    return x*x*(3 - 2*x);
}