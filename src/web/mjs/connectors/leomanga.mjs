<link rel="import" href="mangareadercms.html">

<script>

    /**
     * 
     */
    class LeoManga extends MangaReaderCMS {

        /**
         *
         */
        constructor() {
            super();
            super.id         = 'leomanga';
            super.label      = 'LeoManga';
            this.tags        = [ 'manga', 'spanish' ];
            this.url         = 'https://leomanga.xyz';

            this.queryChapters = 'div.capitulos-list table tr td:first-of-type a';
        }
    }

</script>