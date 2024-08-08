import { Tags } from './Tags.data';

export class TagFactory {
    constructor(
        private tag: Tags,
        private attributes?: object,
        private text?: string
    ) {}

    toString() {
        let attributesBlock = '';
        let closeTag = '';
        const attributeText = this.text ?? '';

        if (this.attributes) {
            const attributesArr = [];
            for (const [attribute, value] of Object.entries(this.attributes)) {
                attributesArr.push(` ${attribute}="${value}"`);
            }
            attributesBlock = attributesArr.join('');
        }

        if (this.tag === Tags.FORM || this.tag === Tags.LABEL || this.tag === Tags.TEXTAREA) {
            closeTag = `</${this.tag}>`;
        }

        return `<${this.tag}${attributesBlock}>${attributeText}${closeTag}`;
    }
}