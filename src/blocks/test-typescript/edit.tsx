import { BlockAttribute, BlockEditProps } from '@wordpress/blocks';
import * as React from 'react'
import { BlockProps } from './attributes';

const edit: React.FunctionComponent<BlockEditProps<BlockProps>> = ( props: BlockEditProps<BlockProps>) => {
    console.log( props.attributes )
    return <div>
        Hey
    </div>
}

export default edit;