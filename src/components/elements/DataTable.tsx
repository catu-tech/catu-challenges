import { EastTwoTone } from '@mui/icons-material';
import {
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableCellProps,
  TableContainer,
  TableFooter,
  TableHead,
  TableProps,
  TableRow,
  Typography
} from '@mui/material';
import { ElementType, ReactNode } from 'react';

export type DataTableColumnConfig = Record<string, any> & TableCellProps;

export interface DataTableColumn<T = any> {
  title: ReactNode | (() => ReactNode);
  titleWrapper?: (title: ReactNode) => ReactNode;
  config?: DataTableColumnConfig;
  sortable?: boolean;
  sortableName?: string;
  render: (data: T, index: number) => ReactNode;
}

export interface DataTableFooter<T = any> {
  config?: DataTableColumnConfig;
  render: ReactNode | (() => ReactNode) | string;
}

export interface DataTableProps<T = any> {
  columns: Array<DataTableColumn>;
  footer?: Array<DataTableFooter>;
  data?: Array<T>;
  actions?: (value: T, index: number) => ReactNode;
  actionsConfig?: DataTableColumnConfig;
  onSort?: (sortableName?: string) => void | Promise<void>;
  sortBy?: string;
  sortOrder?: string;
  component?: ElementType;
  lock?: boolean;
  tableProps?: TableProps;
  beforeTable?: ReactNode | (() => ReactNode) | null;
  afterTable?: ReactNode | (() => ReactNode) | null;
  noDataMessage?: string;
  sx?: SxProps;
}

const DataTable = <T extends any>({
  columns,
  footer,
  data = [],
  actions,
  actionsConfig = {},
  onSort,
  sortBy = '',
  sortOrder = '',
  lock = false,
  component,
  tableProps = {},
  beforeTable,
  afterTable,
  noDataMessage = 'Nenhum item.',
  sx = {}
}: DataTableProps<T>) => {
  const TableProps: Record<string, any> = {};

  if (!!component) {
    TableProps['component'] = component as ElementType;
  }

  return (
    <>
      <TableContainer {...TableProps} sx={sx || {}}>
        {beforeTable
          ? beforeTable instanceof Function
            ? beforeTable()
            : beforeTable
          : null}

        <Table
          {...Object.assign({}, tableProps, {
            sx: Object.assign({}, tableProps?.sx, {
              transition: '.3s',
              opacity: lock ? 0.5 : 1
            })
          })}
        >
          <TableHead>
            <TableRow>
              {columns.map((column, c) => {
                const title =
                  column?.title instanceof Function
                    ? column?.title()
                    : column?.title;

                return (
                  <TableCell key={c} {...column?.config}>
                    <Typography
                      onClick={(e) => {
                        if (column?.sortable) {
                          e.preventDefault();

                          if (onSort instanceof Function) {
                            onSort(column?.sortableName);
                          }
                        }
                      }}
                      sx={{
                        cursor: column?.sortable ? 'pointer' : 'default',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: column?.config?.align || 'center'
                      }}
                    >
                      {column?.sortable && sortBy === column?.sortableName && (
                        <>
                          <EastTwoTone
                            fontSize={'small'}
                            sx={{
                              mr: 1,
                              transition: '.3s',
                              transform:
                                sortOrder === 'asc'
                                  ? 'rotate(-90deg)'
                                  : 'rotate(90deg)'
                            }}
                          />
                        </>
                      )}
                      {column?.titleWrapper instanceof Function
                        ? column.titleWrapper(title)
                        : title}
                    </Typography>
                  </TableCell>
                );
              })}

              {actions instanceof Function && <TableCell {...actionsConfig} />}
            </TableRow>
          </TableHead>

          <TableBody>
            {data?.length === 0 && (
              <TableRow>
                <TableCell
                  align={'center'}
                  colSpan={columns?.length + (actions ? 1 : 0)}
                >
                  <Typography
                    variant={'caption'}
                    sx={{ p: 2, display: 'block' }}
                  >
                    {noDataMessage}
                  </Typography>
                </TableCell>
              </TableRow>
            )}

            {data?.map((row, r) => {
              return (
                <TableRow key={r}>
                  {columns?.map((column, c) => {
                    return (
                      <TableCell key={c} {...column?.config}>
                        {column.render(row, r)}
                      </TableCell>
                    );
                  })}

                  {actions instanceof Function && (
                    <TableCell
                      {...Object.assign({}, actionsConfig, {
                        sx: Object.assign({}, actionsConfig?.sx, {
                          pointerEvents: lock ? 'none' : 'all'
                        })
                      })}
                    >
                      {actions(row, r)}
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
          </TableBody>

          {Array.isArray(footer) &&
            footer?.length > 0 &&
            footer?.length <= columns?.length && (
              <TableFooter>
                <TableRow>
                  {footer?.map((footerColumn, f) => {
                    return (
                      <TableCell key={f} {...footerColumn?.config}>
                        {footerColumn?.render instanceof Function
                          ? footerColumn?.render()
                          : footerColumn?.render}
                      </TableCell>
                    );
                  })}

                  {actions instanceof Function && <TableCell />}
                </TableRow>
              </TableFooter>
            )}
        </Table>

        {afterTable
          ? afterTable instanceof Function
            ? afterTable()
            : afterTable
          : null}
      </TableContainer>
    </>
  );
};

export default DataTable;
