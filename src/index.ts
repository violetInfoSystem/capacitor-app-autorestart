import { registerPlugin } from '@capacitor/core';
import type { AppAutoRestartPlugin } from './definitions';

const AppAutoRestart = registerPlugin<AppAutoRestartPlugin>('AppAutoRestart');

export * from './definitions';
export { AppAutoRestart };