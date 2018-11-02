<?php

/**
 * Il file base di configurazione di WordPress.
 *
 * Questo file viene utilizzato, durante l’installazione, dallo script
 * di creazione di wp-config.php. Non è necessario utilizzarlo solo via
 * web, è anche possibile copiare questo file in «wp-config.php» e
 * riempire i valori corretti.
 *
 * Questo file definisce le seguenti configurazioni:
 *
 * * Impostazioni MySQL
 * * Prefisso Tabella
 * * Chiavi Segrete
 * * ABSPATH
 *
 * È possibile trovare ultetriori informazioni visitando la pagina del Codex:
 *
 * @link https://codex.wordpress.org/it:Modificare_wp-config.php
 *
 * È possibile ottenere le impostazioni per MySQL dal proprio fornitore di hosting.
 *
 * @package WordPress
 */

// ** Impostazioni MySQL - È possibile ottenere queste informazioni dal proprio fornitore di hosting ** //
if('tattoo.dev' == $_SERVER['HTTP_HOST']) {
    /** Il nome del database di WordPress */
    define('DB_NAME', 'upwork_tattoo');

    /** Nome utente del database MySQL */
    define('DB_USER', 'root');

    /** Password del database MySQL */
    define('DB_PASSWORD', 'tf300sk');
} else {
    /** Il nome del database di WordPress */
    define('DB_NAME', 'tattoola_sito');

    /** Nome utente del database MySQL */
    define('DB_USER', 'tattoola_lama');

    /** Password del database MySQL */
    define('DB_PASSWORD', 'PuL,.6oO#AhJ');
}

/** Hostname MySQL  */
define('DB_HOST', 'localhost');

/** Charset del Database da utilizzare nella creazione delle tabelle. */
define('DB_CHARSET', 'utf8mb4');

/** Il tipo di Collazione del Database. Da non modificare se non si ha idea di cosa sia. */
define('DB_COLLATE', '');

/**#@+
 * Chiavi Univoche di Autenticazione e di Salatura.
 *
 * Modificarle con frasi univoche differenti!
 * È possibile generare tali chiavi utilizzando {@link https://api.wordpress.org/secret-key/1.1/salt/ servizio di chiavi-segrete di WordPress.org}
 * È possibile cambiare queste chiavi in qualsiasi momento, per invalidare tuttii cookie esistenti. Ciò forzerà tutti gli utenti ad effettuare nuovamente il login.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '6e]:[-&9[mXaQ!<C=:ZK+/dIowS}9*.Zb? `,l=(l,|Mk (bUm+0}ugeM.{1oxIm');
define('SECURE_AUTH_KEY',  'M3#]oxgwgS)roC9 D%bA~%PGjs}s[pBT65>NbMl,788(K-odcLXvuz)mg!/@sF=J');
define('LOGGED_IN_KEY',    'Agn,fg.0o0@yuP/(Na[M,dxvjugDlD-gox&/$v4vQ&&gVy(0J9 Y.Sp{l@<Z!27y');
define('NONCE_KEY',        'E%PF)EYF?(!w|T3u~4lsbftm,i+Mg#nv8vipPc`H%>qp&J)-JE}WXvbGqUvxnf>M');
define('AUTH_SALT',        '~hBYdT Y$ L63[{|:^N0a2kVseeA:B+>p#*jv-B]pX_ZM$()Y)s_6jO#bUxr-`lT');
define('SECURE_AUTH_SALT', ')Uj,.9qVeVbb`0 A3*|]f{uN;=5^6G_V,o97byd/44Lz#lZEk_EoW=O$6O|@yi#k');
define('LOGGED_IN_SALT',   '9E=6U::SBYcq6+B42NV7-roC|nS;9cX}y%J_c,z<D&nvP7QLAk%>2o)*MIN~.)jH');
define('NONCE_SALT',       '$4/14|bryqK[g3U]=9jx3L}>E:G$_(HVk% &BC.d?Ov(7}z`,QsY+5 FRf{5okTL');

/**#@-*/

/**
 * Prefisso Tabella del Database WordPress.
 *
 * È possibile avere installazioni multiple su di un unico database
 * fornendo a ciascuna installazione un prefisso univoco.
 * Solo numeri, lettere e sottolineatura!
 */
define('WP_CACHE', true);
$table_prefix  = 'wp_';

/**
 * Per gli sviluppatori: modalità di debug di WordPress.
 *
 * Modificare questa voce a TRUE per abilitare la visualizzazione degli avvisi
 * durante lo sviluppo.
 * È fortemente raccomandato agli svilupaptori di temi e plugin di utilizare
 * WP_DEBUG all’interno dei loro ambienti di sviluppo.
 */
define('WP_DEBUG', false);

/* Finito, interrompere le modifiche! Buon blogging. */

/** Path assoluto alla directory di WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Imposta le variabili di WordPress ed include i file. */
require_once(ABSPATH . 'wp-settings.php');