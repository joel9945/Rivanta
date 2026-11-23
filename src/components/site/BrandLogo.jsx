export function BrandLogo({ placement = 'header' }) {
  const width = placement === 'header' ? '246' : '360';
  const height = placement === 'header' ? '59.2222' : '86.6667';

  return (
    <img
      data-brand-logo={placement}
      className={`rivanta-brand-logo rivanta-${placement}-logo`}
      src="/logo-brand-lockup-light.svg"
      width={width}
      height={height}
      alt="Rivanta"
    />
  );
}
