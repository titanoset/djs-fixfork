'use client';

import { useEffect } from 'react';

export function useSystemThemeFallback() {
	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme === 'auto') {
			localStorage.setItem('theme', 'system');
		}
	}, []);
}
