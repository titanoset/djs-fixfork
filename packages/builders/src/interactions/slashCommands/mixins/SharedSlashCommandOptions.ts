import { assertReturnOfBuilder, validateMaxOptionsLength } from '../Assertions.js';
import type { ToAPIApplicationCommandOptions } from '../SlashCommandBuilder';
import { SlashCommandAttachmentOption } from '../options/attachment.js';
import { SlashCommandBooleanOption } from '../options/boolean.js';
import { SlashCommandChannelOption } from '../options/channel.js';
import { SlashCommandIntegerOption } from '../options/integer.js';
import { SlashCommandMentionableOption } from '../options/mentionable.js';
import { SlashCommandNumberOption } from '../options/number.js';
import { SlashCommandRoleOption } from '../options/role.js';
import { SlashCommandStringOption } from '../options/string.js';
import { SlashCommandUserOption } from '../options/user.js';
import type { ApplicationCommandOptionBase } from './ApplicationCommandOptionBase.js';

/**
 * This mixin holds symbols that can be shared in slash command options.
 *
 * @typeParam TypeAfterAddingOptions - The type this class should return after adding an option.
 */
export class SharedSlashCommandOptions<
	TypeAfterAddingOptions extends SharedSlashCommandOptions<TypeAfterAddingOptions>,
> {
	public readonly options!: ToAPIApplicationCommandOptions[];

	/**
	 * Adds a boolean option.
	 *
	 * @param input - A function that returns an option builder or an already built builder
	 */
	public addBooleanOption(
		input: SlashCommandBooleanOption | ((builder: SlashCommandBooleanOption) => SlashCommandBooleanOption),
	) {
		return this._sharedAddOptionMethod(input, SlashCommandBooleanOption);
	}

	/**
	 * Adds a user option.
	 *
	 * @param input - A function that returns an option builder or an already built builder
	 */
	public addUserOption(input: SlashCommandUserOption | ((builder: SlashCommandUserOption) => SlashCommandUserOption)) {
		return this._sharedAddOptionMethod(input, SlashCommandUserOption);
	}

	/**
	 * Adds a channel option.
	 *
	 * @param input - A function that returns an option builder or an already built builder
	 */
	public addChannelOption(
		input: SlashCommandChannelOption | ((builder: SlashCommandChannelOption) => SlashCommandChannelOption),
	) {
		return this._sharedAddOptionMethod(input, SlashCommandChannelOption);
	}

	/**
	 * Adds a role option.
	 *
	 * @param input - A function that returns an option builder or an already built builder
	 */
	public addRoleOption(input: SlashCommandRoleOption | ((builder: SlashCommandRoleOption) => SlashCommandRoleOption)) {
		return this._sharedAddOptionMethod(input, SlashCommandRoleOption);
	}

	/**
	 * Adds an attachment option.
	 *
	 * @param input - A function that returns an option builder or an already built builder
	 */
	public addAttachmentOption(
		input: SlashCommandAttachmentOption | ((builder: SlashCommandAttachmentOption) => SlashCommandAttachmentOption),
	) {
		return this._sharedAddOptionMethod(input, SlashCommandAttachmentOption);
	}

	/**
	 * Adds a mentionable option.
	 *
	 * @param input - A function that returns an option builder or an already built builder
	 */
	public addMentionableOption(
		input: SlashCommandMentionableOption | ((builder: SlashCommandMentionableOption) => SlashCommandMentionableOption),
	) {
		return this._sharedAddOptionMethod(input, SlashCommandMentionableOption);
	}

	/**
	 * Adds a string option.
	 *
	 * @param input - A function that returns an option builder or an already built builder
	 */
	public addStringOption(
		input: SlashCommandStringOption | ((builder: SlashCommandStringOption) => SlashCommandStringOption),
	) {
		return this._sharedAddOptionMethod(input, SlashCommandStringOption);
	}

	/**
	 * Adds an integer option.
	 *
	 * @param input - A function that returns an option builder or an already built builder
	 */
	public addIntegerOption(
		input: SlashCommandIntegerOption | ((builder: SlashCommandIntegerOption) => SlashCommandIntegerOption),
	) {
		return this._sharedAddOptionMethod(input, SlashCommandIntegerOption);
	}

	/**
	 * Adds a number option.
	 *
	 * @param input - A function that returns an option builder or an already built builder
	 */
	public addNumberOption(
		input: SlashCommandNumberOption | ((builder: SlashCommandNumberOption) => SlashCommandNumberOption),
	) {
		return this._sharedAddOptionMethod(input, SlashCommandNumberOption);
	}

	/**
	 * Where the actual adding magic happens. ✨
	 *
	 * @param input - The input. What else?
	 * @param Instance - The instance of whatever is being added
	 * @internal
	 */
	private _sharedAddOptionMethod<OptionBuilder extends ApplicationCommandOptionBase>(
		input: OptionBuilder | ((builder: OptionBuilder) => OptionBuilder),
		Instance: new () => OptionBuilder,
	): TypeAfterAddingOptions {
		const { options } = this;

		// First, assert options conditions - we cannot have more than 25 options
		validateMaxOptionsLength(options);

		// Get the final result
		const result = typeof input === 'function' ? input(new Instance()) : input;

		assertReturnOfBuilder(result, Instance);

		// Push it
		options.push(result);

		return this as unknown as TypeAfterAddingOptions;
	}
}
