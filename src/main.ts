import { Plugin } from 'obsidian';
import {
	DEFAULT_SETTINGS,
	HeadingColorsSettingTab,
	type HeadingColorsSettings,
} from './settings';

export default class HeadingColorsPlugin extends Plugin {
	settings: HeadingColorsSettings;

	async onload() {
		await this.loadSettings();
		this.applySettings();

		this.addSettingTab(new HeadingColorsSettingTab(this.app, this));
	}

	onunload() {}

	async loadSettings() {
		const data = await this.loadData();
		this.settings = Object.assign({}, DEFAULT_SETTINGS, data);
	}

	async saveSettings() {
		await this.saveData(this.settings);
		this.applySettings();
	}

	applySettings() {
		const s = this.settings;
		document.body.style.setProperty('--h1Color', s.h1Color);
		document.body.style.setProperty('--h2Color', s.h2Color);
		document.body.style.setProperty('--h3Color', s.h3Color);
		document.body.style.setProperty('--h4Color', s.h4Color);
		document.body.style.setProperty('--h5Color', s.h5Color);
		document.body.style.setProperty('--h6Color', s.h6Color);
	}
}
