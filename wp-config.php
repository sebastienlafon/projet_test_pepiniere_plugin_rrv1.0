<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'rr_v2');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', 'utf8_general_ci');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '=Q-7 YdeV]k-I_Gpg9DDa6<w|#J2]t) -F-bjmj(o]2ereL8]IE3[V(K=}8:Vac-');
define('SECURE_AUTH_KEY',  'pl89uRfExPL)Si@{+3?Q.06+oyp&Y64[.-iZg^CR={E|.v62f#dcD5W+kn[o+,|L');
define('LOGGED_IN_KEY',    'LBxO:|Wp*Zy1E+=/sqT3E+[dyWMWgF,?M}t?u}1._#gj-|JiptabC4,xXO2oj$Ku');
define('NONCE_KEY',        'xNN3N%Zh6KH[,r|Xlx<RFL xe[[r8bKl.>rU&2cObXwC6{&mNb~KKkBUIi+#SPKn');
define('AUTH_SALT',        '{}6EMSDSML)*Ya?Co_!j3uYMlWx&2J!3<g9Hbfrs/rSCMZdg o<*lk{bZyxBp`Ib');
define('SECURE_AUTH_SALT', 'y^$v*YR,epd[r[$69~=LVhm+ZZ=eRmd]|U}wGDlybg}:o7r<lHLhZ~Z3G9dY|P(f');
define('LOGGED_IN_SALT',   '6tLHS=@q3n&Nmp|z_?JL&mD_*}[.dYR|,P7AKTY1lFb4A%dG^|l> :a.oGW4.<^V');
define('NONCE_SALT',       'R%oiAYgx{Mz}B!6-_c1Dr3|&G<G/#}k-dfj{,5c3N{zCMFGL!I}zOVz>$h=wg`KF');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
