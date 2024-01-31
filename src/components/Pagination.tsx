import React from 'react'
import PaginationMUI from '@mui/material/Pagination';

function Pagination() {
  return (
    <PaginationMUI shape="rounded" count={10} showFirstButton showLastButton color='primary' />
  )
}

export default Pagination