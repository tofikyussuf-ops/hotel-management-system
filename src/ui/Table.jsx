import { createContext, useContext } from 'react';

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        className="overflow-hidden rounded-[7px] border border-grey-200 bg-grey-0 text-[1.4rem]"
        role="table"
      >
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <header
      role="row"
      className="grid items-center gap-x-[2.4rem] border-b border-grey-100 bg-grey-50 px-[2.4rem] py-[1.6rem] font-semibold uppercase tracking-[0.4px] text-grey-600"
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </header>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      role="row"
      className="grid items-center gap-x-[2.4rem] border-b border-grey-100 px-[2.4rem] py-[1.2rem] last:border-b-0"
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

function Body({ data, render }) {
  if (!data.length) return <Empty>No data to show at the moment</Empty>;
  return <section className="my-[0.4rem]">{data.map(render)}</section>;
}

function Footer({ children }) {
  // Tailwind's 'empty:' modifier replaces the ':not(:has(*))' logic
  return (
    <footer className="flex justify-center bg-grey-50 p-[1.2rem] empty:hidden">
      {children}
    </footer>
  );
}

function Empty({ children }) {
  return (
    <p className="m-[2.4rem] text-center text-[1.6rem] font-medium">
      {children}
    </p>
  );
}

// Attach sub-components
Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
