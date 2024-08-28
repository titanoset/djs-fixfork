import { FiCheck } from '@react-icons/all-files/fi/FiCheck';

export interface IDiscordMessageAuthor {
	readonly avatar: string;
	readonly bot?: boolean;
	readonly color?: string;
	readonly time: string;
	readonly username: string;
	readonly verified?: boolean;
}

export function DiscordMessageAuthor({ avatar, bot, verified, color, time, username }: IDiscordMessageAuthor) {
	return (
		<>
			<img
				alt={`${username}'s avatar`}
				className="absolute left-[16px] mt-0.5 h-10 w-10 cursor-pointer select-none rounded-full"
				src={avatar}
			/>
			<h2 className="m-0 flex place-items-center text-size-inherit font-medium leading-snug" id="user-info">
				<span className="inline-flex place-items-center" id="username">
					<span className={`mr-1.5 cursor-pointer text-base font-medium hover:underline ${color ?? 'text-white'}`}>
						{username}
					</span>
					{bot ? (
						<span
							className="mr-1 inline-flex place-items-center rounded bg-blurple px-1 vertical-top text-[0.7rem]/4 text-white font-normal"
							id="bot"
						>
							{verified ? <FiCheck className="mr-0.5 inline-block stroke-3" /> : null} BOT
						</span>
					) : null}
				</span>
				<span className="ml-1 cursor-default text-xs text-[rgb(163_166_170)] leading-snug" id="time">
					{time}
				</span>
			</h2>
		</>
	);
}
