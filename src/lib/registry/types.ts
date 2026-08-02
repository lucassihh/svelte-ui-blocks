// All types for registry
export interface RegistryCategory {
	[key: string]: unknown[];
}

export interface RegistryLibrary {
	[category: string]: unknown[];
}

export interface Registry {
	[library: string]: RegistryLibrary;
}
