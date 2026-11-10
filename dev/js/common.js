(() => {
    'use strict';

    /**
     * Some function
     */
    const someFunction = () => {
        // Do something
    };

    /**
     * Initialise
     */
    const init = () => {
        someFunction();
    };

    /**
     * Safe execution: handles defer, async and normal loading
     */
    if (document.readyState !== 'loading') {
        init();
    } else {
        document.addEventListener('DOMContentLoaded', init);
    }
})();
