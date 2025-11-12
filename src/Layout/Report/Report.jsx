import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

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
  const { user } = useContext(AuthContext);
  const [report, setReport] = useState([]);

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
    if (user?.email) {
      fetch(`http://localhost:5000/myTransaction?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setReport(data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  const incomeData = incomeCategories.map((cat) => ({
    name: cat,
    value: report
      .filter((t) => t.category === cat && t.type === "Income")
      .reduce((sum, t) => sum + Number(t.amount), 0),
  }));
  console.log(incomeData);

  const expenseData = expenseCategories.map((cat) => ({
    name: cat,
    value: report
      .filter((t) => t.category === cat && t.type === "Expense")
      .reduce((sum, t) => sum + Number(t.amount), 0),
  }));

  return (
    <div className="w-9/10 mx-auto px-6 py-8   min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        Financial Report
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-white dark:bg-[#0b1422] shadow-lg rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl">
          {expenseData.some((data) => data.value > 0) ? (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center text-gray-700 dark:text-gray-200">
                Expenses by Category
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
            <h1 className="text-center text-gray-700 dark:text-gray-200 text-xl font-semibold  flex flex-col gap-10 justify-center items-center">
              No Expense Found
              <img
                className="w-70"
                src="https://i.ibb.co.com/xSBRMH2g/search-not-found-10037261-8176157.png"
                alt=""
              />
            </h1>
          )}
        </div>

        <div className="flex-1 bg-white dark:bg-[#0b1422] shadow-lg rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl">
          {incomeData.some((data) => data.value > 0) ? (
            <div>
              <h2 className="text-xl  font-semibold mb-4 text-center text-gray-700 dark:text-gray-200">
                Income by Category
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
            <h1 className="text-center text-gray-700 dark:text-gray-200 text-xl font-semibold  flex flex-col gap-10 justify-center items-center">
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
