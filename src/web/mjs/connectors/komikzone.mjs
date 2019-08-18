<link rel="import" href="mangareadercms.html">

<script>

    /**
     * 
     */
    class KomikZone extends MangaReaderCMS {

        /**
         *
         */
        constructor() {
            super();
            super.id         = 'komikzone';
            super.label      = 'KomikZone';
            this.tags        = [ 'manga', 'indonesian' ];
            this.url         = 'https://www.komikgue.com';

            this.queryChapters = 'div.chapter-wrapper table td.chapter a';
            this.language = 'id';
        }
    }

</script>