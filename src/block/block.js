/**
 * BLOCK: p5.js
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { RawHTML } = wp.element;
const { Disabled, SandBox, SVG, Path } = wp.components;
const { BlockControls, PlainText } = wp.editor;
const { withState } = wp.compose;
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-p5js', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'p5js' ), // Block title.
	description: __( 'Add custom p5.js code and preview it as you edit.' ),
	icon: <SVG viewBox="0 0 125 114" xmlns="http://www.w3.org/2000/svg"><Path d="M75.9,40.4l38.8-11.7l7.6,23.4L83.6,65.3l24,34L87.4,114L62.2,80.6l-24.6,32.5l-19.6-15l24-32.8L3,51.3l7.6-23.5l39.1,12.6V0h26.2L75.9,40.4L75.9,40.4z" fill="#ED225D" /></SVG>,
	category: 'formatting', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'p5js' ),
		__( 'Processing' ),
		__( 'generative art' ),
	],

	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'script',
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: withState( {
		isPreview: false,
	} )( ( { attributes, setAttributes, setState, isPreview } ) => (
		<div className="wp-block-p5js">
			<BlockControls>
				<div className="components-toolbar">
					<button
						className={ `components-tab-button ${ ! isPreview ? 'is-active' : '' }` }
						onClick={ () => setState( { isPreview: false } ) }
					>
						<span>p5.js</span>
					</button>
					<button
						className={ `components-tab-button ${ isPreview ? 'is-active' : '' }` }
						onClick={ () => setState( { isPreview: true } ) }
					>
						<span>{ __( 'Preview' ) }</span>
					</button>
				</div>
			</BlockControls>
			<Disabled.Consumer>
				{ ( isDisabled ) => (
					( isPreview || isDisabled ) ? (
						<SandBox html={
							'<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.js"></script>' +
							'<script>' + attributes.content + '</script>'
						} />
					) : (
						<PlainText
							value={ attributes.content }
							onChange={ ( content ) => setAttributes( { content } ) }
							placeholder={ __( 'Write p5.js' ) }
							aria-label={ __( 'p5.js' ) }
						/>
					)
				) }
			</Disabled.Consumer>
		</div>
	) ),

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save( { attributes } ) {
		return <script dangerouslySetInnerHTML={ { __html: attributes.content } } />;
	},
} );
