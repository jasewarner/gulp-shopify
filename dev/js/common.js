document.addEventListener('DOMContentLoaded', () => {

    /**
     * Fixes vh unit in touch devices
     *
     * @since   1.0
     */
    const setupVh = () => {

        const setVh = () => {

            // get the viewport height and we multiple it by 1% to get a value for a vh unit
            let vh = window.innerHeight * 0.01;

            // set the value in the --vh custom property to the root of the document
            document.documentElement.style.setProperty(`--vh`, `${vh}px`);

        }

        setVh();
        window.addEventListener(`resize`, setVh, false);

    }

    /**
     * Chocks away!
     */
    setupVh();

});
