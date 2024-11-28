class EventBus {
    events = new Map()
    
    constructor() {}

    registerEvent(event, listener) {
        if (!this.#isValidEvent(event) || !this.#isValidCallback(listener)) return;

        this.events.set(
            event, 
            {
                invoke: listener
            }
        ) 
    }

    fireEvent(event, interaction) {
        if (this.hasEvent(event)) {
            this.events.get(event).invoke(interaction)
            this.removeObserver(event)
        }
    }

    hasEvent(event) {
        return this.events.has(event) 
    }

    removeObserver(event) {
        return this.events.delete(event)
    }

    #isValidEvent(event) {
        return typeof event === "string" && event !== "" && event !== " "
    }

    #isValidCallback(listener) {
        return listener instanceof Function
    }
}

export const eventBus = new EventBus()
