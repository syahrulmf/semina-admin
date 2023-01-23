import React from "react";

import { Table } from "react-bootstrap";
import SPagination from "../Pagination";
import TbodyWithAction from "../TBodyWithAction";
import THead from "../THead";

function TableWithAction({
  withoutPagination,
  handlePageClick,
  actionNotDisplay,
  data,
  thead,
  tbody,
  editUrl,
  deleteAction,
  customAction,
  status,
  pages,
}) {
  return (
    <>
      <Table striped bordered hover>
        <THead text={thead} />
        <TbodyWithAction
          status={status}
          data={data}
          display={tbody}
          editUrl={editUrl}
          deleteAction={deleteAction}
          actionNotDisplay={actionNotDisplay}
          customAction={customAction}
        />
      </Table>
      {!withoutPagination && data.length ? (
        <SPagination pages={pages} handlePageClick={handlePageClick} />
      ) : (
        ""
      )}
    </>
  );
}

export default TableWithAction;
