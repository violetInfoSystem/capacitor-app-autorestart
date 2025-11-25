export interface AppAutoRestartPlugin {
    enableAutoRestart(): Promise<void>;
    disableAutoRestart(): Promise<void>;
}
