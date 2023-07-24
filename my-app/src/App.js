import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Laptop",
      amount: 1234.56,
      date: new Date(2023, 5, 8),
    },
    {
      id: "e2",
      title: "Gravel bike",
      amount: 6789.1,
      date: new Date(2023, 3, 8),
    },
    {
      id: "e3",
      title: "Plane tickets",
      amount: 567.89,
      date: new Date(2023, 4, 13),
    },
    {
      id: "e4",
      title: "Desk",
      amount: 789.1,
      date: new Date(2023, 2, 22),
    },
  ];

  return (
    <div>
      <h2>test test test</h2>
      <p>is this also visible?</p>
      <Expenses items={ expenses } />
    </div>
  );
}

export default App;
