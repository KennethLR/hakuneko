<link rel="import" href="rawlh.html">

<script>

    /**
     *
     */
    class LHTranslation extends RawLH {

        /**
         *
         */
        constructor() {
            super();
            super.id         = 'lhtranslation';
            super.label      = 'LHTranslation';
            this.tags        = [ 'manga', 'high-quality', 'english', 'scanlation' ];
            this.url         = 'https://lhtranslation.net';
            this.requestOptions.headers.set( 'x-referer', this.url );

            this.queryChapters = 'div#tab-chapper div#list-chapters span.titleLink a.chapter';
            this.language = 'en';
        }
    }

</script>