type Props = { currentLabel: string };

export function Breadcrumbs({ currentLabel }: Props) {
  return (
    <nav
      className="text-sm text-slate-600 px-6 pb-4 pt-3 max-w-6xl mx-auto"
      aria-label="Breadcrumb"
    >
      <ol className="list-none p-0 inline-flex space-x-2">
        <li>
          <a href="/" className="text-teal-700 hover:underline font-medium">
            Home
          </a>
        </li>
        <li className="text-slate-400">›</li>
        <li aria-current="page" className="text-slate-700 font-semibold">
          {currentLabel}
        </li>
      </ol>
    </nav>
  );
}
