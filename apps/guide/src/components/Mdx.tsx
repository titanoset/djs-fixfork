'use client';

import { Alert, Section, DiscordMessages, DiscordMessage, DiscordMessageEmbed } from '@discordjs/ui';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { DocsLink } from '~/components/DocsLink';
import { ResultingCode } from '~/components/ResultingCode';
import { DiscordAPITypesLink } from './DiscordAPITypesLink';
import { H1 } from './H1';
import { H2 } from './H2';
import { H3 } from './H3';
import { H4 } from './H4';

export function Mdx({ code }: { readonly code: string }) {
	const Component = useMDXComponent(code);

	return (
		<Component
			components={{
				Alert,
				Section,
				DiscordMessages,
				DiscordMessage,
				DiscordMessageEmbed,
				DiscordAPITypesLink,
				DocsLink,
				ResultingCode,
				h1: H1,
				h2: H2,
				h3: H3,
				h4: H4,
			}}
		/>
	);
}
