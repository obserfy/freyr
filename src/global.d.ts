// TODO: stub gatsby-theme-i18n until proper typing is released.
declare module "gatsby-theme-i18n" {
  export function LocalizedLink({to, language, ...props}: {
    [x: string]: any;
    to: any;
    language?: any;
  }): JSX.Element;
}

declare module "*.svg" {
  export default string
}


declare module '*.css' {
  const content: { [className: string]: string };
  export = content;
}
