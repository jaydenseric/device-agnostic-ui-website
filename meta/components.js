import { forms, icons, layout, markdown } from './tags';

export const Blockquote = {
  name: 'Blockquote',
  description: 'Displays content quoted from elsewhere.',
  tags: [markdown],
  hasStyles: true,
};

export const Button = {
  name: 'Button',
  description: 'A button for on-page interactions, typically in forms.',
  tags: [forms],
  hasStyles: true,
};

export const ButtonSubmit = {
  name: 'ButtonSubmit',
  description: 'A form submit button that displays loading and success state.',
  tags: [forms],
  hasStyles: true,
  getComponentDependencies: () => [Button, IconTick, Loading],
};

export const Code = {
  name: 'Code',
  description: 'Displays code inline in text.',
  tags: [markdown],
  hasStyles: true,
};

export const Fieldset = {
  name: 'Fieldset',
  description: 'Groups and labels related form fields.',
  tags: [forms],
  hasStyles: true,
};

export const Heading = {
  name: 'Heading',
  description: 'A text heading.',
  tags: [markdown],
  hasStyles: true,
  getComponentDependencies: () => [LinkText],
};

export const Html = {
  name: 'Html',
  description:
    'Displays simple HTML with styles, typically derived from markdown.',
  tags: [markdown],
  hasStyles: true,
};

export const Icon = {
  name: 'Icon',
  description: 'An inline SVG icon.',
  tags: [icons],
  hasStyles: true,
};

export const IconTick = {
  name: 'IconTick',
  description: 'An inline SVG tick icon.',
  tags: [icons],
  hasStyles: false,
  getComponentDependencies: () => [Icon],
};

export const LinkActive = {
  name: 'LinkActive',
  description:
    'A Next.js route link that puts an active boolean prop on the child if the link matches the current route path.',
  tags: [],
  hasStyles: false,
};

export const LinkCard = {
  name: 'LinkCard',
  description: 'A hyperlink to wrap a small card of content.',
  tags: [],
  hasStyles: true,
};

export const LinkNav = {
  name: 'LinkNav',
  description: 'A navigation link to display in the Nav component.',
  tags: [],
  hasStyles: true,
};

export const LinkText = {
  name: 'LinkText',
  description: 'An inline text hyperlink.',
  tags: [markdown],
  hasStyles: true,
};

export const List = {
  name: 'List',
  description: 'A bulleted or numbered list.',
  tags: [markdown],
  hasStyles: true,
};

export const Loading = {
  name: 'Loading',
  description:
    'An inline, animated spinner to indicate data loading or processing.',
  tags: [],
  hasStyles: true,
};

export const Nav = {
  name: 'Nav',
  description:
    'Displays navigation links in a horizontal, spaced and scrollable grid.',
  tags: [layout],
  hasStyles: true,
};

export const Para = {
  name: 'Para',
  description: 'A text paragraph.',
  tags: [markdown],
  hasStyles: true,
};

export const Picture = {
  name: 'Picture',
  description:
    'A picture with a responsive width and proportionate height, even while loading.',
  tags: [],
  hasStyles: true,
};

export const Pre = {
  name: 'Pre',
  description: 'Displays preformatted and typically multiline text.',
  tags: [markdown],
  hasStyles: true,
};

export const Scroll = {
  name: 'Scroll',
  description:
    'Displays children in a horizontally spaced and scrollable grid.',
  tags: [layout],
  hasStyles: true,
};

export const Select = {
  name: 'Select',
  description: 'An input that provides a selection of options.',
  tags: [forms],
  hasStyles: true,
};

export const Table = {
  name: 'Table',
  description: 'Displays tabulated data.',
  tags: [layout, markdown],
  hasStyles: true,
};

export const Textbox = {
  name: 'Textbox',
  description: 'An input or textarea.',
  tags: [forms],
  hasStyles: true,
};

export const Toggle = {
  name: 'Toggle',
  description: 'A checkbox or radio input.',
  tags: [forms],
  hasStyles: true,
  getComponentDependencies: () => [IconTick],
};

export const WordBreaks = {
  name: 'WordBreaks',
  description:
    'Renders text with aesthetically pleasing word break opportunities.',
  tags: [layout],
  hasStyles: false,
};
