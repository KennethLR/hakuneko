<link rel="import" href="./vrv.html">

<script>

    /**
     *
     */
    class VRVRoosterteeth extends VRV {

        /**
         *
         */
        constructor() {
            super();
            // Public members for usage in UI (mandatory)
            super.id            = 'vrv-roosterteeth';
            super.label         = 'VRV (Rooster Teeth)';
            this.tags           = [ 'webshow', 'animation', 'english' ];
            // Private members for internal usage only (convenience)
            this.subscriptionID = 'roosterteeth';
        }
    }

</script>