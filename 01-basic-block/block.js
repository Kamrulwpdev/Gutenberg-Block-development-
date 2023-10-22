const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;
const { TextControl, TextareaControl } = wp.components;
const { SelectControl } = wp.components;
const { Icon } = wp.components;

const icons = [
    { label: 'Select an icon', value: '' },
    { label: 'Star', value: 'star' },
    { label: 'Heart', value: 'heart' },
    { label: 'Smile', value: 'smile' },
    // Add more icon options here
];

registerBlockType('block-example/block-service', {
    title: 'Service Box',
    icon: 'admin-tools',
    category: 'layout',
    attributes: {
        title: {
            type: 'string',
            default: 'Service Title',
        },
        description: {
            type: 'string',
            default: 'Service Description',
        },
        icon: {
            type: 'string',
            default: '',
        },
    },
    edit: function(props) {
        const { attributes, setAttributes } = props;

        return (
            <div>
                <TextControl
                    label="Title"
                    value={attributes.title}
                    onChange={(value) => setAttributes({ title: value })}
                />
                <TextareaControl
                    label="Description"
                    value={attributes.description}
                    onChange={(value) => setAttributes({ description: value })}
                />
                <SelectControl
                    label="Icon"
                    value={attributes.icon}
                    options={icons}
                    onChange={(value) => setAttributes({ icon: value })}
                />
            </div>
        );
    },
    save: function(props) {
        const { attributes } = props;

        return (
            <div>
                <Icon icon={attributes.icon} />
                <h2>{attributes.title}</h2>
                <p>{attributes.description}</p>
            </div>
        );
    },
});
