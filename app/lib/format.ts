export function formatCAD(amount: number, options: { showCode?: boolean } = {}): string {
  const formatted = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
  return options.showCode ? `${formatted} CAD` : formatted;
}
