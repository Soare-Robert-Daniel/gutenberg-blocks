import { AttributeSource, BlockAttribute } from '@wordpress/blocks';

export type BlockProps = {
	id: string;
	text: string;
}

// type Attributes = {
// 	id: BlockAttribute<{
// 		type: 'string';
// 		default?: string;
// 	}>;
//     text: BlockAttribute<{
// 		type: 'string';
// 		default?: string;
// 	}>;
// }

type Attributes = {
	id: BlockAttribute<string>;
    text: BlockAttribute<string>;
}

const attributes: Attributes = {
	id: {
		type: 'string'
	},
	text: {
		type: 'string',
		default: 'hallo'
	}

};

export default attributes;
