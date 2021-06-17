import { addBlockId } from './block-utility';

const {
	useEffect
} = wp.element;

/**
 * Ehance the block by adding the id generating functions
 * @param {*} Block An Otter Block
 * @param {Object} defaultAttributes The default attributes of the block.
 * @param {(string|undefined)} idPrefix (Optional) The prefix used for generating the block id
 * @returns {React.FunctionComponent} An enhanced component
 */
export const OtterBlock = ( Block, defaultAttributes, idPrefix = undefined ) => ( props ) => {
	const { attributes, setAttributes, clientId, name } = props;
	useEffect( () => {
		const unsubscribe = addBlockId({
			idPrefix,
			attributes,
			setAttributes,
			clientId,
			name,
			defaultAttributes
		});
		return () => unsubscribe();
	}, []);
	return <Block {...props}/>;
};