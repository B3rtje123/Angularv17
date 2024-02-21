import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class SignalsService{
    // this is a private writeable signal
    private counterSignal = signal(0);

    // this is the public read-only signal
    readonly counter = this.counterSignal.asReadonly();

    constructor() {
        // inject any dependencies here
    }

    // anyone needing to modify the signal need to do so in a controlled way
    incrementCounter() {
        this.counterSignal.update((counter) => counter + 1);
    }
}