import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
} from "recharts";
import Loader from "../../Component/Loader/Loader";
import useAxios from "../../Component/Hook/useAxios";

const COLORS = [
  "#22c55e",
  "#3b82f6",
  "#ef4444",
  "#f59e0b",
  "#8b5cf6",
  "#10b981",
  "#ec4899",
  "#6366f1",
  "#06b6d4",
];

const Report = () => {
  const axiosInstance = useAxios();
  const { user } = useContext(AuthContext);
  const [report, setReport] = useState([]);
  const [loading, setLoading] = useState(false);

  const incomeCategories = ["Salary", "Business", "Investment", "Other"];

  const expenseCategories = [
    "Home",
    "Food",
    "Transportation",
    "Personal",
    "Education",
    "Technology",
    "Entertainment",
    "Family",
    "Other",
  ];

  useEffect(() => {
    setLoading(true);
    if (user?.email) {
      axiosInstance
        .get(`/myTransaction?email=${user.email}`, {
          headers: {
            authorization: `Bearer ${user?.accessToken || ""} `,
          },
        })

        .then((data) => setReport(data.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [user, axiosInstance]);

  const data = report.map((t, index) => ({
    name: `Txn ${index + 1}`,
    income: t.type === "Income" ? Number(t.amount) : 0,
    expense: t.type === "Expense" ? Number(t.amount) : 0,
  }));
  // console.log(data);

  const incomeData = incomeCategories.map((cat) => ({
    name: cat,
    value: report
      .filter((t) => t.category === cat && t.type === "Income")
      .reduce((sum, t) => sum + Number(t.amount), 0),
  }));
  // console.log(incomeData);

  const expenseData = expenseCategories.map((cat) => ({
    name: cat,
    value: report
      .filter((t) => t.category === cat && t.type === "Expense")
      .reduce((sum, t) => sum + Number(t.amount), 0),
  }));

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="  py-8   min-h-screen">
      <title>FinEase | Financial Report</title>
      <h1 className="text-3xl font-bold  mb-8  text-[#7c3aed] ">
        Financial Report
      </h1>

      <div className="w-full mb-12 bg-base-300 hover-glow shadow-lg rounded-2xl p-6 transition-all duration-300 ">
        <h2 className="text-xl font-semibold text-center text-base-400 mb-6">
          Income vs Expense Overview
        </h2>
        {data.length === 0 ? (
          <p className="text-center text-base-400">No transactions found.</p>
        ) : (
          <ResponsiveContainer width="100%" height={350}>
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="name" tick={{ fill: "#cbd5e1" }} />
              <YAxis tick={{ fill: "#cbd5e1" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#101826",
                  border: "1px solid #7c3aed",
                  borderRadius: "10px",
                  color: "#f1f5f9",
                }}
              />
              <Legend wrapperStyle={{ color: "#cbd5e1" }} />

              <Line
                type="monotone"
                dataKey="income"
                name="Income"
                stroke="#7c3aed"
                strokeWidth={3}
                dot={{ r: 5, fill: "#a78bfa" }}
                activeDot={{ r: 8, fill: "#c084fc" }}
              />

              <Line
                type="monotone"
                dataKey="expense"
                name="Expense"
                stroke="#06b6d4"
                strokeWidth={3}
                dot={{ r: 5, fill: "#22d3ee" }}
                activeDot={{ r: 8, fill: "#67e8f9" }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 hover-glow bg-base-300 shadow-lg rounded-2xl p-6 transition-all duration-300 ">
          {expenseData.some((data) => data.value > 0) ? (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center text-base-400">
                My Expenses
              </h2>
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={expenseData}
                    cx="50%"
                    cy="50%"
                    outerRadius={110}
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                    labelLine={true}
                  >
                    {expenseData.map((entry, index) => (
                      <Cell
                        key={`cell-expense-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0b1422",
                      borderRadius: "8px",
                    }}
                    itemStyle={{ color: "#f3f4f6", fontWeight: "bold" }}
                  />
                  <Legend
                    verticalAlign="bottom"
                    align="center"
                    iconType="circle"
                    layout="horizontal"
                    wrapperStyle={{ marginTop: 20, gap: 12, color: "#9ca3af" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <h1 className="text-center  text-base-400 text-xl font-semibold  flex flex-col gap-10 justify-center items-center">
              No Expense Found
              <img
                className="w-70"
                src="https://i.ibb.co.com/xSBRMH2g/search-not-found-10037261-8176157.png"
                alt=""
              />
            </h1>
          )}
        </div>

        <div className="flex-1  bg-base-300 shadow-lg rounded-2xl p-6 transition-all duration-300 hover-glow">
          {incomeData.some((data) => data.value > 0) ? (
            <div>
              <h2 className="text-xl  font-semibold mb-4 text-center  text-base-400">
                My Income
              </h2>
              <ResponsiveContainer width="100%" height={330}>
                <PieChart>
                  <Pie
                    data={incomeData}
                    cx="50%"
                    cy="50%"
                    outerRadius={110}
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                    labelLine={true}
                  >
                    {incomeData.map((entry, index) => (
                      <Cell
                        key={`cell-income-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0b1422",
                      borderRadius: "8px",
                    }}
                    itemStyle={{ color: "#f3f4f6", fontWeight: "bold" }}
                  />
                  <Legend
                    verticalAlign="bottom"
                    align="center"
                    iconType="circle"
                    layout="horizontal"
                    wrapperStyle={{ marginTop: 20, gap: 12, color: "#9ca3af" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <h1 className="text-center  text-base-400 text-xl font-semibold  flex flex-col gap-10 justify-center items-center">
              No Income Found
              <img
                className="w-70"
                src="https://i.ibb.co.com/xSBRMH2g/search-not-found-10037261-8176157.png"
                alt=""
              />
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Report;
