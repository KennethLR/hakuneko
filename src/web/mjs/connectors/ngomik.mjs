<link rel="import" href="wp-emanga.html">

<script>

    /**
     * 
     */
    class Ngomik extends WordPressEManga {

        /**
         *
         */
        constructor() {
            super();
            super.id         = 'ngomik';
            super.label      = 'Ngomik';
            this.tags        = [ 'manga', 'indonesian' ];
            this.url         = 'https://ngomik.in';
            this.path        = '/daftar-manga/?list';

            this.queryChapters = 'div.bxcl ul li div.lch a';
        }
    }

</script>