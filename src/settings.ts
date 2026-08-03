import { App, PluginSettingTab, Setting } from 'obsidian';
import type HeadingColorsPlugin from './main';

export interface HeadingColorsSettings {
	h1Color: string;
	h2Color: string;
	h3Color: string;
	h4Color: string;
	h5Color: string;
	h6Color: string;
}

export const DEFAULT_SETTINGS: HeadingColorsSettings = {
	h1Color: '#FF6B6B',
	h2Color: '#4ECDC4',
	h3Color: '#FFE66D',
	h4Color: '#A8E6CF',
	h5Color: '#DDA0DD',
	h6Color: '#FFB347',
};

export class HeadingColorsSettingTab extends PluginSettingTab {
	plugin: HeadingColorsPlugin;

	constructor(app: App, plugin: HeadingColorsPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();

		new Setting(containerEl).setName('Heading Colors').setHeading();

		const colorSettings: Array<{
			key: keyof HeadingColorsPlugin['settings'];
			name: string;
			desc: string;
		}> = [
			{ key: 'h1Color', name: 'H1 Color', desc: 'Color marker for heading level 1' },
			{ key: 'h2Color', name: 'H2 Color', desc: 'Color marker for heading level 2' },
			{ key: 'h3Color', name: 'H3 Color', desc: 'Color marker for heading level 3' },
			{ key: 'h4Color', name: 'H4 Color', desc: 'Color marker for heading level 4' },
			{ key: 'h5Color', name: 'H5 Color', desc: 'Color marker for heading level 5' },
			{ key: 'h6Color', name: 'H6 Color', desc: 'Color marker for heading level 6' },
		];

		for (const { key, name, desc } of colorSettings) {
			new Setting(containerEl)
				.setName(name)
				.setDesc(desc)
				.addColorPicker((color) =>
					color
						.setValue(this.plugin.settings[key])
						.onChange(async (value) => {
							this.plugin.settings[key] = value;
							await this.plugin.saveSettings();
						})
				);
		}
	}
}
