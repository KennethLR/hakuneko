<link rel="import" href="../connector.html">

<script>

    /**
     *
     */
    class AsmHentai extends Connector {

        /**
         *
         */
        constructor() {
            super();
            super.id         = 'asmhentai';
            super.label      = 'AsmHentai';
            this.tags        = [];
            this.url         = 'https://asmhentai.com';
        }

        _getMangaList( callback ) {
            callback( new Error( 'Please report this broken website on HakuNeko\'s GitHub project page.' ), undefined );
        }
        _getChapterList( manga, callback ) {
            callback( new Error( 'Please report this broken website on HakuNeko\'s GitHub project page.' ), undefined );
        }
        _getPageList( manga, chapter, callback ) {
            callback( new Error( 'Please report this broken website on HakuNeko\'s GitHub project page.' ), undefined );
        }
    }

</script>