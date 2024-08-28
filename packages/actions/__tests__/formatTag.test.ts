import { describe, test, expect } from 'vitest';
import { formatTag } from '../src/index.js';

describe('Format Tag', () => {
	test('GIVEN tag with a prefix THEN format tag to not contain the prefix', () => {
		expect(formatTag('@discordjs/rest@0.4.0')).toEqual({
			isSubpackage: true,
			package: 'rest',
			semver: '0.4.0',
		});
		expect(formatTag('@discordjs/collection@0.6.0')).toEqual({
			isSubpackage: true,
			package: 'collection',
			semver: '0.6.0',
		});
		expect(formatTag('@discordjs/proxy@0.1.0')).toEqual({
			isSubpackage: true,
			package: 'proxy',
			semver: '0.1.0',
		});
		expect(formatTag('@discordjs/builders@0.13.0')).toEqual({
			isSubpackage: true,
			package: 'builders',
			semver: '0.13.0',
		});
		expect(formatTag('@discordjs/voice@0.9.0')).toEqual({
			isSubpackage: true,
			package: 'voice',
			semver: '0.9.0',
		});
	});

	test('GIVEN tag with no prefix THEN return tag', () => {
		expect(formatTag('13.5.1')).toEqual({
			isSubpackage: false,
			package: 'discord.js',
			semver: '13.5.1',
		});
		expect(formatTag('13.7.0')).toEqual({
			isSubpackage: false,
			package: 'discord.js',
			semver: '13.7.0',
		});
		expect(formatTag('create-discord-bot@1.0.0')).toEqual({
			isSubpackage: false,
			package: 'create-discord-bot',
			semver: '1.0.0',
		});
	});

	test('GIVEN no or invalid tag THEN return null', () => {
		expect(formatTag('')).toEqual(null);
		expect(formatTag('abc')).toEqual(null);
	});
});
