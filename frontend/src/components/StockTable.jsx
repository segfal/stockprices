//Libraries
import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';





const StockTable = ({stock}) => {
    //using material ui table
    const columns = useMemo(
      () => [
  
        {
          Header : 'date',
          accessorKey : 'date',
          size: 100,
        },
        {
          Header : 'close',
          accessorKey : 'close',
          size: 100,
        },
        {
          Header : 'high',
          accessorKey : 'high',
          size: 100,
        },
        {
          Header : 'low',
          accessorKey : 'low',
          size: 100,
        },
        {
          Header : 'open',
          accessorKey : 'open',
          size: 100,
        },
        {
          Header : 'volume',
          accessorKey : 'volume',
          size: 100,
        },
    
  
  
      ]);
  
      const data = useMemo(() => stock, [stock]);
  
      return (
        <MaterialReactTable columns={columns} data={data} />
      );
  
  
  
}
  

export default StockTable;