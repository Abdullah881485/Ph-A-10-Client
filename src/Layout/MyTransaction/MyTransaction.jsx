import React, { use, useEffect, useMemo, useState } from "react";
import Transaction from "./Transaction";
import { AuthContext } from "../../Provider/AuthContext";
import { Link } from "react-router";
import Loader from "../../Component/Loader/Loader";
import useAxios from "../../Component/Hook/useAxios";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const ITEMS_PER_PAGE = 6;

const MyTransaction = () => {
  const axiosInstance = useAxios();
  const { user } = use(AuthContext);

  const [myTransaction, setMyTransaction] = useState([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date-desc");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    if (user?.email) {
      axiosInstance
        .get(`/myTransaction?email=${user.email}`, {
          headers: {
            authorization: `Bearer ${user?.accessToken}`,
          },
        })
        .then((res) => setMyTransaction(res.data))
        .finally(() => setLoading(false));
    }
  }, [user, axiosInstance]);

  const processedData = useMemo(() => {
    let data = [...myTransaction];

    if (search) {
      data = data.filter((t) =>
        `${t.title} ${t.category} ${t.note}`
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    if (typeFilter !== "all") {
      data = data.filter((t) => t.type === typeFilter);
    }

    if (sortBy === "date-desc") {
      data.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === "date-asc") {
      data.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === "amount-desc") {
      data.sort((a, b) => b.amount - a.amount);
    } else if (sortBy === "amount-asc") {
      data.sort((a, b) => a.amount - b.amount);
    }

    return data;
  }, [myTransaction, search, typeFilter, sortBy]);

  const totalPages = Math.ceil(processedData.length / ITEMS_PER_PAGE);
  const paginatedData = processedData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  if (loading) return <Loader />;

  return (
    <div className="my-10 ">
      <title>FinEase | My Transaction</title>

      {myTransaction.length === 0 ? (
        <div className="flex flex-col items-center">
          <p className="mb-3 font-semibold">
            You don't have any transactions yet.
          </p>
          <Link
            to="/addTransaction"
            className="my-button text-base-content rounded-md font-bold px-7 py-1.5"
          >
            Add Transaction
          </Link>
        </div>
      ) : (
        <>
          <div className=" p-4  mb-6 flex flex-col lg:flex-row gap-4">
            <select
              className="select bg-base-300 border border-base-content/20 text-base-content"
              value={typeFilter}
              onChange={(e) => {
                setTypeFilter(e.target.value);
                setPage(1);
              }}
            >
              <option value="all">All Types</option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
            <input
              type="text"
              placeholder="Search transactions..."
              className="input bg-base-300 border border-base-content/20 text-base-content w-full lg:w-1/3"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
            <select
              className="select bg-base-300 border border-base-content/20 text-base-content"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date-desc">Newest First</option>
              <option value="date-asc">Oldest First</option>
              <option value="amount-desc">Highest Amount</option>
              <option value="amount-asc">Lowest Amount</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {paginatedData.map((card) => (
              <Transaction
                key={card._id}
                card={card}
                myTransaction={myTransaction}
                setMyTransaction={setMyTransaction}
              />
            ))}
          </div>

          {totalPages > 0 && (
            <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className={`px-4 py-1.5 rounded-md border transition
        ${
          page === 1
            ? "opacity-40 cursor-not-allowed border-base-content/20"
            : "border-base-content/30 text-base-content hover:bg-base-content/10"
        }`}
              >
                <GrFormPrevious size={18} />
              </button>

              {[...Array(totalPages).keys()].map((i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`px-4 py-1.5 rounded-md border transition
          ${
            page === i + 1
              ? "bg-[#7c3aed] text-white"
              : "border-base-content/30 text-base-content hover:bg-base-content/10"
          }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={page === totalPages}
                className={`px-4 py-1.5 rounded-md border transition
        ${
          page === totalPages
            ? "opacity-40 cursor-not-allowed border-base-content/20"
            : "border-base-content/30 text-base-content hover:bg-base-content/10"
        }`}
              >
                <MdNavigateNext size={18} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyTransaction;
