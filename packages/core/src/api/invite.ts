/* eslint-disable jsdoc/check-param-names */

import { makeURLSearchParams, type RequestData, type REST } from '@discordjs/rest';
import { Routes, type RESTGetAPIInviteQuery, type RESTGetAPIInviteResult } from 'discord-api-types/v10';

export class InvitesAPI {
	public constructor(private readonly rest: REST) {}

	/**
	 * Fetches an invite
	 *
	 * @see {@link https://discord.com/developers/docs/resources/invite#get-invite}
	 * @param code - The invite code
	 * @param query - The options for fetching the invite
	 * @param options - The options for fetching the invite
	 */
	public async get(code: string, query: RESTGetAPIInviteQuery = {}, { signal }: Pick<RequestData, 'signal'> = {}) {
		return this.rest.get(Routes.invite(code), {
			query: makeURLSearchParams(query),
			signal,
		}) as Promise<RESTGetAPIInviteResult>;
	}

	/**
	 * Deletes an invite
	 *
	 * @see {@link https://discord.com/developers/docs/resources/invite#delete-invite}
	 * @param code - The invite code
	 * @param options - The options for deleting the invite
	 */
	public async delete(code: string, { reason, signal }: Pick<RequestData, 'reason' | 'signal'> = {}) {
		await this.rest.delete(Routes.invite(code), { reason, signal });
	}
}
