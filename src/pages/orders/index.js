import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import SBreadCrumb from "../../components/BreadCrumb";
import InputDate from "../../components/InputDate";
import SearchInput from "../../components/SearchInput";
import STable from "../../components/TableWithAction";

import { fetchListEvents } from "../../redux/lists/actions";
import { fetchOrders, setDate, setPage } from "../../redux/orders/actions";
import { formatDate } from "../../utils/formatDate";

function Order() {
  const dispatch = useDispatch();

  const orders = useSelector((state) => state.orders);

  let [isShowed, setIsShowed] = useState(false);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch, orders.page, orders.date]);

  useEffect(() => {
    dispatch(fetchListEvents());
  }, [dispatch]);

  const displayDate = `${
    orders.date?.startDate ? formatDate(orders.date?.startDate) : ""
  }${orders.date?.endDate ? " - " + formatDate(orders.date.endDate) : ""}`;

  return (
    <Container className="mt-5">
      <SBreadCrumb textSecond={"Orders"} />
      <Row className="mt-4">
        <Col
          className="cursor-pointer position-relative"
          onClick={() => setIsShowed(true)}
        >
          <SearchInput disabled query={displayDate} />
          {isShowed ? (
            <InputDate
              date={orders.date}
              setIsShowed={() => setIsShowed(!isShowed)}
              onChangeDate={(ranges) => dispatch(setDate(ranges.selection))}
            />
          ) : (
            ""
          )}
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>

      <STable
        status={orders.status}
        thead={[
          "Nama",
          "Email",
          "Judul",
          "Tanggal Event",
          "Tanggal Order",
          "Tempat",
        ]}
        data={orders.data}
        tbody={["name", "email", "title", "date", "orderDate", "venueName"]}
        pages={orders.pages}
        actionNotDisplay
        handlePageClick={({ selected }) => dispatch(setPage(selected + 1))}
      />
    </Container>
  );
}

export default Order;
