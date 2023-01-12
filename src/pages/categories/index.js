import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { accessCategories } from "../../const/access";
import { fetchCategories } from "../../redux/categories/actions";
import { setNotif } from "../../redux/notif/actions";
import { deleteData } from "../../utils/fetch";

import SAlert from "../../components/Alert";
import SBreadCrumb from "../../components/BreadCrumb";
import SButton from "../../components/Button";
import TableWithAction from "../../components/TableWithAction";

function Categories() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notif = useSelector((state) => state.notif);
  const categories = useSelector((state) => state.categories);
  const [access, setAccess] = useState({
    tambah: false,
    hapus: false,
    edit: false,
  });

  const checkAccess = () => {
    let { role } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};
    const access = { tambah: false, hapus: false, edit: false };
    Object.keys(accessCategories).forEach(function (key, index) {
      if (accessCategories[key].indexOf(role) >= 0) {
        access[key] = true;
      }
    });
    setAccess(access);
  };

  useEffect(() => {
    checkAccess();
  }, []);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Apa kamu yakin?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Iya, Hapus",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteData(`/cms/categories/${id}`);
        dispatch(
          setNotif(
            true,
            "success",
            `berhasil hapus kategori ${res.data.data.name}`
          )
        );
        dispatch(fetchCategories());
      }
    });
  };

  return (
    <Container className="mt-5">
      <SBreadCrumb textSecond={"Categories"} />

      {access.tambah && (
        <SButton
          className={"my-3"}
          action={() => navigate("/categories/create")}
        >
          Tambah
        </SButton>
      )}

      {notif.status && (
        <SAlert variant={notif.typeNotif} message={notif.message} />
      )}

      <TableWithAction
        status={categories.status}
        thead={["Nama", "Aksi"]}
        data={categories.data}
        tbody={["name"]}
        editUrl={access.edit ? `/categories/update` : null}
        deleteAction={access.hapus ? (id) => handleDelete(id) : null}
        withoutPagination
      />
    </Container>
  );
}

export default Categories;
