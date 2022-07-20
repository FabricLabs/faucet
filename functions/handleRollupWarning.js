export default function handleRollupWarning (warning, warn) {
  const { code, importer } = warning;
  if (code === 'THIS_IS_UNDEFINED') return;
  if (code === 'CIRCULAR_DEPENDENCY' && importer.includes('semantic-ui-react')) return;
  warn(warning);
}
