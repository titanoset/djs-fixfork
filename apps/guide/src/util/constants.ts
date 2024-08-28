export const BASE_URL = 'https://discord.js.org/docs/packages' as const;

export const BASE_URL_LEGACY = 'https://old.discordjs.dev/#/docs/discord.js' as const;

export const BASE_URL_DISCORD_API_TYPES = 'https://discord-api-types.dev' as const;

export const DESCRIPTION = 'Imagine a guide... that explores the many possibilities for your discord.js bot.';

export const GITHUB_BASE_PAGES_PATH = 'https://github.com/discordjs/discord.js/tree/main/apps/guide/src/pages';

export const PACKAGES = [
	'discord.js',
	'brokers',
	'builders',
	'collection',
	'core',
	'formatters',
	'next',
	'proxy',
	'rest',
	'util',
	'voice',
	'ws',
] as const;

/**
 * The stable version of discord.js.
 */
export const VERSION = '14.13.0' as const;

/**
 * The API version (for discord-api-types). This is prefixed with a "v".
 */
export const DISCORD_API_TYPES_VERSION = 'v10' as const;

/**
 * The voice API version (for discord-api-types). This is prefixed with a "v".
 */
export const DISCORD_API_TYPES_VOICE_VERSION = 'v4' as const;
