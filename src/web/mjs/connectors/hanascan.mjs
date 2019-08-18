<link rel="import" href="rawlh.html">

<script>

    /**
     * 
     */
    class HanaScan extends RawLH {

        /**
         *
         */
        constructor() {
            super();
            super.id         = 'hanascan';
            super.label      = 'HanaScan';
            this.tags        = [ 'manga', 'raw', 'japanese' ];
            this.url         = 'https://hanascan.com';
            this.requestOptions.headers.set( 'x-referer', this.url );

            this.queryChapters = 'div#tab-chapper div#list-chapters span.title a.chapter';
        }
    }

</script>