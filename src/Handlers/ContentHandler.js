// PubSub object to handle event subscriptions and notifications
export const PubSub = (function () {
    var events = {};

    function subscribe(eventName, callback) {
        if (!events[eventName]) {
            events[eventName] = [];
        }
        events[eventName].push(callback);
    }

    function publish(eventName, data) {
        if (events[eventName]) {
            events[eventName].forEach(function (callback) {
                callback(data);
            });
        }
    }

    return {
        subscribe: subscribe,
        publish: publish
    };
})();

// // Example usage:
// function subscriber1(data) {
//     console.log('Subscriber 1 received data:', data);
// }

// function subscriber2(data) {
//     console.log('Subscriber 2 received data:', data);
// }

// // Subscribe to an event
// PubSub.subscribe('exampleEvent', subscriber1);
// PubSub.subscribe('exampleEvent', subscriber2);

// // Publish an event
// PubSub.publish('exampleEvent', { message: 'Hello, subscribers!' });

// // Unsubscribe from an event
// // To unsubscribe, simply remove the subscription
// // Example: events['exampleEvent'] = [];
