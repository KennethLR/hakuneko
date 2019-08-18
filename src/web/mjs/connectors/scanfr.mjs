<link rel="import" href="mangareadercms.html">

<script>

    /**
     * 
     */
    class ScanFR extends MangaReaderCMS {

        /**
         *
         */
        constructor() {
            super();
            super.id         = 'scanfr';
            super.label      = 'Scan FR';
            this.tags        = [ 'manga', 'french' ];
            this.url         = 'https://www.scan-fr.io';

            this.queryChapters = 'ul.chapterszz li h5.chapter-title-rtlrr';
            this.language = 'fr';
        }
    }

</script>